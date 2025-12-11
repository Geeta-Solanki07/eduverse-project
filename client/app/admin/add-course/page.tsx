"use client";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function AddCourse() {
  const router = useRouter();
  const [form, setForm] = useState({
    title: "",
    slug: "",
    summary: "",
    price: 0,
    instructor: "",
    categoryKey: "",
    subcategoryKey: "",
    level: "Beginner",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post(
        "http://localhost:5000/api/courses",
        form,
        { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
      );
      alert("Course added successfully!");
      router.push("/admin/courses");
    } catch (err) {
      console.error(err);
      alert("Error adding course");
    }
  };

  return (
    <div className="max-w-xl mx-auto text-black p-6 bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-4">Add New Course</h1>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input name="title" placeholder="Title" onChange={handleChange} className="w-full p-2 border rounded" />
        <input name="slug" placeholder="Slug (unique)" onChange={handleChange} className="w-full p-2 border rounded" />
        <input name="summary" placeholder="Summary" onChange={handleChange} className="w-full p-2 border rounded" />
        <input type="number" name="price" placeholder="Price" onChange={handleChange} className="w-full p-2 border rounded" />
        <input name="instructor" placeholder="Instructor" onChange={handleChange} className="w-full p-2 border rounded" />
        <input name="categoryKey" placeholder="Category Key" onChange={handleChange} className="w-full p-2 border rounded" />
        <input name="subcategoryKey" placeholder="Subcategory Key" onChange={handleChange} className="w-full p-2 border rounded" />
        <select name="level" onChange={handleChange} className="w-full p-2 border rounded">
          <option>Beginner</option>
          <option>Intermediate</option>
          <option>Advanced</option>
        </select>
        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded">Add Course</button>
      </form>
    </div>
  );
}
