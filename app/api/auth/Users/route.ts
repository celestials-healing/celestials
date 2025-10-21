import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import User, { IUserLean } from '@/models/User';
import { verifyToken } from '@/lib/auth';

export async function GET(request: NextRequest) {
  try {
    const token = request.cookies.get('auth-token')?.value;

    if (!token) {
      return NextResponse.json({ success: false, error: 'Unauthorized - No token provided' }, { status: 401 });
    }

    try {
      verifyToken(token);
    } catch {
      return NextResponse.json({ success: false, error: 'Unauthorized - Invalid token' }, { status: 401 });
    }

    await connectToDatabase();

    const users = await User.find({})
      .select('-password -verificationToken -__v')
      .sort({ createdAt: -1 })
      .lean<IUserLean[]>(); // now _id is properly typed

    const transformedUsers = users.map((user) => ({
      id: user._id.toString(),
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      isVerified: user.isVerified,
      subscribeNewsletter: user.subscribeNewsletter ?? false,
      lastLogin: user.lastLogin?.toISOString(),
      createdAt: user.createdAt.toISOString(),
      currentlyLoggedIn: user.currentlyLoggedIn ?? false,
      actionType: user.actionType ?? 'signup',
      actionTimestamp: user.actionTimestamp?.toISOString() ?? user.createdAt.toISOString(),
    }));

    return NextResponse.json({ success: true, users: transformedUsers });
  } catch {
    return NextResponse.json({ success: false, error: 'Failed to fetch users' }, { status: 500 });
  }
}
