"use client";

import { Search } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="bg-[#ebfff2] text-center py-24 px-5 md:px-24 relative overflow-hidden">
      
      {/* Heading */}
      <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-gray-900 leading-tight">
        Academic Study Resources
      </h1>
      <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto mb-12">
        Access comprehensive notes, sample papers, revision guides, and practice materials 
        for all classes and subjects.
      </p>

      {/* Search Bar */}
      <div className="flex justify-center">
        <div className="flex w-full md:w-2/3 bg-white rounded-full shadow-xl p-3 items-center border border-gray-200 hover:shadow-2xl transition duration-300">
          <Search className="text-gray-400 ml-4" size={22} />
          <input
            type="text"
            placeholder="Search by class, subject, or topic..."
            className="flex-1 p-3 outline-none bg-transparent text-gray-800 rounded-full text-lg"
          />
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold shadow-md transition duration-300 transform hover:-translate-y-0.5">
            Search
          </button>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-16 left-16 w-24 h-24 bg-orange-100 rounded-full opacity-40 animate-pulse hidden md:block"></div>
      <div className="absolute bottom-16 right-16 w-32 h-32 bg-green-100 rounded-full opacity-40 animate-bounce hidden md:block"></div>
      <div className="absolute top-1/2 right-10 w-20 h-20 bg-yellow-100 rounded-full opacity-30 animate-spin-slow hidden md:block"></div>
    </section>
  );
}
