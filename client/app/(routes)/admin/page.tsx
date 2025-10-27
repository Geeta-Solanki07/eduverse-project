"use client";

import { useState } from "react";
import { FiUsers, FiBookOpen, FiSettings, FiLogOut } from "react-icons/fi";

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState("dashboard");

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return (
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Welcome, Admin 👋</h2>
            <p className="text-gray-700">
              Manage users, courses, and other settings here.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="bg-blue-100 p-5 rounded-2xl shadow">
                <h3 className="text-lg font-bold">Total Users</h3>
                <p className="text-3xl font-extrabold text-blue-700">120</p>
              </div>
              <div className="bg-green-100 p-5 rounded-2xl shadow">
                <h3 className="text-lg font-bold">Active Courses</h3>
                <p className="text-3xl font-extrabold text-green-700">14</p>
              </div>
              <div className="bg-yellow-100 p-5 rounded-2xl shadow">
                <h3 className="text-lg font-bold">Revenue</h3>
                <p className="text-3xl font-extrabold text-yellow-700">₹45,200</p>
              </div>
            </div>
          </div>
        );
      case "users":
        return (
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-4">User Management</h2>
            <p className="text-gray-700">List, edit, and delete users here.</p>
          </div>
        );
      case "courses":
        return (
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Courses</h2>
            <p className="text-gray-700">Manage all courses from this section.</p>
          </div>
        );
      case "settings":
        return (
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Settings</h2>
            <p className="text-gray-700">Configure application settings here.</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-600 text-white p-6 flex flex-col justify-between">
        <div>
          <h1 className="text-2xl font-bold mb-8">Admin Panel</h1>
          <nav className="flex flex-col gap-4">
            <button
              className={`flex items-center gap-3 p-2 rounded-lg transition ${
                activeTab === "dashboard"
                  ? "bg-blue-500"
                  : "hover:bg-blue-500/50"
              }`}
              onClick={() => setActiveTab("dashboard")}
            >
              <FiUsers /> Dashboard
            </button>
            <button
              className={`flex items-center gap-3 p-2 rounded-lg transition ${
                activeTab === "users" ? "bg-blue-500" : "hover:bg-blue-500/50"
              }`}
              onClick={() => setActiveTab("users")}
            >
              <FiUsers /> Users
            </button>
            <button
              className={`flex items-center gap-3 p-2 rounded-lg transition ${
                activeTab === "courses" ? "bg-blue-500" : "hover:bg-blue-500/50"
              }`}
              onClick={() => setActiveTab("courses")}
            >
              <FiBookOpen /> Courses
            </button>
            <button
              className={`flex items-center gap-3 p-2 rounded-lg transition ${
                activeTab === "settings"
                  ? "bg-blue-500"
                  : "hover:bg-blue-500/50"
              }`}
              onClick={() => setActiveTab("settings")}
            >
              <FiSettings /> Settings
            </button>
          </nav>
        </div>
        <button className="flex items-center gap-3 mt-6 p-2 rounded-lg hover:bg-blue-500 transition">
          <FiLogOut /> Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-gray-50">{renderContent()}</main>
    </div>
  );
}
