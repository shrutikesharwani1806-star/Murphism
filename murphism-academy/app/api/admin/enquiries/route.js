import { cookies } from 'next/headers';
import { verifyToken } from '@/lib/auth';
import connectDB from '@/lib/mongodb';
import Enrollment from '@/models/Enrollment';
import Contact from '@/models/Contact';

async function verifyAdmin() {
  const cookieStore = await cookies();
  const token = cookieStore.get('murphism_token')?.value;
  if (!token) return false;
  const payload = await verifyToken(token);
  return payload && payload.isAdmin;
}

export async function GET(request) {
  try {
    const isAdmin = await verifyAdmin();
    if (!isAdmin) {
      return Response.json({ success: false, error: 'Unauthorized' }, { status: 401 });
    }

    await connectDB();
    const enrollments = await Enrollment.find({}).sort({ createdAt: -1 });
    const contacts = await Contact.find({}).sort({ createdAt: -1 });
    
    return Response.json({
      success: true,
      enrollments,
      contacts,
    });
  } catch (error) {
    console.error('Admin API GET Error:', error);
    return Response.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function PUT(request) {
  try {
    const isAdmin = await verifyAdmin();
    if (!isAdmin) {
      return Response.json({ success: false, error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { id, type, status } = body;
    
    if (!id || !type || !status) {
      return Response.json({ success: false, error: 'id, type, and status are required' }, { status: 400 });
    }
    
    await connectDB();
    
    if (type === 'enrollment') {
      const updated = await Enrollment.findByIdAndUpdate(id, { status }, { new: true });
      return Response.json({ success: true, updated });
    } else if (type === 'contact') {
      const updated = await Contact.findByIdAndUpdate(id, { status }, { new: true });
      return Response.json({ success: true, updated });
    } else {
      return Response.json({ success: false, error: 'Invalid type' }, { status: 400 });
    }
  } catch (error) {
    console.error('Admin API PUT Error:', error);
    return Response.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function DELETE(request) {
  try {
    const isAdmin = await verifyAdmin();
    if (!isAdmin) {
      return Response.json({ success: false, error: 'Unauthorized' }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    const type = searchParams.get('type');
    
    if (!id || !type) {
      return Response.json({ success: false, error: 'id and type are required' }, { status: 400 });
    }
    
    await connectDB();
    
    if (type === 'enrollment') {
      await Enrollment.findByIdAndDelete(id);
    } else if (type === 'contact') {
      await Contact.findByIdAndDelete(id);
    } else {
      return Response.json({ success: false, error: 'Invalid type' }, { status: 400 });
    }
    
    return Response.json({ success: true, message: 'Deleted successfully' });
  } catch (error) {
    console.error('Admin API DELETE Error:', error);
    return Response.json({ success: false, error: error.message }, { status: 500 });
  }
}
