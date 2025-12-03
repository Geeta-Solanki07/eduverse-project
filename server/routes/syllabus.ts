import express from "express";
import Syllabus from "../models/Syllabus";
import { protect, adminOnly } from "../middleware/auth";

const router = express.Router();

/* CREATE or UPDATE syllabus */
router.post("/:courseId", protect, adminOnly, async (req, res) => {
  try {
    const { courseId } = req.params;

    const syllabus = await Syllabus.findOneAndUpdate(
      { courseId },
      { $set: req.body },
      { upsert: true, new: true }
    );

    res.json({ success: true, syllabus });
  } catch (err) {
    res.status(500).json({ message: "Error creating syllabus" });
  }
});

/* GET syllabus */
router.get("/:courseId", async (req, res) => {
  try {
    const syllabus = await Syllabus.findOne({ courseId: req.params.courseId });
    res.json(syllabus);
  } catch (err) {
    res.status(404).json({ message: "Syllabus not found" });
  }
});

export default router;
