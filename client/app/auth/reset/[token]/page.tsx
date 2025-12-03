"use client";

import { useState } from "react";
import api from "@/lib/api";
import { useRouter } from "next/navigation";

export default function ResetPage({ params }: any) {
  const router = useRouter();
  const token = params.token;

  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  const submit = async (e: any) => {
    e.preventDefault();
    try {
      await api.post(`/auth/reset/${token}`, { password });
      setMsg("✅ Password updated! Redirecting...");
      setTimeout(() => router.push("/auth/login"), 1000);
    } catch {
      setMsg("❌ Invalid or expired link");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-50 text-black">
      <form onSubmit={submit} className="bg-white shadow-xl p-8 rounded w-96">
        <h2 className="text-xl font-semibold mb-4">Reset Password</h2>

        {msg && <p className="mb-4">{msg}</p>}

        <input
          type="password"
          placeholder="New password"
          className="w-full border p-3 rounded mb-4"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="w-full bg-indigo-600 py-2.5 text-white rounded">
          Update Password
        </button>
      </form>
    </div>
  );
}
