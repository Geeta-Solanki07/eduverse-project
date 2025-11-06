"use client";
import { useState } from "react";
import API from "@/lib/api";

export default function RegisterPage() {
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [message,setMessage] = useState("");

  const handleSubmit = async (e:React.FormEvent) => {
    e.preventDefault();
    setMessage("⏳ Registering...");
    try {
      const res = await API.post("/auth/register", { name, email, password });
      setMessage("✅ Account created successfully! Please login.");
    } catch (err:any) {
      setMessage("❌ " + (err?.response?.data?.message || "Registration failed"));
    }
  };

  return (
    // ... same markup as your form (paste the JSX you gave) ...
    // Use the same form you already have — unchanged
    <div className=" text-black flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-100 to-purple-50 px-4">
      <div className="bg-white shadow-2xl rounded-3xl p-10 w-full max-w-md border border-indigo-100">
        <h2 className="text-3xl font-bold text-center text-indigo-700 mb-2">Create Account</h2>
        <p className="text-center text-gray-500 mb-8">Join Eduverse and start learning today!</p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-gray-700 font-medium mb-1">Full Name</label>
            <input value={name} onChange={(e)=>setName(e.target.value)} required className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-indigo-400 outline-none transition" />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Email Address</label>
            <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" required className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-indigo-400 outline-none transition" />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Password</label>
            <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" required className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-indigo-400 outline-none transition" />
          </div>
          <button type="submit" className="w-full bg-indigo-600 text-white py-3 rounded-xl font-semibold hover:bg-indigo-700 shadow-lg hover:shadow-indigo-300/50 transition-all">Register</button>
        </form>

        {message && <p className="mt-6 text-center text-gray-700 font-medium">{message}</p>}

        <p className="text-center text-sm text-gray-500 mt-6">Already have an account? <a href="/auth/login" className="text-indigo-600 font-semibold hover:underline">Login here</a></p>
      </div>
    </div>
  );
}
