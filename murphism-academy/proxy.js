import { NextResponse } from 'next/server';
import { jwtVerify } from 'jose';

const secret = new TextEncoder().encode(
  process.env.JWT_SECRET || 'murphism_super_secret_jwt_key_2026'
);

export async function proxy(req) {
  const path = req.nextUrl.pathname;

  // Protect /admin pages - require valid admin JWT
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

  // Protect /api/admin endpoints - require valid admin JWT
  if (path.startsWith('/api/admin')) {
    const token = req.cookies.get('murphism_token')?.value;
    if (!token) {
      return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
    }
    try {
      const { payload } = await jwtVerify(token, secret);
      if (!payload || !payload.isAdmin) {
        return NextResponse.json({ success: false, error: 'Forbidden' }, { status: 403 });
      }
    } catch {
      return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin', '/admin/:path*', '/api/admin', '/api/admin/:path*'],
};
