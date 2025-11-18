"use client";
import { useEffect, useState } from "react";
import Sidebar from "@/components/admin/Sidebar";
import Navbar from "@/components/admin/Navbar";
import UserModal from "@/components/admin/UserModel";

interface User {
  _id?: string;
  name: string;
  email: string;
  role: string;
}

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [editUser, setEditUser] = useState<User | null>(null);

  const API = "https://eduverse-project.onrender.com/api/admin/users";

  const fetchUsers = async () => {
    try {
      const res = await fetch(API, {
        credentials: "include",
      });
      const data = await res.json();
      setUsers(data.users || []);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this user?")) return;

    try {
      const res = await fetch(`${API}/${id}`, {
        method: "DELETE",
        credentials: "include",
      });

      if (res.ok) setUsers(users.filter((u) => u._id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  const handleSaveUser = async (user: User) => {
    try {
      if (user._id) {
        const res = await fetch(`${API}/${user._id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          body: JSON.stringify(user),
        });

        if (res.ok)
          setUsers(users.map((u) => (u._id === user._id ? user : u)));
      } else {
        const res = await fetch(API, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          body: JSON.stringify(user),
        });

        const data = await res.json();
        setUsers([...users, data.user]);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setModalOpen(false);
      setEditUser(null);
    }
  };

  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 min-h-screen p-6 bg-gray-50">
        <Navbar />

        <div className="flex justify-between items-center mt-6 mb-4">
          <h1 className="text-2xl font-semibold text-gray-800">
            👥 Manage Users ({users.length})
          </h1>

          <button
            onClick={() => setModalOpen(true)}
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
          >
            + Add User
          </button>
        </div>

        {loading ? (
          <p className="text-gray-600">Loading users...</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-md overflow-hidden">
              <thead className="bg-blue-600 text-white">
                <tr>
                  <th className="py-3 px-4 text-left">Name</th>
                  <th className="py-3 px-4 text-left">Email</th>
                  <th className="py-3 px-4 text-left">Role</th>
                  <th className="py-3 px-4 text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr
                    key={user._id}
                    className="border-b hover:bg-gray-50 transition"
                  >
                    <td className="py-3 px-4">{user.name}</td>
                    <td className="py-3 px-4">{user.email}</td>
                    <td className="py-3 px-4 capitalize">
                      <span
                        className={`px-2 py-1 rounded text-white text-sm ${
                          user.role === "admin"
                            ? "bg-purple-600"
                            : "bg-green-600"
                        }`}
                      >
                        {user.role}
                      </span>
                    </td>

                    <td className="py-3 px-4 flex justify-center gap-2">
                      <button
                        onClick={() => {
                          setEditUser(user);
                          setModalOpen(true);
                        }}
                        className="bg-yellow-500 text-white px-3 py-1 rounded-md"
                      >
                        Edit
                      </button>

                      <button
                        onClick={() => handleDelete(user._id!)}
                        className="bg-red-500 text-white px-3 py-1 rounded-md"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        <UserModal
          show={modalOpen}
          onSave={handleSaveUser}
          onClose={() => {
            setModalOpen(false);
            setEditUser(null);
          }}
          editUser={editUser}
        />
      </div>
    </div>
  );
}
