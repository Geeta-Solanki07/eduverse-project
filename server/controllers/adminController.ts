import { Request, Response } from "express";
import User from "../models/User";

export const getUserStats = async (req: Request, res: Response) => {
  try {
    const totalUsers = await User.countDocuments();
    const students = await User.countDocuments({ role: "student" });
    const teachers = await User.countDocuments({ role: "teacher" });
    const admins = await User.countDocuments({ role: "admin" });

    return res.json({
      success: true,
      stats: {
        totalUsers,
        students,
        teachers,
        admins,
      },
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Server error" });
  }
};
