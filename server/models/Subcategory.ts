import mongoose, { Schema, Document } from "mongoose";

export interface ISubcategory extends Document {
  key: string;
  name: string;
  categoryKey: string;
}

const SubcategorySchema = new Schema<ISubcategory>({
  key: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  categoryKey: { type: String, required: true },
});

export default mongoose.models.Subcategory || mongoose.model<ISubcategory>("Subcategory", SubcategorySchema);
