// server/controllers/subcategoryController.ts
import { Request, Response } from "express";
import Subcategory from "../models/Subcategory";
import Course from "../models/Course";

export const getSubcategories = async (req: Request, res: Response) => {
  try {
    const { categoryKey } = req.query;

    const filter = categoryKey ? { categoryKey } : {};
    const subs = await Subcategory.find(filter);

    res.json({ success: true, data: subs });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};

export const getSubWithCourses = async (req: Request, res: Response) => {
  try {
    const { key } = req.params;

    const sub = await Subcategory.findOne({ key });
    if (!sub) {
      return res.status(404).json({ success: false, message: "Subcategory not found" });
    }

    const courses = await Course.find({ subcategoryKey: key });

    res.json({
      success: true,
      subcategory: sub,
      courses,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};
