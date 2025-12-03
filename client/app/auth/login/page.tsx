"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import api from "@/lib/api";
import useAuthRedirect from "@/app/hooks/useAuthRedirect";

export default function LoginPage() {
  useAuthRedirect();

  const router = useRouter();
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  const handleChange = (e: any) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    setMsg("");

    try {
      const res = await api.post("/auth/login", form);

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", res.data.user.role);

      setMsg("✅ Login successful...redirecting");

      setTimeout(() => {
        if (res.data.user.role === "admin")
          router.push("/admin/dashboard");
        else router.push("/user/dashboard");
      }, 700);

    } catch (err: any) {
      setMsg("❌ " + (err?.response?.data?.message || "Invalid credentials"));
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex text-black">
      
      {/* LEFT IMAGE PANEL */}
      <div className="hidden md:flex flex-1 bg-indigo-600 text-white items-center justify-center">
        <div className="text-center">
          <img src="/assets/login.webp" className="w-80 mx-auto animate-pulse" />
          <h1 className="text-3xl font-semibold mt-6">Welcome Back 👋</h1>
          <p className="opacity-90 text-sm">Continue your journey with Eduverse</p>
        </div>
      </div>

      {/* RIGHT FORM */}
      <div className="flex flex-1 items-center justify-center bg-gray-50">
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-xl rounded-xl p-8 w-full max-w-md"
        >
          <h2 className="text-3xl font-semibold text-center mb-6">Sign In</h2>

          {msg && (
            <p className="mb-4 text-sm p-2 bg-gray-100 rounded text-center">
              {msg}
            </p>
          )}

          <input
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            className="w-full border mb-4 p-3 rounded"
            placeholder="Email address"
          />

          <input
            name="password"
            type="password"
            required
            value={form.password}
            onChange={handleChange}
            className="w-full border mb-4 p-3 rounded"
            placeholder="Password"
          />

          <button
            disabled={loading}
            className="w-full py-2.5 bg-indigo-600 text-white rounded hover:bg-indigo-700"
          >
            {loading ? "Loading..." : "Sign In"}
          </button>

          <div className="text-center mt-4">
            <a href="/auth/forgot" className="text-indigo-600">
              Forgot Password?
            </a>
          </div>

          <p className="text-center text-sm mt-4">
            Don’t have an account?{" "}
            <a href="/auth/register" className="text-indigo-600 font-medium">
              Sign up
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
