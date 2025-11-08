"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import api from "@/lib/api"; // axios instance with baseURL + token setup

interface LoginForm {
  email: string;
  password: string;
}

export default function LoginPage() {
  const router = useRouter();
  const [form, setForm] = useState<LoginForm>({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // ✅ Handle Input Changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  // ✅ Handle Submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    try {
      const res = await api.post("/auth/login", form);

      if (res.data?.token) {
        // ✅ Save JWT token & user role
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("role", res.data.user?.role || "user");

        setSuccess("✅ Login successful!");
        setTimeout(() => {
          const role = res.data.user?.role;
          if (role === "admin") {
            router.push("/admin"); // Admin Dashboard
          } else if (role === "teacher") {
            router.push("/teacher"); // Teacher Dashboard
          } else {
            router.push("/dashboard"); // Student/User Dashboard
          }
        }, 1000);
      } else {
        setError(res.data.message || "Invalid credentials. Try again.");
      }
    } catch (err: any) {
      setError(err?.response?.data?.msg || "Server error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row font-poppins">
      {/* Left Illustration */}
      <div className="hidden md:flex flex-1 flex-col justify-center items-center bg-gradient-to-br from-indigo-500 to-indigo-700 text-white relative overflow-hidden">
        <img
          src="https://cdni.iconscout.com/illustration/premium/thumb/login-3305943-2757111.png"
          alt="Login illustration"
          className="w-3/4 max-w-md animate-float"
        />
        <div className="text-center mt-6">
          <h2 className="text-3xl font-semibold">Welcome Back!</h2>
          <p className="opacity-80 text-sm mt-2">
            Continue your learning journey with Dousoft Eduverse
          </p>
        </div>
      </div>

      {/* Right Login Form */}
      <div className="flex flex-1 justify-center items-center bg-gray-50">
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md mx-6"
        >
          <div className="flex justify-center mb-6">
            <img
              src="/logo.png"
              alt="Dousoft Eduverse"
              className="h-12 object-contain"
            />
          </div>

          <h2 className="text-2xl font-semibold text-center mb-2 text-gray-800">
            Sign In
          </h2>
          <p className="text-center text-gray-500 mb-6 text-sm">
            Enter your credentials to access your account
          </p>

          {/* Error / Success Messages */}
          {error && (
            <p className="text-red-500 bg-red-50 border border-red-200 p-2 text-sm rounded mb-3">
              {error}
            </p>
          )}
          {success && (
            <p className="text-green-600 bg-green-50 border border-green-200 p-2 text-sm rounded mb-3">
              {success}
            </p>
          )}

          {/* Email Field */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-1">
              Email Address
            </label>
            <div className="relative">
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full border text-black border-gray-300 rounded-lg pl-10 pr-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
              <i className="fa-solid fa-envelope absolute left-3 top-3 text-gray-400"></i>
            </div>
          </div>

          {/* Password Field */}
          <div className="mb-5">
            <label className="block text-gray-700 text-sm font-medium mb-1">
              Password
            </label>
            <div className="relative">
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="w-full border text-black border-gray-300 rounded-lg pl-10 pr-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
              <i className="fa-solid fa-lock absolute left-3 top-3 text-gray-400"></i>
            </div>
          </div>

          {/* Submit Button */}
          <button
            disabled={loading}
            type="submit"
            className="w-full py-2.5 rounded-lg bg-gradient-to-r from-indigo-500 to-indigo-700 text-white font-medium hover:shadow-lg transition disabled:opacity-60"
          >
            {loading ? "Signing In..." : "Sign In"}
          </button>

          {/* Register Link */}
          <p className="text-center text-gray-500 text-sm mt-6">
            Don not have an account?{" "}
            <a href="/auth/register" className="text-indigo-600 font-medium">
              Sign up
            </a>
          </p>
        </form>
      </div>

      {/* Floating Animation */}
      <style jsx>{`
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
          100% {
            transform: translateY(0px);
          }
        }
      `}</style>
    </div>
  );
}
