"use client";

import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import api from "@/lib/api";
import { useRouter } from "next/navigation";
import SocialButtons from "./SocialButtons";

interface Errors {
  email: string;
  password: string;
  api: string;
}

export default function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Errors>({ email: "", password: "", api: "" });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let valid = true;
    const newErrors: Errors = { email: "", password: "", api: "" };

    // Validate email
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email";
      valid = false;
    }

    // Validate password
    if (!password || password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
      valid = false;
    }

    setErrors(newErrors);
    if (!valid) return;

    setLoading(true);
    try {
      const res = await api.post("/auth/login", { email, password });
      if (res.data.success) {
        router.push("/");
      } else {
        setErrors(prev => ({ ...prev, api: res.data.message || "Login failed" }));
      }
    } catch (error) {
      // Type-safe error handling
      const message = error instanceof Error ? error.message : "Server error, try again later";
      setErrors(prev => ({ ...prev, api: message }));
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {errors.api && <p className="text-red-500 text-center mb-2">{errors.api}</p>}
      <form onSubmit={handleSubmit} className="text-black space-y-5">
        <div className="relative">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className={`w-full px-4 py-3 border rounded-xl ${errors.email ? "border-red-500" : "border-gray-300"}`}
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>

        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className={`w-full px-4 py-3 border rounded-xl ${errors.password ? "border-red-500" : "border-gray-300"}`}
          />
          <span
            className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FiEyeOff /> : <FiEye />}
          </span>
          {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 bg-indigo-600 text-white rounded-xl font-medium hover:bg-indigo-700 transition"
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>

      <div className="my-4 flex items-center text-gray-400 text-sm">
        <span className="grow border-t" /> <span className="mx-2">or continue with</span> <span className="grow border-t" />
      </div>
      <SocialButtons />
    </>
  );
}
