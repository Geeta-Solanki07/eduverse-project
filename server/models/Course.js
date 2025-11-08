import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  summary: String,
  price: String,
  image: String,
  instructor: String,
  category: String,
  link: String,
  reviews: { type: Number, default: 0 }
}, { timestamps: true });

export default mongoose.model("Course", courseSchema);
