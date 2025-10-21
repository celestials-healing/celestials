import mongoose, { Schema, Document, Types } from 'mongoose';

// Mongoose Document interface
export interface IUser extends Document {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  subscribeNewsletter: boolean;
  isVerified: boolean;
  verificationToken?: string;
  lastLogin?: Date;
  createdAt: Date;
  updatedAt: Date;
  currentlyLoggedIn: boolean;
  actionType: 'signup' | 'login';
  actionTimestamp: Date;
}

// Plain object interface for lean queries
export interface IUserLean {
  _id: Types.ObjectId;
  firstName: string;
  lastName: string;
  email: string;
  subscribeNewsletter: boolean;
  isVerified: boolean;
  verificationToken?: string;
  lastLogin?: Date;
  createdAt: Date;
  updatedAt: Date;
  currentlyLoggedIn: boolean;
  actionType: 'signup' | 'login';
  actionTimestamp: Date;
}

const UserSchema = new Schema<IUser>(
  {
    firstName: {
      type: String,
      required: [true, 'First name is required'],
      trim: true,
    },
    lastName: {
      type: String,
      required: [true, 'Last name is required'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      lowercase: true,
      trim: true,
      match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email'],
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
    },
    subscribeNewsletter: {
      type: Boolean,
      default: false,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    verificationToken: {
      type: String,
    },
    lastLogin: {
      type: Date,
    },
    currentlyLoggedIn: {
      type: Boolean,
      default: false,
    },
    actionType: {
      type: String,
      enum: ['signup', 'login'],
      default: 'signup',
    },
    actionTimestamp: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

// Create index for email
UserSchema.index({ email: 1 });

// Export the Mongoose model
const User = mongoose.models.User || mongoose.model<IUser>('User', UserSchema);

export default User;
