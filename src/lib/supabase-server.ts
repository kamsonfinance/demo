import { createServerClient } from '@supabase/ssr'
import { createClient }       from '@supabase/supabase-js'
import { cookies }            from 'next/headers'

/**
 * Session-aware client for Server Components and Route Handlers.
 * Reads the Supabase auth cookies from the incoming request.
 * In Server Components the setAll try/catch silences the "can't set cookies"
 * error — the middleware handles token refresh there instead.
 */
export function createSupabaseServerClient() {
  const cookieStore = cookies()
  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll()
        },
        
        setAll(cookiesToSet: { name: string; value: string; options?: any }[]) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            )
          } catch {
            // Called from a Server Component — middleware keeps tokens refreshed.
          }
        },
      },
    }
  )
}

/**
 * Service-role client for admin API routes.
 * Bypasses Row Level Security. NEVER expose this to the browser.
 * Uses a direct createClient import (not require()) to avoid CommonJS/ESM
 * conflicts in Next.js 14's server context.
 */
export function createSupabaseAdmin() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    {
      auth: {
        persistSession:   false,
        autoRefreshToken: false,
      },
    }
  )
}
