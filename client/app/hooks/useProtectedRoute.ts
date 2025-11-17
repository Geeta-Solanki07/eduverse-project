"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function useProtectedRoute(allowedRoles: string[]) {
  const router = useRouter();

  useEffect(() => {
    const role = localStorage.getItem("role");
    const token = localStorage.getItem("token");

    // Not logged in → login page
    if (!token) {
      router.replace("/auth/login");
      return;
    }

    // Role mismatch → block
    if (!allowedRoles.includes(role!)) {
      router.replace("/auth/login");
      return;
    }
  }, []);
}
