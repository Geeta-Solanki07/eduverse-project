"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { requireAuthCheck } from "@/lib/auth";

import Sidebar from "@/components/admin/Sidebar";
import Navbar from "@/components/admin/Navbar";
import StatCard from "@/components/admin/StatCard";
import ChartCard from "@/components/admin/ChartCard";

export default function DashboardPage() {
  const router = useRouter();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // Allow ONLY admins
    const ok = requireAuthCheck(router, ["admin"]);
    if (!ok) return;

    setReady(true);
  }, []);

  if (!ready) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-lg text-gray-600">Checking access...</p>
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="p-6 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard title="Total Users" value="2,450" icon={undefined} color={""} />
            <StatCard title="Active Courses" value="35" icon={undefined} color={""} />
            <StatCard title="Revenue" value="$12,300" icon={undefined} color={""} />
            <StatCard title="Pending Tickets" value="7" icon={undefined} color={""} />
          </div>

          <ChartCard />
        </main>
      </div>
    </div>
  );
}
