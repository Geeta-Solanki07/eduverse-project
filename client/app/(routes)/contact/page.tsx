"use client";

import React, { useState, FormEvent } from "react";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import API from "@/lib/api";

interface FormState {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default function ContactPage() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    try {
      const res = await API.post("/contact", form); // ensure API baseURL is correct
      setStatus("success");
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch (err: any) {
      console.error("Contact form error:", err);
      setStatus("error");
      setErrorMsg(err.response?.data?.message || "Failed to send message");
    }
  };

  return (
    <>
      <Navbar />

      <main className="px-6 py-20 bg-white text-gray-800 min-h-screen">
        <section className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Get in Touch</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Form */}
            <div>
              {status === "success" && (
                <p className="mb-6 text-green-600 font-medium">
                  ✅ Thank you — we will get back to you soon.
                </p>
              )}
              {status === "error" && (
                <p className="mb-6 text-red-600 font-medium">❌ {errorMsg}</p>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your Name *"
                  required
                  className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                />

                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Your Email *"
                  required
                  className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                />

                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Phone"
                  className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                />

                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Your Message *"
                  rows={5}
                  required
                  className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                />

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full py-4 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition"
                >
                  {status === "submitting" ? "Sending…" : "Send Message"}
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-6 text-gray-700">
              <h2 className="text-2xl font-semibold">Contact Info</h2>
              <p>
                <strong>Email:</strong>{" "}
                <a href="mailto:dousoftit@gmail.com" className="text-orange-500">
                  dousoftit@gmail.com
                </a>
              </p>
              <p>
                <strong>Phone:</strong>{" "}
                <a href="tel:+917734996636" className="text-orange-500">
                  +91 77349 96636
                </a>
              </p>
              <p>
                <strong>Address:</strong> 9/132, Akruti Apartments, Near Akshardham Temple, Chitrakoot, Vaishali Nagar-302021
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
