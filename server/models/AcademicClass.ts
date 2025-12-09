import mongoose, { Schema, Document } from "mongoose";

export interface IAcademicClass extends Document {
  title: string;
  slug: string;
  category: "elementary" | "junior" | "senior";
  image?: string;
  description?: string;
}

const AcademicClassSchema: Schema = new Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    category: { type: String, enum: ["elementary", "junior", "senior"], required: true },
    image: String,
    description: String,
  },
  { timestamps: true }
);

export default mongoose.models.AcademicClass || mongoose.model<IAcademicClass>("AcademicClass", AcademicClassSchema);
