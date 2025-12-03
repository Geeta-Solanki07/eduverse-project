// server/models/Chapter.ts
import mongoose from "mongoose";

const ChapterSchema = new mongoose.Schema({
  title: { type: String, required: true },
  subjectSlug: { type: String, required: true },  // english-class-5
  classSlug: { type: String, required: true },    // class-5
  description: String,
  videoUrl: String,
  pdfUrl: String,
  order: Number
}, { timestamps: true });

export default mongoose.models.Chapter
  || mongoose.model("Chapter", ChapterSchema);
