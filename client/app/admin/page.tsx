"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import api from "@/lib/api";

export default function AdminPage() {
  const router = useRouter();
  const [stats, setStats] = useState({ users: 0, courses: 0, contacts: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const role = localStorage.getItem("role");
    const token = localStorage.getItem("token");
    if (!token || role !== "admin") {
      router.push("/auth/login");
      return;
    }

    // fetch users, courses, contacts counts
    const fetchStats = async () => {
      try {
        const users = await api.get("/api/users");
        const courses = await api.get("/api/courses");
        const contacts = await api.get("/api/contact");
        setStats({ users: users.data.length, courses: courses.data.length, contacts: contacts.data.length });
      } catch (err) {
        console.error(err);
        // If unauthorized, redirect
        router.push("/auth/login");
      } finally {
        setLoading(false);
      }
    };
    fetchStats();
  }, [router]);

  if (loading) return <div className="p-8 text-center">Loading...</div>;

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-sm text-gray-500">Users</h3>
          <p className="text-3xl font-semibold">{stats.users}</p>
        </div>
        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-sm text-gray-500">Courses</h3>
          <p className="text-3xl font-semibold">{stats.courses}</p>
        </div>
        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-sm text-gray-500">Contacts</h3>
          <p className="text-3xl font-semibold">{stats.contacts}</p>
        </div>
      </div>

      {/* quick links */}
      <div className="mt-6 space-x-3">
        <button onClick={() => router.push("/admin/users")} className="px-4 py-2 bg-indigo-600 text-white rounded">Manage Users</button>
        <button onClick={() => router.push("/admin/courses")} className="px-4 py-2 bg-orange-500 text-white rounded">Manage Courses</button>
        <button onClick={() => router.push("/admin/contacts")} className="px-4 py-2 bg-gray-600 text-white rounded">View Contacts</button>
      </div>
    </div>
  );
}
