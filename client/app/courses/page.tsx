"use client";
import { useEffect, useState } from "react";
import Sidebar from "@/components/admin/Sidebar";
import Navbar from "@/components/admin/Navbar";
import CourseModal from "@/components/admin/CourseModel";

interface Course {
  _id?: string;
  title: string;
  description: string;
  category: string;
  price: number;
  image?: string;
}

export default function CoursesPage() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [editCourse, setEditCourse] = useState<Course | null>(null);

  const fetchCourses = async () => {
    try {
      const res = await fetch("https://eduverse-project.onrender.com/admin/courses");
      const data = await res.json();
      setCourses(data.courses || []);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this course?")) return;
    try {
      const res = await fetch(`https://eduverse-project.onrender.com/admin/courses/${id}`, { method: "DELETE" });
      if (res.ok) setCourses(courses.filter((c) => c._id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  const handleSaveCourse = async (course: Course) => {
    try {
      if (course._id) {
        // Update course
        const res = await fetch(`https://eduverse-project.onrender.com/admin/courses/${course._id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(course),
        });
        if (res.ok) setCourses(courses.map((c) => (c._id === course._id ? course : c)));
      } else {
        // Add course
        const res = await fetch(`https://eduverse-project.onrender.com/admin/courses`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(course),
        });
        const data = await res.json();
        setCourses([...courses, data.course]);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setModalOpen(false);
      setEditCourse(null);
    }
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 min-h-screen p-6 bg-gray-50">
        <Navbar />
        <div className="flex justify-between items-center mt-6 mb-4">
          <h1 className="text-2xl font-semibold text-gray-800">📚 Manage Courses</h1>
          <button
            onClick={() => setModalOpen(true)}
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
          >
            + Add Course
          </button>
        </div>

        {loading ? (
          <p className="text-gray-600">Loading courses...</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-md overflow-hidden">
              <thead className="bg-blue-600 text-white">
                <tr>
                  <th className="py-3 px-4 text-left">Title</th>
                  <th className="py-3 px-4 text-left">Category</th>
                  <th className="py-3 px-4 text-left">Price ($)</th>
                  <th className="py-3 px-4 text-left">Image</th>
                  <th className="py-3 px-4 text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {courses.map((course) => (
                  <tr key={course._id} className="border-b hover:bg-gray-50">
                    <td className="py-3 px-4">{course.title}</td>
                    <td className="py-3 px-4">{course.category}</td>
                    <td className="py-3 px-4">${course.price}</td>
                    <td className="py-3 px-4">
                      {course.image && <img src={course.image} alt={course.title} className="w-20 h-12 object-cover rounded" />}
                    </td>
                    <td className="py-3 px-4 text-center flex justify-center gap-2">
                      <button
                        onClick={() => {
                          setEditCourse(course);
                          setModalOpen(true);
                        }}
                        className="bg-yellow-500 text-white px-3 py-1 rounded-md hover:bg-yellow-600 transition"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(course._id!)}
                        className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition"
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

        <CourseModal
          show={modalOpen}
          onClose={() => {
            setModalOpen(false);
            setEditCourse(null);
          }}
          onSave={handleSaveCourse}
          editCourse={editCourse}
        />
      </div>
    </div>
  );
}
