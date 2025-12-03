"use client";
import { useState } from "react";
import api from "@/lib/api";

export default function ForgotPage() {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const submit = async (e: any) => {
    e.preventDefault();
    try {
      const res = await api.post("/auth/forgot", { email });
      setMsg("📩 Reset link sent to email");
    } catch (e) {
      setMsg("❌ Error sending reset email");
    }
  };

  return (
    <div className="min-h-screen flex text-black">
      
      {/* LEFT IMAGE PANEL */}
      <div className="hidden md:flex flex-1 bg-indigo-600 text-white items-center justify-center">
        <div className="text-center">
          <img src="/assets/login.webp" className="w-80 mx-auto animate-pulse" />
          <h1 className="text-3xl font-semibold mt-6">Welcome Back 👋</h1>
          <p className="opacity-90 text-sm">Continue your journey with Eduverse</p>
        </div>
      </div>

      {/* RIGHT FORM */}
      <div className="flex flex-1 items-center justify-center bg-gray-50">

           <form className="bg-white shadow-xl p-8 rounded-xl w-96" onSubmit={submit}>
        <h2 className="text-2xl font-semibold text-center mb-4">Forgot Password</h2>

        {msg && <p className="text-center mb-4 text-sm">{msg}</p>}

        <input
          type="email"
          placeholder="Email address"
          className="w-full border p-3 rounded mb-4"
          onChange={(e) => setEmail(e.target.value)}
        />

        <button className="w-full py-2.5 bg-indigo-600 text-white rounded">
          Send Reset Link
        </button>
      </form>
      </div>
    </div>
  );
}
