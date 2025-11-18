import User from "../models/User.js";

// 📌 GET ALL USERS
export const getUsers = async (req, res) => {
  try {
    const users = await User.find().sort({ createdAt: -1 });
    res.json({ success: true, users });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// 📌 ADD NEW USER
export const addUser = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    const Exists = await User.findOne({ email });
    if (Exists) return res.status(400).json({ message: "Email already exists" });

    const user = await User.create({ name, email, password, role });

    res.json({ success: true, user });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// 📌 UPDATE USER
export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;

    const updated = await User.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updated) return res.status(404).json({ message: "User not found" });

    res.json({ success: true, user: updated });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// 📌 DELETE USER
export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    const deleted = await User.findByIdAndDelete(id);
    if (!deleted) return res.status(404).json({ message: "User not found" });

    res.json({ success: true, message: "User deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// 📌 STATS FOR ADMIN DASHBOARD
export const stats = async (req, res) => {
  try {
    const totalUsers = await User.countDocuments();
    const adminUsers = await User.countDocuments({ role: "admin" });
    const normalUsers = await User.countDocuments({ role: "user" });

    res.json({
      success: true,
      stats: {
        totalUsers,
        adminUsers,
        normalUsers,
      },
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
