// server/models/Subject.ts
import mongoose, { Schema, Document } from "mongoose";

export interface ISubject extends Document {
  title: string;
  slug: string;
  classId: mongoose.Types.ObjectId;
  description?: string;
}

const SubjectSchema = new Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true },
    classId: { type: Schema.Types.ObjectId, ref: "AcademicClass", required: true },
    description: String,
  },
  { timestamps: true }
);

export default mongoose.models.Subject ||
  mongoose.model<ISubject>("Subject", SubjectSchema);
