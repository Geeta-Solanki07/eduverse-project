"use client";

import { useRouter } from "next/navigation";
import { logoutUser } from "@/lib/logout";

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = () => {
    logoutUser();
    router.replace("/auth/login"); // back to login
  };

  return (
    <button
      onClick={handleLogout}
      className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
    >
      Logout
    </button>
  );
}
