import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import Course from '@/models/Course';
import type { NextRequest } from 'next/server';

export async function GET(req: NextRequest) {
  try {
    await connectToDatabase();

    // Extract the dynamic `id` from the URL
    const url = new URL(req.url);
    const id = url.pathname.split('/').pop(); // Assumes URL ends in the id

    if (!id) {
      return NextResponse.json({ error: 'Missing course ID' }, { status: 400 });
    }

    const course = await Course.findById(id);

    if (!course) {
      return NextResponse.json({ error: 'Course not found' }, { status: 404 });
    }

    return NextResponse.json({ course });
  } catch (error) {
    console.error('Error fetching course:', error);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
