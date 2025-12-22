"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { logout } from "@/lib/auth";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  Users,
  BookOpen,
  Settings,
  ChevronLeft,
  ChevronRight,
  LogOut,
} from "lucide-react";

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const router = useRouter();

  const menu = [
    { name: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
    { name: "Users", href: "/admin/users", icon: Users },
    { name: "Courses", href: "/admin/courses", icon: BookOpen },
    { name: "Settings", href: "/admin/settings", icon: Settings },
  ];

  return (
    <motion.aside
      animate={{ width: collapsed ? 88 : 240 }}
      transition={{ duration: 0.25 }}
      className="
        fixed top-0 left-0 z-50
        h-screen
        bg-gray-900 text-white
        flex flex-col
        border-r border-gray-800
      "
    >
      {/* HEADER */}
      <div className="flex items-center justify-between p-4 border-b border-gray-800">
        {!collapsed && <span className="font-bold text-lg">EduVerse Admin</span>}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-2 rounded hover:bg-gray-800"
        >
          {collapsed ? <ChevronRight /> : <ChevronLeft />}
        </button>
      </div>

      {/* MENU (SCROLLABLE) */}
      <nav className="flex-1 overflow-y-auto py-2">
        {menu.map((m) => {
          const Icon = m.icon;
          return (
            <Link
              key={m.href}
              href={m.href}
              className="
                flex items-center gap-3
                px-4 py-3
                text-sm
                hover:bg-gray-800
                transition
              "
            >
              <Icon className="w-5 h-5 shrink-0" />
              {!collapsed && <span>{m.name}</span>}
            </Link>
          );
        })}
      </nav>

      {/* LOGOUT (ALWAYS BOTTOM) */}
      <div className="p-4 border-t border-gray-800">
        <button
          onClick={() => logout(router)}
          className="
            flex items-center gap-3
            text-red-300 hover:text-red-400
            w-full
          "
        >
          <LogOut className="w-5 h-5" />
          {!collapsed && <span>Logout</span>}
        </button>
      </div>
    </motion.aside>
  );
}
