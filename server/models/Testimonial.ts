import mongoose, { Document, Schema } from "mongoose";

export interface ITestimonial extends Document {
  name: string;
  text: string;
  rating?: number;
}

const TestimonialSchema = new Schema<ITestimonial>(
  {
    name: String,
    text: String,
    rating: { type: Number, default: 5 },
  },
  { timestamps: true }
);

export default mongoose.model<ITestimonial>("Testimonial", TestimonialSchema);
