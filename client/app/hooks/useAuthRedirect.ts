"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function useAuthRedirect() {
  const router = useRouter();
  const pathname = usePathname();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");

    // ❌ Not logged in → dashboard blocked
    if (!token && pathname.includes("dashboard")) {
      router.replace("/auth/login");
      return;
    }

    // 🔁 Logged in → auth pages blocked
    if (token && pathname.startsWith("/auth")) {
      role === "admin"
        ? router.replace("/admin/dashboard")
        : router.replace("/user/dashboard");
      return;
    }

    setReady(true);
  }, [pathname, router]);

  return ready;
}
