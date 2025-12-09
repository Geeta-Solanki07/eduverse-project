// server/controllers/categoryController.ts
import { Request, Response } from "express";
import Category from "../models/Category";
import Subcategory from "../models/Subcategory";

export const getCategories = async (req: Request, res: Response) => {
  try {
    const categories = await Category.find().sort({ createdAt: -1 });

    res.json({
      success: true,
      count: categories.length,
      data: categories,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};

export const getCategoryWithSubs = async (req: Request, res: Response) => {
  try {
    const { key } = req.params;

    const category = await Category.findOne({ key });

    if (!category) {
      return res
        .status(404)
        .json({ success: false, message: "Category not found" });
    }

    const subcategories = await Subcategory.find({ categoryKey: key });

    res.json({
      success: true,
      category,
      subcategories,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};
