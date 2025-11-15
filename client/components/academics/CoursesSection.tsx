"use client";

import Image from "next/image";

interface Course {
  id: number;
  title: string;
  classText: string;
  bg: string;
  bgInner: string;
  watchColor: string;
  exploreBg?: string;
  image: string;
}

interface CoursesProps {
  sectionTitle: string;
  courses: Course[];
}

export default function CoursesSection({ sectionTitle, courses }: CoursesProps) {
  return (
    <section className="w-full py-16 px-4 md:px-12 bg-green-50">
      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-semibold text-black mb-8 text-center md:text-left">
        {sectionTitle}
      </h2>

      {/* View All Button */}
      <div className="flex justify-center md:justify-start mb-8">
        <a
          href="#"
          className="px-6 py-2 bg-black text-white rounded-full text-sm md:text-base font-medium hover:bg-gray-800 transition"
        >
          View All Courses
        </a>
      </div>

      {/* Course Cards */}
      <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
        {courses.map((course) => (
          <div
            key={course.id}
            className="relative flex-shrink-0 w-[280px] sm:w-[320px] md:w-[360px] h-[280px] bg-white rounded-2xl shadow-md p-5 flex flex-col justify-between overflow-hidden hover:scale-105 transition-transform duration-300"
          >
            {/* Decorative Background */}
            <div className={`absolute right-[-100px] top-0 w-[250px] h-full rounded-full ${course.bg}`} />
            <div className={`absolute right-[-100px] top-0 w-[200px] h-full rounded-full ${course.bgInner}`} />

            {/* Class Label */}
            <div className="max-w-[120px] h-9 bg-white border border-orange-400 rounded-full flex items-center justify-center mb-3 shadow-sm">
              <span className="text-black font-medium text-base">{course.classText}</span>
            </div>

            {/* Watch Demo Button */}
            <div
              className={`flex items-center gap-2 w-[140px] py-1 px-3 rounded-full border ${course.watchColor} mb-4 bg-white backdrop-blur-sm`}
            >
              <svg
                className="w-4 h-4 fill-current text-orange-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
              <span className="font-medium text-sm">Watch Demo</span>
            </div>

            {/* Explore Button */}
            <a
              href="#"
              className={`inline-flex items-center justify-center h-10 px-4 rounded-full text-white font-medium ${
                course.exploreBg ?? "bg-orange-500"
              } hover:opacity-90 transition`}
            >
              Explore Category
            </a>

            {/* Image */}
            <div className="absolute right-4 top-1/2 -translate-y-1/2 w-24 h-24 md:w-28 md:h-28">
              <Image
                src={course.image}
                alt={course.title}
                width={112}
                height={112}
                className="object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
