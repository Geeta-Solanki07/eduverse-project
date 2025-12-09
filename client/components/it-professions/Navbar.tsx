"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Search } from "lucide-react";
import api from "@/lib/api";
import { useRouter } from "next/navigation";

interface ITCourse {
  _id: string;
  title: string;
  slug: string;
  category: "Beginner" | "Intermediate" | "Advanced";
}

export default function ITNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [courses, setCourses] = useState<ITCourse[]>([]);
  const router = useRouter();

  useEffect(() => {
    api.get("/it-courses")
      .then(res => setCourses(res.data))
      .catch(() => setCourses([]));
  }, []);

  const groupedCourses = {
    Beginner: courses.filter(c => c.category === "Beginner"),
    Intermediate: courses.filter(c => c.category === "Intermediate"),
    Advanced: courses.filter(c => c.category === "Advanced"),
  };

  return (
    <nav className="flex items-center justify-between px-5 md:px-10 py-4 bg-white/80 backdrop-blur-xl shadow-md sticky top-0 z-50">
      {/* LOGO */}
      <Link href="/" className="shrink-0">
        <Image src="/logo.png" alt="Eduverse Logo" width={110} height={30} />
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex flex-1 justify-center items-center gap-10">
        <div className="relative group">
          <button className="flex items-center gap-2 font-semibold text-gray-700 hover:text-orange-500 transition">
            IT Courses
            <Image src="/assets/it/Polygon 1.svg" width={10} height={10} alt="Arrow" />
          </button>

          <div className="absolute left-1/2 -translate-x-1/2 top-full mt-3 hidden group-hover:grid grid-cols-3 gap-6 bg-white rounded-2xl shadow-2xl p-8 w-[900px] border border-gray-100 z-50">
            {(["Beginner","Intermediate","Advanced"] as const).map(level => (
              <div key={level}>
                <h4 className="text-orange-500 font-bold pb-2 border-b">{level}</h4>
                <ul className="pt-3 space-y-2 text-gray-700 font-medium">
                  {groupedCourses[level].length > 0 ? (
                    groupedCourses[level].map(course => (
                      <li key={course._id}>
                        <Link href={`/course/it/${course.slug}`} className="hover:text-orange-500">
                          {course.title}
                        </Link>
                      </li>
                    ))
                  ) : (
                    <li className="text-gray-400 text-sm">No courses</li>
                  )}
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

      {/* Right Section */}
      <div className="hidden md:flex items-center gap-5">
        <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 w-64">
          <Search size={18} className="text-gray-500" />
          <input type="text" placeholder="Search..." className="bg-transparent outline-none px-2 text-sm text-gray-700 w-full"/>
        </div>
        <Link href="/auth/login" className="bg-orange-500 text-white px-6 py-2 rounded-full font-semibold">
          Login / Register
        </Link>
      </div>

      {/* Mobile Menu */}
      <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-gray-700">
        {menuOpen ? <X size={28}/> : <Menu size={28}/>}
      </button>

      {menuOpen && (
        <div className="fixed top-16 left-0 w-full min-h-screen bg-white shadow-2xl p-6 flex flex-col gap-4 md:hidden z-[9999]">
          {courses.length > 0 ? courses.map(course => (
            <button key={course._id} className="text-left text-gray-700 font-medium hover:text-orange-500" onClick={() => { setMenuOpen(false); router.push(`/course/it/${course.slug}`) }}>
              {course.title}
            </button>
          )) : <p className="text-gray-400 text-sm">No courses found</p>}
          <button className="bg-orange-500 text-white py-3 rounded-lg text-center font-semibold mt-5" onClick={() => { setMenuOpen(false); router.push("/auth/login") }}>
            Login / Register
          </button>
        </div>
      )}
    </nav>
  );
}
