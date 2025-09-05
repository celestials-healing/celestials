import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import Course from "@/models/Course";
import { uploadToCloudinary } from "@/lib/cloudinary";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      title,
      description,
      bulletPoints,
      originalPrice,
      discountedPrice,
      images,
      fields, // Add fields to destructuring
    } = body;

    await connectToDatabase();

    // Upload each base64 image to Cloudinary
    const uploadedImages = await Promise.all(
      images.map((base64: string) => uploadToCloudinary(base64))
    );

    const newCourse = new Course({
      title,
      description,
      bulletPoints,
      originalPrice,
      discountedPrice,
      imageUrls: uploadedImages,
      fields, // Add fields to the new course
    });

    await newCourse.save();

    return NextResponse.json({ success: true, course: newCourse }, { status: 201 });
  } catch (error) {
    console.error("Error adding course:", error);
    return NextResponse.json({ success: false, error: "Internal Server Error" }, { status: 500 });
  }
}