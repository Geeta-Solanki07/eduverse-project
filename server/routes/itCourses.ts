import { Router } from "express";
import ITCourse from "../models/ITCourse";

const router = Router();

// GET all IT courses
router.get("/", async (req, res) => {
  const courses = await ITCourse.find().sort({ createdAt: -1 });
  res.json({ courses });
});

// GET single IT course by slug
router.get("/:slug", async (req, res) => {
  const course = await ITCourse.findOne({ slug: req.params.slug });

  if (!course) {
    return res.status(404).json({ message: "Course not found" });
  }

  res.json({ course });
});

export default router;
