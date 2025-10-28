import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  description: String,
  price: String,
  instructor: String,
  image: String,
  category: String,
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Course || mongoose.model("Course", courseSchema);
