import Course from "../models/Course.js";


export const createCourse = async (req, res) => {
try {
const payload = { ...req.body, createdBy: req.user.id };
const course = await Course.create(payload);
res.status(201).json(course);
} catch (err) {
console.error(err);
res.status(500).json({ message: 'Server error' });
}
};


export const listCourses = async (req, res) => {
try {
const courses = await Course.find().sort({ createdAt: -1 });
res.json(courses);
} catch (err) {
console.error(err);
res.status(500).json({ message: 'Server error' });
}
};


export const getCourse = async (req, res) => {
try {
const course = await Course.findById(req.params.id);
if(!course) return res.status(404).json({ message: 'Not found' });
res.json(course);
} catch (err) {
console.error(err);
res.status(500).json({ message: 'Server error' });
}
};


export const updateCourse = async (req, res) => {
try {
const course = await Course.findByIdAndUpdate(req.params.id, req.body, { new: true });
res.json(course);
} catch (err) {
console.error(err);
res.status(500).json({ message: 'Server error' });
}
};


export const deleteCourse = async (req, res) => {
try {
await Course.findByIdAndDelete(req.params.id);
res.json({ message: 'Deleted' });
} catch (err) {
console.error(err);
res.status(500).json({ message: 'Server error' });
}
};