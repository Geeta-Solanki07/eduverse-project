"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import api from "@/lib/api";
import useAuthRedirect from "@/app/hooks/useAuthRedirect";

export default function RegisterPage() {
  useAuthRedirect(); // already logged in → redirect

  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMsg("");

    try {
      const res = await api.post("/auth/register", {
        name: form.name,
        email: form.email,
        password: form.password,
      });

      // ✅ SUCCESS CONDITION FIX
      if (res.data?.message) {
        setMsg("✅ Account created successfully! Redirecting to login...");

        setTimeout(() => {
          router.push("/auth/login");
        }, 1200);
      }
    } catch (err: any) {
      setMsg(
        "❌ " +
          (err?.response?.data?.message ||
            "Registration failed, try again")
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-50">

      {/* LEFT IMAGE */}
      <div className="hidden md:flex w-1/2 bg-indigo-600 text-white items-center justify-center">
        <div className="text-center px-6">
          <img src="/assets/login.webp" className="w-80 mx-auto" />
          <h2 className="text-3xl font-semibold mt-6">
            Join Eduverse 🚀
          </h2>
          <p className="opacity-90 text-sm mt-2">
            Learn. Grow. Succeed.
          </p>
        </div>
      </div>

      {/* FORM */}
      <div className="flex w-full md:w-1/2 items-center justify-center px-4">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md"
        >
          <h2 className="text-2xl font-semibold text-center mb-6">
            Create Account
          </h2>

          {msg && (
            <p className="mb-4 text-sm p-2 bg-gray-100 rounded text-center">
              {msg}
            </p>
          )}

          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="Full Name"
            className="w-full border mb-4 p-3 rounded"
          />

          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="Email Address"
            className="w-full border mb-4 p-3 rounded"
          />

          <input
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            minLength={6}
            required
            placeholder="Password"
            className="w-full border mb-6 p-3 rounded"
          />

          <button
            disabled={loading}
            className="w-full py-3 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
          >
            {loading ? "Creating Account..." : "Register"}
          </button>

          <p className="text-center text-sm mt-5">
            Already have an account?{" "}
            <a href="/auth/login" className="text-indigo-600 font-medium">
              Login
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
