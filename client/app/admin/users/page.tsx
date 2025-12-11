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
      setUsers(res.data.users || res.data); // safe fallback
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
    if (!confirm(`Are you sure you want to change this user's role to ${role}?`)) return;
    try {
      setActionLoading(id);
      await api.put(`/admin/users/${id}/role`, { role });
      await fetchUsers();
    } catch (err) {
      console.error("Error updating role:", err);
    } finally {
      setActionLoading(null);
    }
  };

  const deleteUser = async (id: string) => {
    if (!confirm("Are you sure you want to delete this user?")) return;
    try {
      setActionLoading(id);
      await api.delete(`/admin/users/${id}`);
      await fetchUsers();
    } catch (err) {
      console.error("Error deleting user:", err);
    } finally {
      setActionLoading(null);
    }
  };

  if (loading) return <p className="text-gray-600">Loading users...</p>;

  if (users.length === 0) return <p className="text-gray-600">No users found.</p>;

  return (
    <div className="text-black">
      <h1 className="text-2xl font-bold mb-4">Users Management</h1>
      <div className="overflow-x-auto">
        <table className="w-full text-left border">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-3 border">Name</th>
              <th className="p-3 border">Email</th>
              <th className="p-3 border">Role</th>
              <th className="p-3 border">Joined</th>
              <th className="p-3 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id} className="hover:bg-gray-50">
                <td className="p-3 border">{user.name}</td>
                <td className="p-3 border">{user.email}</td>
                <td className="p-3 border">
                  <select
                    value={user.role}
                    disabled={!!actionLoading}
                    onChange={(e) => changeRole(user._id, e.target.value)}
                    className="border rounded px-2 py-1"
                  >
                    <option value="user">User</option>
                    <option value="admin">Admin</option>
                  </select>
                </td>
                <td className="p-3 border">
                  {new Date(user.createdAt).toLocaleDateString()}
                </td>
                <td className="p-3 border">
                  <button
                    disabled={!!actionLoading}
                    onClick={() => deleteUser(user._id)}
                    className={`px-3 py-1 rounded text-white ${
                      actionLoading === user._id
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-red-500 hover:bg-red-600"
                    }`}
                  >
                    {actionLoading === user._id ? "Processing..." : "Delete"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
