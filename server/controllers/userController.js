import User from "../models/User.js";

export const listUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password").sort({ createdAt: -1 });
    res.json({ success: true, data: users });
  } catch (err) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};

export const makeAdmin = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, { role: "admin" }, { new: true }).select("-password");
    res.json({ success: true, data: user });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};
