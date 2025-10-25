"use client";

import Image from "next/image";

const courses = [
  {
    id: 1,
    name: "AI (Artificial Intelligence)",
    summary: "Learn Artificial Intelligence, machine learning, neural networks...",
    price: "₹2,999/-",
    image: "/assets/it/ai.png",
    instructor: "Pradeep",
    category: "Professional Course",
    link: "/ai-machine-learning",
    reviews: 15,
  },
  {
    id: 2,
    name: "React Native",
    summary: "Build cross-platform apps with React Native.",
    price: "₹2,999/-",
    image: "/assets/it/react.png",
    instructor: "Pradeep",
    category: "Professional Course",
    link: "/react-native-mobile-apps",
    reviews: 15,
  },
  {
    id: 3,
    name: "Web Development",
    summary: "Master Web Development with PHP and Laravel.",
    price: "₹2,999/-",
    image: "/assets/it/web.png",
    instructor: "Pradeep",
    category: "Professional Course",
    link: "/full-stack-web-development",
    reviews: 15,
  },
];

export default function FeaturedCourses() {
  return (
    <section className="featured-courses w-full bg-orange-50 py-16 px-4">
      
      {/* Section Header */}
      <div className="text-center mb-12">
        <span className="text-[#F37021] uppercase tracking-wider font-medium text-lg">
          Popular Courses
        </span>
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mt-2">
          Pick A Course To Get Started
        </h2>
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {courses.map((course) => (
          <article
            key={course.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-transform transform hover:-translate-y-1"
          >
            
            {/* Course Image */}
            <div className="w-full h-52 relative">
              <Image 
                src={course.image} 
                alt={course.name} 
                fill 
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>

            {/* Course Info */}
            <div className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <div className="flex text-[#F37021]">
                  {Array(5).fill(0).map((_, i) => (
                    <span key={i} className="text-lg">★</span>
                  ))}
                </div>
                <span className="text-gray-500 text-sm">({course.reviews} Reviews)</span>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-2">{course.name}</h3>
              <p className="text-gray-600 text-sm mb-4">{course.summary}</p>

              <div className="flex items-center gap-3 mb-4">
                <Image 
                  src="/assets/it/testi-boy.png" 
                  alt={course.instructor} 
                  width={32} 
                  height={32} 
                  className="rounded-full"
                />
                <p className="text-gray-700 text-sm">
                  By <span className="font-semibold">{course.instructor}</span> in <span className="font-semibold">{course.category}</span>
                </p>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-[#F37021] font-bold text-lg">{course.price}</span>
                <a 
                  href={course.link} 
                  className="text-[#F37021] font-semibold hover:text-orange-600 flex items-center gap-1 transition"
                >
                  Learn More <span className="text-xl">→</span>
                </a>
              </div>
            </div>

          </article>
        ))}
      </div>

      {/* Browse All Courses Button */}
      <div className="text-center mt-12">
        <a 
          href="#" 
          className="inline-flex items-center gap-3 px-8 py-3 bg-[#F37021] text-white text-lg font-semibold rounded-full hover:bg-orange-600 transition shadow"
        >
          Browse All Courses
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-6 h-6"
          >
            <path d="M5 12H19M19 12L12 5M19 12L12 19" />
          </svg>
        </a>
      </div>

    </section>
  );
}
