import mongoose, { Schema, Document } from "mongoose";

export interface IChapter extends Document {
  title: string;
  slug: string;
  subjectId: mongoose.Types.ObjectId;
  videoUrl?: string;
  notesUrl?: string;
  notes?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

const ChapterSchema: Schema = new Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true },
    subjectId: { type: Schema.Types.ObjectId, ref: "Subject", required: true },
    videoUrl: { type: String },
    notesUrl: { type: String },
    notes: { type: String },
  },
  { timestamps: true }
);

ChapterSchema.index({ subjectId: 1, slug: 1 });

export default mongoose.models.Chapter || mongoose.model<IChapter>("Chapter", ChapterSchema);
