"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-8">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-gray-600 text-sm md:text-base">
          &copy; {new Date().getFullYear()} Dousoft Eduverse. All rights reserved.
        </p>

        <div className="flex flex-wrap gap-4 md:gap-6 text-gray-700 text-sm md:text-base">
          {["About", "Terms", "Career", "Privacy Policy"].map((item) => (
            <Link key={item} href="#" className="hover:text-orange-500 transition-colors">
              {item}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
