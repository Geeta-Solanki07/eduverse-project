import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const verifyToken = async (req, res, next) => {
  try {
    const auth = req.headers.authorization;
    if (!auth) return res.status(401).json({ success:false, message: "No token" });

    const token = auth.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // { id, role, iat, exp }
    // attach full user if needed
    req.userDoc = await User.findById(decoded.id).select("-password");
    next();
  } catch (err) {
    return res.status(401).json({ success:false, message: "Invalid token" });
  }
};

export const isAdmin = (req, res, next) => {
  if (req.user?.role !== "admin") return res.status(403).json({ success:false, message: "Admin only" });
  next();
};
