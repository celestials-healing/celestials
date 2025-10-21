// app/api/auth/users/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import User from '@/models/User';
import { verifyToken } from '@/lib/auth';

export async function GET(request: NextRequest) {
  try {
    // Optional: Add authentication check
    const token = request.cookies.get('auth-token')?.value;
    
    if (!token) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized - No token provided' },
        { status: 401 }
      );
    }

    // Verify the token (optional - remove if you want to allow unauthenticated access)
    try {
      verifyToken(token);
    } catch (error) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized - Invalid token' },
        { status: 401 }
      );
    }

    await connectToDatabase();

    // Fetch all users from MongoDB
    const users = await User.find({})
      .select('-password -verificationToken -__v') // Exclude sensitive fields
      .sort({ createdAt: -1 }) // Sort by newest first
      .lean();

    // Transform the data to match the dashboard's expected format
    const transformedUsers = users.map((user: any) => ({
      id: user._id.toString(),
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      isVerified: user.isVerified,
      subscribeNewsletter: user.subscribeNewsletter || false,
      lastLogin: user.lastLogin?.toISOString(),
      createdAt: user.createdAt.toISOString(),
      // You'll need to add these fields to your User model if they don't exist
      currentlyLoggedIn: user.currentlyLoggedIn || false,
      actionType: user.actionType || 'signup',
      actionTimestamp: user.actionTimestamp?.toISOString() || user.createdAt.toISOString(),
    }));

    return NextResponse.json({
      success: true,
      users: transformedUsers,
    });

  } catch (error) {
    console.error('Error fetching users:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch users' },
      { status: 500 }
    );
  }
}