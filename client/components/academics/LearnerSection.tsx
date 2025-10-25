"use client";

import Image from "next/image";

export default function LearnersSection() {
  return (
    <section className="w-full max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-10 px-5 my-20">
      {/* Text Content */}
      <div className="flex-1 flex flex-col gap-5">
        <h2 className="text-2xl font-light text-black">LEARNERS AND STUDENTS</h2>
        <h3 className="text-4xl md:text-5xl font-semibold text-black leading-tight">
          You can learn anything.
        </h3>
        <p className="text-lg md:text-xl font-medium text-gray-700 leading-relaxed">
          Build a deep, solid understanding in math, science, grammar, history, and more.
        </p>
        <a
          href="#"
          className="self-start px-6 py-3 rounded-full bg-orange-500 text-white font-medium text-base shadow-lg hover:bg-orange-600 transition"
        >
          Get Started Now
        </a>
      </div>

      {/* Image */}
      <div className="flex-1 max-w-[540px] w-full">
        <Image
          src="/assets/ac/learner.png"
          alt="Students Learning"
          width={540}
          height={400}
          className="rounded-xl object-contain"
        />
      </div>
    </section>
  );
}
