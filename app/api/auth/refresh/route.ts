import { NextRequest, NextResponse } from 'next/server';
import {connectToDatabase} from '@/lib/mongodb';
import User from '@/models/User';
import { verifyToken, generateTokens } from '@/lib/auth';

export async function POST(request: NextRequest) {
  try {
    await connectToDatabase();

    const refreshToken = request.cookies.get('refresh-token')?.value;
    
    if (!refreshToken) {
      return NextResponse.json(
        { success: false, message: 'Refresh token not found' },
        { status: 401 }
      );
    }

    const payload = verifyToken(refreshToken);
    if (!payload) {
      return NextResponse.json(
        { success: false, message: 'Invalid refresh token' },
        { status: 401 }
      );
    }

    // Verify user still exists
    const user = await User.findById(payload.userId);
    if (!user) {
      return NextResponse.json(
        { success: false, message: 'User not found' },
        { status: 404 }
      );
    }

    // Generate new tokens
    const { accessToken, refreshToken: newRefreshToken } = generateTokens({
      userId: user._id.toString(),
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      isVerified: user.isVerified,
    });

    const response = NextResponse.json({
      success: true,
      message: 'Tokens refreshed successfully',
      token: accessToken,
    });

    // Update cookies
    response.cookies.set('auth-token', accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 7 * 24 * 60 * 60,
      path: '/',
    });

    response.cookies.set('refresh-token', newRefreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 30 * 24 * 60 * 60,
      path: '/',
    });

    return response;

  } catch (error) {
    console.error('Refresh token error:', error);
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}
