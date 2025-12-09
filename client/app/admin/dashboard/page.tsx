"use client";
import { useState } from "react";

export default function AdminDashboard() {
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    await fetch("http://localhost:5000/api/academics", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, slug, subjects: [] })
    });

    alert("Class Added Successfully ✅");
    setTitle("");
    setSlug("");
  };

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-5">Add Academic Class</h1>

      <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
        <input
          className="border p-2 w-full"
          placeholder="Class Name"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />

        <input
          className="border p-2 w-full"
          placeholder="Slug (eg: class-10)"
          value={slug}
          onChange={e => setSlug(e.target.value)}
        />

        <button className="bg-black text-white px-5 py-2">
          Add Class
        </button>
      </form>
    </div>
  );
}
