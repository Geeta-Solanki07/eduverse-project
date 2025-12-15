"use client";

import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import api from "@/lib/api";
import useAdminProtect from "@/app/hooks/useAdminProtect";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function AdminDashboardPage() {
  useAdminProtect();

  const [stats, setStats] = useState({
    totalUsers: 0,
    admins: 0,
    normalUsers: 0,
    totalCourses: 0,
    totalOrders: 0,
    revenue: 0,
  });

  const fetchStats = async () => {
    try {
      const usersRes = await api.get("/admin/stats");
      const coursesRes = await api.get("/admin/it-courses");

      setStats({
        totalUsers: usersRes.data.stats.totalUsers,
        admins: usersRes.data.stats.admins,
        normalUsers: usersRes.data.stats.normalUsers,
        totalCourses: coursesRes.data.length,
        totalOrders: usersRes.data.stats.totalOrders,
        revenue: usersRes.data.stats.revenue,
      });
    } catch (err) {
      console.error("Dashboard error:", err);
    }
  };

  useEffect(() => {
    fetchStats();
    const interval = setInterval(fetchStats, 10000); // Auto-refresh
    return () => clearInterval(interval);
  }, []);

  const chartData = {
    labels: ["Users", "Admins", "Normal Users", "Courses", "Orders"],
    datasets: [
      {
        label: "Platform Stats",
        data: [
          stats.totalUsers,
          stats.admins,
          stats.normalUsers,
          stats.totalCourses,
          stats.totalOrders,
        ],
        backgroundColor: [
          "rgba(59,130,246,0.7)",
          "rgba(16,185,129,0.7)",
          "rgba(234,179,8,0.7)",
          "rgba(139,92,246,0.7)",
          "rgba(220,38,38,0.7)",
        ],
      },
    ],
  };

  return (
    <div className="p-6 text-black font-bold">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white p-6 rounded shadow text-center">
          <h2 className="text-lg font-medium">Total Users</h2>
          <p className="text-2xl font-bold">{stats.totalUsers}</p>
        </div>
        <div className="bg-white p-6 rounded shadow text-center">
          <h2 className="text-lg font-medium">Total Courses</h2>
          <p className="text-2xl font-bold">{stats.totalCourses}</p>
        </div>
        <div className="bg-white p-6 rounded shadow text-center">
          <h2 className="text-lg font-medium">Revenue</h2>
          <p className="text-2xl font-bold">${stats.revenue}</p>
        </div>
        <div className="bg-white p-6 rounded shadow text-center">
          <h2 className="text-lg font-medium">Total Orders</h2>
          <p className="text-2xl font-bold">{stats.totalOrders}</p>
        </div>
        <div className="bg-white p-6 rounded shadow text-center">
          <h2 className="text-lg font-medium">Admins</h2>
          <p className="text-2xl font-bold">{stats.admins}</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded shadow">
        <h2 className="text-xl font-semibold mb-4">Platform Stats Overview</h2>
        <Bar data={chartData} />
      </div>
    </div>
  );
}
