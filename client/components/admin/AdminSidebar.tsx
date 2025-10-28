"use client";
import Link from "next/link";
export default function AdminSidebar(){
  return (
    <aside className="w-64 bg-blue-600 text-white min-h-screen p-6">
      <h2 className="text-xl font-bold mb-6">Admin Panel</h2>
      <nav className="flex flex-col gap-3">
        <Link href="/admin" className="px-3 py-2 rounded hover:bg-blue-500">Dashboard</Link>
        <Link href="/admin/users" className="px-3 py-2 rounded hover:bg-blue-500">Users</Link>
        <Link href="/admin/courses" className="px-3 py-2 rounded hover:bg-blue-500">Courses</Link>
        <Link href="/admin/settings" className="px-3 py-2 rounded hover:bg-blue-500">Settings</Link>
      </nav>
    </aside>
  );
}
