"use client";
import { useRouter } from "next/navigation";
import { LogOut } from "lucide-react";
import api from "@/lib/api";

export default function AdminTopbar({ setSidebarOpen }: { setSidebarOpen: (v: boolean) => void }) {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await api.post("/auth/logout");
      localStorage.removeItem("token");
      localStorage.removeItem("role");
      router.push("/auth/login");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex items-center justify-between bg-white shadow px-6 py-3">
      <button
        className="md:hidden p-1 rounded hover:bg-gray-200"
        onClick={() => setSidebarOpen(true)}
      >
        ☰
      </button>
      <h1 className="font-bold text-xl hidden md:block">Admin Panel</h1>
      <button
        onClick={handleLogout}
        className="flex items-center gap-2 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
      >
        <LogOut size={16} /> Logout
      </button>
    </div>
  );
}
