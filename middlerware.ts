import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const response = NextResponse.next()

  const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.svg', '.webp']
  
  if (imageExtensions.some(ext => request.nextUrl.pathname.endsWith(ext))) {
    response.headers.set('Cache-Control', 'public, max-age=604800, immutable')
  }

  return response
}

// Optionally, you can specify which routes this middleware applies to
export const config = {
  matcher: [
    // Match all request paths except for the ones starting with:
    // - api (API routes)
    // - _next/static (static files)
    // - _next/image (image optimization files)
    // - favicon.ico (favicon file)
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}