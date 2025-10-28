"use client";

import { useState } from "react";

export default function AddCourse() {
  const [form, setForm] = useState({
    title: "",
    type: "",
    pages: "",
    rating: "",
    reviews: "",
    description: "",
    price: "",
    badge: "",
    image: "",
    isFree: false,
    category: "",
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const res = await fetch("/api/courses", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    const data = await res.json();
    alert(data.message);
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-50 p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-xl space-y-4"
      >
        <h2 className="text-2xl font-semibold mb-4 text-center text-orange-600">
          Add New Course
        </h2>

        {Object.keys(form).map((key) =>
          key !== "isFree" ? (
            <input
              key={key}
              type="text"
              placeholder={key}
              value={form[key as keyof typeof form] as string}
              onChange={(e) =>
                setForm({ ...form, [key]: e.target.value })
              }
              className="w-full border p-2 rounded-lg"
            />
          ) : (
            <label key={key} className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={form.isFree}
                onChange={(e) => setForm({ ...form, isFree: e.target.checked })}
              />
              Is Free
            </label>
          )
        )}

        <button
          type="submit"
          className="bg-orange-600 hover:bg-orange-500 text-white w-full py-2 rounded-lg font-semibold"
        >
          Add Course
        </button>
      </form>
    </div>
  );
}
