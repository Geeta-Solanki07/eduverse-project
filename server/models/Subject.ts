import mongoose, { Schema, Document } from "mongoose";

export interface ISubject extends Document {
  title: string;
  slug: string;
  classId: mongoose.Types.ObjectId;
  stream?: string; // NEW
  description?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

const SubjectSchema: Schema = new Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true },
    classId: { type: Schema.Types.ObjectId, ref: "AcademicClass", required: true },

    // NEW FIELD
    stream: {
      type: String,
      enum: ["science", "commerce", "arts", null],
      default: null,
    },

    description: { type: String },
  },
  { timestamps: true }
);

// Index
SubjectSchema.index({ classId: 1, slug: 1 });

export default mongoose.models.Subject ||
  mongoose.model<ISubject>("Subject", SubjectSchema);
