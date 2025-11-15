// app/user/dashboard/page.tsx
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { requireAuthCheck } from "@/lib/auth";

export default function UserDashboard() {
  const router = useRouter();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const ok = requireAuthCheck(router, ["user"]);
    if (!ok) return;
    setReady(true);
  }, []);

  if (!ready) return <div>Redirecting...</div>;

  return <h1 className="text-5xl font-bold text-red-500 text-center m-7">Welcome to User Dashboard</h1>;
  
}
