"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdown, setDropdown] = useState<string | null>(null);

  const toggleDropdown = (name: string) => {
    setDropdown(dropdown === name ? null : name);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="flex justify-between items-center px-6 md:px-12 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="Dousoft" width={120} height={40} />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8 font-medium text-gray-700">
          <Link href="/" className="hover:text-orange-600 transition">Home</Link>

          {/* Dropdown Example */}
          <div
            className="relative group cursor-pointer"
            onMouseEnter={() => toggleDropdown("courses")}
            onMouseLeave={() => setDropdown(null)}
          >
            <div className="flex items-center gap-1 hover:text-orange-600">
              Courses <ChevronDown size={16} />
            </div>

            <div
              className={`absolute bg-white shadow-lg rounded-lg mt-3 w-56 py-2 transition-all duration-200 ${
                dropdown === "courses" ? "opacity-100 visible" : "opacity-0 invisible"
              }`}
            >
              <Link href="/it" className="block px-4 py-2 hover:bg-orange-50">
                IT Courses
              </Link>
              <Link href="/academics" className="block px-4 py-2 hover:bg-orange-50">
                Academic Courses
              </Link>
            </div>
          </div>

          <Link href="/contact" className="hover:text-orange-600 transition">Contact</Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-800 p-2 rounded-md hover:bg-gray-100 transition"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden bg-white border-t shadow-md py-4 flex flex-col gap-4 text-lg text-gray-800 px-6">
          <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/it" onClick={() => setMenuOpen(false)}>IT Courses</Link>
          <Link href="/academics" onClick={() => setMenuOpen(false)}>Academics</Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
        </nav>
      )}
    </header>
  );
}
