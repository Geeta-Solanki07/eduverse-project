"use client";
import { useEffect, useState } from "react";
import useAuthGuard from "@/app/hooks/useAuthGuard";
import api from "@/lib/api";

interface User {
  _id: string;
  name: string;
  email: string;
  role: string;
}

interface Course {
  _id: string;
  name: string;
  category: string;
  instructor: string;
  price: string;
}

export default function AdminPage() {
  const isAuthorized = useAuthGuard("admin"); // ✅ only admin allowed
  const [users, setUsers] = useState<User[]>([]);
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [userRes, courseRes] = await Promise.all([
          api.get("/users"),
          api.get("/courses"),
        ]);
        setUsers(userRes.data);
        setCourses(courseRes.data);
      } catch (err) {
        console.error("Error fetching admin data:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (!isAuthorized) return null;
  if (loading)
    return <p className="text-center py-20 text-gray-600">Loading Admin Data...</p>;

  return (
    <div className="min-h-screen bg-gray-50 p-10">
      <header className="flex justify-between items-center mb-10">
        <h1 className="text-3xl font-bold text-indigo-700">
          🛠️ Admin Dashboard
        </h1>
        <button
          onClick={() => {
            localStorage.clear();
            window.location.href = "/auth/login";
          }}
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
        >
          Logout
        </button>
      </header>

      {/* Stats Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-white shadow-md rounded-xl p-6 text-center">
          <h2 className="text-lg font-semibold text-gray-700">Total Users</h2>
          <p className="text-2xl font-bold text-indigo-700 mt-2">
            {users.length}
          </p>
        </div>
        <div className="bg-white shadow-md rounded-xl p-6 text-center">
          <h2 className="text-lg font-semibold text-gray-700">Total Courses</h2>
          <p className="text-2xl font-bold text-indigo-700 mt-2">
            {courses.length}
          </p>
        </div>
        <div className="bg-white shadow-md rounded-xl p-6 text-center">
          <h2 className="text-lg font-semibold text-gray-700">Messages</h2>
          <p className="text-2xl font-bold text-indigo-700 mt-2">Coming Soon</p>
        </div>
      </div>

      {/* Users Table */}
      <section className="bg-white p-6 rounded-xl shadow-md mb-10">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          👥 Registered Users
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-indigo-600 text-white">
              <tr>
                <th className="p-3">Name</th>
                <th className="p-3">Email</th>
                <th className="p-3">Role</th>
              </tr>
            </thead>
            <tbody>
              {users.map((u) => (
                <tr
                  key={u._id}
                  className="border-b hover:bg-gray-50 transition text-gray-700"
                >
                  <td className="p-3">{u.name}</td>
                  <td className="p-3">{u.email}</td>
                  <td className="p-3 capitalize">{u.role}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Courses Table */}
      <section className="bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          📚 Available Courses
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-green-600 text-white">
              <tr>
                <th className="p-3">Name</th>
                <th className="p-3">Category</th>
                <th className="p-3">Instructor</th>
                <th className="p-3">Price</th>
              </tr>
            </thead>
            <tbody>
              {courses.map((c) => (
                <tr
                  key={c._id}
                  className="border-b hover:bg-gray-50 transition text-gray-700"
                >
                  <td className="p-3">{c.name}</td>
                  <td className="p-3">{c.category}</td>
                  <td className="p-3">{c.instructor}</td>
                  <td className="p-3">{c.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
