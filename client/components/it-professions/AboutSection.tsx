"use client";

import Image from "next/image";
import { CheckCircle } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="w-full py-24 bg-gradient-to-b from-white to-orange-50">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">

        {/* LEFT IMAGE */}
        <div className="relative flex justify-center items-center">
          {/* Soft Glow */}
          <div className="absolute -inset-6 bg-orange-300/20 blur-3xl rounded-full"></div>

          <div className="relative w-full max-w-[550px] h-[380px] md:h-[450px] rounded-3xl overflow-hidden shadow-2xl hover:shadow-orange-200/40 transition-all duration-300">
            <Image
              src="/assets/it/about.png"
              alt="About Us"
              fill
              className="object-cover object-center"
            />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex flex-col gap-6">

          {/* Tag */}
          <span className="text-orange-600 text-sm font-semibold tracking-wider bg-orange-100 px-4 py-1 w-fit rounded-full">
            ABOUT US
          </span>

          {/* Heading */}
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            Empowering Students with  
            <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              {" "}Innovative Learning
            </span>
          </h3>

          {/* Description */}
          <p className="text-gray-600 leading-relaxed text-lg">
            We combine industry-level IT training with academic excellence,
            enabling students to achieve success in competitive fields such as
            AI, ML, Web and App Development.
          </p>

          <p className="text-gray-600 leading-relaxed text-lg">
            Backed by experienced mentors and modern digital learning systems,
            we make education more interactive, practical and career-focused.
          </p>

          {/* Feature List */}
          <div className="space-y-4 mt-2">
            {[
              "Expert Faculty Team",
              "Structured Learning Path",
              "Regular Tests & Practice Sheets",
              "Industry-Ready Curriculum"
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle className="text-orange-500" size={26} />
                <span className="text-lg font-medium text-gray-800">
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* Button */}
          <a
            href="/about"
            className="mt-6 inline-block px-8 py-3 bg-gradient-to-r from-orange-500 to-red-500
            hover:opacity-90 text-white font-semibold rounded-xl shadow-lg transition-all duration-300"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
