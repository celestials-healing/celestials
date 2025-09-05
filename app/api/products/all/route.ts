import { NextResponse } from "next/server";
import Product from "@/models/Product";
import { connectToDatabase } from "@/lib/mongodb"; // Make sure you have this file

export async function GET() {
  try {
    await connectToDatabase();

    const products = await Product.find({}).sort({ createdAt: -1 });

    return NextResponse.json({ success: true, products });
  } catch (error) {
    console.error("Error fetching products:", error);
    return NextResponse.json({ success: false, message: "Failed to fetch products" }, { status: 500 });
  }
}
