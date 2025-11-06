"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaUsers, FaBookOpen, FaMoneyBillWave } from "react-icons/fa";
import api from "@/lib/api";

interface DashboardStats {
  users: number;
  courses: number;
  revenue: number;
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<DashboardStats>({
    users: 0,
    courses: 0,
    revenue: 0,
  });
  const [loading, setLoading] = useState(true);

  // Fetch Dashboard Data from Backend
  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await api.get("/api/admin/stats", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setStats(res.data);
      } catch (error) {
        console.error("Error fetching stats:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen text-xl font-semibold text-gray-600">
        Loading Dashboard...
      </div>
    );
  }

  return (
    <div className="p-8 min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <h1 className="text-4xl font-bold text-center text-orange-600 mb-8">
        Admin Dashboard
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Users Card */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white shadow-lg p-6 rounded-2xl border border-gray-100 flex items-center justify-between"
        >
          <div>
            <h2 className="text-lg font-semibold text-gray-700">Total Users</h2>
            <p className="text-3xl font-bold text-orange-600 mt-2">
              {stats.users}
            </p>
          </div>
          <FaUsers className="text-5xl text-orange-400" />
        </motion.div>

        {/* Courses Card */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white shadow-lg p-6 rounded-2xl border border-gray-100 flex items-center justify-between"
        >
          <div>
            <h2 className="text-lg font-semibold text-gray-700">Courses</h2>
            <p className="text-3xl font-bold text-orange-600 mt-2">
              {stats.courses}
            </p>
          </div>
          <FaBookOpen className="text-5xl text-orange-400" />
        </motion.div>

        {/* Revenue Card */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white shadow-lg p-6 rounded-2xl border border-gray-100 flex items-center justify-between"
        >
          <div>
            <h2 className="text-lg font-semibold text-gray-700">Revenue</h2>
            <p className="text-3xl font-bold text-orange-600 mt-2">
              ₹{stats.revenue.toLocaleString()}
            </p>
          </div>
          <FaMoneyBillWave className="text-5xl text-orange-400" />
        </motion.div>
      </div>
    </div>
  );
}
