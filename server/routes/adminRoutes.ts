import express from "express";
import Course from "../models/Course";
import Category from "../models/Category";
import Subcategory from "../models/Subcategory";
import { protect } from "../middleware/protect";
import { adminOnly } from "../middleware/adminOnly";
import Order from "../models/Order"; // Make sure Order model exists
import User from "../models/User";

const router = express.Router();

// GET all courses
router.get("/courses", protect, adminOnly, async (req, res) => {
  try {
    const courses = await Course.find().sort({ createdAt: -1 }).lean();
    res.json({ courses });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// CREATE course
router.post("/courses", protect, adminOnly, async (req, res) => {
  try {
    const course = await Course.create(req.body);
    res.json({ course });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// UPDATE course
router.put("/courses/:id", protect, adminOnly, async (req, res) => {
  try {
    const course = await Course.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json({ course });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// DELETE course
router.delete("/courses/:id", protect, adminOnly, async (req, res) => {
  try {
    await Course.findByIdAndDelete(req.params.id);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// GET categories & subcategories
router.get("/categories", protect, adminOnly, async (req, res) => {
  const categories = await Category.find().lean();
  res.json({ categories });
});

router.get("/subcategories", protect, adminOnly, async (req, res) => {
  const subcategories = await Subcategory.find().lean();
  res.json({ subcategories });
});

// GET all orders
router.get("/orders", protect, adminOnly, async (req, res) => {
  try {
    const orders = await Order.find()
      .populate("user", "name email")
      .populate("course", "title price")
      .sort({ createdAt: -1 })
      .lean();
    res.json({ orders });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

router.get("/analytics", protect, adminOnly, async (req, res) => {
  try {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const revenue: number[] = Array(12).fill(0);
    const users: number[] = Array(12).fill(0);

    const allOrders = await Order.find();
    allOrders.forEach(order => {
      const month = order.orderDate.getMonth();
      revenue[month] += order.amountPaid;
    });

    const allUsers = await User.find();
    allUsers.forEach(user => {
      const month = user.createdAt.getMonth();
      users[month] += 1;
    });

    res.json({ months, revenue, users });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
