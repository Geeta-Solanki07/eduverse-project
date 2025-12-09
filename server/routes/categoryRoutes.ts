// server/routes/categoryRoutes.ts
import express, { Request, Response, NextFunction } from "express";
import {
  getCategories,
  getCategoryWithSubs,
} from "../controllers/categoryController";

const router = express.Router();

// ✅ Get all categories
router.get("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    await getCategories(req, res);
  } catch (error) {
    next(error);
  }
});

// ✅ Get single category with subcategories
router.get("/:key", async (req: Request, res: Response, next: NextFunction) => {
  try {
    await getCategoryWithSubs(req, res);
  } catch (error) {
    next(error);
  }
});

export default router;
