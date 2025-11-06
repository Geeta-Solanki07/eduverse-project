"use client";
import { Bell, LogOut } from "lucide-react";

export default function Topbar() {
  return (
    <header className="bg-white shadow flex justify-between items-center px-6 py-4">
      <h1 className="text-xl font-semibold text-gray-800">Admin Panel</h1>
      <div className="flex items-center gap-4">
        <Bell className="text-gray-500 cursor-pointer" />
        <button className="flex items-center gap-2 text-red-500 font-medium">
          <LogOut size={18} /> Logout
        </button>
      </div>
    </header>
  );
}
