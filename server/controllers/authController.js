import User from "../models/User.js";
import jwt from "jsonwebtoken";

const genToken = (user) => {
  return jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
};

// REGISTER
export const registerUser = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    if (!name || !email || !password)
      return res.status(400).json({ success: false, message: "Missing fields" });

    // Block admin registration
    if (role === "admin")
      return res.status(403).json({ success: false, message: "Admin creation not allowed" });

    const exists = await User.findOne({ email });
    if (exists)
      return res.status(400).json({ success: false, message: "Email already registered" });

    await User.create({
      name,
      email,
      password,
      role,
      avatar: "",
      phone: "",
    });

    return res
      .status(201)
      .json({ success: true, message: "Account created successfully" });
  } catch (e) {
    return res.status(500).json({ success: false, message: e.message });
  }
};

// LOGIN
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user)
      return res.status(400).json({ success: false, message: "Invalid email or password" });

    const ok = await user.matchPassword(password);
    if (!ok)
      return res.status(400).json({ success: false, message: "Invalid email or password" });

    const token = genToken(user);

    // JWT COOKIE FIXED
    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return res.json({
      success: true,
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
};
