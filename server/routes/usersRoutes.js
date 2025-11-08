import express from "express";
import User from "../models/User.js";
import { protect, adminOnly } from "../middleware/authMiddleware.js";
const router = express.Router();

// admin: get all users
router.get("/", protect, adminOnly, async (req, res) => {
  try {
    const users = await User.find().select("-password").sort({ createdAt: -1 });
    res.json({ success: true, users });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// admin: change role
router.put("/:id/role", protect, adminOnly, async (req, res) => {
  try {
    const { role } = req.body;
    if (!["admin", "teacher", "student"].includes(role)) return res.status(400).json({ success: false, message: "Invalid role" });
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ success: false, message: "User not found" });
    user.role = role;
    await user.save();
    res.json({ success: true, user: { id: user._id, name: user.name, role: user.role } });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

export default router;
