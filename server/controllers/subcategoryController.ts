import { Request, Response } from "express";
import Subcategory from "../models/Subcategory";
import Course from "../models/Course";

export const getSubcategories = async (req: Request, res: Response) => {
  const { categoryKey } = req.query;
  if (!categoryKey) return res.status(400).json({ message: "categoryKey required" });
  const subs = await Subcategory.find({ categoryKey }).lean();
  res.json(subs);
};

export const getSubWithCourses = async (req: Request, res: Response) => {
  const key = req.params.key;
  const sub = await Subcategory.findOne({ key }).lean();
  if (!sub) return res.status(404).json({ message: "Not found" });
  const courses = await Course.find({ subcategoryKey: key }).lean();
  res.json({ sub, courses });
};
