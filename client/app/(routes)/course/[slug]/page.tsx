"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";

export default function CourseDetailPage() {
  const params = useParams();
  const { slug } = params;
  const [course, setCourse] = useState<any>(null);

  useEffect(() => {
    if (slug) {
      fetch(`http://localhost:5000/api/courses/${slug}`)
        .then((res) => res.json())
        .then((data) => setCourse(data))
        .catch((err) => console.error(err));
    }
  }, [slug]);

  if (!course)
    return <p className="text-center py-20 text-gray-500">Loading...</p>;

  return (
    <section className="px-10 py-16 text-center">
      <h1 className="text-4xl font-bold text-orange-600 mb-4">
        {course.title}
      </h1>
      {course.thumbnail && (
        <div className="flex justify-center mb-6">
          <Image
            src={course.thumbnail}
            alt={course.title}
            width={300}
            height={200}
            className="rounded-xl shadow-md"
          />
        </div>
      )}
      <p className="text-gray-700 max-w-2xl mx-auto">{course.description}</p>
      <p className="text-sm text-gray-500 mt-4 capitalize">
        Category: {course.category} | Level: {course.level}
      </p>
    </section>
  );
}
