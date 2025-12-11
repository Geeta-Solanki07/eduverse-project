"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import api from "@/lib/api";

interface ITCourse {
  _id: string;
  title: string;
  slug: string;
  category: "Beginner" | "Intermediate" | "Advanced";
  description?: string;
}

export default function ITCoursesPage() {
  const [courses, setCourses] = useState<ITCourse[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCourses() {
      try {
        const response = await api.get("/it-courses");
        setCourses(response.data.courses);
      } catch (error) {
        console.error("Error fetching courses:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchCourses();
  }, []);

  if (loading) return <p>Loading courses...</p>;

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">IT Courses</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {courses.map((course) => (
          <Link
            key={course._id}
            href={`/it-courses/${course.slug}`}
            className="border rounded-lg p-4 shadow hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold">{course.title}</h2>
            <p className="text-sm text-gray-600">{course.category}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
