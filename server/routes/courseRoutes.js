import express from "express";
import { Course } from "../models/Course.js";

const router = express.Router();

// Get all IT Courses
router.get("/it", async (req, res) => {
  try {
    const courses = await Course.find({ level: "IT" });
    res.json(courses);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all Academic Courses
router.get("/academics", async (req, res) => {
  try {
    const courses = await Course.find({ level: "Academics" });
    res.json(courses);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get Single Course by Slug
router.get("/:slug", async (req, res) => {
  try {
    const course = await Course.findOne({ slug: req.params.slug });
    if (!course) return res.status(404).json({ message: "Course not found" });
    res.json(course);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Add new course (Admin)
router.post("/add", async (req, res) => {
  try {
    const newCourse = new Course(req.body);
    await newCourse.save();
    res.status(201).json({ message: "✅ Course added successfully", newCourse });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
