"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import Navbar from "@/components/it-professions/Navbar";
import Footer from "@/components/it-professions/Footer";
import api from "@/lib/api";

interface ICourse {
  title: string;
  slug: string;
  summary: string;
  price: number;
  image: string;
  instructor: string;
  level: string;
  lessons?: {
    title: string;
    videoUrl?: string;
    content?: string;
  }[];
}

export default function DynamicCoursePage() {
  const { slug } = useParams();

  const [course, setCourse] = useState<ICourse | null>(null);
  const [activeLesson, setActiveLesson] = useState<number>(0);

  useEffect(() => {
    if (slug) {
      api.get(`/courses?slug=${slug}`)
        .then(res => {
          setCourse(res.data);
        })
        .catch(() => setCourse(null));
    }
  }, [slug]);

  if (!course) {
    return <p className="text-center py-20 text-lg">Loading course...</p>;
  }

  const lesson = course.lessons?.[activeLesson];

  return (
    <>
      <Navbar />

      {/* ===== HERO ===== */}
      <header className="bg-gradient-to-br text-black font-bold from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-sm text-gray-600 mb-4">
            <Link href="/">Home</Link> /{" "}
            <Link href="/courses">Courses</Link> /{" "}
            <span className="font-semibold">{course.title}</span>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl font-bold mb-4">{course.title}</h1>
              <p className="text-gray-700 mb-6">{course.summary}</p>

              <div className="flex gap-6 mb-6">
                <p><strong>Level:</strong> {course.level}</p>
                <p><strong>Lessons:</strong> {course.lessons?.length || 0}</p>
                <p><strong>Price:</strong> ₹{course.price}</p>
              </div>

              <button className="bg-orange-500 px-8 py-3 rounded-lg text-white font-semibold hover:bg-orange-600">
                Enroll Now
              </button>
            </div>

            <div>
             <Image
  src={course.image || "/assets/default.jpg"}
  alt={course.title || "Course Image"}
  width={600}
  height={400}
  className="rounded-xl shadow-xl"
/>

            </div>
          </div>
        </div>
      </header>

      {/* ===== MAIN CONTENT ===== */}
      <section className="py-16 bg-white text-black font-bold">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">

          {/* ==== Video / Content Area ==== */}
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold mb-4">
              {lesson?.title || "Select a lesson"}
            </h2>

            {lesson?.videoUrl ? (
              <iframe
                src={lesson.videoUrl}
                className="w-full h-[350px] rounded-lg mb-4"
                allowFullScreen
              ></iframe>
            ) : (
              <div className="p-6 bg-gray-100 rounded-lg">
                {lesson?.content || "No content available"}
              </div>
            )}
          </div>

          {/* ==== Lessons Sidebar ==== */}
          <aside className="bg-white shadow-lg rounded-lg p-6 border">
            <h3 className="text-xl font-semibold mb-4">Lessons</h3>

            {course.lessons?.map((lesson, index) => (
              <div
                key={index}
                onClick={() => setActiveLesson(index)}
                className={`cursor-pointer p-3 mb-2 rounded-md border transition 
                    ${
                      index === activeLesson
                        ? "bg-orange-500 text-white"
                        : "bg-gray-50 hover:bg-orange-100"
                    }`}
              >
                {lesson.title}
              </div>
            ))}
          </aside>

        </div>
      </section>

      <Footer />
    </>
  );
}
