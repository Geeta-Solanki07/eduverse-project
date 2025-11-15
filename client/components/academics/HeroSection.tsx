"use client";

import Image from "next/image";
import { Search } from "lucide-react";

export default function HeroSection() {
  return (
    <header className="relative bg-green-50 overflow-hidden pt-20 pb-28 px-6 md:px-10">

      {/* Content */}
      <div className="relative z-10 text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight mb-4">
          A Brighter Future For Kids
        </h1>

        <p className="text-gray-600 text-lg md:text-xl mb-10">
          Let your child start learning how to excel in School Curriculum, Maths & English!
        </p>

        {/* Search Bar */}
        <div className="max-w-lg mx-auto bg-white rounded-full shadow-xl px-6 py-4 flex items-center justify-between hover:shadow-2xl transition">
          <span className="text-gray-500 text-sm md:text-base truncate">
            Search By Course Name, Just Type To Get Hint...
          </span>
          <Search className="text-gray-500 w-5 h-5" />
        </div>

        {/* Stats */}
        <div className="flex justify-center flex-wrap gap-12 mt-14">
          {/* Classes */}
          <div className="flex items-center gap-4 group">
            <div className="bg-white p-5 rounded-full shadow-md w-20 h-20 flex items-center justify-center group-hover:shadow-lg transition">
              <Image
                src="/assets/it/Vector.svg"
                alt="Classes Icon"
                width={55}
                height={55}
              />
            </div>
            <div className="text-gray-700 text-lg md:text-xl font-medium leading-tight">
              Classes <br /> 1st to 12th
            </div>
          </div>

          {/* Instructors */}
          <div className="flex items-center gap-4 group">
            <div className="bg-white p-5 rounded-full shadow-md w-20 h-20 flex items-center justify-center group-hover:shadow-lg transition">
              <Image
                src="/assets/it/Vector (1).svg"
                alt="Instructors Icon"
                width={55}
                height={55}
              />
            </div>
            <div className="text-gray-700 text-lg md:text-xl font-medium leading-tight">
              200+ Top <br /> Instructors
            </div>
          </div>
        </div>
      </div>

      {/* Background Graphics */}
      <div className="absolute inset-0 pointer-events-none">
        
        {/* Left Girl */}
        <Image
          src="/assets/ac/girl.png"
          alt="Girl"
          width={260}
          height={260}
          className="absolute left-[4%] top-[38%] w-40 md:w-60 hidden md:block animate-float"
        />

        {/* Right Boy */}
        <Image
          src="/assets/ac/boy.png"
          alt="Boy"
          width={300}
          height={300}
          className="absolute right-[4%] top-[32%] w-48 md:w-72 hidden md:block animate-float-delayed"
        />

        {/* Decorative Background Icons */}
        <Image
          src="/assets/ac/book.png"
          alt="Book"
          width={120}
          height={120}
          className="absolute left-[2%] top-[30%] opacity-10 md:opacity-100 animate-bounce-slow"
        />

        <Image
          src="/assets/ac/callendar.png"
          alt="Calendar"
          width={80}
          height={80}
          className="absolute right-[3%] top-[18%] opacity-10 md:opacity-100 animate-spin-slow"
        />

        {/* Bottom Shape */}
        <Image
          src="/assets/ac/abt-shape.png"
          alt="Shape"
          width={1500}
          height={500}
          className="absolute bottom-0 left-0 w-full"
        />
      </div>

      {/* Animations */}
      <style jsx>{`
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float 4.5s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin 12s linear infinite;
        }
        .animate-bounce-slow {
          animation: bounce 5s ease-in-out infinite;
        }
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }
      `}</style>
    </header>
  );
}
