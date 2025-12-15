"use client";

import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="w-full bg-white text-gray-900">

      {/* ================= HERO SECTION ================= */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-200 via-blue-100 to-purple-200 pt-32 pb-24 text-center">
        <Image
          src="/assets/it/python.png"
          alt="python"
          width={120}
          height={120}
          className="absolute top-20 left-10 opacity-70 animate-bounce hidden md:block"
        />
        <Image
          src="/assets/it/html.png"
          alt="html"
          width={120}
          height={120}
          className="absolute bottom-10 right-10 opacity-70 animate-pulse hidden md:block"
        />

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          Empowering the Next <br />
          <span className="text-indigo-700">Generation of Developers</span>
        </h1>

        <p className="mt-6 max-w-3xl mx-auto text-gray-700 text-lg">
          Dousoft Eduverse bridges the gap between education and industry through
          hands-on learning, expert mentorship, and real-world projects.
        </p>

        <Link
          href="#story"
          className="inline-block mt-8 px-8 py-4 bg-orange-600 text-white rounded-full text-lg font-semibold shadow-lg hover:bg-orange-700 transition"
        >
          Discover Our Journey →
        </Link>
      </section>

      {/* ================= STORY SECTION ================= */}
      <section id="story" className="max-w-6xl mx-auto px-6 py-24 text-center">
        <span className="text-orange-600 font-semibold tracking-widest text-sm">
          OUR STORY
        </span>

        <h2 className="text-4xl md:text-5xl font-bold mt-4">
          From Passion to a Global Platform
        </h2>

        <p className="mt-6 max-w-4xl mx-auto text-gray-700 text-lg leading-relaxed">
          Founded in 2018, Dousoft Eduverse began as a small initiative to help
          students gain practical technical skills. Today, it has evolved into a
          modern online learning platform serving thousands of learners worldwide.
        </p>

        <div className="mt-14">
          <Image
            src="/assets/it/about-us.jpg"
            alt="Eduverse Team"
            width={1400}
            height={700}
            className="rounded-3xl shadow-2xl w-full h-[420px] md:h-[520px] object-cover"
          />
        </div>
      </section>

      {/* ================= MISSION SECTION ================= */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h3 className="text-indigo-600 font-semibold tracking-widest text-sm">
            OUR MISSION
          </h3>

          <h2 className="text-4xl md:text-5xl font-extrabold mt-4">
            Learning That Builds Careers
          </h2>

          <p className="mt-6 text-gray-700 text-lg leading-relaxed">
            We focus on practical, job-ready education. Our curriculum is designed
            by industry experts to ensure learners gain skills that matter in the
            real world.
          </p>
        </div>
      </section>

      {/* ================= VALUES SECTION ================= */}
      <section className="py-24 bg-white">
        <div className="text-center max-w-4xl mx-auto px-6">
          <h3 className="text-indigo-600 font-semibold tracking-widest text-sm">
            OUR VALUES
          </h3>

          <h2 className="text-4xl md:text-5xl font-extrabold mt-4">
            What Drives Eduverse
          </h2>

          <p className="mt-6 text-gray-600 text-lg">
            Our core principles define how we teach, build, and grow.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto mt-16 px-6">
          {values.map((val, i) => (
            <div
              key={i}
              className="bg-gradient-to-br from-indigo-100 to-blue-100 p-10 rounded-3xl shadow-md hover:shadow-xl transition"
            >
              <div className="text-5xl mb-4">{val.icon}</div>
              <h4 className="text-2xl font-semibold mb-3">
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
  {
    icon: "🤝",
    title: "Student First",
    desc: "Every decision we take is measured by how it benefits our learners."
  },
  {
    icon: "💻",
    title: "Practical Learning",
    desc: "Hands-on projects that mirror real-world industry challenges."
  },
  {
    icon: "👨‍🏫",
    title: "Expert Mentorship",
    desc: "Learn from professionals actively working in the tech industry."
  },
  {
    icon: "🚀",
    title: "Innovation",
    desc: "We constantly evolve to keep pace with modern technologies."
  },
  {
    icon: "👥",
    title: "Community",
    desc: "A collaborative ecosystem where learners grow together."
  },
  {
    icon: "🎯",
    title: "Career Outcomes",
    desc: "Our success is defined by the careers our learners build."
  }
];
