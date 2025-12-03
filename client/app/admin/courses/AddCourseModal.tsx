"use client";

import { useState, useEffect } from "react";
import axios from "axios";

interface Props {
  onClose: () => void;
}

export default function AddCourseModal({ onClose }: Props) {
  const [categories, setCategories] = useState<{ key: string; name: string }[]>([]);
  const [subcategories, setSubcategories] = useState<{ key: string; name: string }[]>([]);
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

  const fetchCategories = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/categories");
      setCategories(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const fetchSubcategories = async (categoryKey: string) => {
    try {
      const res = await axios.get(`http://localhost:5000/api/categories/${categoryKey}`);
      setSubcategories(res.data.subcategories);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setForm({ ...form, categoryKey: e.target.value, subcategoryKey: "" });
    fetchSubcategories(e.target.value);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/courses", form, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      alert("Course added!");
      onClose();
    } catch (err) {
      console.error(err);
      alert("Error adding course");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center">
      <div className="bg-white p-6 rounded w-full max-w-lg">
        <h2 className="text-xl font-bold mb-4">Add New Course</h2>
        <form className="space-y-3" onSubmit={handleSubmit}>
          <input name="title" placeholder="Title" className="w-full p-2 border rounded" onChange={handleChange} />
          <input name="slug" placeholder="Slug" className="w-full p-2 border rounded" onChange={handleChange} />
          <input name="summary" placeholder="Summary" className="w-full p-2 border rounded" onChange={handleChange} />
          <input type="number" name="price" placeholder="Price" className="w-full p-2 border rounded" onChange={handleChange} />
          <input name="instructor" placeholder="Instructor" className="w-full p-2 border rounded" onChange={handleChange} />

          <select name="categoryKey" onChange={handleCategoryChange} className="w-full p-2 border rounded">
            <option value="">Select Category</option>
            {categories.map((c) => <option key={c.key} value={c.key}>{c.name}</option>)}
          </select>

          <select name="subcategoryKey" onChange={handleChange} className="w-full p-2 border rounded">
            <option value="">Select Subcategory</option>
            {subcategories.map((s) => <option key={s.key} value={s.key}>{s.name}</option>)}
          </select>

          <select name="level" onChange={handleChange} className="w-full p-2 border rounded">
            <option>Beginner</option>
            <option>Intermediate</option>
            <option>Advanced</option>
          </select>

          <div className="flex justify-end space-x-2">
            <button type="button" className="px-4 py-2 bg-gray-300 rounded" onClick={onClose}>Cancel</button>
            <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">Add</button>
          </div>
        </form>
      </div>
    </div>
  );
}
