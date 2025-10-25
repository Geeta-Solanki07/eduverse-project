"use client";

import Image from "next/image";
import Link from "next/link";

export default function ChooseSection() {
  return (
    <section className="relative text-center py-24 px-6 bg-gradient-to-b from-white via-blue-50 to-white overflow-hidden">
      {/* Decorative blurred shapes */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-300/20 rounded-full blur-3xl -z-10 animate-pulse" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-orange-300/20 rounded-full blur-3xl -z-10 animate-pulse" />

      {/* Section Heading */}
      <div className="mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
          Choose Your <span className="text-blue-600">Path</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 font-light max-w-2xl mx-auto">
          Explore{" "}
          <span className="text-blue-600 font-semibold">IT Profession</span>{" "}
          Career Path or{" "}
          <span className="text-orange-500 font-semibold">Academic Programs</span>{" "}
          designed for your future.
        </p>
      </div>

      {/* Option Cards */}
      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {/* IT Courses */}
        <Link
          href="/it"
          className="group relative bg-gradient-to-br from-blue-600 via-blue-500 to-pink-500 text-white rounded-3xl p-10 flex flex-col items-center shadow-2xl hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] transition-all duration-500 hover:-translate-y-2"
        >
          {/* Subtle glass overlay */}
          <div className="absolute inset-0 bg-white/10 rounded-3xl backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <Image
            src="/assets/ra2.png"
            alt="IT Icon"
            width={80}
            height={80}
            className="relative z-10 drop-shadow-lg"
          />
          <h5 className="relative z-10 text-2xl font-semibold mt-5">
            IT PROFESSION COURSES
          </h5>
          <p className="relative z-10 text-base mt-2 text-blue-100 opacity-90">
            Advance your tech career with hands-on skills
          </p>
          <button className="relative z-10 mt-6 bg-black/80 hover:bg-black px-7 py-2.5 rounded-full text-sm font-medium transition-all duration-300">
            Get Started →
          </button>
        </Link>

        {/* Academic Courses */}
        <Link
          href="/academics"
          className="group relative bg-gradient-to-br from-orange-500 to-yellow-400 text-white rounded-3xl p-10 flex flex-col items-center shadow-2xl hover:shadow-[0_0_25px_rgba(251,146,60,0.5)] transition-all duration-500 hover:-translate-y-2"
        >
          <div className="absolute inset-0 bg-white/10 rounded-3xl backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <Image
            src="/assets/ra3.png"
            alt="Academic Icon"
            width={80}
            height={80}
            className="relative z-10 drop-shadow-lg"
          />
          <h5 className="relative z-10 text-2xl font-semibold mt-5">
            ACADEMIC COURSES
          </h5>
          <p className="relative z-10 text-base mt-2 text-orange-100 opacity-90">
            Explore academic excellence and success paths
          </p>
          <button className="relative z-10 mt-6 bg-black/80 hover:bg-black px-7 py-2.5 rounded-full text-sm font-medium transition-all duration-300">
            Get Started →
          </button>
        </Link>
      </div>
    </section>
  );
}
