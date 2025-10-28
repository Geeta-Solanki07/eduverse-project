import User from "../models/User.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export const register = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    const exist = await User.findOne({ email });
    if (exist) return res.status(400).json({ message: "User already exists!" });

    const user = await User.create({ name, email, password, role });
    res.status(201).json({ message: "User Registered Successfully!" });
  } catch (err) {
    res.status(500).json({ message: "Server Error", error: err.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "User not found!" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid password!" });

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res
      .cookie("token", token, { httpOnly: true, secure: true, sameSite: "none" })
      .json({
        message: "Login Successful!",
        user: { name: user.name, role: user.role },
      });
  } catch (err) {
    res.status(500).json({ message: "Server Error", error: err.message });
  }
};
