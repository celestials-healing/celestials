import { connectToDatabase } from "@/lib/mongodb";
import Course from "@/models/Course";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectToDatabase();
    const courses = await Course.find().lean();
    return NextResponse.json({ courses });
  } catch (error) {
    console.error("Error fetching courses:", error);
    return NextResponse.json({ error: "Failed to load courses" }, { status: 500 });
  }
}
