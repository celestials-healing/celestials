import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import User from '@/models/User';
import { verifyPassword, generateTokens } from '@/lib/auth';
import { validateLoginData, LoginData } from '@/lib/validation';

export async function POST(request: NextRequest) {
  try {
    await connectToDatabase();

    const body: LoginData = await request.json();

    // Validate input data
    const validationErrors = validateLoginData(body);
    if (validationErrors.length > 0) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Validation failed', 
          errors: validationErrors 
        },
        { status: 400 }
      );
    }

    // Find user by email
    const user = await User.findOne({ email: body.email.toLowerCase().trim() });
    if (!user) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Invalid credentials',
          errors: [{ field: 'email', message: 'No account found with this email' }]
        },
        { status: 401 }
      );
    }

    // Verify password
    const isValidPassword = await verifyPassword(body.password, user.password);
    if (!isValidPassword) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Invalid credentials',
          errors: [{ field: 'password', message: 'Incorrect password' }]
        },
        { status: 401 }
      );
    }

    // Update last login
    user.lastLogin = new Date();
    await user.save();

    // Generate JWT tokens
    const { accessToken, refreshToken } = generateTokens({
      userId: user._id.toString(),
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      isVerified: user.isVerified,
    });

    // Create response
    const response = NextResponse.json({
      success: true,
      message: 'Login successful',
      user: {
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        // fullName: user.fullName,
        subscribeNewsletter: user.subscribeNewsletter,
        isVerified: user.isVerified,
        lastLogin: user.lastLogin,
      },
      token: accessToken,
    });

    // Set HTTP-only cookies (longer expiry if "remember me" is checked)
    const accessMaxAge = body.rememberMe ? 30 * 24 * 60 * 60 : 7 * 24 * 60 * 60; // 30 days or 7 days
    const refreshMaxAge = body.rememberMe ? 90 * 24 * 60 * 60 : 30 * 24 * 60 * 60; // 90 days or 30 days

    response.cookies.set('auth-token', accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: accessMaxAge,
      path: '/',
    });

    response.cookies.set('refresh-token', refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: refreshMaxAge,
      path: '/',
    });

    return response;

  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: 'Internal server error' 
      },
      { status: 500 }
    );
  }
}
