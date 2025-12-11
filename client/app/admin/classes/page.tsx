"use client";
import { useEffect, useState } from "react";
import api from "@/lib/api";

export default function AdminClasses() {
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [category, setCategory] = useState<"elementary"|"junior"|"senior">("elementary");
  const [list, setList] = useState<any[]>([]);

  const fetchList = async () => {
    const res = await api.get("/admin/classes");
    setList(res.data);
  };

  useEffect(()=>{ fetchList(); }, []);

  const submit = async (e:any) => {
    e.preventDefault();
    await api.post("/admin/classes", { title, slug, category });
    setTitle(""); setSlug("");
    fetchList();
  };

  const remove = async (id:string) => { await api.delete(`/admin/classes/${id}`); fetchList(); };

  return (
    <div className="max-w-3xl mx-auto text-black">
      <h2 className="text-2xl font-bold mb-4">Manage Classes</h2>
      <form onSubmit={submit} className="bg-white p-4 rounded shadow space-y-2">
        <input value={title} onChange={e=>setTitle(e.target.value)} required placeholder="Class Title" className="w-full p-2 border rounded" />
        <input value={slug} onChange={e=>setSlug(e.target.value)} required placeholder="Slug (e.g. class-6-english)" className="w-full p-2 border rounded" />
        <select value={category} onChange={e=>setCategory(e.target.value as any)} className="w-full p-2 border rounded">
          <option value="elementary">Elementary</option>
          <option value="junior">Junior</option>
          <option value="senior">Senior</option>
        </select>
        <button className="bg-blue-600 text-white px-4 py-2 rounded">Add Class</button>
      </form>

      <div className="bg-white p-4 rounded shadow mt-6">
        <h3 className="font-semibold">Existing Classes</h3>
        <ul className="mt-3 space-y-2">
          {list.map(c=>(
            <li key={c._id} className="flex justify-between items-center border-b py-2">
              <div>
                <div className="font-medium">{c.title}</div>
                <div className="text-sm text-gray-500">{c.category}</div>
              </div>
              <button onClick={()=>remove(c._id)} className="bg-red-500 text-white px-3 py-1 rounded">Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
