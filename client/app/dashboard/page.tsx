"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import DashboardNavbar from "@/components/admin/DashboardNavbar";

export default function StudentDashboard() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");
    if (!token || role !== "user") {
      router.push("/auth/login");
    }
  }, [router]);

  return (
    <div className="min-h-screen bg-blue-50">
      <DashboardNavbar title="Student Dashboard" />
      <div className="flex flex-col items-center justify-center py-20">
        <h1 className="text-3xl font-semibold text-gray-800 mb-3">
          Welcome Student 🎓
        </h1>
        <p className="text-gray-600">
          You can browse courses, view progress, and continue learning!
        </p>
      </div>
    </div>
  );
}
