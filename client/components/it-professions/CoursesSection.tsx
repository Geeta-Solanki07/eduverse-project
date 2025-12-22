"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Star } from "lucide-react";
import Link from "next/link";
import api from "@/lib/api";

interface ICourse {
  _id: string;
  title: string;
  slug: string;
  summary: string;
  price: number;
  image: string;
  level: string;
  instructor: {
    name: string;
  };
}

export default function ITCoursesSection() {
  const [courses, setCourses] = useState<ICourse[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get("/it-courses")
      .then((res) => setCourses(res.data.courses || []))
      .catch(() => setCourses([]))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="text-center py-20">Loading...</p>;
  if (courses.length === 0) return <p className="text-center py-20">No courses found</p>;

  return (
    <section className="w-full bg-linear-to-b from-orange-50 to-white py-20 px-4">
      <div className="text-center mb-16">
        <span className="text-[#F37021] uppercase font-semibold tracking-wide">
          Popular Courses
        </span>
        <h2 className="text-4xl font-bold text-gray-900 mt-2">
          Pick A Course To Get Started
        </h2>
        <p className="text-gray-600 mt-3 text-lg">
          Learn industry-ready skills curated by professionals
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {courses.map((course) => (
          <div
            key={course._id}
            className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
          >
            <div className="relative h-56 w-full">
              <Image src={course.image} alt={course.title} fill className="object-cover" />
              <span className="absolute top-3 left-3 bg-white/80 backdrop-blur px-3 py-1 rounded-full text-sm font-medium text-[#F37021] shadow-md">
                {course.level}
              </span>
            </div>

            <div className="p-6">
              <div className="flex items-center gap-2 mb-3">
                {[...Array(5)].map((_, s) => (
                  <Star key={s} size={18} className="text-[#F37021] fill-[#F37021]" />
                ))}
                <span className="text-gray-500 text-sm">(4.9)</span>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {course.title}
              </h3>

              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {course.summary}
              </p>

              <div className="flex items-center gap-3 mb-6">
                <Image
                  src="/assets/it/testi-boy.png"
                  alt="Instructor"
                  width={38}
                  height={38}
                  className="rounded-full"
                />
                <p className="text-gray-700 text-sm">
                  By <span className="font-semibold">{course.instructor.name}</span>
                </p>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-[#F37021] font-bold text-2xl">
                  ₹{course.price}
                </span>
                <Link
                  href={`/course/it/${course.slug}`}
                  className="text-white font-semibold bg-[#F37021] px-4 py-2 rounded-xl hover:bg-orange-600 transition"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
