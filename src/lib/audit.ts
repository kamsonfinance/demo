import { createSupabaseAdmin } from './supabase-server'

interface AuditEntry {
  userId?:   string
  userEmail?: string
  action:    'create' | 'update' | 'delete' | 'login' | 'logout'
  tableName?: string
  recordId?:  string
  oldValues?: Record<string, unknown>
  newValues?: Record<string, unknown>
  ipAddress?: string
}

export async function logAudit(entry: AuditEntry) {
  try {
    const supabase = createSupabaseAdmin()
    await supabase.from('audit_log').insert({
      user_id:    entry.userId    ?? null,
      user_email: entry.userEmail ?? null,
      action:     entry.action,
      table_name: entry.tableName ?? null,
      record_id:  entry.recordId  ?? null,
      old_values: entry.oldValues ?? null,
      new_values: entry.newValues ?? null,
      ip_address: entry.ipAddress ?? null,
    })
  } catch (err) {
    // Audit failures should never block the main operation
    console.warn('[audit] Failed to write audit log:', err)
  }
}
