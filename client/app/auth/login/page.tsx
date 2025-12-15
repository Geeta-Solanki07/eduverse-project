"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import api from "@/lib/api";
import useAuthRedirect from "@/app/hooks/useAuthRedirect";

export default function LoginPage() {
  const ready = useAuthRedirect();
  const router = useRouter();

  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  if (!ready) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMsg("");

    try {
      const { data } = await api.post("/auth/login", form);

      localStorage.setItem("token", data.token);
      localStorage.setItem("role", data.user.role);
      localStorage.setItem("name", data.user.name);

      document.cookie = `token=${data.token}; path=/`;

      data.user.role === "admin"
        ? router.replace("/admin/dashboard")
        : router.replace("/user/dashboard");
    } catch (err: any) {
      setMsg(err?.response?.data?.message || "Invalid credentials");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="text-black min-h-screen flex flex-col md:flex-row bg-gray-50 text-black">

      {/* LEFT IMAGE */}
      <div className="hidden md:flex w-1/2 bg-indigo-600 items-center justify-center">
        <img src="/assets/login.webp" className="w-96" />
      </div>

      {/* FORM */}
      <div className="flex w-full md:w-1/2 items-center justify-center px-4">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md"
        >
          <h2 className="text-3xl font-semibold text-center mb-6">
            Sign In
          </h2>

          {msg && (
            <p className="text-center mb-4 text-sm bg-gray-100 p-2 rounded">
              {msg}
            </p>
          )}

          <input
            name="email"
            type="email"
            required
            placeholder="Email"
            className="w-full border p-3 mb-4 rounded"
            onChange={handleChange}
          />

          <input
            name="password"
            type="password"
            required
            placeholder="Password"
            className="w-full border p-3 mb-6 rounded"
            onChange={handleChange}
          />

          <button
            disabled={loading}
            className="w-full bg-indigo-600 text-white py-3 rounded"
          >
            {loading ? "Signing in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}
