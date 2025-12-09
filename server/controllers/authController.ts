import { Request, Response } from "express";
import User from "../models/User";
import jwt from "jsonwebtoken";

const signToken = (id: string) => jwt.sign({ id }, process.env.JWT_SECRET || "secret", { expiresIn: "7d" });

export const register = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;
    const exists = await User.findOne({ email });
    if (exists) return res.status(400).json({ message: "Email already registered" });
    const u = await User.create({ name, email, password, role: "user" });
    return res.json({ success: true });
  } catch (err) {
    return res.status(500).json({ message: "Server error" });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const u: any = await User.findOne({ email });
    if (!u) return res.status(400).json({ message: "Invalid credentials" });
    const match = await u.comparePassword(password);
    if (!match) return res.status(400).json({ message: "Invalid credentials" });
    const token = signToken(u._id.toString());
    res.cookie("token", token, { httpOnly: true, sameSite: "lax", secure: false, maxAge: 7 * 24 * 60 * 60 * 1000 });
    return res.json({ token, user: { id: u._id, name: u.name, email: u.email, role: u.role } });
  } catch (err) {
    return res.status(500).json({ message: "Server error" });
  }
};

export const logout = (req: Request, res: Response) => {
  res.clearCookie("token");
  return res.json({ success: true });
};
