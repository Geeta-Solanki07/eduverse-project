"use client";

import { useEffect, useState } from "react";
import axios from "axios";

export default function AdminDashboardPage() {
  const [stats, setStats] = useState({
    totalUsers: 0,
    students: 0,
    teachers: 0,
    admins: 0,
    totalCourses: 0,
    totalOrders: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const token = localStorage.getItem("token");

        const usersRes = await axios.get("http://localhost:5000/api/admin/stats", {
          headers: { Authorization: `Bearer ${token}` },
        });

        const coursesRes = await axios.get("http://localhost:5000/api/courses");
        const ordersRes = await axios.get("http://localhost:5000/api/orders");

        setStats({
          ...usersRes.data.stats,
          totalCourses: coursesRes.data.length,
          totalOrders: ordersRes.data.length,
        });

      } catch (error) {
        console.error(error);
      }
    };

    fetchStats();
  }, []);

  const cards = [
    { title: "Total Users", value: stats.totalUsers },
    { title: "Students", value: stats.students },
    { title: "Teachers", value: stats.teachers },
    { title: "Admins", value: stats.admins },
    { title: "Total Courses", value: stats.totalCourses },
    { title: "Total Orders", value: stats.totalOrders },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {cards.map((card) => (
        <div key={card.title} className="bg-white rounded-lg p-6 shadow">
          <h2 className="text-gray-500">{card.title}</h2>
          <p className="text-3xl font-bold mt-2">{card.value}</p>
        </div>
      ))}
    </div>
  );
}
