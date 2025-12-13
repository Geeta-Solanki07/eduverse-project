"use client";

import { useEffect, useState } from "react";
import api from "@/lib/api";

interface User {
  _id: string;
  name: string;
  email: string;
  role: "admin" | "user";
  createdAt: string;
}

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [actionLoading, setActionLoading] = useState<string | null>(null);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const res = await api.get("/admin/users");
      setUsers(res.data.users || res.data);
    } catch (err) {
      console.error("Error fetching users:", err);
      setUsers([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const changeRole = async (id: string, role: string) => {
    if (!confirm(`Change role to ${role}?`)) return;
    try {
      setActionLoading(id);
      await api.put(`/admin/users/${id}/role`, { role });
      fetchUsers();
    } catch (err) {
      console.error("Error updating role:", err);
    } finally {
      setActionLoading(null);
    }
  };

  const deleteUser = async (id: string) => {
    if (!confirm("Delete this user?")) return;
    try {
      setActionLoading(id);
      await api.delete(`/admin/users/${id}`);
      fetchUsers();
    } catch (err) {
      console.error("Error deleting user:", err);
    } finally {
      setActionLoading(null);
    }
  };

  if (loading) return <p>Loading users...</p>;
  if (users.length === 0) return <p>No users found.</p>;

  return (
    <div className="p-4 text-black">
      <h1 className="text-2xl font-bold mb-4">Users Management</h1>

      <table className="w-full border">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Email</th>
            <th className="p-2 border">Role</th>
            <th className="p-2 border">Joined</th>
            <th className="p-2 border">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u._id}>
              <td className="p-2 border">{u.name}</td>
              <td className="p-2 border">{u.email}</td>
              <td className="p-2 border">
                <select
                  value={u.role}
                  disabled={!!actionLoading}
                  onChange={(e) => changeRole(u._id, e.target.value)}
                >
                  <option value="user">User</option>
                  <option value="admin">Admin</option>
                </select>
              </td>
              <td className="p-2 border">
                {new Date(u.createdAt).toLocaleDateString()}
              </td>
              <td className="p-2 border">
                <button
                  disabled={actionLoading === u._id}
                  onClick={() => deleteUser(u._id)}
                  className="bg-red-500 text-white px-2 py-1 rounded"
                >
                  {actionLoading === u._id ? "..." : "Delete"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
