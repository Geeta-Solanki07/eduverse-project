"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export const useAuth = (role?: string) => {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");

    if (!token || !user) {
      router.push("/auth/login");
      return;
    }

    const parsedUser = JSON.parse(user);
    if (role && parsedUser.role !== role) {
      // Redirect based on role mismatch
      if (parsedUser.role === "admin") router.push("/admin/dashboard");
      else router.push("/dashboard");
    }
  }, [router, role]);
};
