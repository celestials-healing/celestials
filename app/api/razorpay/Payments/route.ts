import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import Payment from "@/models/Payment";

export async function GET() {
  try {
    await connectToDatabase();
    const payments = await Payment.find().sort({ createdAt: -1 }); // latest first
    return NextResponse.json({ success: true, payments });
  } catch (error) {
    console.error("Fetch Payments Error:", error);
    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 }
    );
  }
}
