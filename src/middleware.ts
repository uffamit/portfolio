import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || '';
  const url = request.nextUrl.clone();

  // Redirect non-canonical domains to the canonical domain
  if (
    hostname.includes('qzz.io') ||
    hostname.includes('.vercel.app') ||
    (hostname !== 'amitdevx.tech' && hostname !== 'localhost:3000' && !hostname.startsWith('localhost:'))
  ) {
    url.protocol = 'https:';
    url.host = 'amitdevx.tech';
    return NextResponse.redirect(url, { status: 301 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
