import mongoose, { Schema } from "mongoose";

const SubcategorySchema = new Schema({
  key: { type: String, required: true },
  name: { type: String, required: true },
  categoryKey: { type: String, required: true },
  slug: { type: String, required: true, unique: true }
});

export default mongoose.models.Subcategory || mongoose.model("Subcategory", SubcategorySchema);
