import mongoose, { Schema, Document } from "mongoose";

export interface ILesson {
  title: string;
  content: string;
  videoUrl?: string;
}

export interface IModule {
  title: string;
  lessons: ILesson[];
}

export interface ISyllabus extends Document {
  courseId: string;
  modules: IModule[];
}

const LessonSchema = new Schema<ILesson>({
  title: { type: String, required: true },
  content: { type: String, required: true },
  videoUrl: String
});

const ModuleSchema = new Schema<IModule>({
  title: { type: String, required: true },
  lessons: [LessonSchema]
});

const SyllabusSchema = new Schema<ISyllabus>({
  courseId: { type: String, required: true },
  modules: [ModuleSchema]
},{timestamps:true});

export default mongoose.model<ISyllabus>("Syllabus", SyllabusSchema);
