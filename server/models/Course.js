import mongoose from "mongoose";

const courseSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    category: {
      type: String,
      enum: ["beginner", "intermediate", "advanced"],
      required: true,
    },
    level: { type: String, enum: ["IT", "Academics"], required: true },
    description: { type: String, required: true },
    thumbnail: { type: String, default: "/default-course.jpg" },
  },
  { timestamps: true }
);

export const Course = mongoose.model("Course", courseSchema);
