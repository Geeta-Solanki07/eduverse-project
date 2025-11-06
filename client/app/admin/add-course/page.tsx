"use client";
import { useState } from "react";
import api from "@/lib/api";
import { useRouter } from "next/navigation";

export default function AddCoursePage(){
  const router = useRouter();
  const [form,setForm] = useState({
    title:"", summary:"", price:"", image:"", instructor:"", category:"IT", classLevel:"", link:""
  });
  const [loading,setLoading] = useState(false);

  const handle = (e:any) => setForm({...form, [e.target.name]: e.target.value });

  const submit = async (e:any)=>{
    e.preventDefault();
    setLoading(true);
    try {
      // price must be number, remove commas if any
      const payload = { ...form, price: Number(String(form.price).replace(/,/g,"")) };
      await api.post("/api/courses", payload, { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }});
      alert("Course added");
      router.push("/admin/dashboard");
    } catch (err:any) {
      alert(err.response?.data?.message || "Error adding");
    } finally { setLoading(false); }
  };

  return (
    <div className="max-w-3xl text-black mx-auto p-8 mt-10 bg-white rounded-2xl shadow">
      <h1 className="text-2xl font-semibold text-orange-600 mb-4">Add Course</h1>
      <form onSubmit={submit} className="space-y-3">
        <input name="title" placeholder="Title" className="input-field" onChange={handle} required />
        <input name="summary" placeholder="Short summary" className="input-field" onChange={handle} />
        <input name="price" type="number" placeholder="Price (e.g. 2500)" className="input-field" onChange={handle} required />
        <input name="image" placeholder="Image URL" className="input-field" onChange={handle} />
        <input name="instructor" placeholder="Instructor" className="input-field" onChange={handle} />
        <select name="category" className="input-field" onChange={handle} value={form.category}>
          <option value="IT">IT</option>
          <option value="Academics">Academics</option>
          <option value="Professional">Professional</option>
        </select>
        {form.category === "Academics" && <input name="classLevel" placeholder="Class e.g. Class 10th" className="input-field" onChange={handle} />}
        <input name="link" placeholder="External link" className="input-field" onChange={handle} />
        <button disabled={loading} className="w-full bg-orange-500 text-white py-3 rounded">{loading ? "Adding..." : "Add Course"}</button>
      </form>
    </div>
  );
}
