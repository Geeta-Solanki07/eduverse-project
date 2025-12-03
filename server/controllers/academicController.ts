// server/controllers/academicController.ts
import { Request, Response } from "express";
import AcademicClass from "../models/AcademicClass";
import Course from "../models/Course"; // optional: if you want to include courses under class

export const listClasses = async (req: Request, res: Response) => {
  const classes = await AcademicClass.find().sort({ category: 1, title: 1 }).lean();
  res.json(classes);
};

export const getClass = async (req: Request, res: Response) => {
  const slug = req.params.slug;
  const cls = await AcademicClass.findOne({ slug }).lean();
  if (!cls) return res.status(404).json({ message: "Not found" });

  // optional: include courses/chapters linked to this class (if you store courses with categoryKey/subcategory)
  // const courses = await Course.find({ categoryKey: "academics", subcategoryKey: slug }).lean();
  // return res.json({ ...cls, courses });

  res.json(cls);
};

export const createClass = async (req: Request, res: Response) => {
  const payload = req.body;
  const exists = await AcademicClass.findOne({ slug: payload.slug });
  if (exists) return res.status(400).json({ message: "Slug already exists" });

  const created = await AcademicClass.create(payload);
  res.status(201).json(created);
};

export const updateClass = async (req: Request, res: Response) => {
  const slug = req.params.slug;
  const updated = await AcademicClass.findOneAndUpdate({ slug }, req.body, { new: true });
  res.json(updated);
};

export const deleteClass = async (req: Request, res: Response) => {
  const slug = req.params.slug;
  await AcademicClass.findOneAndDelete({ slug });
  res.json({ message: "Deleted" });
};
