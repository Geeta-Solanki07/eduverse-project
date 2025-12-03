// server/models/Subject.ts
import mongoose from "mongoose";

const SubjectSchema = new mongoose.Schema({
  title: { type: String, required: true },      // English, Maths, Science
  slug: { type: String, required: true },
  classSlug: { type: String, required: true },   // e.g. class-5
  image: String
}, { timestamps: true });

export default mongoose.models.Subject
  || mongoose.model("Subject", SubjectSchema);
