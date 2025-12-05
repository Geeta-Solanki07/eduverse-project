import mongoose, { Document, Schema } from "mongoose";

export interface IClass extends Document {
  title: string;
  slug: string;
  description?: string;
  image?: string;
  createdAt: Date;
  updatedAt: Date;
}

const classSchema: Schema = new Schema(
  {
    title: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, lowercase: true, trim: true },
    description: { type: String, default: "" },
    image: { type: String, default: "" },
  },
  {
    timestamps: true,
  }
);

const ClassModel = mongoose.models.Class || mongoose.model<IClass>("Class", classSchema);
export default ClassModel;
