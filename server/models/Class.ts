import mongoose, { Schema, Document } from "mongoose";

export interface IClass extends Document {
  title: string;
  slug: string;
  category: "elementary" | "junior" | "senior";
}

const ClassSchema: Schema = new Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },

    slug: {
      type: String,
      required: true,
      unique: true,
    },

    category: {
      type: String,
      enum: ["elementary", "junior", "senior"],
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Class ||
  mongoose.model<IClass>("Class", ClassSchema);
