import mongoose, { Schema, Document } from "mongoose";

interface Lesson {
  title: string;
  duration?: string;
}

interface CurriculumWeek {
  week: string;
  lessons: Lesson[];
}

export interface IITCourse extends Document {
  title: string;
  slug: string;
  categoryKey: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  summary: string;
  description: string;
  image: string;
  price: number;

  rating: number;
  reviews: number;
  students: number;
  duration: string;
  certificate: boolean;

  curriculum: CurriculumWeek[];

  instructor: {
    name: string;
    role: string;
    image: string;
  };
}

const ITCourseSchema = new Schema<IITCourse>(
  {
    title: String,
    slug: { type: String, unique: true },
    categoryKey: { type: String, default: "it" },
    level: String,
    summary: String,
    description: String,
    image: String,
    price: Number,

    rating: { type: Number, default: 4.8 },
    reviews: { type: Number, default: 1200 },
    students: { type: Number, default: 5000 },
    duration: { type: String, default: "6 weeks (30 hours)" },
    certificate: { type: Boolean, default: true },

    curriculum: [
      {
        week: String,
        lessons: [
          {
            title: String,
            duration: String,
          },
        ],
      },
    ],

    instructor: {
      name: String,
      role: String,
      image: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model<IITCourse>("ITCourse", ITCourseSchema);
