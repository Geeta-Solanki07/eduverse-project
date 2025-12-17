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
  const ready = useAdminProtect(); // 🔥 VERY IMPORTANT

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
    if (!ready) return;

    fetchStats();
    const interval = setInterval(fetchStats, 10000);
    return () => clearInterval(interval);
  }, [ready]);

  if (!ready) return null; // ❌ blank until auth confirmed

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
    <div className="p-6 text-black">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {[
          ["Total Users", stats.totalUsers],
          ["Total Courses", stats.totalCourses],
          ["Revenue", `$${stats.revenue}`],
          ["Total Orders", stats.totalOrders],
          ["Admins", stats.admins],
        ].map(([title, value]) => (
          <div key={title} className="bg-white p-6 rounded shadow text-center">
            <h2 className="text-lg">{title}</h2>
            <p className="text-2xl font-bold">{value}</p>
          </div>
        ))}
      </div>

      <div className="bg-white p-6 rounded shadow">
        <Bar data={chartData} />
      </div>
    </div>
  );
}
