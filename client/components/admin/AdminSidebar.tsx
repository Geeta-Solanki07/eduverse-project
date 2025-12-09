"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function AdminSidebar() {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("adminToken"); // admin logout
    alert("Logged Out Successfully");
    router.push("/auth/login");
  };

  return (
    <aside className="w-64 h-screen bg-white shadow-lg p-5 flex flex-col justify-between">
      
      {/* TOP MENU */}
      <div>
        <h2 className="text-xl font-bold text-orange-600 mb-6">Admin Panel</h2>

        <ul className="space-y-3 text-gray-700 font-medium">
          <li>
            <Link href="/admin/dashboard" className="block p-2 hover:bg-gray-100 rounded">
              Dashboard
            </Link>
          </li>

          <li>
            <Link href="/admin/courses" className="block p-2 hover:bg-gray-100 rounded">
              Add Course
            </Link>
          </li>

          <li>
            <Link href="/admin/classes" className="block p-2 hover:bg-gray-100 rounded">
              Classes
            </Link>
          </li>

          <li>
            <Link href="/admin/subjects" className="block p-2 hover:bg-gray-100 rounded">
              Subjects
            </Link>
          </li>

          <li>
            <Link href="/admin/chapters" className="block p-2 hover:bg-gray-100 rounded">
              Chapters
            </Link>
          </li>
        </ul>
      </div>

      {/* LOGOUT BUTTON BOTTOM FIXED */}
      <button
        onClick={handleLogout}
        className="bg-red-600 text-white w-full py-2 rounded-lg hover:bg-red-700 transition"
      >
        Logout
      </button>
    </aside>
  );
}
