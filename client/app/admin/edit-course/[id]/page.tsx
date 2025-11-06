"use client";
import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import api from "@/lib/api";

export default function EditCourse(){
  const params = useParams();
  const id = params?.id;
  const router = useRouter();
  const [course,setCourse] = useState<any>(null);
  const [loading,setLoading] = useState(true);
  const [saving,setSaving] = useState(false);

  useEffect(()=> {
    if(!id) return;
    api.get(`/api/courses/${id}`).then(r=>setCourse(r.data)).catch(()=>{ alert("Not found"); router.push("/admin/dashboard"); }).finally(()=>setLoading(false));
  },[id]);

  const onChange = (e:any) => setCourse({...course,[e.target.name]: e.target.value});

  const save = async (e:any) => {
    e.preventDefault();
    setSaving(true);
    try {
      await api.put(`/api/courses/${id}`, {...course, price: Number(course.price)}, { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }});
      alert("Saved");
      router.push("/admin/dashboard");
    } catch (err:any) { alert(err.response?.data?.message || "Save failed"); }
    finally { setSaving(false); }
  };

  if(loading) return <div className="p-6">Loading...</div>;
  if(!course) return null;

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded shadow mt-8">
      <h1 className="text-2xl font-semibold mb-4">Edit Course</h1>
      <form onSubmit={save} className="space-y-3">
        <input name="title" className="input-field" value={course.title || ""} onChange={onChange} required />
        <textarea name="summary" className="input-field h-24" value={course.summary || ""} onChange={onChange} />
        <input name="price" type="number" className="input-field" value={course.price ?? ""} onChange={onChange} required />
        <input name="image" className="input-field" value={course.image || ""} onChange={onChange} />
        <select name="category" className="input-field" value={course.category || "IT"} onChange={onChange}>
          <option>IT</option><option>Academics</option><option>Professional</option>
        </select>
        {course.category === "Academics" && <input name="classLevel" className="input-field" value={course.classLevel || ""} onChange={onChange} />}
        <div className="flex gap-3">
          <button disabled={saving} className="bg-orange-500 text-white px-4 py-2 rounded">{saving ? "Saving..." : "Save"}</button>
          <button type="button" onClick={()=>router.back()} className="px-4 py-2 border rounded">Cancel</button>
        </div>
      </form>
    </div>
  );
}
