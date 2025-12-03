// server/models/Subject.ts

import mongoose from "mongoose";

const SubjectSchema = new mongoose.Schema({
  title: String,           // Maths
  slug: String,            // maths
  image: String,
  classSlug: String,        // "class-6"
  language: String,         // english / hindi
});

export default mongoose.model("Subject", SubjectSchema);
