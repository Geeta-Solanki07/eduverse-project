"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import api from "@/lib/api";

import Navbar from "@/components/it-professions/Navbar";
import Footer from "@/components/it-professions/Footer";

interface ITCourse {
  _id: string;
  title: string;
  slug: string;
  category: string;
  description: string;
  image?: string;
  price?: number;
}

export default function SingleITCoursePage() {
  const { slug } = useParams();
  const [course, setCourse] = useState<ITCourse | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCourse() {
      try {
        const res = await api.get(`/it-courses/${slug}`);
        setCourse(res.data.course);
      } catch (err) {
        console.error("Error fetching course:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchCourse();
  }, [slug]);

  if (loading) return <p className="p-10 text-center">Loading...</p>;
  if (!course) return <p className="p-10 text-center">Course not found.</p>;

  return (
    <>
      <Navbar />

      {/* ===================== HERO SECTION ===================== */}
      <header className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-10">

          {/* Breadcrumb */}
          <div className="mb-6 text-sm text-gray-600">
            <Link href="/" className="hover:text-orange-500">Home</Link> /
            <Link href="/it-courses" className="hover:text-orange-500 ml-1">Courses</Link> /
            <span className="text-gray-900 font-medium ml-1">{course.category}</span> /
            <span className="text-gray-900 font-medium ml-1">{course.title}</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            {/* LEFT */}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
                {course.title}
              </h1>

              <p className="text-lg text-gray-700 max-w-2xl mb-8">
                {course.description}
              </p>

              {/* Static stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
                {[
                  { icon: "⭐", label: "Rating", value: "4.9 (1,245 reviews)" },
                  { icon: "👥", label: "Students", value: "5,320 enrolled" },
                  { icon: "⏰", label: "Duration", value: "6 weeks (30 hours)" },
                  { icon: "🎓", label: "Certificate", value: "Included" },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-3 bg-white p-4 shadow rounded-lg">
                    <div className="text-2xl">{item.icon}</div>
                    <div>
                      <p className="text-sm text-gray-500">{item.label}</p>
                      <p className="text-gray-900 font-semibold">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4">
                <button className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition">
                  Enroll Now
                </button>
                <button className="border border-orange-500 text-orange-500 px-6 py-3 rounded-lg hover:bg-orange-500 hover:text-white transition">
                  Watch Free Demo
                </button>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="flex justify-center">
              <Image
                src={course.image || "/assets/it/about.png"}
                alt={course.title}
                width={550}
                height={400}
                className="rounded-xl shadow-xl object-cover w-full"
              />
            </div>

          </div>
        </div>
      </header>

      {/* ===================== COURSE CONTENT ===================== */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-10 grid md:grid-cols-3 gap-10">

          {/* LEFT CONTENT */}
          <div className="md:col-span-2">

            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              Course Description
            </h2>
            <p className="text-gray-700 mb-4">
              {course.description}
            </p>

            {/* What You'll Learn */}
            <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900">
              What You’ll Learn
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-900">
              {[
                "HTML5 semantic structure",
                "CSS selectors & properties",
                "Flexbox & CSS Grid",
                "Responsive design",
                "CSS animations",
                "Forms & validation",
              ].map((item, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <span className="text-orange-600">✔</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* Curriculum */}
            <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900">
              Course Curriculum
            </h2>
            {[
              "Week 1: HTML Fundamentals",
              "Week 2: CSS Basics",
              "Week 3: Layout Techniques",
              "Week 4: Responsive Design",
            ].map((week, i) => (
              <details
                key={i}
                className="border rounded-lg mb-3 bg-gray-50 hover:bg-gray-100 transition"
              >
                <summary className="cursor-pointer p-4 font-medium text-gray-800">
                  {week}
                </summary>
                <div className="p-4 text-gray-700 space-y-2">
                  <p>Lesson 1: Introduction</p>
                  <p>Lesson 2: Practice</p>
                  <p>Lesson 3: Weekly Project</p>
                </div>
              </details>
            ))}
          </div>

          {/* RIGHT SIDEBAR */}
          <aside className="space-y-10">

            {/* Price */}
            <div className="p-6 bg-white shadow-lg rounded-lg border">
              <h3 className="text-xl font-semibold mb-4">Course Price</h3>
              <p className="text-3xl font-bold text-orange-500 mb-2">
                ₹{course.price || 2999}/-
              </p>
              <p className="text-sm text-gray-500 mb-4">
                One-time payment · Lifetime access
              </p>

              <button className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition">
                Enroll Now
              </button>
            </div>

            {/* Instructor */}
            <div className="p-6 bg-white shadow-lg rounded-lg border text-center">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Instructor</h3>

              <img
                src="/assets/it/testi-boy.png"
                alt="Instructor"
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />

              <h4 className="text-xl font-semibold text-gray-900">Pradeep Kumar</h4>
              <p className="text-gray-500">Senior Web Developer</p>
            </div>

          </aside>
        </div>
      </section>

      <Footer />
    </>
  );
}
