"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function useAdminProtect() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");

    if (!token) {
      router.push("/auth/login");
      return;
    }

    if (role !== "admin") {
      router.push("/user/dashboard");
    }
  }, [router]);
}
