import { Request, Response } from "express";
import ITCourse from "../models/ITCourse";

export const getITCourses = async (req: Request, res: Response) => {
  const courses = await ITCourse.find().sort({ createdAt: -1 });
  res.json(courses);
};

export const getITCourseBySlug = async (req: Request, res: Response) => {
  const { slug } = req.params;
  const course = await ITCourse.findOne({ slug });
  if (!course) return res.status(404).json({ message: "Not found" });
  res.json(course);
};

export const addITCourse = async (req: Request, res: Response) => {
  const newCourse = await ITCourse.create(req.body);
  res.status(201).json(newCourse);
};

export const updateITCourse = async (req: Request, res: Response) => {
  const course = await ITCourse.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(course);
};

export const deleteITCourse = async (req: Request, res: Response) => {
  await ITCourse.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
};
