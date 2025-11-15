"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <header className="relative bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 overflow-hidden text-black">

      {/* ========= Floating Background Shapes ========= */}
      <div className="pointer-events-none absolute inset-0">
        <Image
          src="/assets/it/Vector 4.png"
          alt="Shape"
          fill
          className="opacity-60 object-cover mix-blend-multiply"
        />

        {/* Boy */}
        <Image
          src="/assets/it/boy2.png"
          alt="Boy"
          width={270}
          height={270}
          className="hidden md:block absolute left-20 top-32 animate-floating-slow scale-x-[-1]"
        />

        {/* Girl */}
        <Image
          src="/assets/it/girl.png"
          alt="Girl"
          width={230}
          height={260}
          className="hidden md:block absolute right-32 top-28 animate-floating"
        />

        {/* Icons */}
        <Image
          src="/assets/it/html.png"
          alt="HTML Icon"
          width={70}
          height={70}
          className="hidden md:block absolute right-16 top-10 animate-bounce-slow"
        />

        <Image
          src="/assets/it/python.png"
          alt="Python Icon"
          width={85}
          height={85}
          className="hidden md:block absolute right-1/4 bottom-20 animate-bounce-mid"
        />
      </div>

      {/* ========= CONTENT ========= */}
      <div className="relative z-20 text-center px-6 py-20">

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-5 drop-shadow-sm">
          Build Your  
          <span className="text-blue-700"> Programming Skills </span>  
          with <br />
          <span className="text-orange-600">Dousoft Eduverse</span>
        </h1>

        <p className="text-gray-700 max-w-2xl mx-auto mb-10 text-lg">
          Project-based learning, real mentorship, and IT career-ready courses
          built by top industry experts.
        </p>

        {/* ========= SEARCH BAR ========= */}
        <div className="max-w-lg mx-auto bg-white shadow-lg rounded-full flex items-center gap-3 px-6 py-3 hover:shadow-xl transition">
          <i className="fas fa-search text-gray-500"></i>
          <input
            type="text"
            placeholder="Search By Course Name..."
            className="w-full text-sm text-gray-600 outline-none"
          />
        </div>

        {/* ========= STATS ========= */}
        <div className="flex justify-center gap-12 mt-12">

          {/* Stat 1 */}
          <div className="flex items-center gap-4">
            <div className="bg-white shadow-md rounded-2xl w-20 h-20 flex items-center justify-center">
              <Image
                src="/assets/it/Vector.svg"
                alt="Courses"
                width={40}
                height={40}
              />
            </div>
            <div className="text-left">
              <p className="text-2xl font-bold text-blue-700">3020+</p>
              <p className="text-gray-600 text-sm">Online Courses</p>
            </div>
          </div>

          {/* Stat 2 */}
          <div className="flex items-center gap-4">
            <div className="bg-white shadow-md rounded-2xl w-20 h-20 flex items-center justify-center">
              <Image
                src="/assets/it/Vector (1).svg"
                alt="Instructors"
                width={40}
                height={40}
              />
            </div>
            <div className="text-left">
              <p className="text-2xl font-bold text-blue-700">Top</p>
              <p className="text-gray-600 text-sm">Instructors</p>
            </div>
          </div>

        </div>
      </div>

      {/* ========= ANIMATIONS ========= */}
      <style>
        {`
          .animate-floating {
            animation: float 4s ease-in-out infinite;
          }
          .animate-floating-slow {
            animation: float 6s ease-in-out infinite;
          }
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-12px); }
            100% { transform: translateY(0px); }
          }

          .animate-bounce-slow {
            animation: bounce-slow 3s infinite;
          }
          .animate-bounce-mid {
            animation: bounce-slow 2.2s infinite;
          }
          @keyframes bounce-slow {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
        `}
      </style>
    </header>
  );
}
