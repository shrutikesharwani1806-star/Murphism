import { NextResponse } from 'next/server';
import { verifyToken } from './lib/auth';

export async function proxy(req) {
  const path = req.nextUrl.pathname;

  if (path.startsWith('/admin')) {
    const token = req.cookies.get('murphism_token')?.value;
    if (!token) {
      return NextResponse.redirect(new URL('/', req.url));
    }
    const payload = await verifyToken(token);
    if (!payload || !payload.isAdmin) {
      return NextResponse.redirect(new URL('/', req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};
