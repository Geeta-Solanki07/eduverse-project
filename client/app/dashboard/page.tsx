"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Menu, X, User, LogOut, BookOpen, LayoutGrid } from "lucide-react";
import api from "@/lib/api"; // axios instance

export default function UserDashboard() {
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [user, setUser] = useState<any>(null);

  // Fetch user data after login
  useEffect(() => {
    async function fetchUser() {
      try {
        const res = await api.get("/auth/me");
        setUser(res.data.user);
      } catch (error) {
        router.push("/login");
      }
    }
    fetchUser();
  }, []);

  const logoutHandler = () => {
    localStorage.removeItem("token");
    router.push("/login");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full bg-white shadow-lg w-64 transform 
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} 
        transition-transform duration-300 md:translate-x-0 z-50`}
      >
        <div className="p-4 border-b flex items-center justify-between">
          <h2 className="text-xl font-semibold">User Panel</h2>
          <button className="md:hidden" onClick={() => setSidebarOpen(false)}>
            <X size={24} />
          </button>
        </div>

        <nav className="mt-4 space-y-1">
          <button className="flex items-center px-4 py-2 w-full text-left hover:bg-gray-100">
            <LayoutGrid className="mr-3" size={18} /> Dashboard
          </button>
          <button className="flex items-center px-4 py-2 w-full text-left hover:bg-gray-100">
            <BookOpen className="mr-3" size={18} /> My Courses
          </button>
          <button className="flex items-center px-4 py-2 w-full text-left hover:bg-gray-100">
            <User className="mr-3" size={18} /> Profile
          </button>

          <button
            onClick={logoutHandler}
            className="flex items-center px-4 py-2 mt-10 text-red-600 hover:bg-red-100 w-full text-left"
          >
            <LogOut className="mr-3" size={18} /> Logout
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 md:ml-64">
        {/* Navbar */}
        <header className="bg-white shadow p-4 flex items-center justify-between">
          <button className="md:hidden" onClick={() => setSidebarOpen(true)}>
            <Menu size={24} />
          </button>
          <h1 className="text-xl font-bold">Welcome, {user?.name || "User"} 👋</h1>
        </header>

        {/* Dashboard Content */}
        <main className="p-6">
          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white shadow rounded-xl p-5">
              <h3 className="text-gray-500">Total Courses</h3>
              <p className="text-3xl font-semibold mt-2">5</p>
            </div>

            <div className="bg-white shadow rounded-xl p-5">
              <h3 className="text-gray-500">Completed</h3>
              <p className="text-3xl font-semibold mt-2">3</p>
            </div>

            <div className="bg-white shadow rounded-xl p-5">
              <h3 className="text-gray-500">In Progress</h3>
              <p className="text-3xl font-semibold mt-2">2</p>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="mt-10 bg-white shadow p-6 rounded-xl">
            <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>

            <ul className="space-y-3">
              <li className="border-b pb-2">📘 React Basics – Completed Lesson 4</li>
              <li className="border-b pb-2">🎯 JavaScript Challenge – 80% Score</li>
              <li className="">📚 Next.js Course – Started Module 2</li>
            </ul>
          </div>
        </main>
      </div>
    </div>
  );
}
