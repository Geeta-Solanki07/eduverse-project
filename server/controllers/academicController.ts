// server/controllers/academicController.ts
import { Request, Response } from "express";
import AcademicClass from "../models/AcademicClass";
import Subject from "../models/Subject";
import Chapter from "../models/Chapter";

export const getAllClasses = async (req: Request, res: Response) => {
  const classes = await AcademicClass.find().sort({ createdAt: -1 });
  res.json({ classes });
};

export const getClassBySlug = async (req: Request, res: Response) => {
  const { slug } = req.params;
  const cls = await AcademicClass.findOne({ slug });
  if (!cls) return res.status(404).json({ message: "Class not found" });
  res.json(cls);
};

export const getSubjectsForClass = async (req: Request, res: Response) => {
  const { classId } = req.params;
  const subs = await Subject.find({ classId }).sort({ createdAt: -1 });
  res.json(subs);
};

export const getChaptersForSubject = async (req: Request, res: Response) => {
  const { subjectId } = req.params;
  const chapters = await Chapter.find({ subjectId }).sort({ createdAt: 1 });
  res.json(chapters);
};
