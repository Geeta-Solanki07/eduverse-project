"use client";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { LayoutDashboard, Users, BookOpen, Settings, ChevronLeft, ChevronRight, LogOut } from "lucide-react";

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const menu = [
    { name: "Dashboard", href: "/admin/dashboard", icon: <LayoutDashboard /> },
    { name: "Users", href: "/admin/users", icon: <Users /> },
    { name: "Courses", href: "/admin/courses", icon: <BookOpen /> },
    { name: "Settings", href: "/admin/settings", icon: <Settings /> },
  ];
  return (
    <motion.aside animate={{ width: collapsed ? 88 : 240 }} className="h-screen bg-gray-900 text-white flex flex-col">
      <div className="flex items-center justify-between p-4 border-b border-gray-800">
        {!collapsed && <div className="font-bold">Dousoft Admin</div>}
        <button onClick={() => setCollapsed(!collapsed)} className="p-2">
          {collapsed ? <ChevronRight /> : <ChevronLeft />}
        </button>
      </div>
      <nav className="flex-1 py-4">
        {menu.map((m) => (
          <Link key={m.href} href={m.href} className="flex items-center gap-3 px-4 py-3 hover:bg-gray-800">
            <div>{m.icon}</div>
            {!collapsed && <span>{m.name}</span>}
          </Link>
        ))}
      </nav>
      <div className="p-4 border-t border-gray-800">
        <button className="flex items-center gap-3 text-red-300">
          <LogOut /> {!collapsed && <span>Logout</span>}
        </button>
      </div>
    </motion.aside>
  );
}
