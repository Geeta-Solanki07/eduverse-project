"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function useUserProtect() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");

    if (!token) {
      router.replace("/auth/login");
      return;
    }

    if (role !== "user") {
      router.replace("/admin/dashboard");
    }
  }, [router]);
}
