import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import User from "../models/User";

export const adminOnly = async (req: any, res: Response, next: NextFunction) => {
  try {
    const token =
      req.cookies.token ||
      req.headers.authorization?.replace("Bearer ", "");

    if (!token) return res.status(401).json({ message: "Not authorized" });

    const decoded: any = jwt.verify(token, process.env.JWT_SECRET!);

    const user = await User.findById(decoded.id);

    if (!user || user.role !== "admin")
      return res.status(403).json({ message: "Admin only" });

    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid token" });
  }
};
