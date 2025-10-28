"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import AdminNavbar from "@/components/admin/AdminNavbar";
import AdminSidebar from "@/components/admin/AdminSidebar";
import DashboardCards from "@/components/admin/DashboardCards";

export default function AdminDashboard() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");

    if (!token || role !== "admin") {
      router.push("/auth/login");
    }
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-950">
      <AdminSidebar />
      <div className="flex-1 flex flex-col">
        <AdminNavbar />
        <main className="p-6">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
            Welcome to Admin Dashboard 👋
          </h2>
          <DashboardCards />
        </main>
      </div>
    </div>
  );
}
