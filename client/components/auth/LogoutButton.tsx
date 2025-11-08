// components/LogoutButton.tsx (or use in Navbar)
"use client";
import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const router = useRouter();
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("role");
    router.push("/login");
  };

  return (
    <button onClick={handleLogout} className="px-3 py-1 rounded bg-red-500 text-white">
      Logout
    </button>
  );
}
