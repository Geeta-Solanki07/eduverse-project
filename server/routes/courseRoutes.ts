import { Router } from "express";
import { protect, adminOnly } from "../middleware/auth";
import {
  getCourses,
  getCourse,
  createCourse,
  updateCourse,
  deleteCourse
} from "../controllers/courseController";

const router = Router();

// Public routes
router.get("/", getCourses);
router.get("/:slug", getCourse);

// Admin protected routes
router.post("/", protect, adminOnly, createCourse);
router.put("/:slug", protect, adminOnly, updateCourse);
router.delete("/:slug", protect, adminOnly, deleteCourse);

export default router;
