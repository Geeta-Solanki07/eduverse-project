"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function ItCategoryPage({ params }: { params: { category: string } }) {
  const { category } = params;
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    async function fetchCourses() {
      const res = await fetch(`http://localhost:5000/api/courses/it?category=${category}`);
      const data = await res.json();
      setCourses(data);
    }
    fetchCourses();
  }, [category]);

  return (
    <div className="p-10">
      <h1 className="text-3xl font-semibold mb-6 capitalize text-orange-500">
        {category} Courses
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {courses.map((course: any) => (
          <Link
            key={course._id}
            href={`/course/it/${category}/${course.slug}`}
            className="border p-6 rounded-lg hover:shadow-md transition"
          >
            <h2 className="text-xl font-medium mb-2">{course.title}</h2>
            <p className="text-gray-600 text-sm">{course.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
