import { Request, Response } from "express";
import Category from "../models/Category";
import Subcategory from "../models/Subcategory";

export const getCategories = async (req: Request, res: Response) => {
  const cats = await Category.find().lean();
  res.json(cats);
};

export const getCategoryWithSubs = async (req: Request, res: Response) => {
  const key = req.params.key;
  const category = await Category.findOne({ key }).lean();
  if (!category) return res.status(404).json({ message: "Not found" });
  const subs = await Subcategory.find({ categoryKey: key }).lean();
  res.json({ category, subcategories: subs });
};
