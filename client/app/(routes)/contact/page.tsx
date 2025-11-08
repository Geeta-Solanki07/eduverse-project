"use client";
import React, { useState, FormEvent } from "react";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import API from "@/lib/api";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");
    try {
      await API.post("/contact", form);
      setStatus("success");
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch (err: any) {
      console.error(err);
      setStatus("error");
      setErrorMsg(err.response?.data?.message || "Failed to send message");
    }
  };

  return (
    <>
      <Navbar />
      <main className="px-6 py-20 bg-white text-gray-800">
        <section className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Get in Touch</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              {status === "success" && <p className="mb-6 text-green-600">✅ Thank you — we will get back to you soon.</p>}
              {status === "error" && <p className="mb-6 text-red-600">❌ {errorMsg}</p>}

              <form onSubmit={handleSubmit} className="space-y-6">
                <input name="name" value={form.name} onChange={handleChange} placeholder="Your Name *" required className="w-full p-4 border rounded-lg" />
                <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Your Email *" required className="w-full p-4 border rounded-lg" />
                <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="Phone" className="w-full p-4 border rounded-lg" />
                <textarea name="message" value={form.message} onChange={handleChange} placeholder="Your Message *" rows={5} required className="w-full p-4 border rounded-lg" />
                <button type="submit" disabled={status === "submitting"} className="w-full py-4 bg-orange-500 text-white rounded-lg">
                  {status === "submitting" ? "Sending…" : "Send Message"}
                </button>
              </form>
            </div>
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold">Contact Info</h2>
              <p>Email: <a href="mailto:dousoftit@gmail.com" className="text-orange-500">dousoftit@gmail.com</a></p>
              <p>Phone: <a href="tel:+917734996636" className="text-orange-500">+91 77349 96636</a></p>
              <p>Address: 9/132, Akruti Apartments, Near Akshardham Temple, Chitrakoot, Vaishali Nagar-302021</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
