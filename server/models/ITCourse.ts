import mongoose, { Schema, Document } from "mongoose";

export interface IITCourse extends Document {
  title: string;
  slug: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  description?: string;
  price?: number;
  image?: string;
  enrolledCount?: number;
}

const schema = new Schema<IITCourse>({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  level: { type: String, enum: ["Beginner","Intermediate","Advanced"], default: "Beginner" },
  description: String,
  price: { type: Number, default: 0 },
  image: String,
  enrolledCount: { type: Number, default: 0 }
}, { timestamps: true });

export default mongoose.models.ITCourse || mongoose.model<IITCourse>("ITCourse", schema);
