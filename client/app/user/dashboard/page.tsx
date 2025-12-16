"use client";

import { useEffect, useState } from "react";
import api from "@/lib/api";
import useUserProtect from "@/app/hooks/useUserProtect";
import { useRouter } from "next/navigation";

export default function UserDashboard() {
  useUserProtect();
  const router = useRouter();

  const [user, setUser] = useState<any>(null);
  const [courses, setCourses] = useState<any[]>([]);

  useEffect(() => {
    const loadData = async () => {
      const profile = await api.get("/user/profile");
      const myCourses = await api.get("/user/my-courses");

      setUser(profile.data);
      setCourses(myCourses.data);
    };

    loadData();
  }, []);

  const logout = () => {
    localStorage.clear();
    document.cookie = "token=; Max-Age=0; path=/";
    router.replace("/auth/login");
  };

  if (!user) return <div className="p-10">Loading Dashboard...</div>;

  return (
    <div className="min-h-screen bg-gray-100 text-black">
      <div className="bg-black text-white p-4 flex justify-between">
        <h1>EduVerse</h1>
        <button onClick={logout} className="bg-red-500 px-4 py-1 rounded">
          Logout
        </button>
      </div>

      <div className="p-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">
          Welcome, {user.name} 👋
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          <Stat title="Enrolled Courses" value={courses.length} />
          <Stat title="Completed" value={courses.filter(c => c.progress === 100).length} />
          <Stat title="Learning Hours" value={`${user.hours} hrs`} />
        </div>

        <h3 className="text-xl font-semibold mb-4">📚 My Courses</h3>

        {courses.map(course => (
          <div key={course._id} className="bg-white p-4 mb-4 rounded shadow">
            <div className="flex justify-between mb-2">
              <p className="font-semibold">{course.title}</p>
              <p>{course.progress}%</p>
            </div>

            <div className="h-2 bg-gray-200 rounded">
              <div
                className="h-2 bg-indigo-600 rounded"
                style={{ width: `${course.progress}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const Stat = ({ title, value }: any) => (
  <div className="bg-white p-5 rounded shadow">
    <p className="text-gray-500 text-sm">{title}</p>
    <p className="text-3xl font-bold">{value}</p>
  </div>
);
