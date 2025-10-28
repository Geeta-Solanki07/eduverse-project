"use client";
import Image from "next/image";
import Link from "next/link";

export default function ChooseSection() {
  return (
    <section className="relative text-center py-24 px-6 bg-gradient-to-b from-white via-blue-50 to-white overflow-hidden">
      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-300/20 rounded-full blur-3xl -z-10 animate-pulse" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-orange-300/20 rounded-full blur-3xl -z-10 animate-pulse" />

      <div className="mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Choose Your <span className="text-blue-600">Path</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
          Explore <span className="text-blue-600 font-semibold">IT Profession</span> or{" "}
          <span className="text-orange-500 font-semibold">Academic Programs</span> for your career success.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {/* IT Path */}
        <Link
          href="/it"
          className="group relative bg-gradient-to-br from-blue-600 via-blue-500 to-pink-500 text-white rounded-3xl p-10 flex flex-col items-center shadow-2xl hover:-translate-y-2 transition-all"
        >
          <Image src="/assets/ra2.png" alt="IT Courses" width={80} height={80} />
          <h3 className="mt-5 text-2xl font-semibold">IT PROFESSION COURSES</h3>
          <p className="mt-2 opacity-90 text-sm">Advance your tech career with hands-on skills</p>
          <button className="mt-6 bg-black/80 hover:bg-black px-7 py-2.5 rounded-full text-sm font-medium transition">
            Get Started →
          </button>
        </Link>

        {/* Academic Path */}
        <Link
          href="/academics"
          className="group relative bg-gradient-to-br from-orange-500 to-yellow-400 text-white rounded-3xl p-10 flex flex-col items-center shadow-2xl hover:-translate-y-2 transition-all"
        >
          <Image src="/assets/ra3.png" alt="Academics" width={80} height={80} />
          <h3 className="mt-5 text-2xl font-semibold">ACADEMIC COURSES</h3>
          <p className="mt-2 opacity-90 text-sm">Explore academic excellence and success paths</p>
          <button className="mt-6 bg-black/80 hover:bg-black px-7 py-2.5 rounded-full text-sm font-medium transition">
            Get Started →
          </button>
        </Link>
      </div>
    </section>
  );
}
