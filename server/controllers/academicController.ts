import { Request, Response } from "express";
import AcademicClass from "../models/AcademicClass";
import Subject from "../models/Subject";
import Chapter from "../models/Chapter";

// GET all classes
export const getAllClasses = async (req: Request, res: Response) => {
  const classes = await AcademicClass.find().sort({ createdAt: -1 });
  res.json({ classes });
};

// GET class by slug (with subjects + chapters)
export const getClassBySlug = async (req: Request, res: Response) => {
  const cls = await AcademicClass.findOne({ slug: req.params.slug });
  if (!cls) return res.status(404).json({ message: "Class not found" });

  const subjects = await Subject.find({ classId: cls._id });

  const subjectsWithChapters = await Promise.all(
    subjects.map(async (sub) => {
      const chapters = await Chapter.find({ subjectId: sub._id });
      return { ...sub.toObject(), chapters };
    })
  );

  res.json({ class: cls, subjects: subjectsWithChapters });
};

// GET subjects of a class
export const getSubjectsForClass = async (req: Request, res: Response) => {
  const subjects = await Subject.find({ classId: req.params.classId });
  res.json({ subjects });
};

// GET chapters of a subject
export const getChaptersForSubject = async (req: Request, res: Response) => {
  const chapters = await Chapter.find({ subjectId: req.params.subjectId });
  res.json({ chapters });
};
