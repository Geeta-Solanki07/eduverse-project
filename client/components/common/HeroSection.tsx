"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-md sticky top-0 z-50 transition-all duration-300">
      <div className="flex justify-between items-center px-6 md:px-12 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/logo.png"
            alt="Logo"
            width={120}
            height={40}
            className="hover:scale-110 transition-transform duration-300 ease-in-out"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 text-lg font-medium text-gray-800">
          {["Home", "Contact"].map((item) => (
            <Link
              key={item}
              href={item === "Home" ? "/" : "/contact"}
              className="relative group hover:text-orange-600 transition-all"
            >
              {item}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-orange-600 transition-all group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        {/* Mobile Menu */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-800 p-2 rounded-md hover:bg-gray-100 transition"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {menuOpen && (
        <nav className="md:hidden bg-white border-t shadow-md py-4 flex flex-col gap-4 text-lg text-gray-800 px-6">
          <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
        </nav>
      )}
    </header>
  );
}
