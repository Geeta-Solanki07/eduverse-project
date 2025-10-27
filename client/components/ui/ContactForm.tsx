"use client";
import { useState } from "react";
import axios from "axios";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/contact`, form);
      setStatus("Message sent successfully!");
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      setStatus("Failed to send. Try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 shadow-lg rounded-lg space-y-4">
      <input
        type="text"
        placeholder="Name"
        className="w-full border p-2 rounded"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        required
      />
      <input
        type="email"
        placeholder="Email"
        className="w-full border p-2 rounded"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        required
      />
      <input
        type="tel"
        placeholder="Phone"
        className="w-full border p-2 rounded"
        value={form.phone}
        onChange={(e) => setForm({ ...form, phone: e.target.value })}
        required
      />
      <textarea
        placeholder="Message"
        className="w-full border p-2 rounded"
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
      ></textarea>
      <button className="w-full bg-green-700 text-white py-2 rounded hover:bg-green-800">
        Send Message
      </button>
      {status && <p className="text-center text-sm text-gray-600">{status}</p>}
    </form>
  );
}
