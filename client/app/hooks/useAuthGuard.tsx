"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function useAuthGuard(requiredRole?: string) {
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");

    if (!token || !user) {
      router.push("/auth/login");
      return;
    }

    const parsed = JSON.parse(user);
    if (requiredRole && parsed.role !== requiredRole) {
      router.push("/dashboard");
      return;
    }

    setAuthorized(true);
  }, [router, requiredRole]);

  return authorized;
}
