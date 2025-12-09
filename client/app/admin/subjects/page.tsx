"use client";
import { useEffect, useState } from "react";
import api from "@/lib/api";

export default function AdminSubjects() {
  const [classes, setClasses] = useState<any[]>([]);
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [classId, setClassId] = useState("");

  useEffect(()=> {
    api.get("/academics/classes").then(res => setClasses(res.data.classes || res.data));
  }, []);

  const submit = async (e:any) => {
    e.preventDefault();
    await api.post("/admin/subjects", { title, slug, classId });
    setTitle(""); setSlug(""); setClassId("");
    alert("Subject added");
  };

  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Add Subject</h2>
      <form onSubmit={submit} className="bg-white p-4 rounded shadow space-y-3">
        <select required value={classId} onChange={e=>setClassId(e.target.value)} className="w-full p-2 border rounded">
          <option value="">Select Class</option>
          {classes.map(c => <option key={c._id} value={c._id}>{c.title}</option>)}
        </select>
        <input value={title} onChange={e=>setTitle(e.target.value)} required placeholder="Subject title" className="w-full p-2 border rounded" />
        <input value={slug} onChange={e=>setSlug(e.target.value)} required placeholder="Slug" className="w-full p-2 border rounded" />
        <button className="bg-indigo-600 text-white px-4 py-2 rounded">Add Subject</button>
      </form>
    </div>
  );
}
