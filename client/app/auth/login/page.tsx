"use client";
import { useState } from "react";
import api from "@/lib/api";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const router = useRouter();
  const [form, setForm] = useState({ email: "", password: "" });
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErr(""); setLoading(true);
    try {
      const res = await api.post("/auth/login", form);
      if (res.data.success) {
        // store token
        localStorage.setItem("token", res.data.token);
        // redirect based on role
        if (res.data.user?.role === "admin" || res.data.role === "admin") {
          router.push("/admin");
        } else {
          router.push("/");
        }
      } else {
        setErr(res.data.message || "Login failed");
      }
    } catch (error: any) {
      setErr(error?.response?.data?.message || "Server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="text-black max-w-md mx-auto p-6 bg-white rounded-md shadow">
      <h2 className="text-2xl font-semibold mb-4">Login</h2>
      {err && <p className="text-red-500 mb-2">{err}</p>}
      <input name="email" value={form.email} onChange={handleChange} placeholder="Email" type="email" className="w-full p-3 mb-3 border rounded" />
      <input name="password" value={form.password} onChange={handleChange} placeholder="Password" type="password" className="w-full p-3 mb-4 border rounded" />
      <button disabled={loading} className="w-full py-3 bg-indigo-600 text-white rounded">{loading ? "Logging in..." : "Login"}</button>
    </form>
  );
}
