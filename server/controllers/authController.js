import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) return res.status(400).json({ success: false, message: "Missing fields" });

    const exists = await User.findOne({ email });
    if (exists) return res.status(409).json({ success: false, message: "User already exists" });

    const hash = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, password: hash });

    return res.status(201).json({ success: true, message: "Registered", user: { id: user._id, name: user.name, email: user.email, role: user.role } });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({ success: false, message: "Missing fields" });

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ success: false, message: "Invalid credentials" });

    const ok = await bcrypt.compare(password, user.password);
    if (!ok) return res.status(400).json({ success: false, message: "Invalid credentials" });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" });

    // optional: set cookie
    res.cookie("token", token, { httpOnly: true, secure: false, sameSite: "lax", maxAge: 7 * 24 * 3600 * 1000 });

    return res.json({ success: true, token, user: { id: user._id, name: user.name, email: user.email, role: user.role } });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

export const me = async (req, res) => {
  if (!req.user) return res.status(401).json({ success: false, message: "Unauthorized" });
  res.json({ success: true, user: req.user });
};
