import mongoose, { Schema, Document } from "mongoose";

export interface IProgress extends Document {
  userId: mongoose.Types.ObjectId;
  courseId: mongoose.Types.ObjectId;
  subjectId?: mongoose.Types.ObjectId;
  chapterId?: mongoose.Types.ObjectId;
  completed?: boolean;
  percent?: number;
}

const ProgressSchema = new Schema<IProgress>({
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  courseId: { type: Schema.Types.ObjectId, ref: "ITCourse", required: true },
  subjectId: { type: Schema.Types.ObjectId, ref: "Subject" },
  chapterId: { type: Schema.Types.ObjectId, ref: "Chapter" },
  completed: { type: Boolean, default: false },
  percent: { type: Number, default: 0 }
}, { timestamps: true });

export default mongoose.models.Progress || mongoose.model<IProgress>("Progress", ProgressSchema);
