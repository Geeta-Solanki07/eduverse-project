import express from "express";
import User from "../models/User.js";
import Course from "../models/Course.js";
import { verifyAdmin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/stats", verifyAdmin, async (req, res) => {
  try {
    const users = await User.countDocuments();
    const courses = await Course.countDocuments();
    const revenue = courses * 2500; // Example calculation
    res.json({ users, courses, revenue });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

export default router;
