import express from "express";
import User from "../models/User.js";
import { protect, admin } from "../middleware/authMiddleware.js";
const router = express.Router();

// Get all users (admin only)
router.get("/users", protect, admin, async (req, res) => {
  try {
    const users = await User.find().select("-password");
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// Delete user by admin
router.delete("/users/:id", protect, admin, async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });
    await user.remove();
    res.json({ message: "User removed successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
