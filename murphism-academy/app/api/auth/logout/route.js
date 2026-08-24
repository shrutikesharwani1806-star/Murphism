import { NextResponse } from 'next/server';

export async function POST(req) {
  const res = NextResponse.json({ success: true });
  const isSecure = req.url.startsWith('https://') || req.headers.get('x-forwarded-proto') === 'https';
  res.cookies.set('murphism_token', '', {
    httpOnly: true,
    secure: isSecure,
    sameSite: 'lax',
    maxAge: 0,
    path: '/',
  });
  return res;
}
