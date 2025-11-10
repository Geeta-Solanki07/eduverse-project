"use client";
import ProtectedRoute from "@/components/auth/ProtectedRoute";

export default function StudentDashboard() {
  return (
    <ProtectedRoute allowedRoles={["student", "teacher", "admin"]}>
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-white p-8">
        <h1 className="text-3xl font-bold text-indigo-700 mb-4">Welcome to EduVerse</h1>
        <p className="text-gray-600 mb-6">Access your courses, progress, and announcements here.</p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <h2 className="text-xl font-semibold mb-2">My Courses</h2>
            <p className="text-gray-500 text-sm">View enrolled courses and progress.</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <h2 className="text-xl font-semibold mb-2">Announcements</h2>
            <p className="text-gray-500 text-sm">Latest updates from teachers and admins.</p>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}
