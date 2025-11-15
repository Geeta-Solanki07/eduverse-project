"use client";
import { useEffect, useState, ReactNode } from "react";
import { useRouter } from "next/navigation";

interface Props {
  children: ReactNode;
  allowedRoles?: string[];
}

export default function ProtectedRoute({ children, allowedRoles = ["student", "teacher", "admin"] }: Props) {
  const router = useRouter();
  const [ok, setOk] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");
    if (!token) {
      router.push("/auth/login");
      return;
    }
    if (!allowedRoles.includes(role || "")) {
      router.push("/");
      return;
    }
    setOk(true);
  }, [router, allowedRoles]);

  if (!ok)
    return (
      <div className="h-screen flex items-center justify-center text-gray-500">
        Loading...
      </div>
    );

  return <>{children}</>;
}
