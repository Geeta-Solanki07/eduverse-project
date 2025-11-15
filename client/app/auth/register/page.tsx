"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import api from "@/lib/api";

export default function RegisterPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "user",
  });

  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      setMsg("❌ Passwords do not match!");
      return;
    }

    setLoading(true);
    setMsg("⏳ Creating your account...");

    try {
      const res = await api.post("/auth/register", form);

      if (res.data?.success) {
        setMsg("✅ Account created! Redirecting to login...");
        setTimeout(() => router.push("/auth/login"), 1200);
      } else {
        setMsg("❌ " + (res.data?.message || "Registration failed"));
      }
    } catch (err: any) {
      setMsg("❌ " + (err?.response?.data?.message || "Server error"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row font-poppins">
      
      {/* Left Section */}
      <div className="hidden md:flex flex-1 flex-col justify-center items-center bg-gradient-to-br from-indigo-500 to-indigo-700 text-white">
        <img src="/assets/login.webp" className="w-3/4 max-w-md animate-float" />

        {/* Text below image → you requested this */}
        <div className="text-center mt-6">
          <h2 className="text-3xl font-semibold">Join Eduverse Today!</h2>
          <p className="opacity-80 text-sm mt-2">Start your journey with us</p>
        </div>
      </div>

      {/* Right Section: Form */}
      <div className="flex flex-1 justify-center items-center bg-gray-50">
        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md mx-6">

          <div className="flex justify-center mb-6">
            <img src="/logo.png" className="h-12 object-contain" />
          </div>

          <h2 className="text-2xl font-semibold text-center text-gray-800 mb-2">Create Account</h2>

          {msg && (
            <p
              className={`text-sm p-2 mb-4 rounded ${
                msg.startsWith("✅")
                  ? "text-green-600 bg-green-50 border border-green-200"
                  : "text-red-600 bg-red-50 border border-red-200"
              }`}
            >
              {msg}
            </p>
          )}

          <div className="mb-4">
            <label className="block text-gray-700 text-sm mb-1">Full Name</label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              type="text"
              placeholder="Enter your name"
              className="w-full border text-black border-gray-300 rounded-lg pl-3 py-2.5 focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm mb-1">Email</label>
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              type="email"
              placeholder="Enter your email"
              className="w-full border text-black border-gray-300 rounded-lg pl-3 py-2.5 focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm mb-1">Password</label>
            <input
              name="password"
              value={form.password}
              onChange={handleChange}
              minLength={6}
              required
              type="password"
              placeholder="Enter password"
              className="w-full border text-black border-gray-300 rounded-lg pl-3 py-2.5 focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm mb-1">Confirm Password</label>
            <input
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={handleChange}
              minLength={6}
              required
              type="password"
              placeholder="Confirm password"
              className="w-full border text-black border-gray-300 rounded-lg pl-3 py-2.5 focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm mb-1">Role</label>
            <select
              name="role"
              value={form.role}
              onChange={handleChange}
              className="w-full border text-black border-gray-300 rounded-lg pl-3 py-2.5 focus:ring-2 focus:ring-indigo-500"
            >
              <option value="user">User</option>
              <option value="teacher">Teacher</option>
            </select>
          </div>

          <button
            disabled={loading}
            type="submit"
            className="w-full py-2.5 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 disabled:opacity-60"
          >
            {loading ? "Creating account..." : "Register"}
          </button>

          <p className="text-center text-gray-500 text-sm mt-6">
            Already have an account?{" "}
            <a href="/auth/login" className="text-indigo-600 font-medium">
              Sign in
            </a>
          </p>
        </form>
      </div>

      <style jsx>{`
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }
      `}</style>
    </div>
  );
}
