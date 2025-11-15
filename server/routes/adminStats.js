import express from "express";
import User from "../models/User.js";
import Course from "../models/Course.js";
import Enrollment from "../models/Enrollment.js";

const router = express.Router();

// GET /admin/stats
router.get("/stats", async (req, res) => {
  try {
    const totalUsers = await User.countDocuments();
    const totalCourses = await Course.countDocuments();
    const totalEnrollments = await Enrollment.countDocuments();

    // Suppose revenue = enrollments * 20$
    const revenue = totalEnrollments * 20;

    res.json({
      users: totalUsers,
      courses: totalCourses,
      revenue,
      enrollments: totalEnrollments,
    });
  } catch (err) {
    res.status(500).json({ error: "Server Error" });
  }
});

export default router;
