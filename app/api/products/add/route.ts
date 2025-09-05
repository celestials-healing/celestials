// app/api/products/add/route.ts

import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import Product from "@/models/Product";
import { uploadToCloudinary } from "@/lib/cloudinary";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, description, deliveryInfo, onSale, price, priceDrop, images, fields } = body; // ✅ added price

    await connectToDatabase();

    const uploadedImages = await Promise.all(
      images.map((base64: string) => uploadToCloudinary(base64))
    );

    const newProduct = new Product({
      name,
      description,
      deliveryInfo,
      onSale,
      price, // ✅ added price
      priceDrop,
      fields,
      imageUrls: uploadedImages,
    });

    await newProduct.save();

    return NextResponse.json({ success: true, product: newProduct }, { status: 201 });
  } catch (error) {
    console.error("Error adding product:", error);
    return NextResponse.json(
      { success: false, error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
