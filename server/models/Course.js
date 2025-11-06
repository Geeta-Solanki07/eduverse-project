import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  summary: { type: String, default: "" },
  price: { type: Number, default: 0 },
  image: String,
  instructor: String,
  category: { type: String, enum: ["Academics","IT","Professional"], default: "IT" },
  classLevel: String,
  link: String,
  reviews: { type: Number, default: 0 }
}, { timestamps: true });

export default mongoose.models.Course || mongoose.model("Course", courseSchema);
