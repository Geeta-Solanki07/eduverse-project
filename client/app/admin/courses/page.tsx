"use client";
import { useEffect, useState } from "react";
import api from "@/lib/api";
import Image from "next/image";

interface Category {
  _id: string;
  name: string;
  key: string;
}

interface Subcategory {
  _id: string;
  name: string;
  key: string;
  categoryKey: string;
}

interface Lesson {
  _id?: string;
  title: string;
  videoUrl?: string;
}

interface Course {
  _id: string;
  title: string;
  slug: string;
  summary: string;
  price: number;
  image?: string;
  instructor: string;
  categoryKey: string;
  subcategoryKey: string;
  level: string;
  lessons: Lesson[];
}

export default function CoursesPage() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [subcategories, setSubcategories] = useState<Subcategory[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchCourses = async () => {
    try {
      const catRes = await api.get("/admin/categories");
      setCategories(catRes.data.categories);

      const subRes = await api.get("/admin/subcategories");
      setSubcategories(subRes.data.subcategories);

      const courseRes = await api.get("/admin/courses");
      setCourses(courseRes.data.courses);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  const deleteCourse = async (id: string) => {
    if (!confirm("Are you sure you want to delete this course?")) return;
    try {
      await api.delete(`/admin/courses/${id}`);
      fetchCourses();
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) return <p>Loading courses...</p>;

  return (
    <div className="text-black">
      <h1 className="text-2xl font-bold mb-4">Courses Management</h1>
      <div className="overflow-x-auto">
        <table className="w-full border text-left">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-3 border">Title</th>
              <th className="p-3 border">Category</th>
              <th className="p-3 border">Subcategory</th>
              <th className="p-3 border">Level</th>
              <th className="p-3 border">Price</th>
              <th className="p-3 border">Instructor</th>
              <th className="p-3 border">Lessons</th>
              <th className="p-3 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course) => (
              <tr key={course._id} className="hover:bg-gray-50">
                <td className="p-3 border">{course.title}</td>
                <td className="p-3 border">{categories.find(c => c.key === course.categoryKey)?.name}</td>
                <td className="p-3 border">{subcategories.find(s => s.key === course.subcategoryKey)?.name}</td>
                <td className="p-3 border">{course.level}</td>
                <td className="p-3 border">{course.price}</td>
                <td className="p-3 border">{course.instructor}</td>
                <td className="p-3 border">
                  {course.lessons.map((lesson, idx) => (
                    <p key={idx}>{lesson.title}</p>
                  ))}
                </td>
                <td className="p-3 border flex gap-2">
                  <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">
                    Edit
                  </button>
                  <button
                    onClick={() => deleteCourse(course._id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  >
                    Delete
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
