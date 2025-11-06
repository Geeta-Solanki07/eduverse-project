import express from "express";
import { verifyAdmin } from "../middlewares/authMiddleware.js";
import Course from "../models/Course.js";

const router = express.Router();

// ✅ Only Admin can add courses
router.post("/add-course", verifyAdmin, async (req, res) => {
  try {
    const newCourse = new Course(req.body);
    await newCourse.save();
    res.json({ message: "Course added successfully", course: newCourse });
  } catch (error) {
    res.status(500).json({ message: "Error adding course" });
  }
});

// ✅ All courses (public)
router.get("/courses", async (req, res) => {
  const courses = await Course.find();
  res.json(courses);
});

router.delete("/delete/:id", verifyAdmin, async (req, res) => {
  await Course.findByIdAndDelete(req.params.id);
  res.json({ message: "Course deleted" });
});

export default router;
