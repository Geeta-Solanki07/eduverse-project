import express from "express";
import { getSubcategories, getSubWithCourses } from "../controllers/subcategoryController";
const router = express.Router();
router.get("/", getSubcategories); // ?categoryKey=it
router.get("/:key", getSubWithCourses);
export default router;
