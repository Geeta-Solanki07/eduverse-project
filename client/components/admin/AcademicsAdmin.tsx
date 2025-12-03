// components/admin/AcademicsAdmin.tsx
"use client";

import { useEffect, useState } from "react";
import api from "@/lib/api";

type ClassItem = { _id?: string; title: string; slug: string; category: string; image?: string; description?: string; meta?: any };

export default function AcademicsAdmin() {
  const [list, setList] = useState<ClassItem[]>([]);
  const [editing, setEditing] = useState<ClassItem | null>(null);
  const [show, setShow] = useState(false);
  const [form, setForm] = useState<ClassItem>({ title: "", slug: "", category: "elementary", image: "", description: "" });

  const fetch = () => api.get("/academics/classes").then(r => setList(r.data)).catch(console.log);

  useEffect(() => { fetch(); }, []);

  const save = async () => {
    try {
      if (editing) {
        await api.put(`/academics/classes/${editing.slug}`, form);
      } else {
        await api.post("/academics/classes", form);
      }
      setShow(false); setEditing(null); fetch();
    } catch (err: any) {
      alert(err?.response?.data?.message || "Error");
    }
  };

  const remove = async (slug?: string) => {
    if (!slug) return;
    if (!confirm("Delete?")) return;
    await api.delete(`/academics/classes/${slug}`);
    fetch();
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Academics - Classes</h2>
        <button onClick={() => { setEditing(null); setForm({ title: "", slug: "", category: "elementary", image: "", description: "" }); setShow(true); }} className="bg-blue-600 text-white px-3 py-2 rounded">+ Add Class</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {list.map(c => (
          <div key={c._id} className="p-4 border rounded">
            <h3 className="font-semibold">{c.title}</h3>
            <p className="text-sm text-gray-600">{c.category}</p>
            <div className="mt-3 flex gap-2">
              <button onClick={() => { setEditing(c); setForm(c); setShow(true); }} className="px-2 py-1 bg-yellow-400 rounded">Edit</button>
              <button onClick={() => remove(c.slug)} className="px-2 py-1 bg-red-500 text-white rounded">Delete</button>
            </div>
          </div>
        ))}
      </div>

      {show && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white p-6 rounded w-full max-w-lg">
            <h3 className="text-lg font-semibold mb-3">{editing ? "Edit Class" : "Add Class"}</h3>
            <div className="space-y-3">
              <input value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} placeholder="Title" className="w-full border p-2 rounded" />
              <input value={form.slug} onChange={e => setForm({ ...form, slug: e.target.value })} placeholder="Slug (unique)" className="w-full border p-2 rounded" />
              <select value={form.category} onChange={e => setForm({ ...form, category: e.target.value })} className="w-full border p-2 rounded">
                <option value="elementary">Elementary</option>
                <option value="junior">Junior</option>
                <option value="senior">Senior</option>
              </select>
              <input value={form.image} onChange={e => setForm({ ...form, image: e.target.value })} placeholder="Image URL" className="w-full border p-2 rounded" />
              <textarea value={form.description} onChange={e => setForm({ ...form, description: e.target.value })} placeholder="Description" className="w-full border p-2 rounded" />
            </div>

            <div className="flex justify-end gap-2 mt-4">
              <button onClick={() => setShow(false)} className="px-4 py-2 border rounded">Cancel</button>
              <button onClick={save} className="px-4 py-2 bg-blue-600 text-white rounded">{editing ? "Update" : "Create"}</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
