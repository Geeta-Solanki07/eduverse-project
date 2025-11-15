"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-5 md:px-10 py-4 bg-white/80 backdrop-blur-xl shadow-md sticky top-0 z-50">
      
      {/* LOGO */}
      <Link href="/" className="flex-shrink-0">
        <Image src="/logo.png" alt="Dousoft Eduverse" width={110} height={10} />
      </Link>

      {/* DESKTOP MENU */}
      <div className="hidden md:flex flex-1 justify-center items-center gap-10">

        {/* COURSES DROPDOWN */}
        <div className="relative group">
          <button className="flex items-center gap-2 font-semibold text-gray-700 hover:text-orange-500 transition">
            <Image src="/assets/it/emojione-monotone_books.svg" width={20} height={20} alt="Books" />
            Courses
            <Image src="/assets/it/Polygon 1.svg" width={10} height={10} alt="Arrow" />
          </button>

          {/* DROPDOWN MENU */}
          <div className="absolute left-1/2 -translate-x-1/2 top-full mt-3 hidden group-hover:grid grid-cols-3 gap-8 bg-white rounded-2xl shadow-2xl p-8 w-[900px] border border-gray-100">

            {/* Beginner */}
            <div>
              <h4 className="text-orange-500 font-bold pb-2 border-b">Beginner</h4>
              <ul className="space-y-2 pt-3 text-gray-700 font-medium">
                <li><Link href="/html-course" className="hover:text-orange-500">HTML & CSS Fundamentals</Link></li>
                <li><Link href="/js-basic" className="hover:text-orange-500">JavaScript Basics</Link></li>
                <li><Link href="/python-for-beginners" className="hover:text-orange-500">Python for Beginners</Link></li>
                <li><Link href="/version-control" className="hover:text-orange-500">Git & GitHub</Link></li>
                <li><Link href="/introduction-to-databases" className="hover:text-orange-500">Intro to Databases</Link></li>
              </ul>
            </div>

            {/* Intermediate */}
            <div>
              <h4 className="text-orange-500 font-bold pb-2 border-b">Intermediate</h4>
              <ul className="space-y-2 pt-3 text-gray-700 font-medium">
                <li><Link href="/react-development" className="hover:text-orange-500">React.js Development</Link></li>
                <li><Link href="/node-development" className="hover:text-orange-500">Node.js & Express.js</Link></li>
                <li><Link href="/rest-api-development" className="hover:text-orange-500">REST API</Link></li>
                <li><Link href="/mongodb" className="hover:text-orange-500">MongoDB & SQL</Link></li>
                <li><Link href="/ui-ux-principles" className="hover:text-orange-500">UI/UX Principles</Link></li>
              </ul>
            </div>

            {/* Advanced */}
            <div>
              <h4 className="text-orange-500 font-bold pb-2 border-b">Advanced</h4>
              <ul className="space-y-2 pt-3 text-gray-700 font-medium">
                <li><Link href="/full-stack-web-development" className="hover:text-orange-500">Full-Stack Web Dev</Link></li>
                <li><Link href="/react-native-mobile-apps" className="hover:text-orange-500">React Native Apps</Link></li>
                <li><Link href="/cloud-computing" className="hover:text-orange-500">Cloud Computing</Link></li>
                <li><Link href="/devops" className="hover:text-orange-500">DevOps & Deployment</Link></li>
                <li><Link href="/ai-machine-learning" className="hover:text-orange-500">AI & ML</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <Link href="/course/it" className="font-semibold text-gray-700 hover:text-orange-500 transition">
          Study Materials
        </Link>

        <Link href="/support" className="font-semibold text-gray-700 hover:text-orange-500 transition">
          Support
        </Link>

      </div>

      {/* RIGHT BUTTONS */}
      <div className="hidden md:flex items-center gap-5">

        {/* Search */}
        <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 shadow-inner">
          <i className="fas fa-search text-gray-500"></i>
          <input type="text" placeholder="Search..." className="bg-transparent outline-none px-2 text-sm text-gray-700" />
        </div>

        <Link
          href="/auth/login"
          className="bg-orange-500 text-white px-6 py-2 rounded-full shadow-md hover:bg-orange-600 transition font-semibold"
        >
          Login / Register
        </Link>
      </div>

      {/* MOBILE TOGGLE */}
      <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-gray-700">
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg p-6 flex flex-col gap-4 md:hidden">
          
          <Link href="/course/it" onClick={() => setMenuOpen(false)} className="text-gray-700 font-medium">Study Materials</Link>
          
          <Link href="/support" onClick={() => setMenuOpen(false)} className="text-gray-700 font-medium">Support</Link>
          
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
