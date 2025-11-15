"use client";

import Image from "next/image";

export default function StudyMaterialsSection() {
  return (
    <section className="relative w-full min-h-[700px] my-28 px-6 py-24 flex flex-col items-center justify-center text-center rounded-3xl bg-gradient-to-br from-orange-100 via-white to-orange-50 shadow-xl overflow-hidden">

      {/* Soft Gradient Glows */}
      <div className="absolute w-[350px] h-[350px] left-[-80px] top-[-80px] bg-orange-300/30 rounded-full blur-3xl" />
      <div className="absolute w-[400px] h-[400px] right-[-120px] bottom-[-120px] bg-orange-400/20 rounded-full blur-3xl" />

      {/* Pattern BG */}
      <div className="absolute inset-0 opacity-[0.06] bg-[url('/assets/image/pattern.svg')] bg-repeat" />

      {/* Floating Characters */}
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src="/assets/ac/boy.png"
          alt="Boy Studying"
          width={360}
          height={360}
          className="absolute left-10 bottom-10 scale-x-[-1] animate-[float_6s_ease-in-out_infinite]"
        />

        <Image
          src="/assets/ac/girl.png"
          alt="Girl Learning"
          width={360}
          height={360}
          className="absolute right-10 bottom-10 animate-[float_6s_ease-in-out_infinite_1s]"
        />
      </div>

      {/* Floating Icons */}
      <Image
        src="/assets/ac/pencil.png"
        alt="Pencil"
        width={65}
        height={65}
        className="absolute top-[18%] right-[4%] animate-slowSpin"
      />

      <Image
        src="/assets/ac/chemical.png"
        alt="Chemical"
        width={60}
        height={60}
        className="absolute top-[24%] left-[6%] animate-bounce"
      />

      <Image
        src="/assets/ac/book.png"
        alt="Book"
        width={80}
        height={80}
        className="absolute bottom-[25%] right-[12%] animate-[float_5s_ease-in-out_infinite_0.5s]"
      />

      {/* MAIN CONTENT CARD */}
      <div className="relative backdrop-blur-xl bg-white/70 border border-white/40 shadow-2xl rounded-3xl p-12 max-w-3xl z-20">
        
        <h2 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-400 drop-shadow-sm">
          Unlock Premium Study Resources
        </h2>

        <p className="mt-5 text-lg md:text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto">
          Access our extensive collection of academic ebooks, study materials, and notes curated by top educators to boost your learning experience.
        </p>

        {/* CTA BUTTON */}
        <a
          href="#"
          className="mt-8 inline-flex items-center gap-3 px-12 py-4 rounded-full 
          bg-gradient-to-r from-orange-600 to-orange-500 text-white font-semibold 
          shadow-[0_8px_20px_rgba(255,140,0,0.5)] hover:shadow-[0_10px_25px_rgba(255,140,0,0.65)]
          hover:-translate-y-1 transition-all"
        >
          <i className="fas fa-book-open text-xl" />
          Browse Study Materials
        </a>

        {/* FEATURES */}
        <div className="flex flex-wrap justify-center gap-6 mt-10">
          {["1000+ Resources", "Free Access", "Expert-Curated"].map((item) => (
            <div
              key={item}
              className="flex items-center gap-3 bg-white/90 px-6 py-3 rounded-full 
              shadow-md border border-orange-200/50 hover:shadow-lg transition"
            >
              <i className="fas fa-check-circle text-orange-500 text-xl" />
              <span className="font-medium text-gray-800">{item}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
