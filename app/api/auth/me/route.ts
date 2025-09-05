import { NextRequest, NextResponse } from 'next/server';
import {connectToDatabase} from '@/lib/mongodb';
import User from '@/models/User';
import { getUserFromToken } from '@/lib/auth';

export async function GET(request: NextRequest) {
  try {
    await connectToDatabase();

    // Get user from token
    const tokenPayload = getUserFromToken(request);
    if (!tokenPayload) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Unauthorized' 
        },
        { status: 401 }
      );
    }

    // Find user in database
    const user = await User.findById(tokenPayload.userId);
    if (!user) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'User not found' 
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      user: {
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        // fullName: user.fullName,
        subscribeNewsletter: user.subscribeNewsletter,
        isVerified: user.isVerified,
        lastLogin: user.lastLogin,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
      },
    });

  } catch (error) {
    console.error('Get user error:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: 'Internal server error' 
      },
      { status: 500 }
    );
  }
}
