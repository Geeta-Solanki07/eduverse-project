"use client";
import { useRouter } from "next/navigation";

export default function AdminHeader() {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("adminToken"); // token delete
    alert("Logged Out Successfully");
    router.push("/admin/login");
  };

  return (
    <div className="w-full bg-black text-white p-4 flex justify-between items-center">
      <h1 className="font-bold text-xl">EduVerse Admin</h1>

      <button
        onClick={handleLogout}
        className="bg-red-600 px-4 py-2 rounded hover:bg-red-700"
      >
        Logout
      </button>
    </div>
  );
}
