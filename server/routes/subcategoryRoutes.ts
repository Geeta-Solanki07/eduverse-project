// server/routes/subcategoryRoutes.ts
import express, { Request, Response, NextFunction } from "express";
import {
  getSubcategories,
  getSubWithCourses,
} from "../controllers/subcategoryController";

const router = express.Router();

// GET all subcategories
// Example: /api/subcategories?categoryKey=it
router.get("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    await getSubcategories(req, res);
  } catch (error) {
    next(error);
  }
});

// GET subcategory with courses by key
// Example: /api/subcategories/web-development
router.get("/:key", async (req: Request, res: Response, next: NextFunction) => {
  try {
    await getSubWithCourses(req, res);
  } catch (error) {
    next(error);
  }
});

export default router;
