import { NextResponse } from 'next/server';
import { jwtVerify } from 'jose';

const secret = new TextEncoder().encode(
  process.env.JWT_SECRET || 'murphism_super_secret_jwt_key_2026'
);

export async function proxy(req) {
  const path = req.nextUrl.pathname;

  // Protect /admin routes — require valid admin JWT
  if (path.startsWith('/admin')) {
    const token = req.cookies.get('murphism_token')?.value;
    if (!token) {
      return NextResponse.redirect(new URL('/', req.url));
    }
    try {
      const { payload } = await jwtVerify(token, secret);
      if (!payload || !payload.isAdmin) {
        return NextResponse.redirect(new URL('/', req.url));
      }
    } catch {
      return NextResponse.redirect(new URL('/', req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};
