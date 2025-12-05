"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Menu, X, User, LogOut, BookOpen, LayoutGrid } from "lucide-react";
import api from "@/lib/api";

interface Course {
  _id: string;
  title: string;
  slug: string;
  progress?: number;
}

export default function UserDashboard() {
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [courses, setCourses] = useState<Course[]>([]);

  // 🚀 Fetch user & courses
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/auth/login");
      return;
    }

    async function fetchData() {
      try {
        const userRes = await api.get("/auth/me");
        setUser(userRes.data.user);

        const coursesRes = await api.get("/user/my-courses");
        setCourses(coursesRes.data.courses);

      } catch (error) {
        localStorage.clear();
        router.push("/auth/login");
      }
    }

    fetchData();
  }, []);

  const logoutHandler = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    router.push("/auth/login");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">

      {/* 🔷 Sidebar */}
      <aside className={`fixed top-0 left-0 h-full bg-white shadow-lg w-64 transform 
      ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} 
      transition-transform duration-300 md:translate-x-0 z-50`}>

        <div className="p-4 border-b flex items-center justify-between">
          <h2 className="text-xl font-semibold text-indigo-600">Eduverse</h2>
          <button className="md:hidden" onClick={() => setSidebarOpen(false)}>
            <X />
          </button>
        </div>

        <nav className="mt-4 space-y-1">
          <button className="flex items-center w-full px-4 py-3 hover:bg-gray-100">
            <LayoutGrid className="mr-2" size={18} /> Dashboard
          </button>

          <button className="flex items-center w-full px-4 py-3 hover:bg-gray-100">
            <BookOpen className="mr-2" size={18} /> My Courses
          </button>

          <button className="flex items-center w-full px-4 py-3 hover:bg-gray-100">
            <User className="mr-2" size={18} /> Profile
          </button>

          <button
            onClick={logoutHandler}
            className="flex items-center w-full px-4 py-3 mt-8 text-red-600 hover:bg-red-50"
          >
            <LogOut className="mr-2" size={18} /> Logout
          </button>
        </nav>
      </aside>

      {/* 🔷 Main area */}
      <div className="flex-1 md:ml-64">

        {/* Top navbar */}
        <header className="bg-white shadow px-4 py-4 flex justify-between items-center">
          <button className="md:hidden" onClick={() => setSidebarOpen(true)}>
            <Menu size={26} />
          </button>

          <h1 className="text-lg font-semibold">
            Welcome, {user?.name || "Student"} 👋
          </h1>
        </header>

        {/* Content */}
        <main className="p-6">

          <h2 className="text-xl font-semibold mb-4">Your Courses</h2>

          {courses.length === 0 ? (
            <p>No courses enrolled yet.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.map((course) => (
                <div
                  key={course._id}
                  className="bg-white rounded-xl shadow p-5 flex flex-col justify-between"
                >
                  <div>
                    <h3 className="text-lg font-semibold">{course.title}</h3>
                    <p className="text-sm text-gray-500 mt-1">
                      Progress: {course.progress || 0}%
                    </p>
                  </div>

                  <button
                    onClick={() =>
                      router.push(`/courses/${course.slug}`)
                    }
                    className="mt-4 bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700"
                  >
                    Continue
                  </button>
                </div>
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
