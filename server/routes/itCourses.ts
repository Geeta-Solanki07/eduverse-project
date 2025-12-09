// server/routes/itCourseRoutes.ts
import express from "express";
import ITCourse from "../models/ITCourse";

const router = express.Router();

// Public IT courses list
router.get("/", async (req, res) => {
  const courses = await ITCourse.find().sort({ createdAt: -1 });
  res.json(courses);
});

router.get("/:id", async (req, res) => {
  const course = await ITCourse.findById(req.params.id);
  if (!course) return res.status(404).json({ message: "Course not found" });
  res.json(course);
});

export default router;
