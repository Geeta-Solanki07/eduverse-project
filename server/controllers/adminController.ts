// server/controllers/adminController.ts
import { Request, Response } from "express";
import AcademicClass from "../models/AcademicClass";
import Subject from "../models/Subject";
import Chapter from "../models/Chapter";
import ITCourse from "../models/ITCourse";
import User from "../models/User";

// ----- USERS -----
export const listUsers = async (req: Request, res: Response) => {
  const users = await User.find().sort({ createdAt: -1 });
  res.json({ users });
};

export const changeUserRole = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { role } = req.body;
  if (!["admin", "user"].includes(role))
    return res.status(400).json({ message: "Invalid role" });

  const user = await User.findByIdAndUpdate(
    id,
    { role },
    { new: true }
  );
  if (!user) return res.status(404).json({ message: "User not found" });
  res.json({ user, message: "Role updated" });
};

export const deleteUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  await User.findByIdAndDelete(id);
  res.json({ message: "User deleted" });
};

// ----- CLASSES -----
export const listClasses = async (req: Request, res: Response) => {
  const classes = await AcademicClass.find().sort({ createdAt: -1 });
  res.json(classes);
};

export const createClass = async (req: Request, res: Response) => {
  const { title, slug, category } = req.body;
  const cls = await AcademicClass.create({ title, slug, category });
  res.status(201).json(cls);
};

export const deleteClass = async (req: Request, res: Response) => {
  const { id } = req.params;
  await AcademicClass.findByIdAndDelete(id);
  res.json({ message: "Class deleted" });
};

// ----- SUBJECTS -----
export const listSubjectsByClass = async (req: Request, res: Response) => {
  const { classId } = req.query;
  const query: any = {};
  if (classId) query.classId = classId;
  const subs = await Subject.find(query).sort({ createdAt: -1 });
  res.json(subs);
};

export const createSubject = async (req: Request, res: Response) => {
  const { title, slug, classId } = req.body;
  const sub = await Subject.create({ title, slug, classId });
  res.status(201).json(sub);
};

export const deleteSubject = async (req: Request, res: Response) => {
  const { id } = req.params;
  await Subject.findByIdAndDelete(id);
  res.json({ message: "Subject deleted" });
};

// ----- CHAPTERS -----
export const listChaptersBySubject = async (req: Request, res: Response) => {
  const { subjectId } = req.query;
  const query: any = {};
  if (subjectId) query.subjectId = subjectId;
  const chapters = await Chapter.find(query).sort({ createdAt: 1 });
  res.json(chapters);
};

export const createChapter = async (req: Request, res: Response) => {
  const { title, slug, subjectId, videoUrl, notesUrl } = req.body;
  const chapter = await Chapter.create({ title, slug, subjectId, videoUrl, notesUrl });
  res.status(201).json(chapter);
};

export const deleteChapter = async (req: Request, res: Response) => {
  const { id } = req.params;
  await Chapter.findByIdAndDelete(id);
  res.json({ message: "Chapter deleted" });
};

// ----- IT COURSES -----
export const listITCourses = async (req: Request, res: Response) => {
  const list = await ITCourse.find().sort({ createdAt: -1 });
  res.json(list);
};

export const createITCourse = async (req: Request, res: Response) => {
  const { title, slug, level, description } = req.body;
  const course = await ITCourse.create({ title, slug, level, description });
  res.status(201).json(course);
};

export const deleteITCourse = async (req: Request, res: Response) => {
  const { id } = req.params;
  await ITCourse.findByIdAndDelete(id);
  res.json({ message: "Course deleted" });
};
