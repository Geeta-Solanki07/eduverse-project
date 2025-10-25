"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-lg sticky top-0 z-50 transition-shadow duration-300 hover:shadow-xl">
      <div className="flex justify-between items-center px-6 md:px-12 py-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Image
            src="/logo.png"
            alt="Logo"
            width={120}
            height={40}
            className="hover:scale-110 transition-transform duration-300 ease-in-out"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 text-lg font-medium text-gray-800">
          <Link
            href="/"
            className="relative group hover:text-orange-600 transition-colors duration-300"
          >
            Home
            {/* Underline Animation */}
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-orange-600 transition-all group-hover:w-full"></span>
          </Link>
          <Link
            href=""
            className="relative group hover:text-orange-600 transition-colors duration-300"
          >
            Contact
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-orange-600 transition-all group-hover:w-full"></span>
          </Link>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-gray-800 p-2 rounded-md hover:bg-gray-100 transition-all duration-200"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={26} className="animate-spin" /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden bg-white border-t border-gray-200 shadow-lg py-4 px-6 flex flex-col gap-4 text-gray-800 font-medium text-lg animate-fadeIn">
          <Link
            href="/"
            className="hover:translate-x-2 transition-transform duration-200"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href=""
            className="hover:translate-x-2 transition-transform duration-200"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>
        </nav>
      )}
    </header>
  );
}
