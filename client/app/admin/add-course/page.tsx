"use client";

import { useState } from "react";

export default function AddCoursePage() {
  const [form, setForm] = useState({
    title: "",
    slug: "",
    category: "beginner",
    level: "IT",
    description: "",
    thumbnail: "",
  });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const res = await fetch("http://localhost:5000/api/courses/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    const data = await res.json();
    alert(data.message);
  };

  return (
    <div className="px-10 py-16 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-orange-600">Add New Course</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="title" placeholder="Course Title" className="w-full border p-2 rounded" onChange={handleChange} />
        <input name="slug" placeholder="Slug (url-name)" className="w-full border p-2 rounded" onChange={handleChange} />
        <select name="category" className="w-full border p-2 rounded" onChange={handleChange}>
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="advanced">Advanced</option>
        </select>
        <select name="level" className="w-full border p-2 rounded" onChange={handleChange}>
          <option value="IT">IT</option>
          <option value="Academics">Academics</option>
        </select>
        <textarea name="description" placeholder="Course Description" className="w-full border p-2 rounded" onChange={handleChange}></textarea>
        <input name="thumbnail" placeholder="Image URL" className="w-full border p-2 rounded" onChange={handleChange} />
        <button type="submit" className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">
          Add Course
        </button>
      </form>
    </div>
  );
}
