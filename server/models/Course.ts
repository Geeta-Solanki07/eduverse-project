import { Schema, model, Document } from "mongoose";

export interface ICourse extends Document {
  title: string;
  slug: string;
  summary?: string;
  price?: number;
  image?: string;
  instructor?: string;
  categoryKey: string;
  subcategoryKey?: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  lessons?: { title: string; content?: string; videoUrl?: string }[];
}

const CourseSchema = new Schema<ICourse>({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  summary: String,
  price: Number,
  image: String,
  instructor: String,
  categoryKey: { type: String, required: true },
  subcategoryKey: String,
  level: { type: String, enum: ["Beginner","Intermediate","Advanced"], required: true },
  lessons: [{ title: String, content: String, videoUrl: String }]
}, { timestamps: true });

export default model<ICourse>("Course", CourseSchema);
