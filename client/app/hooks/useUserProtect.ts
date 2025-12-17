"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function useUserProtect() {
  const router = useRouter();

  useEffect(() => {
    const role = localStorage.getItem("role");

    if (!role) {
      router.replace("/auth/login");
      return;
    }
  }, [router]);
}
