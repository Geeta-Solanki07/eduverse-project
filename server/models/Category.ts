// import mongoose, { Schema, Document } from "mongoose";

// export interface ICategory extends Document {
//   key: string; // 'it' | 'academics' etc
//   name: string;
//   type?: string;
//   icon?: string;
// }

// const CategorySchema = new Schema<ICategory>({
//   key: { type: String, required: true, unique: true },
//   name: { type: String, required: true },
//   type: String,
//   icon: String,
// });

// export default mongoose.models.Category || mongoose.model<ICategory>("Category", CategorySchema);


import mongoose, { Schema } from "mongoose";

const CategorySchema = new Schema({
  key: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  icon: String,
  type: String
});

export default mongoose.models.Category || mongoose.model("Category", CategorySchema);
