import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Start with a response that passes the request through unchanged.
  let supabaseResponse = NextResponse.next({ request })

  // ── Supabase session client ────────────────────────────────────────────────
  // IMPORTANT: Do not add code between createServerClient and getUser().
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
  get(name: string) {
    return request.cookies.get(name)?.value
  },

  setAll(cookiesToSet: { name: string; value: string }[]) {
    cookiesToSet.forEach(({ name, value }) => {
      request.cookies.set(name, value)
    })
  }
}
    }
  )

  // Validates the token with Supabase and refreshes it if it is close to
  // expiring. Must run on every request to keep the session alive.
  const { data: { user } } = await supabase.auth.getUser()

  const isLoginPage = pathname === '/admin/login'

  // Send unauthenticated users to the login page.
  if (!isLoginPage && !user) {
    const loginUrl = new URL('/admin/login', request.url)
    loginUrl.searchParams.set('redirect', pathname)
    return NextResponse.redirect(loginUrl)
  }

  // Send already-authenticated users away from the login page.
  if (isLoginPage && user) {
    return NextResponse.redirect(new URL('/admin/dashboard', request.url))
  }

  // Always return supabaseResponse — not a new NextResponse — so the
  // refreshed Supabase cookies are written back to the browser.
  return supabaseResponse
}

export const config = {
  matcher: ['/admin/:path*'],
}
