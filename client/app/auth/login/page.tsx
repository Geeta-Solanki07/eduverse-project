"use client";

import { useState } from "react";
import { FiMail, FiLock, FiEye, FiEyeOff, FiLogIn } from "react-icons/fi";
import api from "@/lib/api";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function LoginForm() {
  const router = useRouter();
  const [form, setForm] = useState({ email: "", password: "" });
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");
    setLoading(true);

    try {
      const res = await api.post("/auth/login", form);
      if (res.status === 200) {
        router.push("/dashboard"); // Redirect after login success
      }
    } catch (err: any) {
      setErrorMsg(err.response?.data?.message || "Invalid credentials!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 to-blue-200 px-4">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white shadow-2xl rounded-3xl p-8 max-w-md w-full"
      >
        <div className="flex flex-col items-center mb-6">
          <div className="bg-indigo-100 p-3 rounded-full">
            <FiLogIn className="text-indigo-600 text-3xl" />
          </div>
          <h2 className="text-3xl font-bold text-indigo-600 mt-3">
            Welcome Back
          </h2>
          <p className="text-gray-500 text-center">
            Sign in to continue your learning journey ✨
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email */}
          <div className="relative">
            <FiMail className="absolute left-3 top-3 text-gray-400" />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full pl-10 pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <FiLock className="absolute left-3 top-3 text-gray-400" />
            <input
              type={showPass ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              required
              className="w-full pl-10 pr-10 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            <div
              onClick={() => setShowPass(!showPass)}
              className="absolute right-3 top-3 text-gray-400 cursor-pointer"
            >
              {showPass ? <FiEyeOff /> : <FiEye />}
            </div>
          </div>

          {/* Error message */}
          {errorMsg && (
            <p className="text-red-500 text-sm text-center">{errorMsg}</p>
          )}

          {/* Login button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-indigo-600 text-white font-semibold py-2 rounded-lg hover:bg-indigo-700 transition duration-300"
          >
            {loading ? "Signing In..." : "Login"}
          </button>
        </form>

        {/* Register redirect */}
        <p className="text-center text-sm text-gray-500 mt-4">
          Don’t have an account?{" "}
          <span
            onClick={() => router.push("/register")}
            className="text-indigo-600 font-semibold hover:underline cursor-pointer"
          >
            Register here
          </span>
        </p>
      </motion.div>
    </div>
  );
}
