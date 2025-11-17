"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function useAuthRedirect() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");

    if (token && role) {
      // 🛡 Block Login/Register when already logged in
      if (role === "admin") router.replace("/admin/dashboard");
      else router.replace("/user/dashboard");
    }
  }, []);
}
