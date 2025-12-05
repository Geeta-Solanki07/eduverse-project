// src/models/AcademicClass.ts
import mongoose, { Schema, Document } from "mongoose";

export interface Chapter {
  title: string;
  videoUrl?: string;
  notes?: string;
}

export interface Subject {
  title: string;
  slug: string;
  chapters: Chapter[];
}

export interface AcademicClassDoc extends Document {
  title: string;
  slug: string;
  category: "elementary" | "junior" | "senior";
  image?: string;
  description?: string;
  subjects?: Subject[];
}

const ChapterSchema = new Schema<Chapter>(
  {
    title: { type: String, required: true },
    videoUrl: String,
    notes: String,
  },
  { _id: false }
);

const SubjectSchema = new Schema<Subject>(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true },
    chapters: { type: [ChapterSchema], default: [] },
  },
  { _id: false }
);

const AcademicClassSchema = new Schema<AcademicClassDoc>(
  {
    title: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, lowercase: true },
    category: {
      type: String,
      enum: ["elementary", "junior", "senior"],
      required: true,
    },
    image: String,
    description: String,
    subjects: { type: [SubjectSchema], default: [] },
  },
  { timestamps: true }
);

export default mongoose.models.AcademicClass ||
  mongoose.model<AcademicClassDoc>("AcademicClass", AcademicClassSchema);
