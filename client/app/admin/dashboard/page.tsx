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
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const usersRes = await api.get("/admin/stats");
        const coursesRes = await api.get("/it-courses");

        setStats({
          totalUsers: usersRes.data.stats.totalUsers,
          admins: usersRes.data.stats.admins,
          normalUsers:
            usersRes.data.stats.totalUsers - usersRes.data.stats.admins,
          totalCourses: coursesRes.data.length,
        });
      } catch (err) {
        console.error("Dashboard error:", err);
      }
    };

    fetchStats();
  }, []);

  const chartData = {
    labels: ["Users", "Admins", "Normal Users", "Courses"],
    datasets: [
      {
        data: [
          stats.totalUsers,
          stats.admins,
          stats.normalUsers,
          stats.totalCourses,
        ],
        backgroundColor: [
          "rgba(59,130,246,0.7)",
          "rgba(16,185,129,0.7)",
          "rgba(234,179,8,0.7)",
          "rgba(139,92,246,0.7)",
        ],
      },
    ],
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      <Bar data={chartData} />
    </div>
  );
}
