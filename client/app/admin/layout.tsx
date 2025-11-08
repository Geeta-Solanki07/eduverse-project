"use client";
import { useState } from "react";
import Link from "next/link";
import { FaUsers, FaTachometerAlt } from "react-icons/fa";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className={`bg-indigo-700 text-white p-6 transition-all duration-300 ${collapsed ? "w-20" : "w-64"}`}>
        <div className="flex justify-between items-center mb-6">
          {!collapsed && <h1 className="text-2xl font-bold">Eduverse Admin</h1>}
          <button onClick={() => setCollapsed(!collapsed)} className="text-white text-lg">
            {collapsed ? "➡" : "⬅"}
          </button>
        </div>
        <nav className="flex flex-col gap-3">
          <Link href="/admin" className="hover:bg-indigo-600 px-3 py-2 rounded flex items-center gap-2">
            <FaTachometerAlt /> {!collapsed && "Dashboard"}
          </Link>
          <Link href="/admin/users" className="hover:bg-indigo-600 px-3 py-2 rounded flex items-center gap-2">
            <FaUsers /> {!collapsed && "Users"}
          </Link>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">{children}</div>
    </div>
  );
}
