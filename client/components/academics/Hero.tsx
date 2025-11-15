"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Search } from "lucide-react";

const HeroSection = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="relative bg-green-50 overflow-hidden p-5">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-4 md:px-10 h-20 relative z-20">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Dousoft Eduverse Logo"
            width={120}
            height={40}
            className="object-contain"
          />
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800 text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

        {/* Navigation Links */}
        <div
          className={`${
            menuOpen
              ? "flex flex-col absolute top-20 left-0 w-full bg-white shadow-md p-4 space-y-4"
              : "hidden"
          } md:flex md:space-x-6 md:static md:flex-row md:bg-transparent md:shadow-none items-center`}
        >
          {/* Courses Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button className="flex items-center gap-2 text-gray-800 hover:text-orange-500">
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
                    Elementary (1st-5th)
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    {["1st", "2nd", "3rd", "4th", "5th"].map((num) => (
                      <li key={num}>
                        <Link href={`/${num.toLowerCase()}-class`}>
                          {num} Class
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Junior */}
                <div>
                  <h4 className="text-orange-500 border-b-2 border-orange-500 mb-3 pb-1 font-semibold">
                    Junior (6th-8th)
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    {["6th", "7th", "8th"].map((num) => (
                      <>
                        <li key={`${num}-eng`}>
                          <Link href={`/${num}-class-english`}>
                            {num} Class - English
                          </Link>
                        </li>
                        <li key={`${num}-hin`}>
                          <Link href={`/${num}-class-hindi`}>
                            {num} Class - Hindi
                          </Link>
                        </li>
                      </>
                    ))}
                  </ul>
                </div>

                {/* Senior */}
                <div>
                  <h4 className="text-orange-500 border-b-2 border-orange-500 mb-3 pb-1 font-semibold">
                    Senior (9th-12th)
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    {["9th", "10th", "11th", "12th"].map((num) => (
                      <li key={num}>
                        <Link href={`/${num}-class`}>{num} Class</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>

          <Link
            href="/course/academics"
            className="text-gray-800 hover:text-orange-500 md:bg-orange-100 md:rounded-lg md:px-3 md:py-1"
          >
            Study Materials
          </Link>
          <Link href="/support" className="hover:text-orange-500 text-gray-800">
            Support
          </Link>

          {/* Mobile Search */}
          <div className="flex items-center bg-gray-100 rounded-full px-3 py-2 md:hidden">
            <Search className="text-gray-500" size={20} />
            <input
              type="text"
              placeholder="Search here..."
              className="bg-transparent border-none outline-none text-gray-700 ml-2 w-full"
            />
          </div>

          {/* Mobile Login/Register */}
          <Link
            href="/auth/register"
            className="bg-orange-500 text-white py-2 px-4 rounded-lg text-center md:hidden"
            onClick={() => setMenuOpen(false)}
          >
            Register
          </Link>
          <Link
            href="/auth/login"
            className="border border-orange-500 text-orange-500 py-2 px-4 rounded-lg text-center md:hidden"
            onClick={() => setMenuOpen(false)}
          >
            Login
          </Link>
        </div>

        {/* Desktop Right Section */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center bg-gray-100 rounded-full px-3 py-2 w-72">
            <Search className="text-gray-500" size={20} />
            <input
              type="text"
              placeholder="Search here..."
              className="bg-transparent border-none outline-none text-gray-700 ml-2 w-full"
            />
          </div>
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
      </nav>

      {/* Hero Content */}
      <div className="text-center px-4 py-12 relative z-10">
        <h1 className="text-3xl md:text-5xl font-semibold text-gray-800 mb-4">
          A Brighter Future For Kids
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          Let your child start learning how to excel in School Curriculum, Maths & English!
        </p>

        <div className="max-w-md mx-auto flex items-center justify-between bg-white shadow-lg rounded-full px-5 py-3 mb-8">
          <span className="text-sm text-gray-500 truncate">
            Search By Course Name, Just Type To Get Hint...
          </span>
          <Search className="text-gray-500" />
        </div>

        <div className="flex flex-wrap justify-center gap-8 mb-10">
          {/* Classes */}
          <div className="flex items-center gap-4">
            <div className="bg-white p-4 rounded-full shadow-md w-16 h-16 flex items-center justify-center">
              <Image
                src="/assets/it/Vector.svg"
                alt="Classes Icon"
                width={50}
                height={50}
              />
            </div>
            <div className="text-lg font-light text-gray-700">
              Classes <br /> 1st to 12th
            </div>
          </div>

          {/* Instructors */}
          <div className="flex items-center gap-4">
            <div className="bg-white p-4 rounded-full shadow-md w-16 h-16 flex items-center justify-center">
              <Image
                src="/assets/it/Vector (1).svg"
                alt="Instructors Icon"
                width={50}
                height={50}
              />
            </div>
            <div className="text-lg font-light text-gray-700">
              200+ Top <br /> Instructors
            </div>
          </div>
        </div>
      </div>

      {/* Background Images */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <Image
          src="/assets/ac/girl.png"
          alt="Girl"
          width={200}
          height={200}
          className="absolute left-[5%] top-[35%] w-40 md:w-56 hidden md:block"
        />
        <Image
          src="/assets/ac/boy.png"
          alt="Boy"
          width={250}
          height={250}
          className="absolute right-[5%] top-[30%] w-52 md:w-64 hidden md:block"
        />
        <Image
          src="/assets/ac/book.png"
          alt="Book"
          width={100}
          height={100}
          className="absolute left-[3%] top-[30%] opacity-10 md:opacity-100"
        />
        <Image
          src="/assets/ac/callendar.png"
          alt="Calendar"
          width={60}
          height={60}
          className="absolute right-[3%] top-[20%] opacity-10 md:opacity-100"
        />
        <Image
          src="/assets/ac/abt-shape.png"
          alt="Shape"
          width={1000}
          height={400}
          className="absolute bottom-0 left-0 w-full"
        />
      </div>
    </header>
  );
};

export default HeroSection;
