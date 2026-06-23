import { cookies } from 'next/headers';
import { verifyToken } from '@/lib/auth';
import connectDB from '@/lib/mongodb';
import User from '@/models/User';

export async function GET(request) {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get('murphism_token')?.value;
    if (!token) {
      return Response.json({ success: false, error: 'Unauthorized' }, { status: 401 });
    }

    const payload = await verifyToken(token);
    if (!payload || !payload.isAdmin) {
      return Response.json({ success: false, error: 'Forbidden' }, { status: 403 });
    }

    await connectDB();
    const users = await User.find({}, '-password').sort({ createdAt: -1 });

    return Response.json({ success: true, users });
  } catch (error) {
    console.error('Admin Users API GET Error:', error);
    return Response.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function DELETE(request) {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get('murphism_token')?.value;
    if (!token) {
      return Response.json({ success: false, error: 'Unauthorized' }, { status: 401 });
    }

    const payload = await verifyToken(token);
    if (!payload || !payload.isAdmin) {
      return Response.json({ success: false, error: 'Forbidden' }, { status: 403 });
    }

    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('id');
    if (!userId) {
      return Response.json({ success: false, error: 'User ID is required' }, { status: 400 });
    }

    if (userId === payload.id) {
      return Response.json({ success: false, error: 'You cannot delete yourself' }, { status: 400 });
    }

    await connectDB();
    await User.findByIdAndDelete(userId);

    return Response.json({ success: true, message: 'User deleted successfully' });
  } catch (error) {
    console.error('Admin Users API DELETE Error:', error);
    return Response.json({ success: false, error: error.message }, { status: 500 });
  }
}
