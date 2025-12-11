"use client";
import { useEffect, useState } from "react";
import api from "@/lib/api";

export default function AdminChapters() {
  const [subjects, setSubjects] = useState<any[]>([]);
  const [subjectId, setSubjectId] = useState("");
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [videoUrl, setVideoUrl] = useState("");

  // Note: we fetch all subjects (admin protected route)
  useEffect(()=> {
    api.get("/admin/subjects").then(res => setSubjects(res.data || []));
  }, []);

  const submit = async (e:any) => {
    e.preventDefault();
    await api.post("/admin/chapters", { title, slug, subjectId, videoUrl, notesUrl: "" });
    setTitle(""); setSlug(""); setVideoUrl(""); setSubjectId("");
    alert("Chapter added");
  };

  return (
    <div className="max-w-3xl mx-auto text-black">
      <h2 className="text-2xl font-bold mb-4">Add Chapter</h2>
      <form onSubmit={submit} className="bg-white p-4 rounded shadow space-y-3">
        <select required value={subjectId} onChange={e=>setSubjectId(e.target.value)} className="w-full p-2 border rounded">
          <option value="">Select Subject</option>
          {subjects.map(s => <option key={s._id} value={s._id}>{s.title}</option>)}
        </select>
        <input value={title} onChange={e=>setTitle(e.target.value)} required placeholder="Chapter title" className="w-full p-2 border rounded" />
        <input value={slug} onChange={e=>setSlug(e.target.value)} required placeholder="Slug" className="w-full p-2 border rounded" />
        <input value={videoUrl} onChange={e=>setVideoUrl(e.target.value)} placeholder="Video URL (optional)" className="w-full p-2 border rounded" />
        <button className="bg-green-600 text-white px-4 py-2 rounded">Add Chapter</button>
      </form>
    </div>
  );
}
