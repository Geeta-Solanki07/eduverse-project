"use client";
import Link from "next/link";

export default function AdminSidebar(){
  return (
    <aside className="w-64 bg-white text-black p-6 shadow h-screen">
      <h3 className="text-xl font-bold mb-6">Company Admin</h3>
      <nav className="flex flex-col gap-3">
        <Link href="/admin" className="hover:text-indigo-600">Dashboard</Link>
        <Link href="/admin/users" className="hover:text-indigo-600">Users</Link>
        <Link href="/admin/courses" className="hover:text-indigo-600">Courses</Link>
        <a href="#" onClick={async(e)=>{ e.preventDefault(); await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/logout`, { method:"POST", credentials:"include" }); localStorage.removeItem("role"); window.location.href = "/auth/login"; }} className="text-red-600">Logout</a>
      </nav>
    </aside>
  );
}
