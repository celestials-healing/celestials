import mongoose, { Schema, models, model } from "mongoose";

const CourseSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    bulletPoints: { type: [String], default: [] },
    originalPrice: { type: Number, required: true },
    discountedPrice: { type: Number, required: true },
    imageUrls: { type: [String], default: [] },
    fields: { type: [String], default: [] }, // Add fields array
  },
  { timestamps: true }
);

export default models.Course || model("Course", CourseSchema);