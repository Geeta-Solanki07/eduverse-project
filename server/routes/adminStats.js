import express from "express";
import User from "../models/User.js";
import Course from "../models/Course.js";
import Order from "../models/Order.js";

const router = express.Router();

router.get("/stats", async (req, res) => {
  try {
    const year = parseInt(req.query.year) || new Date().getFullYear();

    const totalUsers = await User.countDocuments();
    const totalCourses = await Course.countDocuments();
    const totalOrders = await Order.countDocuments();

    let revenue = 0;
    let pendingTickets = 0;

    const orders = await Order.find({});
    orders.forEach(order => {
      revenue += order.amount || 0;
      if (!order.completed) pendingTickets += 1;
    });

    // Users per month for selected year
    const monthlyUsers = await User.aggregate([
      { $match: { createdAt: { $gte: new Date(`${year}-01-01`), $lte: new Date(`${year}-12-31`) } } },
      { $group: { _id: { $month: "$createdAt" }, count: { $sum: 1 } } },
      { $sort: { "_id": 1 } },
    ]);

    // Revenue per month for selected year
    const monthlyRevenueAgg = await Order.aggregate([
      { $match: { createdAt: { $gte: new Date(`${year}-01-01`), $lte: new Date(`${year}-12-31`) } } },
      { $group: { _id: { $month: "$createdAt" }, revenue: { $sum: "$amount" } } },
      { $sort: { "_id": 1 } },
    ]);

    const chartData = [];
    for (let i = 1; i <= 12; i++) {
      chartData.push({
        month: i,
        users: monthlyUsers.find(u => u._id === i)?.count || 0,
        revenue: monthlyRevenueAgg.find(r => r._id === i)?.revenue || 0,
      });
    }

    res.json({
      success: true,
      stats: { totalUsers, totalCourses, totalOrders, revenue, pendingTickets },
      chartData,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

export default router;
