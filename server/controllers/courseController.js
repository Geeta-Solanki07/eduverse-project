const Course = require("../models/Course");

exports.getCourses = async (req, res) => {
  res.json(await Course.find());
};

exports.addCourse = async (req, res) => {
  res.json(await Course.create(req.body));
};

exports.updateCourse = async (req, res) => {
  res.json(await Course.findByIdAndUpdate(req.params.id, req.body, { new: true }));
};

exports.deleteCourse = async (req, res) => {
  await Course.findByIdAndDelete(req.params.id);
  res.json({ success: true });
};
