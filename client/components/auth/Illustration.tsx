"use client";

import Image from "next/image";

export default function Illustration() {
  return (
    <div className="relative flex flex-col items-center justify-center w-full h-full overflow-hidden">
      <Image
        src="/logo.png"
        width={400}
        height={400}
        alt="Login Illustration"
        className="animate-float hover:scale-105 transition-transform duration-500 ease-in-out"
      />

      <div className="mt-8 text-center text-white z-10 animate-slideUp">
        <h2 className="text-3xl md:text-4xl font-bold">Welcome Back!</h2>
        <p className="mt-2 font-light text-sm md:text-base">
          Continue your learning journey with Dousoft Eduverse
        </p>
      </div>

      <div className="absolute w-72 h-72 bg-white/10 rounded-full top-[-100px] right-[-100px] animate-pulse-slow" />
      <div className="absolute w-48 h-48 bg-white/10 rounded-full bottom-[-50px] left-[-50px] animate-pulse-slow" />

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }

        @keyframes slideUp {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-slideUp {
          animation: slideUp 0.8s ease-out forwards;
        }

        @keyframes pulseSlow {
          0%, 100% { transform: scale(1); opacity: 0.15; }
          50% { transform: scale(1.05); opacity: 0.25; }
        }
        .animate-pulse-slow {
          animation: pulseSlow 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
