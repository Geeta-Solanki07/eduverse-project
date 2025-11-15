// components/auth/RoleGuard.tsx
"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function RoleGuard({
  children,
  allowed = [],
}: {
  children: React.ReactNode;
  allowed?: string[]; // e.g. ["admin"]
}) {
  const router = useRouter();
  const [ok, setOk] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");
    if (!token) {
      router.replace("/auth/login");
      return;
    }
    if (allowed.length > 0 && !allowed.includes(role || "")) {
      // no permission
      router.replace("/auth/login");
      return;
    }
    setOk(true);
  }, [router, allowed]);

  if (!ok) return null;
  return <>{children}</>;
}
