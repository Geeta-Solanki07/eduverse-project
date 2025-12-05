"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type Course = {
  id: number;
  title: string;
  progress: number;
};

export default function UserDashboard() {
  const router = useRouter();

  const [checking, setChecking] = useState(true);
  const [userName, setUserName] = useState("User");

  const [courses] = useState<Course[]>([
    { id: 1, title: "React Basics", progress: 40 },
    { id: 2, title: "Advanced CSS", progress: 80 },
    { id: 3, title: "JavaScript Mastery", progress: 20 },
  ]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");
    const name = localStorage.getItem("name");

    if (!token) {
      router.replace("/auth/login");
      return;
    }

    if (role !== "user") {
      router.replace("/auth/login");
      return;
    }

    setUserName(name || "User");
    setChecking(false);
  }, [router]);

  const handleLogout = () => {
    localStorage.clear();
    document.cookie = "token=; Max-Age=0; path=/";
    router.replace("/auth/login");
  };

  if (checking) {
    return (
      <div className="min-h-screen flex items-center justify-center text-lg font-semibold">
        Checking Authentication...
      </div>
    );
  }

  return (
    <div className="min-h-screen text-black bg-gray-100">

      {/* TOP BAR */}
      <div className="bg-black text-white p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">EduVerse - User Panel</h1>

        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 transition px-4 py-1 rounded"
        >
          Logout
        </button>
      </div>

      <div className="max-w-6xl mx-auto p-6">

        {/* Welcome */}
        <h2 className="text-3xl font-bold mb-2">
          Welcome, {userName} 👋
        </h2>
        <p className="text-gray-600 mb-8">
          You are successfully logged in as a Student
        </p>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">

          <div className="bg-white shadow rounded p-5">
            <h3 className="text-gray-500 text-sm">Enrolled Courses</h3>
            <p className="text-3xl font-bold mt-2">3</p>
          </div>

          <div className="bg-white shadow rounded p-5">
            <h3 className="text-gray-500 text-sm">Completed</h3>
            <p className="text-3xl font-bold mt-2">1</p>
          </div>

          <div className="bg-white shadow rounded p-5">
            <h3 className="text-gray-500 text-sm">Total Hours</h3>
            <p className="text-3xl font-bold mt-2">15 hrs</p>
          </div>

        </div>

        {/* Courses List */}
        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-5">
            📚 My Courses
          </h3>

          {courses.map((course) => (
            <div
              key={course.id}
              className="mb-5 border rounded p-4"
            >
              <div className="flex justify-between items-center mb-2">
                <p className="font-semibold">{course.title}</p>
                <p className="text-sm">{course.progress}%</p>
              </div>

              <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
                <div
                  className="bg-indigo-600 h-2 rounded-full"
                  style={{ width: `${course.progress}%` }}
                ></div>
              </div>

              <button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">
                Continue Learning
              </button>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
