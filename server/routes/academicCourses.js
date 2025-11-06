import express from "express";
import AcademicCourse from "../models/AcademicCourse.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const courses = await AcademicCourse.find().sort({ createdAt: -1 });
    res.json(courses);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

router.post("/", async (req, res) => {
  try {
    const course = new AcademicCourse(req.body);
    await course.save();
    res.status(201).json(course);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await AcademicCourse.findByIdAndDelete(req.params.id);
    res.json({ success: true });
  } catch (err) {
    res.status(400).json({ error: "Failed to delete" });
  }
});

export default router;
