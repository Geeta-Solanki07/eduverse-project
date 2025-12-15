import { Request, Response } from "express";
import User from "../models/User";
import ITCourse from "../models/ITCourse";
import Order from "../models/Order";
import AcademicClass from "../models/AcademicClass";
import Subject from "../models/Subject";
import Chapter from "../models/Chapter";

// USERS
export const listUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.find().select("-password").sort({ createdAt: -1 });
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

export const changeUserRole = async (req: Request, res: Response) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });

    user.role = req.body.role || user.role;
    await user.save();
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

// CLASSES
export const listClasses = async (req: Request, res: Response) => {
  try {
    const classes = await AcademicClass.find().sort({ createdAt: -1 });
    res.json(classes);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

export const createClass = async (req: Request, res: Response) => {
  try {
    const cls = await AcademicClass.create(req.body);
    res.json(cls);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

export const deleteClass = async (req: Request, res: Response) => {
  try {
    await AcademicClass.findByIdAndDelete(req.params.id);

    // Cascade delete subjects & chapters
    const subjects = await Subject.find({ classId: req.params.id });
    const subIds = subjects.map(s => s._id);
    await Chapter.deleteMany({ subjectId: { $in: subIds } });
    await Subject.deleteMany({ classId: req.params.id });

    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

// SUBJECTS
export const listSubjectsByClass = async (req: Request, res: Response) => {
  try {
    const classId = req.query.classId;
    const subjects = classId
      ? await Subject.find({ classId })
      : await Subject.find();
    res.json(subjects);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

export const createSubject = async (req: Request, res: Response) => {
  try {
    const sub = await Subject.create(req.body);
    res.json(sub);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

export const deleteSubject = async (req: Request, res: Response) => {
  try {
    await Subject.findByIdAndDelete(req.params.id);
    await Chapter.deleteMany({ subjectId: req.params.id });
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

// CHAPTERS
export const listChaptersBySubject = async (req: Request, res: Response) => {
  try {
    const subjectId = req.query.subjectId;
    const chapters = subjectId
      ? await Chapter.find({ subjectId }).sort({ createdAt: 1 })
      : await Chapter.find().sort({ createdAt: 1 });
    res.json(chapters);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

export const createChapter = async (req: Request, res: Response) => {
  try {
    const { title, subjectId } = req.body;
    if (!subjectId || !title) {
      return res.status(400).json({ message: "title & subjectId required" });
    }
    const chapter = await Chapter.create({ title, subjectId });
    res.json({ message: "Chapter created", chapter });
  } catch (err: any) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};

export const deleteChapter = async (req: Request, res: Response) => {
  try {
    await Chapter.findByIdAndDelete(req.params.id);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

// IT COURSES
export const listITCourses = async (req: Request, res: Response) => {
  try {
    const courses = await ITCourse.find().sort({ createdAt: -1 });
    res.json(courses);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

export const createITCourse = async (req: Request, res: Response) => {
  try {
    const course = await ITCourse.create(req.body);
    res.json(course);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

export const deleteITCourse = async (req: Request, res: Response) => {
  try {
    await ITCourse.findByIdAndDelete(req.params.id);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

// SETTINGS
export const getSettings = async (req: Request, res: Response) => {
  res.json({ siteName: "Eduverse" });
};

export const updateSettings = async (req: Request, res: Response) => {
  res.json({ success: true });
};

// DASHBOARD STATS
export const getDashboardStats = async (req: Request, res: Response) => {
  try {
    const totalUsers = await User.countDocuments();
    const admins = await User.countDocuments({ role: "admin" });
    const normalUsers = totalUsers - admins;

    const totalCourses = await ITCourse.countDocuments();
    const totalOrders = await Order.countDocuments();

    const orders = await Order.find();
    const revenue = orders.reduce((sum, o: any) => sum + (o.amount || 0), 0);

    res.json({
      stats: { totalUsers, admins, normalUsers, totalCourses, totalOrders, revenue },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};
