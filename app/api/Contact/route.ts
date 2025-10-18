// app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import Contact from '@/models/Contact';
import { validateContactData, ContactData } from '@/lib/Contact';

export async function POST(request: NextRequest) {
  try {
    await connectToDatabase();

    const body: ContactData = await request.json();

    // Validate input data
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

    // Create new contact message with approved: false
    const contactMessage = await Contact.create({
      name: body.name.trim(),
      email: body.email.toLowerCase().trim(),
      message: body.message.trim(),
      status: 'new',
      approved: false,
    });

    // Optional: Send email notification to admin
    // await sendEmailNotification(contactMessage);

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
  } catch (error) {
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

    // Get query parameters
    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status');
    const approved = searchParams.get('approved');
    const limit = parseInt(searchParams.get('limit') || '50');
    const page = parseInt(searchParams.get('page') || '1');

    // Build query
    const query: any = {};
    if (status) {
      query.status = status;
    }
    if (approved !== null) {
      query.approved = approved === 'true';
    }

    // Fetch messages with pagination
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
  } catch (error) {
    console.error('Fetch contacts error:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'Failed to fetch messages',
      },
      { status: 500 }
    );
  }
}