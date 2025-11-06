import User from "../models/User.js";
import Course from "../models/Course.js";

export const getUsers = async (req, res) => {
  const users = await User.find().select("-password");
  res.json(users);
};

export const deleteUser = async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
};

// Courses
export const addCourse = async (req, res) => {
  const course = await Course.create({ ...req.body, createdBy: req.user._id });
  res.status(201).json(course);
};
export const getCourses = async (req, res) => {
  const courses = await Course.find();
  res.json(courses);
};
export const updateCourse = async (req, res) => {
  const c = await Course.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(c);
};
export const deleteCourse = async (req, res) => {
  await Course.findByIdAndDelete(req.params.id);
  res.json({ message: "Course deleted" });
};
