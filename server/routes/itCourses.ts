import express from "express";
import ITCourse from "../models/ITCourse";

const router = express.Router();

// Public IT courses list
router.get("/", async (req, res) => {
  const courses = await ITCourse.find().sort({ createdAt: -1 });
  res.json({ courses }); // return as object for consistency
});

// GET single course by slug
router.get("/:slug", async (req, res) => {
  const course = await ITCourse.findOne({ slug: req.params.slug }); // 🔑 use slug
  if (!course) return res.status(404).json({ message: "Course not found" });
  res.json({ course });
});

export default router;
