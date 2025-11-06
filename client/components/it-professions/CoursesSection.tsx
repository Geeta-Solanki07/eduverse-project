"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import api from "@/lib/api";

interface ITCourse {
  _id?: string;
  name: string;
  summary: string;
  price: string;
  image: string;
  instructor: string;
  category: string;
  link: string;
  reviews: number;
}

export default function ITCoursesSection() {
  const [courses, setCourses] = useState<ITCourse[]>([]);
  const [loading, setLoading] = useState(true);

  const staticCourses: ITCourse[] = [
    { name: "AI (Artificial Intelligence)", summary: "Learn AI...", price: "₹2,999/-", image: "/assets/it/ai.png", instructor: "Pradeep", category: "Professional Course", link: "/ai-machine-learning", reviews: 15 },
    { name: "React Native", summary: "Build cross-platform apps", price: "₹2,999/-", image: "/assets/it/react.png", instructor: "Pradeep", category: "Professional Course", link: "/react-native-mobile-apps", reviews: 15 },
    { name: "Web Development", summary: "Master Web Development", price: "₹2,999/-", image: "/assets/it/web.png", instructor: "Pradeep", category: "Professional Course", link: "/full-stack-web-development", reviews: 15 },
  ];

  useEffect(() => {
    api.get("/it-courses")
      .then(res => setCourses([...staticCourses, ...res.data]))
      .catch(err => {
        console.error(err);
        setCourses(staticCourses);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="text-center py-20">Loading...</p>;

  return (
    <section className="featured-courses w-full bg-orange-50 py-16 px-4">
      <div className="text-center mb-12">
        <span className="text-[#F37021] uppercase tracking-wider font-medium text-lg">Popular Courses</span>
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mt-2">Pick A Course To Get Started</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {courses.map((course, i) => (
          <article key={course._id ?? `${i}`} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-transform transform hover:-translate-y-1">
            <div className="w-full h-52 relative">
              {/* Next/Image needs remoteDomains if using external URLs; local images okay */}
              <img src={course.image || "/assets/default-course.png"} alt={course.name} className="w-full h-full object-cover" />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <div className="flex text-[#F37021]">
                  {Array(5).fill(0).map((_, s) => <span key={s}>★</span>)}
                </div>
                <span className="text-gray-500 text-sm">({course.reviews || 0} Reviews)</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{course.name}</h3>
              <p className="text-gray-600 text-sm mb-4">{course.summary}</p>
              <div className="flex items-center gap-3 mb-4">
                <img src="/assets/it/testi-boy.png" width={32} height={32} className="rounded-full" alt={course.instructor} />
                <p className="text-gray-700 text-sm">By <span className="font-semibold">{course.instructor}</span> in <span className="font-semibold">{course.category}</span></p>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#F37021] font-bold text-lg">{course.price}</span>
                <a href={course.link} className="text-[#F37021] font-semibold hover:text-orange-600 flex items-center gap-1 transition">Learn More <span className="text-xl">→</span></a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
