"use client";

import Image from "next/image";
import { CheckCircle } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="flex flex-col md:flex-row justify-center items-center gap-10 py-16 px-6 md:px-12 bg-white">
      
      {/* About Image */}
      <div className="w-full max-w-lg">
        <Image
          src="/assets/ac/abt-girl.png"
          alt="About Us"
          width={592}
          height={500}
          className="rounded-2xl w-full h-auto object-cover shadow-lg"
          priority
        />
      </div>

      {/* About Content */}
      <div className="w-full max-w-lg">
        <h2 className="text-[#F37021] text-2xl md:text-3xl font-light mb-3 relative inline-block">
          ABOUT US
          <span className="absolute bottom-[-8px] left-0 w-32 h-2 bg-[#F8AC76] -z-10"></span>
        </h2>

        <h3 className="text-black text-2xl md:text-3xl font-semibold mb-5 leading-snug">
          Empowering Students Through Quality Academic Education
        </h3>

        <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">
          We are dedicated to providing high-quality academic courses that help
          students build strong foundations and achieve success in their educational journey.
        </p>

        <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
          Our team of experienced educators and industry experts ensures that
          every learner receives personalized guidance, practical skills, and the
          confidence to excel in both academics and real-world challenges.
        </p>

        {/* Features */}
        <div className="space-y-4 mb-8">
          <div className="flex items-center gap-3">
            <CheckCircle className="text-[#F37021]" size={28} />
            <p className="text-lg font-medium text-black">Expert Faculty Team</p>
          </div>

          <div className="flex items-center gap-3">
            <CheckCircle className="text-[#F37021]" size={28} />
            <p className="text-lg font-medium text-black">Structured Learning Path</p>
          </div>

          <div className="flex items-center gap-3">
            <CheckCircle className="text-[#F37021]" size={28} />
            <p className="text-lg font-medium text-black">Practical Learning & Projects</p>
          </div>

          <div className="flex items-center gap-3">
            <CheckCircle className="text-[#F37021]" size={28} />
            <p className="text-lg font-medium text-black">Personalized Student Support</p>
          </div>
        </div>

        {/* Button */}
        <a
          href="/about"
          className="inline-block bg-[#F37021] text-white font-bold text-base md:text-lg px-6 py-3 rounded-full shadow-lg hover:bg-[#d85e18] transition-all duration-300"
        >
          Learn More
        </a>
      </div>
    </section>
  );
}
