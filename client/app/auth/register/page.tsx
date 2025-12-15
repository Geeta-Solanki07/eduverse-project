"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import api from "@/lib/api";
import useAuthRedirect from "@/app/hooks/useAuthRedirect";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

export default function RegisterPage() {
  const ready = useAuthRedirect();
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState("");

  if (!ready) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });

    if (e.target.name === "password") {
      const pass = e.target.value;
      if (pass.length < 6) setPasswordStrength("Weak");
      else if (pass.length < 10) setPasswordStrength("Medium");
      else setPasswordStrength("Strong");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMsg("");

    try {
      await api.post("/auth/register", form);
      setMsg("✅ Account created successfully. Redirecting to login...");
      setTimeout(() => router.push("/auth/login"), 1200);
    } catch (err: any) {
      setMsg(err?.response?.data?.message || "❌ Registration failed");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = () => {
    window.location.href = "/auth/google";
  };

  const handleGithubLogin = () => {
    window.location.href = "/auth/github";
  };

  return (
    <div className="min-h-screen text-black flex flex-col md:flex-row bg-gray-50">

      {/* LEFT IMAGE */}
      <div className="hidden md:flex w-1/2 bg-indigo-600 items-center justify-center">
        <img src="/assets/login.webp" alt="Register" className="w-96" />
      </div>

      {/* RIGHT FORM */}
      <div className="flex w-full md:w-1/2 items-center justify-center px-4">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md"
        >
          <h2 className="text-3xl font-semibold text-center mb-6">
            Create Account
          </h2>

          {msg && (
            <p
              className={`text-center mb-4 text-sm p-2 rounded ${
                msg.includes("✅") ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
              }`}
            >
              {msg}
            </p>
          )}

          <input
            name="name"
            required
            placeholder="Full Name"
            className="w-full border p-3 mb-4 rounded"
            value={form.name}
            onChange={handleChange}
          />

          <input
            name="email"
            type="email"
            required
            placeholder="Email"
            className="w-full border p-3 mb-4 rounded"
            value={form.email}
            onChange={handleChange}
          />

          {/* Password Field */}
          <div className="relative mb-2">
            <input
              name="password"
              type={showPassword ? "text" : "password"}
              required
              minLength={6}
              placeholder="Password"
              className="w-full border p-3 rounded pr-10"
              value={form.password}
              onChange={handleChange}
            />
            <span
              className="absolute right-3 top-3 cursor-pointer text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <AiFillEyeInvisible size={20} /> : <AiFillEye size={20} />}
            </span>
          </div>

          {/* Password Strength */}
          {form.password && (
            <p className={`text-sm mb-4 ${
              passwordStrength === "Weak"
                ? "text-red-600"
                : passwordStrength === "Medium"
                ? "text-yellow-600"
                : "text-green-600"
            }`}>
              Password Strength: {passwordStrength}
            </p>
          )}

          <button
            disabled={loading}
            className="w-full bg-indigo-600 text-white py-3 rounded hover:bg-indigo-700 transition disabled:opacity-50"
          >
            {loading ? "Creating..." : "Register"}
          </button>

          {/* OR Divider */}
          {/* <div className="flex items-center my-4">
            <hr className="flex-grow border-gray-300" />
            <span className="px-2 text-gray-400 text-sm">OR</span>
            <hr className="flex-grow border-gray-300" />
          </div> */}

          {/* OAuth Buttons */}
          {/* <div className="flex flex-col gap-3">
            <button
              type="button"
              onClick={handleGoogleLogin}
              className="w-full border py-2 rounded flex items-center justify-center gap-2 hover:bg-gray-100 transition"
            >
              <FcGoogle size={20} />
              Continue with Google
            </button>

            <button
              type="button"
              onClick={handleGithubLogin}
              className="w-full border py-2 rounded flex items-center justify-center gap-2 hover:bg-gray-100 transition"
            >
              <FaGithub size={20} />
              Continue with GitHub
            </button>
          </div> */}

          {/* LOGIN LINK */}
          <p className="text-center text-sm mt-4">
            Already have an account?{" "}
            <span
              onClick={() => router.push("/auth/login")}
              className="text-indigo-600 font-medium cursor-pointer hover:underline"
            >
              Login
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}
