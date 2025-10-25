"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Search } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center px-4 md:px-10 h-20 relative z-50 bg-green-50 shadow-sm">
      {/* Logo */}
      <Link href="/">
        <Image
          src="/logo.png"
          alt="Dousoft Eduverse Logo"
          width={140}
          height={40}
          className="object-contain"
        />
      </Link>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-gray-800 text-2xl focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X /> : <Menu />}
      </button>

      {/* Navigation Links */}
      <div
        className={`${
          menuOpen
            ? "flex flex-col absolute top-20 left-0 w-full bg-white shadow-md p-6 space-y-4"
            : "hidden"
        } md:flex md:space-x-6 md:static md:flex-row md:bg-transparent md:shadow-none md:p-0`}
      >
        {/* Courses Dropdown */}
        <div
          className="relative"
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <button className="flex items-center gap-2 text-gray-800 hover:text-orange-500 font-medium">
            <Image
              src="/assets/it/emojione-monotone_books.svg"
              alt="Books"
              width={20}
              height={20}
            />
            <span>Courses</span>
            <Image
              src="/assets/it/Polygon 1.svg"
              alt="Arrow"
              width={10}
              height={10}
            />
          </button>

          {/* Mega Menu */}
          {dropdownOpen && (
            <div className="absolute left-0 top-full mt-3 w-[90vw] md:w-[900px] bg-white shadow-lg rounded-xl p-6 grid grid-cols-1 md:grid-cols-3 gap-6 z-50">
              {/* Elementary */}
              <div>
                <h4 className="text-orange-500 border-b-2 border-orange-500 mb-3 pb-1 font-semibold">
                  Elementary (1st–5th)
                </h4>
                <ul className="space-y-2 text-gray-700">
                  {["1st", "2nd", "3rd", "4th", "5th"].map((num) => (
                    <li key={num}>
                      <Link
                        href={`/${num.toLowerCase()}-class`}
                        className="hover:text-orange-500 transition"
                      >
                        {num} Class
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Junior */}
              <div>
                <h4 className="text-orange-500 border-b-2 border-orange-500 mb-3 pb-1 font-semibold">
                  Junior (6th–8th)
                </h4>
                <ul className="space-y-2 text-gray-700">
                  {["6th", "7th", "8th"].map((num) => (
                    <div key={num}>
                      <li>
                        <Link
                          href={`/${num}-class-english`}
                          className="hover:text-orange-500 transition"
                        >
                          {num} Class – English
                        </Link>
                      </li>
                      <li>
                        <Link
                          href={`/${num}-class-hindi`}
                          className="hover:text-orange-500 transition"
                        >
                          {num} Class – Hindi
                        </Link>
                      </li>
                    </div>
                  ))}
                </ul>
              </div>

              {/* Senior */}
              <div>
                <h4 className="text-orange-500 border-b-2 border-orange-500 mb-3 pb-1 font-semibold">
                  Senior (9th–12th)
                </h4>
                <ul className="space-y-2 text-gray-700">
                  {["9th", "10th", "11th", "12th"].map((num) => (
                    <li key={num}>
                      <Link
                        href={`/${num}-class`}
                        className="hover:text-orange-500 transition"
                      >
                        {num} Class
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* Other Links */}
        <Link
          href="/course/academics"
          className="text-gray-800 hover:text-orange-500 md:bg-orange-100 md:rounded-lg md:px-3 md:py-1 font-medium"
        >
          Study Materials
        </Link>
        <Link
          href="/support"
          className="hover:text-orange-500 text-gray-800 font-medium"
        >
          Support
        </Link>

        {/* Mobile Search */}
        <div className="flex items-center bg-gray-100 rounded-full px-3 py-2 md:hidden mt-2">
          <Search className="text-gray-500" size={20} />
          <input
            type="text"
            placeholder="Search here..."
            className="bg-transparent border-none outline-none text-gray-700 ml-2 w-full"
          />
        </div>

        {/* Mobile Login/Register */}
        <div className="flex flex-col md:hidden gap-2 mt-2">
          <Link
            href="/auth/register"
            className="bg-orange-500 text-white py-2 px-4 rounded-lg text-center font-medium hover:bg-orange-600 transition"
            onClick={() => setMenuOpen(false)}
          >
            Register
          </Link>
          <Link
            href="/auth/login"
            className="border border-orange-500 text-orange-500 py-2 px-4 rounded-lg text-center font-medium hover:bg-orange-50 transition"
            onClick={() => setMenuOpen(false)}
          >
            Login
          </Link>
        </div>
      </div>

      {/* Desktop Right Section */}
      <div className="hidden md:flex items-center gap-6">
        <div className="flex items-center bg-gray-100 rounded-full px-3 py-2 w-72">
          <Search className="text-gray-500" size={20} />
          <input
            type="text"
            placeholder="Search here..."
            className="bg-transparent border-none outline-none text-gray-700 ml-2 w-full"
          />
        </div>

        {/* Desktop Login/Register */}
        <div className="flex items-center gap-4">
          <Link
            href="/auth/register"
            className="bg-orange-500 text-white px-5 py-2 rounded-lg font-medium hover:bg-orange-600 transition"
          >
            Register
          </Link>
          <Link
            href="/auth/login"
            className="border border-orange-500 text-orange-500 px-5 py-2 rounded-lg font-medium hover:bg-orange-50 transition"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}
