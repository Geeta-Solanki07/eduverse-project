"use client";

import { useEffect, useState } from "react";
import api from "@/lib/api";
import Link from "next/link";

export default function AcademicDashboard() {
  const [courses, setCourses] = useState<any[]>([]);
  useEffect(() => { api.get("/academic-courses").then(r => setCourses(r.data)).catch(console.error); }, []);
  const del = async (id: string) => { if(!confirm("Delete?")) return; await api.delete(`/academic-courses/${id}`); setCourses(prev => prev.filter(c => c._id !== id)); };

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Academic Courses — Admin</h1>
        <Link href="/admin/academics/add" className="bg-orange-500 text-white px-4 py-2 rounded">Add Academic</Link>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {courses.map(c => (
          <div key={c._id} className="bg-white p-4 rounded shadow">
            <img src={c.image} alt={c.title} className="w-full h-36 object-cover rounded mb-3" />
            <h3 className="font-semibold">{c.title}</h3>
            <p className="text-sm text-gray-600">{c.classText}</p>
            <div className="flex justify-end mt-3"><button onClick={() => del(c._id)} className="text-red-500">Delete</button></div>
          </div>
        ))}
      </div>
    </div>
  );
}
