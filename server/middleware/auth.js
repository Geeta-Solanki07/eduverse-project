import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const verifyToken = async (req, res, next) => {
  const header = req.headers.authorization || req.cookies.token;
  const token = header && header.startsWith("Bearer ") ? header.split(" ")[1] : header;

  if (!token) return res.status(401).json({ success: false, message: "No token" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id).select("-password");
    if (!req.user) return res.status(401).json({ success: false, message: "User not found" });
    next();
  } catch (err) {
    return res.status(401).json({ success: false, message: "Invalid token" });
  }
};

export const requireAdmin = (req, res, next) => {
  if (!req.user) return res.status(401).json({ success: false, message: "Unauthorized" });
  if (req.user.role !== "admin") return res.status(403).json({ success: false, message: "Admin only" });
  next();
};
