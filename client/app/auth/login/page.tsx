"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import api from "@/lib/api";

export default function LoginPage() {
  const router = useRouter();

  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");
  const [checked, setChecked] = useState(false);

  // ✅ show login ONLY if not logged in
  useEffect(() => {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");

    if (token && role) {
      role === "admin"
        ? router.replace("/admin/dashboard")
        : router.replace("/user/dashboard");
    } else {
      setChecked(true);
    }
  }, [router]);

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

      data.user.role === "admin"
        ? router.replace("/admin/dashboard")
        : router.replace("/user/dashboard");
    } catch (err: any) {
      setMsg(err?.response?.data?.message || "Invalid credentials");
    } finally {
      setLoading(false);
    }
  };

  if (!checked) return null;

  return (
    <div className="min-h-screen flex bg-gray-50 text-black">
      {/* LEFT IMAGE */}
      <div className="hidden md:flex w-1/2 bg-indigo-600 items-center justify-center">
        <img src="/assets/login.webp" className="w-96" />
      </div>

      {/* FORM */}
      <div className="flex w-full md:w-1/2 items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md"
        >
          <h2 className="text-3xl font-semibold text-center mb-6">
            Sign In
          </h2>

          {msg && (
            <p className="text-center mb-4 text-sm bg-red-100 text-red-600 p-2 rounded">
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
