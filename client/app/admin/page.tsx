"use client";
import DashboardCards from "@/components/admin/DashboardCards";
import API from "@/lib/api";
import { useEffect, useState } from "react";

export default function AdminHome(){
  const [stats,setStats] = useState({ users:0, courses:0 });

  useEffect(()=>{
    const fetchStats = async ()=>{
      try {
        const users = await API.get("/admin/users"); // admin-only
        const courses = await API.get("/admin/courses"); // public but fine
        setStats({ users: users.data.length, courses: courses.data.length });
      } catch (err) { console.error(err); }
    };
    fetchStats();
  },[]);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      <DashboardCards stats={[
        { title: "Users", value: stats.users },
        { title: "Courses", value: stats.courses },
        { title: "Active", value: "—" },
      ]} />
    </div>
  );
}
