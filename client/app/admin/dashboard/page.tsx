"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import useAdminProtect from "@/app/hooks/useAdminProtect";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function AdminDashboardPage() {
  useAdminProtect(); // 🔐 Only admin allowed

  const [stats, setStats] = useState({
    totalUsers: 0,
    admins: 0,
    normalUsers: 0,
    totalCourses: 0,
    totalOrders: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const token = localStorage.getItem("token");

        const usersRes = await axios.get(
          "http://localhost:5000/api/admin/stats",
          { headers: { Authorization: `Bearer ${token}` } }
        );

        const coursesRes = await axios.get("http://localhost:5000/api/courses");
        const ordersRes = await axios.get("http://localhost:5000/api/orders");

        setStats({
          totalUsers: usersRes.data.stats.totalUsers,
          admins: usersRes.data.stats.admins,
          normalUsers:
            usersRes.data.stats.totalUsers - usersRes.data.stats.admins,
          totalCourses: coursesRes.data.length,
          totalOrders: ordersRes.data.length,
        });
      } catch (error) {
        console.error("Dashboard fetch error:", error);
      }
    };

    fetchStats();
  }, []);

  const cards = [
    { title: "Total Users", value: stats.totalUsers, color: "bg-blue-500" },
    { title: "Admins", value: stats.admins, color: "bg-green-500" },
    { title: "Normal Users", value: stats.normalUsers, color: "bg-yellow-500" },
    { title: "Total Courses", value: stats.totalCourses, color: "bg-purple-500" },
    { title: "Total Orders", value: stats.totalOrders, color: "bg-red-500" },
  ];

  // Chart data
  const chartData = {
    labels: ["Users", "Admins", "Normal Users", "Courses", "Orders"],
    datasets: [
      {
        label: "Stats Overview",
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
          "rgba(239,68,68,0.7)",
        ],
        borderRadius: 6,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { display: false },
      title: { display: true, text: "Platform Stats Overview", font: { size: 18 } },
    },
    scales: {
      y: { beginAtZero: true, ticks: { stepSize: 1 } },
    },
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Admin Dashboard</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {cards.map((card) => (
          <div
            key={card.title}
            className={`${card.color} text-white rounded-xl p-6 shadow hover:shadow-xl transition`}
          >
            <h2 className="text-gray-100 text-sm">{card.title}</h2>
            <p className="text-3xl font-bold mt-2">{card.value}</p>
          </div>
        ))}
      </div>

      {/* Chart */}
      <div className="bg-white p-6 rounded-xl shadow">
        <Bar data={chartData} options={chartOptions} />
      </div>
    </div>
  );
}
