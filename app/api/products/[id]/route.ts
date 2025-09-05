import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import Product from "@/models/Product";

// GET: Get a product by ID
export async function GET(req: NextRequest) {
  try {
    await connectToDatabase();

    const id = req.nextUrl.pathname.split("/").pop();
    if (!id) {
      return NextResponse.json(
        { success: false, message: "Missing product ID" },
        { status: 400 }
      );
    }

    const product = await Product.findById(id);

    if (!product) {
      return NextResponse.json(
        { success: false, message: "Product not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, product });
  } catch (error) {
    console.error("Error fetching product:", error);
    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 }
    );
  }
}

// DELETE: Delete a product by ID
export async function DELETE(req: NextRequest) {
  try {
    await connectToDatabase();

    const id = req.nextUrl.pathname.split("/").pop();
    if (!id) {
      return NextResponse.json(
        { success: false, message: "Missing product ID" },
        { status: 400 }
      );
    }

    const deletedProduct = await Product.findByIdAndDelete(id);

    if (!deletedProduct) {
      return NextResponse.json(
        { success: false, message: "Product not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Product deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting product:", error);
    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 }
    );
  }
}
