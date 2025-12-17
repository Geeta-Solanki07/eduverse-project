"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function useAdminProtect() {
  const router = useRouter();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");

    if (!token) {
      router.replace("/auth/login");
      return;
    }

    if (role !== "admin") {
      router.replace("/user/dashboard");
      return;
    }

    // ✅ admin verified
    setReady(true);
  }, [router]);

  return ready;
}
