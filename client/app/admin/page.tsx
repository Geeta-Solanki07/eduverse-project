"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import useAdminProtect from "@/app/hooks/useAdminProtect";

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
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        const coursesRes = await axios.get(
          "http://localhost:5000/api/courses"
        );

        const ordersRes = await axios.get(
          "http://localhost:5000/api/orders"
        );

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
    { title: "Total Users (All)", value: stats.totalUsers },
    { title: "Admins", value: stats.admins },
    { title: "Normal Users", value: stats.normalUsers },
    { title: "Total Courses", value: stats.totalCourses },
    { title: "Total Orders", value: stats.totalOrders },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">
        Admin Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card) => (
          <div
            key={card.title}
            className="bg-white rounded-xl p-6 shadow hover:shadow-xl transition"
          >
            <h2 className="text-gray-500 text-sm">
              {card.title}
            </h2>
            <p className="text-3xl font-bold mt-2">
              {card.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
