import express, { Request, Response } from "express";
import User from "../models/User";
import Course from "../models/Course";
import Order from "../models/Order";

const router = express.Router();

// Interface for Chart Data
interface ChartItem {
  month: number;
  users: number;
  revenue: number;
}

// ===========================
//  GET: /api/admin/stats
// ===========================
router.get("/stats", async (req: Request, res: Response) => {
  try {
    const year =
      req.query.year ? parseInt(req.query.year as string) : new Date().getFullYear();

    const totalUsers = await User.countDocuments();
    const totalCourses = await Course.countDocuments();
    const totalOrders = await Order.countDocuments();

    let revenue = 0;
    let pendingTickets = 0;

    const orders = await Order.find({});
    orders.forEach((order: any) => {
      revenue += order.amount || 0;
      if (!order.completed) pendingTickets += 1;
    });

    // Users per month
    const monthlyUsers = await User.aggregate([
      {
        $match: {
          createdAt: {
            $gte: new Date(`${year}-01-01`),
            $lte: new Date(`${year}-12-31`),
          },
        },
      },
      { $group: { _id: { $month: "$createdAt" }, count: { $sum: 1 } } },
      { $sort: { "_id": 1 } },
    ]);

    // Revenue per month
    const monthlyRevenueAgg = await Order.aggregate([
      {
        $match: {
          createdAt: {
            $gte: new Date(`${year}-01-01`),
            $lte: new Date(`${year}-12-31`),
          },
        },
      },
      { $group: { _id: { $month: "$createdAt" }, revenue: { $sum: "$amount" } } },
      { $sort: { "_id": 1 } },
    ]);

    // Final Chart Data
    const chartData: ChartItem[] = [];

    for (let month = 1; month <= 12; month++) {
      chartData.push({
        month,
        users: monthlyUsers.find((u: any) => u._id === month)?.count || 0,
        revenue: monthlyRevenueAgg.find((r: any) => r._id === month)?.revenue || 0,
      });
    }

    return res.json({
      success: true,
      stats: {
        totalUsers,
        totalCourses,
        totalOrders,
        revenue,
        pendingTickets,
      },
      chartData,
    });
  } catch (err: any) {
    console.error("Stats Error:", err);
    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
});

export default router;
