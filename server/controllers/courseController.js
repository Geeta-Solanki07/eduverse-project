import Course from "../models/Course.js";

// ➕ Add new course (Admin only)
export const addCourse = async (req, res) => {
  try {
    const newCourse = new Course(req.body);
    await newCourse.save();
    res.status(201).json({ message: "Course added successfully", course: newCourse });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// 📜 Get all courses (Public)
export const getCourses = async (req, res) => {
  try {
    const courses = await Course.find().sort({ createdAt: -1 });
    res.json(courses);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// 🔍 Get single course (Public)
export const getCourseById = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    res.json(course);
  } catch (err) {
    res.status(404).json({ message: "Course not found" });
  }
};

// 🗑️ Delete course (Admin only)
export const deleteCourse = async (req, res) => {
  try {
    await Course.findByIdAndDelete(req.params.id);
    res.json({ message: "Course deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ✏️ Update course (Admin only)
export const updateCourse = async (req, res) => {
  try {
    const updated = await Course.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json({ message: "Course updated successfully", course: updated });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
