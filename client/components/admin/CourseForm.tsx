"use client";

import { useState } from "react";

export default function CourseForm() {
  const [form, setForm] = useState({
    title: "",
    category: "",
    price: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`✅ Course Added!\n${JSON.stringify(form, null, 2)}`);
    setForm({ title: "", category: "", price: "" });
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6 max-w-lg">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Add New Course</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title"
          placeholder="Course Title"
          value={form.title}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-indigo-500"
          required
        />

        <input
          type="text"
          name="category"
          placeholder="Category (IT / Academics)"
          value={form.category}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-indigo-500"
          required
        />

        <input
          type="number"
          name="price"
          placeholder="Price (₹)"
          value={form.price}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-indigo-500"
          required
        />

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
        >
          Add Course
        </button>
      </form>
    </div>
  );
}
