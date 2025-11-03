import express from "express";
import User from "../models/User.js";
import Course from "../models/Course.js";
import { verifyToken, isAdmin } from "../middleware/auth.js";
const router = express.Router();

// admin get all users
router.get("/users", verifyToken, isAdmin, async (req, res) => {
  const users = await User.find().select("-password");
  res.json({ success:true, users });
});

// delete user
router.delete("/users/:id", verifyToken, isAdmin, async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ success:true, message: "User deleted" });
});

// courses CRUD (example)
router.get("/courses", verifyToken, isAdmin, async (req, res) => {
  const courses = await Course.find();
  res.json({ success:true, courses });
});
router.post("/courses", verifyToken, isAdmin, async (req, res) => {
  const { title, description, price } = req.body;
  const c = await Course.create({ title, description, price, createdBy: req.user.id });
  res.json({ success:true, course: c });
});
router.delete("/courses/:id", verifyToken, isAdmin, async (req, res) => {
  await Course.findByIdAndDelete(req.params.id);
  res.json({ success:true });
});

export default router;
