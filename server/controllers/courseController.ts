import { Request, Response } from "express";
import Course from "../models/Course";

export const getCourses = async (req: Request, res: Response) => {
  const { categoryKey, subcategoryKey } = req.query;
  const q: any = {};
  if (categoryKey) q.categoryKey = categoryKey;
  if (subcategoryKey) q.subcategoryKey = subcategoryKey;
  const courses = await Course.find(q).lean();
  res.json(courses);
};

export const getCourse = async (req: Request, res: Response) => {
  const slug = req.params.slug;
  const course = await Course.findOne({ slug }).lean();
  if (!course) return res.status(404).json({ message: "Course not found" });
  res.json(course);
};

export const createCourse = async (req: Request, res: Response) => {
  const body = req.body;
  const newCourse = await Course.create(body);
  res.status(201).json(newCourse);
};

export const updateCourse = async (req: Request, res: Response) => {
  const slug = req.params.slug;
  const updated = await Course.findOneAndUpdate({ slug }, req.body, { new: true });
  res.json(updated);
};

export const deleteCourse = async (req: Request, res: Response) => {
  const slug = req.params.slug;
  await Course.findOneAndDelete({ slug });
  res.json({ message: "Deleted" });
};
