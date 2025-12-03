"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import api from "@/lib/api";

interface ITCourse {
  _id?: string;
  title: string;
  slug: string;
  level: "Beginner" | "Intermediate" | "Advanced";
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [courses, setCourses] = useState<ITCourse[]>([]);

  useEffect(() => {
    api
      .get("/courses?categoryKey=it")
      .then((res) => setCourses(res.data))
      .catch(() => setCourses([]));
  }, []);

  const groupedCourses = {
    Beginner: courses.filter((c) => c.level === "Beginner"),
    Intermediate: courses.filter((c) => c.level === "Intermediate"),
    Advanced: courses.filter((c) => c.level === "Advanced"),
  };

  return (
    <nav className="flex items-center justify-between px-5 md:px-10 py-4 bg-white/80 backdrop-blur-xl shadow-md sticky top-0 z-50">
      <Link href="/" className="shrink-0">
        <Image src="/logo.png" alt="Eduverse Logo" width={110} height={30} />
      </Link>

      <div className="hidden md:flex flex-1 justify-center items-center gap-10">
        <div className="relative group">
          <button className="flex items-center gap-2 font-semibold text-gray-700 hover:text-orange-500 transition">
            Courses
            <Image src="/assets/it/Polygon 1.svg" width={10} height={10} alt="Arrow" />
          </button>
          <div className="absolute left-1/2 -translate-x-1/2 top-full mt-3 hidden group-hover:grid grid-cols-3 gap-8 bg-white rounded-2xl shadow-2xl p-8 w-[900px] border border-gray-100">
            {(["Beginner", "Intermediate", "Advanced"] as const).map((level, idx) => (
              <div key={idx}>
                <h4 className="text-orange-500 font-bold pb-2 border-b">{level}</h4>
                <ul className="space-y-2 pt-3 text-gray-700 font-medium">
                  {groupedCourses[level].map((course) => (
                    <li key={course._id}>
                      <Link href={`/course/it/${course.slug}`} className="hover:text-orange-500">
                        {course.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <Link href="/course/it" className="font-semibold text-gray-700 hover:text-orange-500 transition">
          Study Materials
        </Link>
        <Link href="/support" className="font-semibold text-gray-700 hover:text-orange-500 transition">
          Support
        </Link>
      </div>

      <div className="hidden md:flex items-center gap-5">
        <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 shadow-inner">
          <i className="fas fa-search text-gray-500"></i>
          <input type="text" placeholder="Search..." className="bg-transparent outline-none px-2 text-sm text-gray-700" />
        </div>

        <Link href="/auth/login" className="bg-orange-500 text-white px-6 py-2 rounded-full shadow-md hover:bg-orange-600 transition font-semibold">
          Login / Register
        </Link>
      </div>

      <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-gray-700">
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg p-6 flex flex-col gap-4 md:hidden">
          {courses.map((course) => (
            <Link
              key={course._id}
              href={`/course/it/${course.slug}`}
              onClick={() => setMenuOpen(false)}
              className="text-gray-700 font-medium"
            >
              {course.title}
            </Link>
          ))}
          <Link
            href="/auth/login"
            onClick={() => setMenuOpen(false)}
            className="bg-orange-500 text-white py-2 rounded-lg text-center font-semibold"
          >
            Login / Register
          </Link>
        </div>
      )}
    </nav>
  );
}
