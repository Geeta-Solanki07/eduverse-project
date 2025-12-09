// server/models/ITCourse.ts
import { Schema, model, Document } from "mongoose";

export interface IITCourse extends Document {
  title: string;
  slug: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  description?: string;
  price?: number;
  image?: string;
}

const ITCourseSchema = new Schema<IITCourse>(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    level: {
      type: String,
      enum: ["Beginner", "Intermediate", "Advanced"],
      required: true,
    },
    description: String,
    price: Number,
    image: String,
  },
  { timestamps: true }
);

export default model<IITCourse>("ITCourse", ITCourseSchema);
