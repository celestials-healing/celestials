import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import Contact from '@/models/Contact';
import { validateContactData, ContactData } from '@/lib/Contact';

interface ContactQuery {
  status?: string;
  approved?: boolean;
}

export async function POST(request: NextRequest) {
  try {
    await connectToDatabase();

    const body: ContactData = await request.json();

    const validationErrors = validateContactData(body);
    if (validationErrors.length > 0) {
      return NextResponse.json(
        {
          success: false,
          message: 'Validation failed',
          errors: validationErrors,
        },
        { status: 400 }
      );
    }

    const contactMessage = await Contact.create({
      name: body.name.trim(),
      email: body.email.toLowerCase().trim(),
      message: body.message.trim(),
      status: 'new',
      approved: false,
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Message sent successfully! We will get back to you soon.',
        data: {
          id: contactMessage._id,
          name: contactMessage.name,
          email: contactMessage.email,
        },
      },
      { status: 201 }
    );
  } catch (error: unknown) {
    console.error('Contact form submission error:', error);

    return NextResponse.json(
      {
        success: false,
        message: 'Failed to send message. Please try again later.',
        errors: [{ field: 'general', message: 'Internal server error' }],
      },
      { status: 500 }
    );
  }
}

// GET endpoint for admin to retrieve messages
export async function GET(request: NextRequest) {
  try {
    await connectToDatabase();

    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status');
    const approved = searchParams.get('approved');
    const limit = parseInt(searchParams.get('limit') || '50', 10);
    const page = parseInt(searchParams.get('page') || '1', 10);

    const query: ContactQuery = {};
    if (status) query.status = status;
    if (approved !== null) query.approved = approved === 'true';

    const skip = (page - 1) * limit;
    const messages = await Contact.find(query)
      .sort({ createdAt: -1 })
      .limit(limit)
      .skip(skip)
      .select('-__v');

    const totalCount = await Contact.countDocuments(query);

    return NextResponse.json(
      {
        success: true,
        data: messages,
        pagination: {
          page,
          limit,
          totalCount,
          totalPages: Math.ceil(totalCount / limit),
        },
      },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error('Fetch contacts error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to fetch messages' },
      { status: 500 }
    );
  }
}
