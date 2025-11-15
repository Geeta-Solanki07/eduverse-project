"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Search } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [academicOpen, setAcademicOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-5 md:px-10 py-4 bg-white/80 backdrop-blur-xl shadow-md sticky top-0 z-50">

      {/* LOGO */}
      <Link href="/" className="flex-shrink-0">
        <Image src="/logo.png" alt="Dousoft Eduverse" width={120} height={40} />
      </Link>

      {/* DESKTOP MENU */}
      <div className="hidden md:flex flex-1 justify-center items-center gap-10">

        {/* ACADEMICS DROPDOWN */}
        <div
          className="relative group"
          onMouseEnter={() => setAcademicOpen(true)}
          onMouseLeave={() => setAcademicOpen(false)}
        >
          <button className="flex items-center gap-2 font-semibold text-gray-700 hover:text-orange-500 transition">
            <Image src="/assets/it/emojione-monotone_books.svg" width={20} height={20} alt="Books" />
            Academics
            <Image src="/assets/it/Polygon 1.svg" width={10} height={10} alt="Arrow" />
          </button>

          {/* ACADEMIC MEGA MENU */}
          {academicOpen && (
            <div className="absolute left-1/2 -translate-x-1/2 top-full mt-3 bg-white w-[900px] p-8 rounded-2xl shadow-2xl border border-gray-100 grid grid-cols-3 gap-8">

              {/* Elementary */}
              <div>
                <h4 className="text-orange-500 font-bold pb-2 border-b">Elementary (1st–5th)</h4>
                <ul className="space-y-2 pt-3 text-gray-700 font-medium">
                  {["1st", "2nd", "3rd", "4th", "5th"].map((cls) => (
                    <li key={cls}>
                      <Link href={`/academics/${cls}`} className="hover:text-orange-500">{cls} Class</Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Junior */}
              <div>
                <h4 className="text-orange-500 font-bold pb-2 border-b">Junior (6th–8th)</h4>
                <ul className="space-y-2 pt-3 text-gray-700 font-medium">
                  {["6th", "7th", "8th"].map((cls) => (
                    <div key={cls} className="space-y-1">
                      <li>
                        <Link href={`/academics/${cls}-english`} className="hover:text-orange-500">
                          {cls} Class (English)
                        </Link>
                      </li>
                      <li>
                        <Link href={`/academics/${cls}-hindi`} className="hover:text-orange-500">
                          {cls} Class (Hindi)
                        </Link>
                      </li>
                    </div>
                  ))}
                </ul>
              </div>

              {/* Senior */}
              <div>
                <h4 className="text-orange-500 font-bold pb-2 border-b">Senior (9th–12th)</h4>
                <ul className="space-y-2 pt-3 text-gray-700 font-medium">
                  {["9th", "10th", "11th", "12th"].map((cls) => (
                    <li key={cls}>
                      <Link href={`/academics/${cls}`} className="hover:text-orange-500">{cls} Class</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* Study Materials */}
        <Link href="/course/academics" className="font-semibold text-gray-700 hover:text-orange-500 transition">
          Study Materials
        </Link>

        {/* Support */}
        <Link href="/support" className="font-semibold text-gray-700 hover:text-orange-500 transition">
          Support
        </Link>
      </div>

      {/* RIGHT AREA (DESKTOP) */}
      <div className="hidden md:flex items-center gap-5">

        {/* Search Bar */}
        <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 shadow-inner w-64">
          <Search size={18} className="text-gray-500" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none px-2 text-sm text-gray-700 w-full"
          />
        </div>

        {/* Auth */}
        <Link
          href="/auth/login"
          className="bg-orange-500 text-white px-6 py-2 rounded-full shadow-md hover:bg-orange-600 transition font-semibold"
        >
          Login / Register
        </Link>
      </div>

      {/* MOBILE ICON */}
      <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-gray-700">
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg p-6 flex flex-col gap-4 md:hidden">

          {/* Academics */}
          <details className="border rounded-lg p-3">
            <summary className="cursor-pointer font-medium text-gray-800">Academics</summary>
            <div className="mt-2 space-y-2 ml-2">
              {["1st","2nd","3rd","4th","5th"].map(c => <Link key={c} href={`/academics/${c}`}>{c} Class</Link>)}
              {["6th","7th","8th"].map(c => (
                <div key={c}>
                  <Link href={`/academics/${c}-english`}>{c} (English)</Link><br/>
                  <Link href={`/academics/${c}-hindi`}>{c} (Hindi)</Link>
                </div>
              ))}
              {["9th","10th","11th","12th"].map(c => <Link key={c} href={`/academics/${c}`}>{c} Class</Link>)}
            </div>
          </details>

          <Link href="/course/academics" className="text-gray-700 font-medium">Study Materials</Link>
          <Link href="/support" className="text-gray-700 font-medium">Support</Link>

          <Link
            href="/auth/login"
            className="bg-orange-500 text-white py-2 rounded-lg text-center font-semibold"
          >
            Login / Register
          </Link>
        </div>
      )}
    </nav>
  );
}
