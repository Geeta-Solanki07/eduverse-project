// server/controllers/userController.ts
import { Response } from "express";
import { AuthRequest } from "../middleware/auth";
import bcrypt from "bcryptjs";
import User from "../models/User";

export const getMe = async (req: AuthRequest, res: Response) => {
  if (!req.user) return res.status(401).json({ message: "Not authorized" });
  res.json({ user: req.user });
};

export const updateProfile = async (req: AuthRequest, res: Response) => {
  try {
    const { name, email } = req.body;
    if (!req.user) return res.status(401).json({ message: "Not authorized" });

    req.user.name = name || req.user.name;
    req.user.email = email || req.user.email;
    await req.user.save();

    res.json({ user: req.user, message: "Profile updated" });
  } catch (err: any) {
    res.status(500).json({ message: err.message || "Server error" });
  }
};

export const changePassword = async (req: AuthRequest, res: Response) => {
  try {
    const { currentPassword, newPassword } = req.body;
    if (!req.user) return res.status(401).json({ message: "Not authorized" });

    const match = await req.user.comparePassword(currentPassword);
    if (!match)
      return res.status(400).json({ message: "Current password incorrect" });

    const salt = await bcrypt.genSalt(10);
    req.user.password = await bcrypt.hash(newPassword, salt);
    await req.user.save();

    res.json({ message: "Password changed" });
  } catch (err: any) {
    res.status(500).json({ message: err.message || "Server error" });
  }
};
