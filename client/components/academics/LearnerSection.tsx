"use client";

import Image from "next/image";

export default function LearnersSection() {
  return (
    <section className="w-full max-w-[1250px] mx-auto flex flex-col md:flex-row items-center justify-between gap-14 px-6 py-20">

      {/* LEFT TEXT CONTENT */}
      <div className="flex-1 flex flex-col gap-5">

        <h2 className="text-xl md:text-2xl font-light tracking-wide text-orange-600">
          LEARNERS AND STUDENTS
        </h2>

        <h3 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
          You can learn anything.
        </h3>

        <p className="text-lg md:text-xl font-medium text-gray-600 leading-relaxed max-w-lg">
          Build a deep, solid understanding in math, science, grammar, history, and more.
        </p>

        <a
          href="#"
          className="mt-4 px-7 py-3 rounded-full bg-orange-500 text-white font-semibold text-base shadow-[0_4px_14px_rgba(255,165,0,0.4)] hover:bg-orange-600 hover:shadow-[0_6px_20px_rgba(255,165,0,0.5)] transition-all"
        >
          Get Started Now
        </a>
      </div>

      {/* RIGHT IMAGE */}
      <div className="flex-1 max-w-[560px] w-full relative group">
        {/* Image */}
        <Image
          src="/assets/ac/learner.png"
          alt="Students Learning"
          width={560}
          height={430}
          className="rounded-2xl object-contain shadow-xl group-hover:scale-[1.03] transition-transform duration-300"
        />

        {/* Subtle gradient glow */}
        <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-orange-300/20 rounded-full blur-3xl"></div>
        <div className="absolute -top-6 -right-6 w-40 h-40 bg-green-300/20 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
}
