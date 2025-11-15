"use client";
import { useState } from "react";
import Sidebar from "@/components/admin/Sidebar";
import Topbar from "@/components/admin/Navbar";

export default function SettingsPage() {
  const [form, setForm] = useState({
    name: "Geeta Solanki",
    email: "geeta@eduverse.com",
    currentPassword: "",
    newPassword: "",
  });

  const [site, setSite] = useState({
    siteName: "EduVerse Pro",
    theme: "light",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name === "siteName" || name === "theme") setSite({ ...site, [name]: value });
    else setForm({ ...form, [name]: value });
  };

  const handleProfileUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Profile updated!\nName: ${form.name}\nEmail: ${form.email}`);
  };

  const handlePasswordChange = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Password changed successfully!`);
  };

  const handleSiteConfig = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Site settings updated: ${site.siteName} (${site.theme})`);
  };

  return (
    <div className="flex bg-gray-100 min-h-screen">
      <Sidebar />
      <main className="flex-1 ml-0 md:ml-64">
        <Topbar />
        <section className="p-6 space-y-6">
          <h1 className="text-2xl font-bold text-gray-800">Settings Panel</h1>

          {/* --- Profile Settings --- */}
          <div className="bg-white shadow-md rounded-xl p-6">
            <h2 className="text-lg font-semibold mb-4 text-gray-700">Profile Settings</h2>
            <form onSubmit={handleProfileUpdate} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <button
                type="submit"
                className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
              >
                Update Profile
              </button>
            </form>
          </div>

          {/* --- Password Change --- */}
          <div className="bg-white shadow-md rounded-xl p-6">
            <h2 className="text-lg font-semibold mb-4 text-gray-700">Change Password</h2>
            <form onSubmit={handlePasswordChange} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Current Password
                </label>
                <input
                  type="password"
                  name="currentPassword"
                  value={form.currentPassword}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">New Password</label>
                <input
                  type="password"
                  name="newPassword"
                  value={form.newPassword}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <button
                type="submit"
                className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
              >
                Change Password
              </button>
            </form>
          </div>

          {/* --- Site Configuration --- */}
          <div className="bg-white shadow-md rounded-xl p-6">
            <h2 className="text-lg font-semibold mb-4 text-gray-700">Site Configuration</h2>
            <form onSubmit={handleSiteConfig} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">Site Name</label>
                <input
                  type="text"
                  name="siteName"
                  value={site.siteName}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">Theme</label>
                <select
                  name="theme"
                  value={site.theme}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="light">Light</option>
                  <option value="dark">Dark</option>
                </select>
              </div>

              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
              >
                Save Settings
              </button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}
