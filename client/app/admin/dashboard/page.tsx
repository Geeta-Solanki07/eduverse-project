"use client";
import { useEffect, useState } from "react";
import api from "@/lib/api";

export default function AdminDashboard() {
  const [stats, setStats] = useState<any>(null);

  useEffect(() => {
    api.get("/admin/stats")
      .then(res => setStats(res.data))
      .catch(err => console.error(err));
  }, []);

  if (!stats) return <p>Loading...</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-white shadow p-6 rounded-lg">
        <h2 className="text-gray-500">Total Users</h2>
        <p className="text-4xl font-bold">{stats.users}</p>
      </div>
      <div className="bg-white shadow p-6 rounded-lg">
        <h2 className="text-gray-500">Total Courses</h2>
        <p className="text-4xl font-bold">{stats.courses}</p>
      </div>
      <div className="bg-white shadow p-6 rounded-lg">
        <h2 className="text-gray-500">Revenue</h2>
        <p className="text-4xl font-bold">₹ {stats.revenue}</p>
      </div>
    </div>
  );
}
