"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import DashboardNavbar from "@/components/admin/Navbar";
import DashboardCard from "@/components/admin/DashboardCard";
import CourseForm from "@/components/admin/CourseForm";

export default function AdminDashboard() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");

    if (!token || role !== "admin") {
      router.push("/auth/login");
    } else {
      setUser({ role, token });
    }
  }, [router]);

  if (!user) return null;

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardNavbar  />

      <main className="p-8">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6">
          Welcome Admin 👑
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <DashboardCard title="Total Students" value="340" />
          <DashboardCard title="Teachers" value="12" />
          <DashboardCard title="Courses" value="24" />
        </div>

        <CourseForm />
      </main>
    </div>
  );
}
