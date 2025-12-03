"use client";

import { useState, useEffect, ChangeEvent } from "react";
import axios from "axios";

interface Lesson {
  title: string;
  content?: string;
}

interface Course {
  _id?: string;
  title?: string;
  slug?: string;
  summary?: string;
  price?: number;
  image?: string;
  instructor?: string;
  categoryKey?: string;
  subcategoryKey?: string;
  level?: "Beginner" | "Intermediate" | "Advanced";
  lessons?: Lesson[];
}

interface Props {
  course?: Course | null;
  onClose: () => void;
  onSaved: () => void;
}

interface Category {
  key: string;
  name: string;
}

interface Subcategory {
  key: string;
  name: string;
}

export default function AdminCourseModal({ course, onClose, onSaved }: Props) {
  const [form, setForm] = useState<Course>({
    title: "",
    slug: "",
    summary: "",
    price: 0,
    image: "",
    instructor: "",
    categoryKey: "",
    subcategoryKey: "",
    level: "Beginner",
    lessons: [{ title: "", content: "" }],
  });

  const [categories, setCategories] = useState<Category[]>([]);
  const [subcategories, setSubcategories] = useState<Subcategory[]>([]);
  const [imagePreview, setImagePreview] = useState<string>("");

  useEffect(() => {
    if (course) {
      setForm(course);
      setImagePreview(course.image || "");
    }
  }, [course]);

  // Fetch categories
  useEffect(() => {
    const fetchCategories = async () => {
      const res = await axios.get("/api/categories");
      setCategories(res.data);
    };
    fetchCategories();
  }, []);

  // Fetch subcategories when category changes
  useEffect(() => {
    if (!form.categoryKey) return;
    const fetchSubcategories = async () => {
      const res = await axios.get(`/api/categories/${form.categoryKey}`);
      setSubcategories(res.data.subcategories || []);
    };
    fetchSubcategories();
  }, [form.categoryKey]);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLessonChange = (index: number, field: string, value: string) => {
    const updatedLessons = [...(form.lessons || [])];
    updatedLessons[index] = { ...updatedLessons[index], [field]: value };
    setForm({ ...form, lessons: updatedLessons });
  };

  const addLesson = () => {
    setForm({ ...form, lessons: [...(form.lessons || []), { title: "", content: "" }] });
  };

  const removeLesson = (index: number) => {
    const updatedLessons = [...(form.lessons || [])];
    updatedLessons.splice(index, 1);
    setForm({ ...form, lessons: updatedLessons });
  };

  // Cloudinary image upload
  const handleImageUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) return;
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("image", file);

    try {
      const res = await axios.post("/api/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setForm({ ...form, image: res.data.url });
      setImagePreview(res.data.url);
    } catch (err) {
      console.error(err);
      alert("Image upload failed");
    }
  };

  const handleSubmit = async () => {
    try {
      if (course?._id) {
        await axios.put(`/api/courses/${course._id}`, form);
      } else {
        await axios.post("/api/courses", form);
      }
      onSaved();
    } catch (err) {
      console.error(err);
      alert("Failed to save course");
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex justify-center items-start pt-20 overflow-auto">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-3xl p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">{course ? "Edit Course" : "Add Course"}</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700 font-bold">&times;</button>
        </div>

        <div className="space-y-4 max-h-[80vh] overflow-auto">
          {/* Image Upload */}
          <div>
            <label className="block mb-1 font-semibold">Course Image</label>
            <input type="file" accept="image/*" onChange={handleImageUpload} />
            {imagePreview && (
              <img src={imagePreview} alt="preview" className="mt-2 w-32 h-32 object-cover rounded" />
            )}
          </div>

          {/* Title & Slug */}
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              name="title"
              placeholder="Title"
              value={form.title}
              onChange={handleChange}
              className="border p-2 rounded w-full"
            />
            <input
              type="text"
              name="slug"
              placeholder="Slug"
              value={form.slug}
              onChange={handleChange}
              className="border p-2 rounded w-full"
            />
          </div>

          {/* Summary & Price */}
          <textarea
            name="summary"
            placeholder="Summary"
            value={form.summary}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          />
          <div className="grid grid-cols-2 gap-4">
            <input
              type="number"
              name="price"
              placeholder="Price"
              value={form.price}
              onChange={handleChange}
              className="border p-2 rounded w-full"
            />
            <input
              type="text"
              name="instructor"
              placeholder="Instructor"
              value={form.instructor}
              onChange={handleChange}
              className="border p-2 rounded w-full"
            />
          </div>

          {/* Category / Subcategory / Level */}
          <div className="grid grid-cols-3 gap-4">
            <select
              name="categoryKey"
              value={form.categoryKey}
              onChange={handleChange}
              className="border p-2 rounded"
            >
              <option value="">Select Category</option>
              {categories.map((cat) => (
                <option key={cat.key} value={cat.key}>{cat.name}</option>
              ))}
            </select>

            <select
              name="subcategoryKey"
              value={form.subcategoryKey}
              onChange={handleChange}
              className="border p-2 rounded"
            >
              <option value="">Select Subcategory</option>
              {subcategories.map((sub) => (
                <option key={sub.key} value={sub.key}>{sub.name}</option>
              ))}
            </select>

            <select
              name="level"
              value={form.level}
              onChange={handleChange}
              className="border p-2 rounded"
            >
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>
          </div>

          {/* Lessons */}
          <div>
            <h3 className="font-semibold mb-2">Lessons</h3>
            {form.lessons?.map((lesson, idx) => (
              <div key={idx} className="flex gap-2 mb-2">
                <input
                  type="text"
                  placeholder="Lesson Title"
                  value={lesson.title}
                  onChange={(e) => handleLessonChange(idx, "title", e.target.value)}
                  className="border p-2 rounded w-1/3"
                />
                <input
                  type="text"
                  placeholder="Lesson Content"
                  value={lesson.content}
                  onChange={(e) => handleLessonChange(idx, "content", e.target.value)}
                  className="border p-2 rounded w-2/3"
                />
                <button
                  className="bg-red-500 text-white px-2 rounded hover:bg-red-600"
                  onClick={() => removeLesson(idx)}
                >
                  &times;
                </button>
              </div>
            ))}
            <button
              className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
              onClick={addLesson}
            >
              + Add Lesson
            </button>
          </div>

          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full mt-4"
            onClick={handleSubmit}
          >
            {course ? "Update Course" : "Add Course"}
          </button>
        </div>
      </div>
    </div>
  );
}
