"use client";
import ProtectedRoute from "@/components/auth/ProtectedRoute";

export default function AdminDashboard() {
  return (
    <ProtectedRoute allowedRoles={["admin"]}>
      <div className="min-h-screen bg-gray-100 p-6">
        <h1 className="text-3xl font-semibold text-indigo-700 mb-6">Admin Dashboard</h1>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h2 className="text-xl font-medium mb-2">Manage Users</h2>
            <p className="text-gray-500 text-sm">Add, update, or remove user accounts.</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h2 className="text-xl font-medium mb-2">Manage Courses</h2>
            <p className="text-gray-500 text-sm">Create and update course details.</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h2 className="text-xl font-medium mb-2">Messages</h2>
            <p className="text-gray-500 text-sm">View messages from contact form.</p>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}
