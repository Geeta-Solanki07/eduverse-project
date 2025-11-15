"use client";

import { useEffect, useState } from "react";
import api from "@/lib/api";
import Image from "next/image";
import { Star } from "lucide-react";

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
    {
      name: "AI (Artificial Intelligence)",
      summary: "Learn AI...",
      price: "₹2,999/-",
      image: "/assets/it/ai.png",
      instructor: "Pradeep",
      category: "Professional Course",
      link: "/ai-machine-learning",
      reviews: 15,
    },
    {
      name: "React Native",
      summary: "Build cross-platform apps",
      price: "₹2,999/-",
      image: "/assets/it/react.png",
      instructor: "Pradeep",
      category: "Professional Course",
      link: "/react-native-mobile-apps",
      reviews: 15,
    },
    {
      name: "Web Development",
      summary: "Master Web Development",
      price: "₹2,999/-",
      image: "/assets/it/web.png",
      instructor: "Pradeep",
      category: "Professional Course",
      link: "/full-stack-web-development",
      reviews: 15,
    },
  ];

  useEffect(() => {
    api
      .get("/it-courses")
      .then((res) => setCourses([...staticCourses, ...res.data]))
      .catch(() => setCourses(staticCourses))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="text-center py-20">Loading...</p>;

  return (
    <section className="w-full bg-gradient-to-b from-orange-50 to-white py-20 px-4">
      
      {/* HEADER */}
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

      {/* COURSE GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        
        {courses.map((course, i) => (
          <div
            key={course._id ?? i}
            className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100
            hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
          >
            
            {/* Image */}
            <div className="relative h-56 w-full">
              <img
                src={course.image}
                alt={course.name}
                className="h-full w-full object-cover"
              />

              {/* CATEGORY BADGE */}
              <span className="absolute top-3 left-3 bg-white/80 backdrop-blur px-3 py-1 rounded-full text-sm font-medium text-[#F37021] shadow-md">
                {course.category}
              </span>
            </div>

            {/* Content */}
            <div className="p-6">
              
              {/* Stars */}
              <div className="flex items-center gap-2 mb-3">
                {[...Array(5)].map((_, s) => (
                  <Star key={s} size={18} className="text-[#F37021] fill-[#F37021]" />
                ))}
                <span className="text-gray-500 text-sm">({course.reviews})</span>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {course.name}
              </h3>

              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {course.summary}
              </p>

              <div className="flex items-center gap-3 mb-6">
                <Image
                  src="/assets/it/testi-boy.png"
                  alt="instructor"
                  width={38}
                  height={38}
                  className="rounded-full"
                />
                <p className="text-gray-700 text-sm">
                  By <span className="font-semibold">{course.instructor}</span>
                </p>
              </div>

              {/* Footer */}
              <div className="flex justify-between items-center">
                <span className="text-[#F37021] font-bold text-2xl">
                  {course.price}
                </span>

                <a
                  href={course.link}
                  className="text-white font-semibold bg-[#F37021] px-4 py-2 rounded-xl 
                  hover:bg-orange-600 transition"
                >
                  Learn More →
                </a>
              </div>

            </div>
          </div>
        ))}

      </div>
    </section>
  );
}
