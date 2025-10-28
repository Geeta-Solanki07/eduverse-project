"use client";

import { useState } from "react";
import { FiEye, FiEyeOff, FiUser, FiMail, FiLock } from "react-icons/fi";
import api from "@/lib/api";
import { motion } from "framer-motion";

export default function RegisterForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");
    setSuccessMsg("");
    setLoading(true);

    try {
      const res = await api.post("/auth/register", form);
      if (res.status === 201 || res.status === 200) {
        setSuccessMsg("✅ Registration successful! Please login to continue.");
        setForm({ name: "", email: "", password: "" });
      }
    } catch (err: any) {
      setErrorMsg(err.response?.data?.message || "Registration failed!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br text-black from-blue-100 to-indigo-200 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white shadow-2xl rounded-3xl p-8 max-w-md w-full"
      >
        <h2 className="text-3xl font-bold text-center text-indigo-600 mb-4">
          Create Your Account
        </h2>
        <p className="text-gray-500 text-center mb-6">
          Join our Eduverse community today 🚀
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name */}
          <div className="relative">
            <FiUser className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full pl-10 pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

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

          {/* Success / Error message */}
          {successMsg && (
            <p className="text-green-600 text-sm text-center">{successMsg}</p>
          )}
          {errorMsg && (
            <p className="text-red-500 text-sm text-center">{errorMsg}</p>
          )}

          {/* Submit button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-indigo-600 text-white font-semibold py-2 rounded-lg hover:bg-indigo-700 transition duration-300"
          >
            {loading ? "Creating Account..." : "Register"}
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-4">
          Already have an account?{" "}
          <span
            className="text-indigo-600 font-semibold hover:underline cursor-pointer"
            onClick={() => (window.location.href = "/auth/login")}
          >
            Login here
          </span>
        </p>
      </motion.div>
    </div>
  );
}
