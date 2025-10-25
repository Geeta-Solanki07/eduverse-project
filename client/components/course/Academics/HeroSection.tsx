"use client";

import { Search } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="bg-[#ebfff2] text-center py-20 px-5 md:px-20 relative overflow-hidden">
      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
        Academic Study Resources
      </h1>
      <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-10">
        Access comprehensive notes, sample papers, revision guides, and
        practice materials for all classes and subjects.
      </p>

      {/* Search Bar */}
      <div className="flex justify-center">
        <div className="flex w-full md:w-1/2 bg-white rounded-full shadow-lg p-2 items-center">
          <Search className="text-gray-400 ml-3" size={20} />
          <input
            type="text"
            placeholder="Search by class, subject, or topic..."
            className="flex-1 p-3 outline-none bg-transparent text-gray-700 rounded-full"
          />
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-medium shadow-md transition duration-300">
            Search
          </button>
        </div>
      </div>

      {/* Optional decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-orange-100 rounded-full opacity-50 animate-pulse hidden md:block"></div>
      <div className="absolute bottom-10 right-10 w-24 h-24 bg-green-100 rounded-full opacity-50 animate-bounce hidden md:block"></div>
    </section>
  );
}
