"use client";
import API from "@/lib/api";
import { useEffect, useState } from "react";

export default function AdminUsers(){
  const [users,setUsers] = useState<any[]>([]);
  useEffect(()=>{ fetchUsers(); },[]);
  const fetchUsers = async ()=> {
    try {
      const res = await API.get("/admin/users");
      setUsers(res.data);
    } catch (err) { console.error(err); }
  };
  const handleDelete = async (id:string)=>{
    if(!confirm("Delete user?")) return;
    await API.delete(`/admin/users/${id}`);
    setUsers(prev=>prev.filter(u=>u._id!==id));
  };
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">All Users</h2>
      <div className="bg-white p-4 rounded shadow">
        <table className="w-full">
          <thead><tr className="border-b"><th>Name</th><th>Email</th><th>Role</th><th>Action</th></tr></thead>
          <tbody>
            {users.map(u=>(
              <tr key={u._id} className="border-b hover:bg-gray-50">
                <td className="py-2">{u.name}</td>
                <td>{u.email}</td>
                <td>{u.role}</td>
                <td><button onClick={()=>handleDelete(u._id)} className="text-red-600">Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
