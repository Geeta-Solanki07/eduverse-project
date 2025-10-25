"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function HeroSection() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative bg-blue-100 overflow-hidden text-black">
      {/* ===== NAVBAR ===== */}
      <nav className="flex items-center justify-between px-4 md:px-10 py-4 relative z-20">
        {/* LOGO */}
        <div className="flex-shrink-0">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Dousoft Eduverse Logo"
              width={120}
              height={40}
              priority
            />
          </Link>
        </div>

        {/* ===== CENTER MENU (Desktop Only) ===== */}
        <div className="hidden md:flex flex-1 justify-center items-center gap-6 px-6 py-2 rounded-2xl">
          {/* MEGA DROPDOWN */}
          <div className="relative group">
            <button className="flex items-center gap-2 font-medium text-black">
              <Image
                src="/assets/it/emojione-monotone_books.svg"
                alt="Books"
                width={20}
                height={20}
              />
              Courses
              <Image
                src="/assets/it/Polygon 1.svg"
                alt="Dropdown Arrow"
                width={10}
                height={10}
              />
            </button>

            {/* DROPDOWN CONTENT */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-full mt-2 hidden group-hover:grid grid-cols-3 gap-6 bg-white shadow-lg rounded-xl p-6 w-[900px] z-50">
              {/* Beginner */}
              <div>
                <h4 className="text-orange-500 border-b border-orange-500 mb-3 pb-1 font-semibold">
                  Beginner
                </h4>
                <ul className="space-y-2">
                  <li><Link href="/html-course" className="hover:text-orange-500">HTML & CSS Fundamentals</Link></li>
                  <li><Link href="/js-basic" className="hover:text-orange-500">JavaScript Basics</Link></li>
                  <li><Link href="/python-for-beginners" className="hover:text-orange-500">Python for Beginners</Link></li>
                  <li><Link href="/version-control" className="hover:text-orange-500">Git & GitHub</Link></li>
                  <li><Link href="/introduction-to-databases" className="hover:text-orange-500">Intro to Databases</Link></li>
                </ul>
              </div>

              {/* Intermediate */}
              <div>
                <h4 className="text-orange-500 border-b border-orange-500 mb-3 pb-1 font-semibold">
                  Intermediate
                </h4>
                <ul className="space-y-2">
                  <li><Link href="/react-development" className="hover:text-orange-500">React.js Development</Link></li>
                  <li><Link href="/node-development" className="hover:text-orange-500">Node.js & Express.js</Link></li>
                  <li><Link href="/rest-api-development" className="hover:text-orange-500">REST API</Link></li>
                  <li><Link href="/mongodb" className="hover:text-orange-500">MongoDB & SQL</Link></li>
                  <li><Link href="/ui-ux-principles" className="hover:text-orange-500">UI/UX Principles</Link></li>
                </ul>
              </div>

              {/* Advanced */}
              <div>
                <h4 className="text-orange-500 border-b border-orange-500 mb-3 pb-1 font-semibold">
                  Advanced
                </h4>
                <ul className="space-y-2">
                  <li><Link href="/full-stack-web-development" className="hover:text-orange-500">Full-Stack Web Dev</Link></li>
                  <li><Link href="/react-native-mobile-apps" className="hover:text-orange-500">React Native Apps</Link></li>
                  <li><Link href="/cloud-computing" className="hover:text-orange-500">Cloud Computing</Link></li>
                  <li><Link href="/devops" className="hover:text-orange-500">DevOps & Deployment</Link></li>
                  <li><Link href="/ai-machine-learning" className="hover:text-orange-500">AI & ML</Link></li>
                </ul>
              </div>
            </div>
          </div>

          <Link href="/course/it" className="text-black hover:text-orange-500">
            Study Materials
          </Link>
          <Link href="/support" className="text-black hover:text-orange-500">
            Support
          </Link>
        </div>

        {/* ===== RIGHT SIDE (Desktop) ===== */}
        <div className="hidden md:flex items-center gap-4">
          {/* Search Bar */}
          <div className="flex items-center bg-gray-100 rounded-full px-4 py-2">
            <i className="fas fa-search text-gray-500"></i>
            <input
              type="text"
              placeholder="Search here..."
              className="bg-transparent outline-none px-2 text-sm"
            />
          </div>

          {/* Login/Register */}
          <Link
            href="/auth/register"
            className="bg-orange-500 text-white px-5 py-2 rounded-lg hover:bg-orange-600 transition"
          >
            Register
          </Link>
          <Link
            href="/auth/login"
            className="border border-orange-500 text-orange-500 px-5 py-2 rounded-lg hover:bg-orange-50 transition"
          >
            Login
          </Link>
        </div>

        {/* ===== MOBILE MENU BUTTON ===== */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl text-gray-700"
          aria-label="Toggle Menu"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* ===== MOBILE MENU ===== */}
      {menuOpen && (
        <nav className="md:hidden bg-white border-t border-gray-200 shadow-md py-4 px-6 flex flex-col gap-3 text-gray-800 font-medium text-lg z-50">
          <Link href="/course/it" className="py-2 border-b" onClick={() => setMenuOpen(false)}>Study Materials</Link>
          <Link href="/support" className="py-2 border-b" onClick={() => setMenuOpen(false)}>Support</Link>
          <Link href="/auth/register" className="py-2 bg-orange-500 text-white rounded-lg text-center" onClick={() => setMenuOpen(false)}>Register</Link>
          <Link href="/auth/login" className="py-2 border border-orange-500 text-orange-500 rounded-lg text-center" onClick={() => setMenuOpen(false)}>Login</Link>
        </nav>
      )}

      {/* ===== HERO CONTENT ===== */}
      <div className="relative text-center px-6 py-16 z-10">
        <h1 className="text-3xl md:text-5xl font-semibold mb-4">
          Build Your <br /> Programming Skill with Dousoft Eduverse
        </h1>
        <p className="text-gray-700 max-w-2xl mx-auto mb-8">
          Project-based learning, real mentorship, and interview prep—all in one trusted platform.
        </p>

        <div className="flex justify-center items-center gap-3 bg-white shadow-md rounded-full px-6 py-3 w-fit mx-auto mb-10">
          <span className="text-sm text-gray-500">Search By Course Name...</span>
          <i className="fas fa-search text-gray-600"></i>
        </div>

        {/* ===== STATS ===== */}
        <div className="flex justify-center gap-10">
          <div className="flex items-center gap-3">
            <div className="bg-white rounded-full shadow-md w-16 h-16 flex items-center justify-center">
              <Image src="/assets/it/Vector.svg" alt="Courses" width={40} height={40} />
            </div>
            <div className="text-lg font-light leading-tight text-left">
              3020 <br /> Online Courses
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-white rounded-full shadow-md w-16 h-16 flex items-center justify-center">
              <Image src="/assets/it/Vector (1).svg" alt="Instructors" width={40} height={40} />
            </div>
            <div className="text-lg font-light leading-tight text-left">
              Top <br /> Instructors
            </div>
          </div>
        </div>
      </div>

      {/* ===== HERO IMAGES (Desktop Only) ===== */}
      <div className="hidden md:block absolute inset-0 pointer-events-none">
        <Image src="/assets/it/Vector 4.png" alt="Background Shape" fill className="object-cover opacity-70" />
        <Image src="/assets/it/boy2.png" alt="Boy" width={250} height={250} className="absolute left-10 top-40 animate-float scale-x-[-1]" />
        <Image src="/assets/it/girl.png" alt="Girl" width={200} height={250} className="absolute right-40 top-30 animate-float" />
        <Image src="/assets/it/html.png" alt="HTML Icon" width={80} height={80} className="absolute right-10 top-20 animate-float" />
        <Image src="/assets/it/python.png" alt="Python Icon" width={90} height={90} className="absolute right-1/4 bottom-10 animate-float" />
      </div>
    </header>
  );
}
