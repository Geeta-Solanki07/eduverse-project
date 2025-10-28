import express from "express";
import { listCourses, getCourse, createCourse, updateCourse, deleteCourse } from "../controllers/courseController.js";
import { verifyToken, requireAdmin } from "../middleware/auth.js";
const router = express.Router();

router.get("/", listCourses);
router.get("/:id", getCourse);

// protected admin routes
router.post("/", verifyToken, requireAdmin, createCourse);
router.put("/:id", verifyToken, requireAdmin, updateCourse);
router.delete("/:id", verifyToken, requireAdmin, deleteCourse);

export default router;
