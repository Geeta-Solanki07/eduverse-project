// server/controllers/authController.ts
import { Request, Response } from "express";
import User from "../models/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// Send token helper
const sendToken = (user: any, res: Response) => {
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET!, {
    expiresIn: "7d",
  });

  res.cookie("token", token, {
    httpOnly: true,
    sameSite: "lax",
    secure: false,
  });

  return res.json({
    success: true,
    token,
    user: { id: user._id, name: user.name, email: user.email, role: user.role },
  });
};

export const register = async (req: Request, res: Response) => {
  try {
    let { name, email, password } = req.body;

    // Force role to "user" regardless of input
    const role = "user";

    const exist = await User.findOne({ email });
    if (exist) return res.status(400).json({ message: "Email already registered" });

    const user = await User.create({ name, email, password, role });

    return res.json({ success: true, message: "Account created" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server error" });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    if (!email || !password)
      return res.status(400).json({ message: "All fields required" });

    const user = await User.findOne({ email });
    if (!user)
      return res.status(400).json({ message: "Invalid credentials" });

    const match = await user.comparePassword(password);

    if (!match)
      return res.status(400).json({ message: "Invalid credentials" });

    return sendToken(user, res);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server error" });
  }
};

export const logout = (req: Request, res: Response) => {
  res.clearCookie("token");
  return res.json({ success: true, message: "Logged out successfully" });
};
