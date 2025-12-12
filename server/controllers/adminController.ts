import { Request, Response } from "express";
import User from "../models/User";
import ITCourse from "../models/ITCourse";
import Order from "../models/Order";
import AcademicClass from "../models/AcademicClass";
import Subject from "../models/Subject";
import Chapter from "../models/Chapter";

// USERS
export const listUsers = async (req: Request, res: Response) => {
  const users = await User.find().select("-password").sort({ createdAt: -1 });
  res.json(users);
};

export const changeUserRole = async (req: Request, res: Response) => {
  const user = await User.findById(req.params.id);
  if (!user) return res.status(404).json({ message: "User not found" });

  user.role = req.body.role || user.role;
  await user.save();
  res.json(user);
};

export const deleteUser = async (req: Request, res: Response) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ success: true });
};

// CLASSES
export const listClasses = async (req: Request, res: Response) => {
  const classes = await AcademicClass.find().sort({ createdAt: -1 });
  res.json(classes);
};

export const createClass = async (req: Request, res: Response) => {
  const cls = await AcademicClass.create(req.body);
  res.json(cls);
};

export const deleteClass = async (req: Request, res: Response) => {
  await AcademicClass.findByIdAndDelete(req.params.id);

  // Cascade delete
  const subjects = await Subject.find({ classId: req.params.id });
  const subIds = subjects.map(s => s._id);
  await Chapter.deleteMany({ subjectId: { $in: subIds } });
  await Subject.deleteMany({ classId: req.params.id });

  res.json({ success: true });
};

// SUBJECTS
export const listSubjectsByClass = async (req: Request, res: Response) => {
  const classId = req.query.classId;
  const subjects = classId
    ? await Subject.find({ classId })
    : await Subject.find();
  res.json(subjects);
};

export const createSubject = async (req: Request, res: Response) => {
  const sub = await Subject.create(req.body); // classId required
  res.json(sub);
};

export const deleteSubject = async (req: Request, res: Response) => {
  await Subject.findByIdAndDelete(req.params.id);
  await Chapter.deleteMany({ subjectId: req.params.id });
  res.json({ success: true });
};

// CHAPTERS
export const listChaptersBySubject = async (req: Request, res: Response) => {
  const subjectId = req.query.subjectId;
  const chapters = subjectId
    ? await Chapter.find({ subjectId }).sort({ createdAt: 1 })
    : await Chapter.find().sort({ createdAt: 1 });
  res.json(chapters);
};

export const createChapter = async (req: Request, res: Response) => {
  try {
    const { title, subjectId } = req.body;

    if (!subjectId || subjectId.trim() === "") {
      return res.status(400).json({ message: "subjectId is required" });
    }

    const chapter = await Chapter.create({ title, subjectId });
    res.json({ message: "Chapter created", chapter });
  } catch (err: any) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};


export const deleteChapter = async (req: Request, res: Response) => {
  await Chapter.findByIdAndDelete(req.params.id);
  res.json({ success: true });
};

// IT COURSES
export const listITCourses = async (req: Request, res: Response) => {
  const courses = await ITCourse.find().sort({ createdAt: -1 });
  res.json(courses);
};

export const createITCourse = async (req: Request, res: Response) => {
  const course = await ITCourse.create(req.body);
  res.json(course);
};

export const deleteITCourse = async (req: Request, res: Response) => {
  await ITCourse.findByIdAndDelete(req.params.id);
  res.json({ success: true });
};

// SETTINGS
export const getSettings = async (req: Request, res: Response) => {
  res.json({ siteName: "Eduverse" });
};

export const updateSettings = async (req: Request, res: Response) => {
  res.json({ success: true });
};

// ADMIN STATS
export const getStats = async (req: Request, res: Response) => {
  try {
    const totalUsers = await User.countDocuments();
    const admins = await User.countDocuments({ role: "admin" });
    const normalUsers = totalUsers - admins;

    const totalCourses = await ITCourse.countDocuments();
    const totalOrders = await Order.countDocuments();

    let revenue = 0;
    const orders = await Order.find();
    orders.forEach((o: any) => {
      revenue += o.amount || 0;
    });

    res.json({
      stats: {
        totalUsers,
        admins,
        normalUsers,
        totalCourses,
        totalOrders,
        revenue,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server error" });
  }
};
