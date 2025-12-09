// server/controllers/analyticsController.ts
import { Request, Response } from "express";
import User from "../models/User";
import ITCourse from "../models/ITCourse";

export const getAnalytics = async (req: Request, res: Response) => {
  // For now: static months, simple counts
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];

  // Just dummy logic: total users and courses used to build arrays
  const totalUsers = await User.countDocuments();
  const totalCourses = await ITCourse.countDocuments();

  const users = months.map((_, idx) => Math.max(1, totalUsers - idx));
  const revenue = months.map((_, idx) => (totalCourses * 999) + idx * 500);

  res.json({ months, users, revenue });
};
