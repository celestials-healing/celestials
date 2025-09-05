import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import User from '@/models/User';
import { hashPassword, generateTokens, generateVerificationToken } from '@/lib/auth';
import { validateSignupData, SignupData } from '@/lib/validation';

// Helper type guard for Mongo duplicate key errors
function isMongoDuplicateKeyError(err: unknown): err is { code: number } {
  return typeof err === 'object' && err !== null && 'code' in err && typeof (err as { code: unknown }).code === 'number';
}

export async function POST(request: NextRequest) {
  try {
    await connectToDatabase();

    const body: SignupData = await request.json();

    // Validate input data
    const validationErrors = validateSignupData(body);
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

    // Check if user already exists
    const existingUser = await User.findOne({ email: body.email.toLowerCase().trim() });
    if (existingUser) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'User already exists with this email',
          errors: [{ field: 'email', message: 'An account with this email already exists' }]
        },
        { status: 409 }
      );
    }

    // Hash password and create verification token
    const hashedPassword = await hashPassword(body.password);
    const verificationToken = generateVerificationToken();

    const newUser = new User({
      firstName: body.firstName.trim(),
      lastName: body.lastName.trim(),
      email: body.email.toLowerCase().trim(),
      password: hashedPassword,
      subscribeNewsletter: body.subscribeNewsletter || false,
      verificationToken,
      isVerified: false
    });

    await newUser.save();

    const { accessToken, refreshToken } = generateTokens({
      userId: newUser._id.toString(),
      email: newUser.email,
      firstName: newUser.firstName,
      lastName: newUser.lastName,
      isVerified: newUser.isVerified,
    });

    const response = NextResponse.json({
      success: true,
      message: 'Account created successfully',
      user: {
        id: newUser._id,
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        email: newUser.email,
        subscribeNewsletter: newUser.subscribeNewsletter,
        isVerified: newUser.isVerified,
        createdAt: newUser.createdAt,
      },
      token: accessToken,
    }, { status: 201 });

    response.cookies.set('auth-token', accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 7 * 24 * 60 * 60,
      path: '/',
    });

    response.cookies.set('refresh-token', refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 30 * 24 * 60 * 60,
      path: '/',
    });

    return response;

  } catch (error: unknown) {
    console.error('Signup error:', error);

    if (isMongoDuplicateKeyError(error) && error.code === 11000) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Email already exists',
          errors: [{ field: 'email', message: 'An account with this email already exists' }]
        },
        { status: 409 }
      );
    }

    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}
