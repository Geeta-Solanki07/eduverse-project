"use client";
import { useEffect, useState } from "react";
import api from "@/lib/api";
import Link from "next/link";

export default function AdminDashboard(){
  const [courses,setCourses] = useState<any[]>([]);
  const [loading,setLoading] = useState(true);

  useEffect(()=>{
    api.get("/api/courses").then(r=>{ setCourses(r.data); }).catch(e=>console.error(e)).finally(()=>setLoading(false));
  },[]);

  const deleteCourse = async (id:string)=>{
    if(!confirm("Delete?")) return;
    try {
      await api.delete(`/api/courses/${id}`, { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }});
      setCourses(prev=>prev.filter(c=>c._id !== id));
    } catch (err:any){ alert(err.response?.data?.message || "Delete failed"); }
  };

  if(loading) return <div className="p-6">Loading...</div>;

  const totalValue = courses.reduce((s,c)=>s + (Number(c.price)||0), 0);

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-orange-600">Admin Dashboard</h1>
        <Link href="/admin/add-course" className="bg-orange-500 text-white px-4 py-2 rounded">+ Add Course</Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <div className="p-4 bg-white rounded shadow"><div className="text-sm text-gray-500">Total Courses</div><div className="text-2xl font-bold">{courses.length}</div></div>
        <div className="p-4 bg-white rounded shadow"><div className="text-sm text-gray-500">Approx Value</div><div className="text-2xl font-bold">₹{totalValue.toLocaleString()}</div></div>
        <div className="p-4 bg-white rounded shadow"><div className="text-sm text-gray-500">Recent</div><div className="text-2xl font-bold">Last 7d</div></div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {courses.map(c => (
          <div key={c._id} className="bg-white rounded p-4 shadow">
            <div className="flex gap-4">
              <img src={c.image || "/assets/default-course.png"} alt={c.title} className="w-28 h-20 object-cover rounded"/>
              <div className="flex-1">
                <h2 className="font-semibold">{c.title}</h2>
                <p className="text-sm text-gray-600 line-clamp-2">{c.summary}</p>
                <div className="mt-2 flex justify-between items-center">
                  <div className="text-orange-600 font-bold">₹{Number(c.price).toLocaleString()}</div>
                  <div className="flex gap-2">
                    <Link href={`/admin/edit-course/${c._id}`} className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded">Edit</Link>
                    <button onClick={()=>deleteCourse(c._id)} className="px-3 py-1 bg-red-50 text-red-600 rounded">Delete</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-xs text-gray-400 mt-3">Added: {new Date(c.createdAt).toLocaleString()}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
