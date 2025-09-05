import mongoose, { Schema, models, model } from "mongoose";

const productSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
    deliveryInfo: { type: String },
    onSale: { type: String, enum: ["Yes", "No"], default: "No" },
    price: { type: Number, required: true },        // product price
    priceDrop: { type: Number, default: 0 },        // discount amount or percentage
    imageUrls: [{ type: String }],                  // multiple product images
    fields: [{ type: String }],                               // ✅ array of strings
  },
  { timestamps: true }
);

export default models.Product || model("Product", productSchema);
