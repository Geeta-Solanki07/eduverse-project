"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { requireAuthCheck } from "@/lib/requireAuthCheck";
import Sidebar from "@/components/admin/Sidebar";
import Navbar from "@/components/admin/Navbar";
import StatCard from "@/components/admin/StatCard";
import ChartCard from "@/components/admin/ChartCard";

interface Stats {
  totalUsers: number;
  totalCourses: number;
  totalOrders: number;
  revenue: number;
  pendingTickets: number;
}

export default function DashboardPage() {
  const router = useRouter();
  const [ready, setReady] = useState(false);
  const [year, setYear] = useState<number>(new Date().getFullYear());
  const [stats, setStats] = useState<Stats>({
    totalUsers: 0,
    totalCourses: 0,
    totalOrders: 0,
    revenue: 0,
    pendingTickets: 0,
  });
  const [chartData, setChartData] = useState<{ month: number; users: number; revenue: number }[]>([]);

  const fetchStats = async (year: number) => {
    const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";
    try {
      const res = await fetch(`${BASE_URL}/api/admin/stats?year=${year}`, { credentials: "include" });
      const data = await res.json();
      if (data.success) {
        setStats(data.stats);
        setChartData(data.chartData);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setReady(true);
    }
  };

  useEffect(() => {
    const ok = requireAuthCheck(router, ["admin"]);
    if (!ok) return;
    fetchStats(year);
  }, [router, year]);

  if (!ready) return <div className="flex items-center justify-center h-screen text-gray-600">Loading...</div>;

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="p-6 space-y-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Dashboard - {year}</h2>
            <select
              value={year}
              onChange={(e) => setYear(parseInt(e.target.value))}
              className="border rounded px-3 py-1"
            >
              {[2023, 2024, 2025].map((y) => <option key={y} value={y}>{y}</option>)}
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard title="Total Users" value={stats.totalUsers} icon={undefined} color="blue" />
            <StatCard title="Active Courses" value={stats.totalCourses} icon={undefined} color="green" />
            <StatCard title="Total Orders" value={stats.totalOrders} icon={undefined} color="yellow" />
            <StatCard title="Revenue" value={`$${stats.revenue}`} icon={undefined} color="purple" />
            <StatCard title="Pending Tickets" value={stats.pendingTickets} icon={undefined} color="red" />
          </div>

          <ChartCard data={chartData} />
        </main>
      </div>
    </div>
  );
}
