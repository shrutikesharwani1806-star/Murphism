import { cookies } from 'next/headers';
import { verifyToken } from '@/lib/auth';
import connectDB from '@/lib/mongodb';
import Testimonial from '@/models/Testimonial';

async function verifyAdmin() {
  const cookieStore = await cookies();
  const token = cookieStore.get('murphism_token')?.value;
  if (!token) return false;
  const payload = await verifyToken(token);
  return payload && payload.isAdmin;
}

// GET — public: list all testimonials sorted by order
export async function GET() {
  try {
    await connectDB();
    const testimonials = await Testimonial.find({}).sort({ order: 1, createdAt: -1 });
    return Response.json({ success: true, testimonials });
  } catch (error) {
    return Response.json({ success: false, error: error.message }, { status: 500 });
  }
}

// POST — admin only: add a new testimonial
export async function POST(request) {
  try {
    const isAdmin = await verifyAdmin();
    if (!isAdmin) {
      return Response.json({ success: false, error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { name, course, videoUrl, label, order } = body;

    if (!name || !course || !videoUrl) {
      return Response.json(
        { success: false, error: 'name, course, and videoUrl are required' },
        { status: 400 }
      );
    }

    await connectDB();
    const testimonial = await Testimonial.create({ name, course, videoUrl, label: label || '', order: order || 0 });
    return Response.json({ success: true, testimonial }, { status: 201 });
  } catch (error) {
    return Response.json({ success: false, error: error.message }, { status: 500 });
  }
}

// DELETE — admin only: remove a testimonial by id
export async function DELETE(request) {
  try {
    const isAdmin = await verifyAdmin();
    if (!isAdmin) {
      return Response.json({ success: false, error: 'Unauthorized' }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    if (!id) {
      return Response.json({ success: false, error: 'id is required' }, { status: 400 });
    }

    await connectDB();
    await Testimonial.findByIdAndDelete(id);
    return Response.json({ success: true, message: 'Testimonial deleted' });
  } catch (error) {
    return Response.json({ success: false, error: error.message }, { status: 500 });
  }
}
