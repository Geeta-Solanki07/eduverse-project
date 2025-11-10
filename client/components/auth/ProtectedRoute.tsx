"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function ProtectedRoute({ children, allowedRoles }: { children: React.ReactNode; allowedRoles: string[] }) {
  const router = useRouter();
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");
    if (!token) router.push("/auth/login");
    else if (!allowedRoles.includes(role || "")) router.push("/");
    else setIsAuth(true);
  }, [router, allowedRoles]);

  if (!isAuth) return <div className="flex justify-center items-center h-screen">Loading...</div>;
  return <>{children}</>;
}
