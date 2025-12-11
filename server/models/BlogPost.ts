import mongoose, { Schema, Document } from "mongoose";

export interface IBlogPost extends Document {
  title: string;
  slug: string;
  content: string;
  author?: string;
  published?: boolean;
  featuredImage?: string;
}

const BlogSchema = new Schema<IBlogPost>({
  title: String,
  slug: { type: String, unique: true },
  content: String,
  author: String,
  published: { type: Boolean, default: false },
  featuredImage: String
}, { timestamps: true });

export default mongoose.models.BlogPost || mongoose.model<IBlogPost>("BlogPost", BlogSchema);
