import Course from "../models/Course.js";

export const listCourses = async (req, res) => {
  try {
    const courses = await Course.find().sort({ createdAt: -1 });
    res.json({ success: true, data: courses });
  } catch (err) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};

export const getCourse = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    if (!course) return res.status(404).json({ success: false, message: "Not found" });
    res.json({ success: true, data: course });
  } catch (err) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};

export const createCourse = async (req, res) => {
  try {
    const course = await Course.create(req.body);
    res.status(201).json({ success: true, data: course });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

export const updateCourse = async (req, res) => {
  try {
    const course = await Course.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json({ success: true, data: course });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

export const deleteCourse = async (req, res) => {
  try {
    await Course.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: "Deleted" });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};
