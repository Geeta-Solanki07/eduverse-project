import { Request, Response } from "express";
import User from "../models/User";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const createToken = (id: string) =>
  jwt.sign({ id }, process.env.JWT_SECRET!, { expiresIn: "7d" });

export const register = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;
  const existing = await User.findOne({ email });
  if (existing) return res.status(400).json({ message: "User exists" });
  const user = await User.create({ name, email, password });
  const token = createToken(user._id.toString());
  res.cookie("token", token, { httpOnly: true, sameSite: "lax", secure: false });
  res.json({ user: { name: user.name, email: user.email, role: user.role } });
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(400).json({ message: "Invalid credentials" });
  const match = await user.comparePassword(password);
  if (!match) return res.status(400).json({ message: "Invalid credentials" });
  const token = createToken(user._id.toString());
  res.cookie("token", token, { httpOnly: true, sameSite: "lax", secure: false });
  res.json({ user: { name: user.name, email: user.email, role: user.role } });
};

export const logout = (req: Request, res: Response) => {
  res.clearCookie("token");
  res.json({ message: "Logged out" });
};
