import mongoose, { Schema } from "mongoose";

const AcademicClassSchema = new Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  category: {
    type: String,
    enum: ["elementary", "junior", "senior"],
    required: true
  },
  image: { type: String },
  description: { type: String },

  subjects: [
    {
      title: String,
      slug: String,
      chapters: [
        {
          title: String,
          videoUrl: String,
          notes: String
        }
      ]
    }
  ]
}, { timestamps: true });

export default mongoose.model("AcademicClass", AcademicClassSchema);
