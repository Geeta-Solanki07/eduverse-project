"use client";

import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="w-full bg-white">

      {/* ===================== HERO SECTION ===================== */}
      <section className="relative w-full bg-[#c5d1ff] pt-28 pb-20 text-center overflow-hidden">
        {/* floating icons */}
        <Image
          src="/assets/it/python.png"
          alt="python icon"
          width={120}
          height={120}
          className="absolute top-16 left-10 w-20 md:w-28 opacity-80 animate-bounce"
        />
        <Image
          src="/assets/it/html.png"
          alt="html icon"
          width={120}
          height={120}
          className="absolute bottom-10 right-10 w-20 md:w-28 opacity-80 animate-pulse"
        />

        <h1 className="text-3xl md:text-5xl font-bold leading-snug text-gray-900">
          Empowering the Next Generation of Developers
        </h1>

        <p className="mt-4 max-w-2xl mx-auto text-gray-700 text-sm md:text-base">
          Dousoft Eduverse is revolutionizing tech education through project-based
          learning, expert mentorship, and industry-aligned curriculum.
        </p>

        <Link
          href="#story-top"
          className="inline-block mt-6 px-6 py-3 bg-orange-600 text-white rounded-full shadow-md hover:bg-orange-700 transition"
        >
          Explore Our Story
        </Link>
      </section>

      {/* ===================== OUR STORY HEADING + IMAGE ===================== */}
      <section id="story-top" className="w-full text-center max-w-5xl mx-auto px-6 py-16">
        
        {/* Orange heading */}
        <h2 className="text-orange-600 font-bold tracking-widest text-sm">
          OUR STORY
        </h2>

        {/* Big Title */}
        <h3 className="text-4xl md:text-5xl font-extrabold mt-3 text-gray-900">
          A Journey of Innovation & Learning
        </h3>

        {/* Attractive Image */}
        <div className="w-full mt-10">
          <Image
            src="/assets/it/about-us.jpg"
            alt="About Eduverse Team"
            width={1400}
            height={700}
            className="rounded-3xl shadow-2xl object-cover w-full h-[380px] md:h-[500px]"
          />
        </div>
      </section>

      {/* ===================== STORY / MISSION SECTION (CENTERED) ===================== */}
      <section
        id="mission"
        className="flex flex-col items-center text-center max-w-4xl mx-auto px-6 py-20"
      >
        <h2 className="text-orange-600 font-semibold text-sm tracking-widest">
          OUR STORY CONTINUES
        </h2>

        <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-3 leading-tight">
          From Passion to Platform
        </h3>

        <p className="mt-6 text-gray-700 text-lg leading-relaxed">
          Founded in 2018, Dousoft Eduverse began as a small initiative to bridge 
          the gap between academic learning and real-world software development 
          skills. What started as weekend workshops has grown into a premier online 
          learning platform serving thousands of students worldwide.
        </p>

        <p className="mt-6 text-gray-700 text-lg leading-relaxed">
          Our founders, seasoned developers themselves, recognized the need for 
          practical, hands-on education that prepares students for the tech industry. 
          Today, we are proud to be at the forefront of innovative technical learning.
        </p>
      </section>

      {/* ===================== VALUES SECTION ===================== */}
      <section className="py-20 bg-white">
        <div className="text-center max-w-3xl mx-auto px-6">
          <h2 className="text-indigo-600 font-semibold text-sm tracking-widest">
            OUR VALUES
          </h2>

          <h3 className="text-4xl md:text-5xl font-extrabold mt-2 text-gray-900">
            What Guides Everything We Do
          </h3>

          <p className="mt-4 text-gray-600 text-lg">
            These core principles shape our curriculum, teaching methods, and
            student interactions.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto mt-16 px-6">
          {values.map((val, idx) => (
            <div
              key={idx}
              className="bg-[#c5d1ff] p-10 rounded-2xl shadow-md hover:shadow-xl transition"
            >
              <div className="text-4xl mb-4 text-indigo-700">{val.icon}</div>
              <h4 className="text-2xl font-semibold mb-3 text-gray-900">
                {val.title}
              </h4>
              <p className="text-gray-700 text-lg leading-relaxed">
                {val.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

const values = [
  { icon: "🤝", title: "Student Success First", desc: "Every decision we make is measured against its impact on student outcomes." },
  { icon: "💻", title: "Practical Learning", desc: "We emphasize hands-on, project-based education with real applications." },
  { icon: "👨‍🏫", title: "Expert Instruction", desc: "Our instructors bring current, real-world experience into every lesson." },
  { icon: "🚀", title: "Continuous Innovation", desc: "We constantly update our curriculum to reflect the latest tech trends." },
  { icon: "👥", title: "Community Focus", desc: "We foster a supportive community where students collaborate and grow." },
  { icon: "🎯", title: "Career Outcomes", desc: "We provide extensive support to help students achieve career goals." },
];
