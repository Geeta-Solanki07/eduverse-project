import mongoose from "mongoose";

const ITCourseSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },

    level: { type: String, enum: ["Beginner", "Intermediate", "Advanced"], required: true },

    summary: { type: String, required: true },
    price: { type: String, required: true },

    image: { type: String, required: true },
    instructor: { type: String, required: true },
    category: { type: String, default: "Professional Course" },

    link: { type: String, required: true },
    reviews: { type: Number, default: 0 },

    // full course page content  
    description: { type: String, default: "" },
    whatYouLearn: { type: [String], default: [] },
    curriculum: { type: [String], default: [] },
  },
  { timestamps: true }
);

export default mongoose.models.ITCourse ||
  mongoose.model("ITCourse", ITCourseSchema);
