"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import api from "@/lib/api";

interface ITCourse {
  _id: string;
  title: string;
  slug: string;
  category: "Beginner" | "Intermediate" | "Advanced";
  description?: string;
}

export default function SingleCoursePage() {
  const { slug } = useParams();
  const [course, setCourse] = useState<ITCourse | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCourse() {
      try {
        const response = await api.get(`/it-courses/${slug}`);
        setCourse(response.data.course);
      } catch (error) {
        console.error("Error fetching course:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchCourse();
  }, [slug]);

  if (loading) return <p>Loading course...</p>;
  if (!course) return <p>Course not found.</p>;

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold">{course.title}</h1>
      <p className="text-gray-600">{course.category}</p>

      <div className="mt-4 text-lg">
        {course.description || "No description available."}
      </div>
    </div>
  );
}
