"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-8">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Left: Copyright */}
        <p className="text-gray-600 text-sm md:text-base">
          &copy; {new Date().getFullYear()} Eduverse. All rights reserved.
        </p>

        {/* Right: Links */}
        <div className="flex flex-wrap gap-4 md:gap-6 text-gray-700 text-sm md:text-base">
          <Link href="#" className="hover:text-orange-500 transition-colors">About</Link>
          <Link href="#" className="hover:text-orange-500 transition-colors">Terms</Link>
          <Link href="#" className="hover:text-orange-500 transition-colors">Career</Link>
          <Link href="#" className="hover:text-orange-500 transition-colors">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}
