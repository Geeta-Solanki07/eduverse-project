"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import api from "@/lib/api";

export default function AddAcademic() {
  const router = useRouter();
  const [form, setForm] = useState({ title: "", classText: "", image: "" });
  const submit = async (e: any) => {
    e.preventDefault();
    await api.post("/academic-courses", form);
    alert("Added");
    router.push("/admin/academics/dashboard");
  };
  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h2 className="text-xl mb-4">Add Academic Course</h2>
      <form onSubmit={submit} className="space-y-3">
        <input required name="title" value={form.title} onChange={e => setForm({...form, title: e.target.value})} className="w-full border p-2 rounded" placeholder="Title" />
        <input name="classText" value={form.classText} onChange={e => setForm({...form, classText: e.target.value})} className="w-full border p-2 rounded" placeholder="Class Text"/>
        <input name="image" value={form.image} onChange={e => setForm({...form, image: e.target.value})} className="w-full border p-2 rounded" placeholder="Image URL"/>
        <button className="bg-orange-500 text-white px-4 py-2 rounded">Save</button>
      </form>
    </div>
  );
}
