// ─────────────────────────────────────────────────────────────────────────────
// Generic CRUD handler factory
// Usage: import { makeCrudHandlers } from '@/lib/crud-handlers'
// ─────────────────────────────────────────────────────────────────────────────

import { NextRequest, NextResponse } from 'next/server'
import { createSupabaseAdmin, createSupabaseServerClient } from './supabase-server'
import { logAudit } from './audit'

export function makeCrudHandlers(tableName: string, orderCol = 'sort_order') {
  async function requireUser() {
    const serverClient = createSupabaseServerClient()
    const { data: { user } } = await serverClient.auth.getUser()
    return user
  }

  // GET /api/admin/[resource]
  async function GET() {
    const admin = createSupabaseAdmin()
    const { data, error } = await admin.from(tableName).select('*').order(orderCol)
    if (error) return NextResponse.json({ error: error.message }, { status: 500 })
    return NextResponse.json({ items: data })
  }

  // POST /api/admin/[resource]
  async function POST(req: NextRequest) {
    const user = await requireUser()
    if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    const body  = await req.json()
    const admin = createSupabaseAdmin()
    const { data, error } = await admin.from(tableName).insert(body).select().single()
    if (error) return NextResponse.json({ error: error.message }, { status: 500 })

    await logAudit({ userId: user.id, userEmail: user.email, action: 'create', tableName, recordId: data?.id, newValues: body })
    return NextResponse.json({ item: data }, { status: 201 })
  }

  return { GET, POST }
}

export function makeCrudItemHandlers(tableName: string) {
  async function requireUser() {
    const serverClient = createSupabaseServerClient()
    const { data: { user } } = await serverClient.auth.getUser()
    return user
  }

  // PUT /api/admin/[resource]/[id]
  async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
    const user = await requireUser()
    if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    const body  = await req.json()
    const admin = createSupabaseAdmin()

    // Fetch old values for audit
    const { data: old } = await admin.from(tableName).select('*').eq('id', params.id).single()
    const { data, error } = await admin.from(tableName).update({ ...body, updated_at: new Date().toISOString() }).eq('id', params.id).select().single()
    if (error) return NextResponse.json({ error: error.message }, { status: 500 })

    await logAudit({ userId: user.id, userEmail: user.email, action: 'update', tableName, recordId: params.id, oldValues: old, newValues: body })
    return NextResponse.json({ item: data })
  }

  // PATCH /api/admin/[resource]/[id]  (partial update, e.g. status change)
  async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
    const user = await requireUser()
    if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    const body  = await req.json()
    const admin = createSupabaseAdmin()
    const { data, error } = await admin.from(tableName).update(body).eq('id', params.id).select().single()
    if (error) return NextResponse.json({ error: error.message }, { status: 500 })

    await logAudit({ userId: user.id, userEmail: user.email, action: 'update', tableName, recordId: params.id, newValues: body })
    return NextResponse.json({ item: data })
  }

  // DELETE /api/admin/[resource]/[id]
  async function DELETE(_req: NextRequest, { params }: { params: { id: string } }) {
    const user = await requireUser()
    if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    const admin = createSupabaseAdmin()
    const { data: old } = await admin.from(tableName).select('*').eq('id', params.id).single()
    const { error } = await admin.from(tableName).delete().eq('id', params.id)
    if (error) return NextResponse.json({ error: error.message }, { status: 500 })

    await logAudit({ userId: user.id, userEmail: user.email, action: 'delete', tableName, recordId: params.id, oldValues: old })
    return NextResponse.json({ success: true })
  }

  return { PUT, PATCH, DELETE }
}
