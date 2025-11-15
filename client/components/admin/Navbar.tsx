"use client";
import { Bell, UserCircle, Menu } from "lucide-react";

export default function Navbar() {
  return (
    <header className="h-16 bg-white rounded-xl shadow flex items-center justify-between px-6">
      <div className="flex items-center gap-4">
        <Menu />
        <h3 className="text-lg font-semibold">Admin Dashboard</h3>
      </div>
      <div className="flex items-center gap-4">
        <Bell />
        <UserCircle size={26} />
      </div>
    </header>
  );
}
