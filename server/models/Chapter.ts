// server/models/Chapter.ts
import mongoose, { Schema, Document } from "mongoose";

export interface IChapter extends Document {
  title: string;
  slug: string;
  subjectId: mongoose.Types.ObjectId;
  videoUrl?: string;
  notesUrl?: string;
  order?: number;
}

const ChapterSchema = new Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true },
    subjectId: { type: Schema.Types.ObjectId, ref: "Subject", required: true },
    videoUrl: String,
    notesUrl: String,
    order: Number,
  },
  { timestamps: true }
);

export default mongoose.models.Chapter ||
  mongoose.model<IChapter>("Chapter", ChapterSchema);
