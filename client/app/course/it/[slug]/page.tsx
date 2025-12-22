"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import api from "@/lib/api";

import Navbar from "@/components/it-professions/Navbar";
import Footer from "@/components/it-professions/Footer";

interface Lesson {
  title: string;
  duration?: string;
}

interface CurriculumWeek {
  week: string;
  lessons: Lesson[];
}

interface ITCourse {
  title: string;
  description: string;
  image: string;
  price: number;
  rating: number;
  reviews: number;
  students: number;
  duration: string;
  certificate: boolean;
  curriculum: CurriculumWeek[];
  instructor: {
    name: string;
    role: string;
    image: string;
  };
}

export default function SingleITCoursePage() {
  const { slug } = useParams();
  const [course, setCourse] = useState<ITCourse | null>(null);

  useEffect(() => {
    api.get(`/it-courses/${slug}`).then((res) => {
      setCourse(res.data.course);
    });
  }, [slug]);

  if (!course) return <p className="p-10 text-center">Loading...</p>;

  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20 text-black">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold mb-4">{course.title}</h1>
            <p className="text-gray-700 mb-8">{course.description}</p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <Stat label="Rating" value={`${course.rating} ⭐`} />
              <Stat label="Students" value={`${course.students}+`} />
              <Stat label="Duration" value={course.duration} />
              <Stat label="Certificate" value={course.certificate ? "Yes" : "No"} />
            </div>

            <button className="bg-orange-500 text-white px-6 py-3 rounded-lg">
              Enroll Now
            </button>
          </div>

          <Image
            src={course.image}
            alt={course.title}
            width={500}
            height={400}
            className="rounded-xl shadow-xl"
          />
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-20 text-black">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 px-6">

          {/* LEFT */}
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold mb-6">Course Curriculum</h2>

            {course.curriculum.map((week, i) => (
              <details key={i} className="border rounded-lg mb-4 bg-gray-50">
                <summary className="cursor-pointer p-4 font-semibold">
                  {week.week}
                </summary>

                <div className="p-4 space-y-2">
                  {week.lessons.map((lesson, j) => (
                    <p key={j}>✔ {lesson.title}</p>
                  ))}
                </div>
              </details>
            ))}
          </div>

          {/* RIGHT */}
          <aside className="space-y-6 text-black">
            <div className="p-6 bg-white shadow rounded text-center">
              <img
                src={course.instructor.image}
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h3 className="font-bold">{course.instructor.name}</h3>
              <p className="text-gray-500">{course.instructor.role}</p>
              <p className="text-2xl text-orange-500 mt-4">
                ₹{course.price}
              </p>
            </div>
          </aside>
        </div>
      </section>

      <Footer />
    </>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-white p-4 shadow rounded text-black">
      <p className="text-sm text-gray-500">{label}</p>
      <p className="font-bold">{value}</p>
    </div>
  );
}
