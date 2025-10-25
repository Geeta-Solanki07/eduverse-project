"use client";

import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import api from "@/lib/api";
import { useRouter } from "next/navigation";


export default function RegisterForm() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({ name: "", email: "", password: "", confirm: "", api: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    let valid = true;
    const newErrors = { name: "", email: "", password: "", confirm: "", api: "" };

    if (!name.trim()) { newErrors.name = "Name is required"; valid = false; }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { newErrors.email = "Please enter a valid email"; valid = false; }
    if (!password || password.length < 6) { newErrors.password = "Password must be at least 6 characters"; valid = false; }
    if (password !== confirmPassword) { newErrors.confirm = "Passwords do not match"; valid = false; }

    setErrors(newErrors);
    if (!valid) return;

    setLoading(true);
    try {
      const res = await api.post("/auth/register", { name, email, password });
      if (res.data.success) {
        alert("Registered successfully! Please login.");
        router.push("/auth/login");
      } else {
        setErrors(prev => ({ ...prev, api: res.data.message }));
      }
    } catch (err: any) {
      setErrors(prev => ({ ...prev, api: "Server error, try again later" }));
    } finally {
      setLoading(false);
    }
  };

  return (
    <>

  
      {errors.api && <p className="text-red-500 text-center mb-2">{errors.api}</p>}
      <form onSubmit={handleSubmit} className="space-y-5 text-black">
        <div className="relative">
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={e => setName(e.target.value)}
            className={`w-full px-4 py-3 border rounded-xl ${errors.name ? "border-red-500" : "border-gray-300"}`}
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>

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

        <div className="relative">
          <input
            type={showConfirm ? "text" : "password"}
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
            className={`w-full px-4 py-3 border rounded-xl ${errors.confirm ? "border-red-500" : "border-gray-300"}`}
          />
          <span
            className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
            onClick={() => setShowConfirm(!showConfirm)}
          >
            {showConfirm ? <FiEyeOff /> : <FiEye />}
          </span>
          {errors.confirm && <p className="text-red-500 text-sm">{errors.confirm}</p>}
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 bg-orange-500 text-white rounded-xl font-medium hover:bg-orange-600 transition"
        >
          {loading ? "Registering..." : "Sign Up"}
        </button>
      </form>
    </>
  );
}

