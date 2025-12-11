import mongoose, { Schema, Document } from "mongoose";

export interface IAcademicClass extends Document {
  title: string;
  slug: string;
  category: "elementary" | "junior" | "senior";
  image?: string;
  description?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

const AcademicClassSchema: Schema = new Schema(
  {
    title: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, lowercase: true },
    category: { 
      type: String, 
      enum: ["elementary", "junior", "senior"], 
      default: "elementary" 
    },
    image: String,
    description: String,
  },
  { timestamps: true }
);

export default mongoose.models.AcademicClass ||
  mongoose.model<IAcademicClass>("AcademicClass", AcademicClassSchema);
