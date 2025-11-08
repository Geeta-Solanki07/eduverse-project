import express from "express";
import Course from "../models/Course.js";
import jwt from "jsonwebtoken";

const router = express.Router();

// Middleware: Verify Admin
const verifyAdmin = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ message: "No token" });

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(403).json({ message: "Invalid token" });
    if (decoded.role !== "admin") return res.status(403).json({ message: "Access denied" });
    req.user = decoded;
    next();
  });
};

// CREATE
router.post("/", verifyAdmin, async (req, res) => {
  try {
    const newCourse = new Course(req.body);
    await newCourse.save();
    res.status(201).json(newCourse);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// READ
router.get("/", async (req, res) => {
  const courses = await Course.find();
  res.json(courses);
});

// UPDATE
router.put("/:id", verifyAdmin, async (req, res) => {
  try {
    const course = await Course.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(course);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// DELETE
router.delete("/:id", verifyAdmin, async (req, res) => {
  try {
    await Course.findByIdAndDelete(req.params.id);
    res.json({ message: "Course deleted" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default router;
