// app/api/contact/[id]/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import Contact from '@/models/Contact';
import mongoose from 'mongoose';

// PATCH - Update contact message (approve/unapprove)
export async function PATCH(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    await connectToDatabase();

    const { id } = await context.params; // ✅ must await params

    // Validate MongoDB ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json(
        { success: false, message: 'Invalid message ID' },
        { status: 400 }
      );
    }

    const body = await request.json();
    const { approved, status } = body;

    // Build update object
    const updateData: Record<string, any> = {};
    if (typeof approved === 'boolean') updateData.approved = approved;
    if (status && ['new', 'read', 'replied'].includes(status))
      updateData.status = status;

    // Update the contact message
    const updatedMessage = await Contact.findByIdAndUpdate(id, updateData, {
      new: true,
      runValidators: true,
    });

    if (!updatedMessage) {
      return NextResponse.json(
        { success: false, message: 'Message not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Message updated successfully',
        data: updatedMessage,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Update contact error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to update message' },
      { status: 500 }
    );
  }
}

// DELETE - Delete contact message
export async function DELETE(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    await connectToDatabase();

    const { id } = await context.params; // ✅ must await params

    // Validate MongoDB ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json(
        { success: false, message: 'Invalid message ID' },
        { status: 400 }
      );
    }

    // Delete the contact message
    const deletedMessage = await Contact.findByIdAndDelete(id);

    if (!deletedMessage) {
      return NextResponse.json(
        { success: false, message: 'Message not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { success: true, message: 'Message deleted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Delete contact error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to delete message' },
      { status: 500 }
    );
  }
}

// GET - Get single contact message
export async function GET(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    await connectToDatabase();

    const { id } = await context.params; // ✅ must await params

    // Validate MongoDB ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json(
        { success: false, message: 'Invalid message ID' },
        { status: 400 }
      );
    }

    // Fetch the contact message
    const message = await Contact.findById(id);

    if (!message) {
      return NextResponse.json(
        { success: false, message: 'Message not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { success: true, data: message },
      { status: 200 }
    );
  } catch (error) {
    console.error('Fetch contact error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to fetch message' },
      { status: 500 }
    );
  }
}
