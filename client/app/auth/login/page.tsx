"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import api from "@/lib/api";

export default function LoginPage() {
  const router = useRouter();
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  const handleChange = (e: any) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setMsg(""); setLoading(true);

    try {
      const res = await api.post("/auth/login", form);

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      localStorage.setItem("role", res.data.user.role);

      setMsg("✅ Login successful! Redirecting...");
      setTimeout(() => {
        if (res.data.user.role === "admin") router.push("/admin/dashboard");
        else router.push("/user/dashboard");
      }, 1000);

    } catch (err: any) {
      setMsg("⚠️ " + (err?.response?.data?.message || "Server error"));
    } finally { setLoading(false); }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row font-poppins">
      <div className="hidden md:flex flex-1 justify-center items-center bg-gradient-to-br from-indigo-500 to-indigo-700 text-white">
        <div className="flex flex-col items-center">
          <img src="/assets/login.webp" className="w-3/4 max-w-md animate-float" />
          <h2 className="text-3xl font-semibold mt-6">Welcome Back!</h2>
          <p className="opacity-80 text-sm mt-2">Continue your learning journey with Eduverse</p>
        </div>
      </div>

      <div className="flex flex-1 justify-center items-center bg-gray-50">
        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md mx-6">
          <div className="flex justify-center mb-6">
            <img src="/logo.png" className="h-12 object-contain" />
          </div>
          <h2 className="text-2xl font-semibold text-center text-gray-800 mb-2">Sign In</h2>

          {msg && (
            <p className={`text-sm p-2 mb-4 rounded ${
              msg.startsWith("✅") ? "text-green-600 bg-green-50 border border-green-200" : "text-red-600 bg-red-50 border border-red-200"}`}>
              {msg}
            </p>
          )}

          <div className="mb-4">
            <label className="block text-gray-700 text-sm mb-1">Email</label>
            <input type="email" name="email" value={form.email} onChange={handleChange}
              className="w-full border text-black border-gray-300 rounded-lg pl-3 pr-3 py-2.5 focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your email" required />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm mb-1">Password</label>
            <input type="password" name="password" value={form.password} onChange={handleChange}
              className="w-full border text-black border-gray-300 rounded-lg pl-3 pr-3 py-2.5 focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your password" required />
          </div>

          <button disabled={loading} type="submit"
            className="w-full py-2.5 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition disabled:opacity-60">
            {loading ? "Signing in..." : "Sign In"}
          </button>

          <p className="text-center text-gray-500 text-sm mt-6">
            Don’t have an account? <a href="/auth/register" className="text-indigo-600 font-medium">Sign up</a>
          </p>
        </form>
      </div>

      <style jsx>{`
        .animate-float { animation: float 6s ease-in-out infinite; }
        @keyframes float { 0% { transform: translateY(0); } 50% { transformY(-15px); } 100% { transformY(0); } }
      `}</style>
    </div>
  );
}
