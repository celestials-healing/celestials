import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import { connectToDatabase } from "@/lib/mongodb";
import Payment from "@/models/Payment";

export async function POST(req: NextRequest) {
  try {
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      amount,
      user,
    } = await req.json();

    // Step 1: Verify signature
    const body = razorpay_order_id + "|" + razorpay_payment_id;
    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET!)
      .update(body.toString())
      .digest("hex");

    const isAuthentic = expectedSignature === razorpay_signature;

    if (!isAuthentic) {
      return NextResponse.json(
        { success: false, message: "Invalid signature" },
        { status: 400 }
      );
    }

    // Step 2: Save payment in MongoDB
    await connectToDatabase();

    const paymentRecord = await Payment.create({
      orderId: razorpay_order_id,
      paymentId: razorpay_payment_id,
    amount: amount / 100,   // ✅ convert to rupees
      userEmail: user.email,
      userName: user.name,
      status: "SUCCESS",
    });

    return NextResponse.json({ success: true, payment: paymentRecord });
  } catch (error) {
    console.error("Verify API Error:", error);
    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 }
    );
  }
}
