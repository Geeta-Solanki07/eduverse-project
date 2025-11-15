// routes/usersRoutes.js
import express from "express";
import { verifyToken, authorizeRole } from "../middleware/auth.js";
import User from "../models/User.js";

const router = express.Router();

// Admin-only: list all users
router.get("/", verifyToken, authorizeRole(["admin"]), async (req, res) => {
  const users = await User.find().select("-password");
  res.json(users);
});

// Admin-only: change role or delete user
router.patch("/:id/role", verifyToken, authorizeRole(["admin"]), async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.id, { role: req.body.role }, { new: true });
  res.json(user);
});

router.delete("/:id", verifyToken, authorizeRole(["admin"]), async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
});

export default router;
