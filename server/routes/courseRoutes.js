import express from "express";
import Course from "../models/Course.js";
import { verifyAdmin } from "../middleware/authMiddleware.js";

const router = express.Router();

// GET all
router.get("/", async (req, res) => {
  try {
    const courses = await Course.find().sort({ createdAt: -1 });
    res.json(courses);
  } catch (err) { res.status(500).json({ message: err.message }); }
});

// GET by id
router.get("/:id", async (req, res) => {
  try {
    const c = await Course.findById(req.params.id);
    if (!c) return res.status(404).json({ message: "Not found" });
    res.json(c);
  } catch (err) { res.status(500).json({ message: err.message }); }
});

// POST new (admin)
router.post("/", verifyAdmin, async (req, res) => {
  try {
    const newCourse = new Course(req.body);
    await newCourse.save();
    res.status(201).json(newCourse);
  } catch (err) { res.status(400).json({ message: err.message }); }
});

// PUT update
router.put("/:id", verifyAdmin, async (req, res) => {
  try {
    const updated = await Course.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!updated) return res.status(404).json({ message: "Not found" });
    res.json(updated);
  } catch (err) { res.status(400).json({ message: err.message }); }
});

// DELETE
router.delete("/:id", verifyAdmin, async (req, res) => {
  try {
    const deleted = await Course.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Not found" });
    res.json({ message: "Deleted" });
  } catch (err) { res.status(500).json({ message: err.message }); }
});

export default router;
