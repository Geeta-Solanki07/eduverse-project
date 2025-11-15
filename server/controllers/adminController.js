import User from "../models/User.js";

export const getUsers = async (req, res) => {
  const users = await User.find().select("-password").sort({ createdAt: -1 });
  res.json({ success:true, users });
};
export const addUser = async (req, res) => {
  const u = await User.create(req.body);
  res.json({ success:true, user: u });
};
export const updateUser = async (req, res) => {
  const u = await User.findByIdAndUpdate(req.params.id, req.body, { new:true }).select("-password");
  res.json({ success:true, user:u });
};
export const deleteUser = async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ success:true });
};
export const stats = async (req, res) => {
  const users = await User.countDocuments();
  res.json({ success:true, users, courses:0, revenue:0, enrollments:0 });
};
