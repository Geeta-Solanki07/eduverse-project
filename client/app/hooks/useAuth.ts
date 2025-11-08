import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function useAuth(requiredRole?: string) {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");

    if (!token) router.push("/auth/login");
    if (requiredRole && role !== requiredRole) router.push("/dashboard");
  }, [router, requiredRole]);
}
