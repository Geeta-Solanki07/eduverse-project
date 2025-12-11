import { Request, Response } from "express";
import ITCourse from "../models/ITCourse";

export const listCourses = async (req: Request, res: Response) => {
  const courses = await ITCourse.find().sort({ createdAt: -1 });
  res.json({ courses });
};

export const getCourseBySlug = async (req: Request, res: Response) => {
  const course = await ITCourse.findOne({ slug: req.params.slug });
  if (!course) return res.status(404).json({ message: "Course not found" });
  res.json({ course });
};

export const createCourse = async (req: Request, res: Response) => {
  const course = await ITCourse.create(req.body);
  res.status(201).json({ course });
};

export const updateCourse = async (req: Request, res: Response) => {
  const updated = await ITCourse.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json({ course: updated });
};

export const deleteCourse = async (req: Request, res: Response) => {
  await ITCourse.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
};
