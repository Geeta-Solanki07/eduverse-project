"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import api from "@/lib/api";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

export default function RegisterPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMsg("");

    try {
      await api.post("/auth/register", form);

      // 🔥 VERY IMPORTANT (fix deploy bug)
      localStorage.removeItem("token");
      localStorage.removeItem("role");
      localStorage.removeItem("name");

      setMsg("✅ Account created successfully. Redirecting to login...");

      setTimeout(() => {
        router.replace("/auth/login");
      }, 1200);
    } catch (err: any) {
      setMsg(err?.response?.data?.message || "❌ Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex bg-gray-50 text-black">
      <div className="hidden md:flex w-1/2 bg-indigo-600 items-center justify-center">
        <img src="/assets/login.webp" className="w-96" />
      </div>

      <div className="flex w-full md:w-1/2 items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md"
        >
          <h2 className="text-3xl font-semibold text-center mb-6">
            Create Account
          </h2>

          {msg && (
            <p className="text-center mb-4 text-sm bg-gray-100 p-2 rounded">
              {msg}
            </p>
          )}

          <input
            name="name"
            required
            placeholder="Full Name"
            className="w-full border p-3 mb-4 rounded"
            onChange={handleChange}
          />

          <input
            name="email"
            type="email"
            required
            placeholder="Email"
            className="w-full border p-3 mb-4 rounded"
            onChange={handleChange}
          />

          <div className="relative mb-6">
            <input
              name="password"
              type={showPassword ? "text" : "password"}
              required
              minLength={6}
              placeholder="Password"
              className="w-full border p-3 rounded pr-10"
              onChange={handleChange}
            />
            <span
              className="absolute right-3 top-3 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
            </span>
          </div>

          <button
            disabled={loading}
            className="w-full bg-indigo-600 text-white py-3 rounded"
          >
            {loading ? "Creating..." : "Register"}
          </button>

          <p className="text-center text-sm mt-4">
            Already have an account?{" "}
            <span
              onClick={() => router.push("/auth/login")}
              className="text-indigo-600 cursor-pointer hover:underline"
            >
              Login
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}
