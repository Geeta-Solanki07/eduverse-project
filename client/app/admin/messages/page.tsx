"use client";
import { useEffect, useState } from "react";
import API from "@/lib/api";

interface Message {
  _id: string;
  name: string;
  email: string;
  phone?: string;
  message: string;
  createdAt: string;
}

export default function AdminMessages() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const res = await API.get("/contact");
        setMessages(res.data);
      } catch (err: any) {
        console.error(err);
        setError(err.response?.data?.message || err.message);
      }
    };
    fetchMessages();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">All Contact Messages</h1>
      {error && <p className="text-red-500 mb-4">❌ {error}</p>}
      {messages.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-2 border">Name</th>
                <th className="p-2 border">Email</th>
                <th className="p-2 border">Phone</th>
                <th className="p-2 border">Message</th>
                <th className="p-2 border">Date</th>
              </tr>
            </thead>
            <tbody>
              {messages.map((msg) => (
                <tr key={msg._id} className="hover:bg-gray-50">
                  <td className="p-2 border">{msg.name}</td>
                  <td className="p-2 border">{msg.email}</td>
                  <td className="p-2 border">{msg.phone || "-"}</td>
                  <td className="p-2 border">{msg.message}</td>
                  <td className="p-2 border">{new Date(msg.createdAt).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p>No messages found.</p>
      )}
    </div>
  );
}
