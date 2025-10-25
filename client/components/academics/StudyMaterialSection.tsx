"use client";

import Image from "next/image";

export default function StudyMaterialsSection() {
  return (
    <section className="relative w-full min-h-[600px] my-24 px-5 py-20 flex flex-col items-center justify-center text-center rounded-3xl bg-gradient-to-br from-orange-100/80 to-orange-50/90 shadow-lg overflow-hidden">

      {/* Background elements */}
      <div className="absolute inset-0 z-0 opacity-10 bg-[url('/assets/image/pattern.svg')] bg-repeat" />
      <div className="absolute w-[250px] h-[250px] left-[-50px] top-[-50px] bg-orange-300/20 rounded-full blur-2xl z-10" />
      <div className="absolute w-[300px] h-[300px] right-[-100px] bottom-[-100px] bg-orange-300/10 rounded-full blur-3xl z-10" />

      {/* Study illustrations */}
      <div className="absolute inset-0 pointer-events-none z-20">
        <Image
          src="/assets/ac/boy.png"
          alt="Student studying"
          width={350}
          height={350}
          className="absolute left-12 bottom-12 scale-x-[-1] animate-[float_6s_ease-in-out_infinite]"
        />
        <Image
          src="/assets/ac/girl.png"
          alt="Student reading"
          width={350}
          height={350}
          className="absolute right-12 bottom-12 animate-[float_6s_ease-in-out_infinite_1s]"
        />
      </div>

      {/* Decorative icons */}
      <Image src="/assets/ac/pencil.png" alt="Pencil" width={60} height={60} className="absolute top-[15%] right-[5%] animate-spin z-20" />
      <Image src="/assets/ac/chemical.png" alt="Chemical" width={60} height={60} className="absolute top-[20%] left-[5%] animate-bounce z-20" />
      <Image src="/assets/ac/book.png" alt="Book" width={70} height={70} className="absolute bottom-[20%] right-[10%] animate-[float_5s_ease-in-out_infinite_0.5s] z-20" />

      {/* Main content */}
      <div className="relative z-30 max-w-3xl p-10 bg-white/90 rounded-2xl shadow-lg backdrop-blur-md flex flex-col items-center gap-6">
        <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-400">
          Unlock Premium Study Resources
        </h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          Access our extensive collection of academic ebooks, study materials, and notes curated by top educators to boost your learning experience.
        </p>

        <a
          href="#"
          className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-gradient-to-r from-orange-500 to-orange-400 text-white font-semibold shadow-lg hover:-translate-y-1 transition-all duration-300"
        >
          <i className="fas fa-book-open" />
          Browse Study Materials
        </a>

        {/* Features */}
        <div className="flex flex-wrap justify-center gap-8 mt-8">
          {["1000+ Resources", "Free Access", "Expert-Curated"].map((feature) => (
            <div key={feature} className="flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-md">
              <i className="fas fa-check-circle text-orange-500 text-xl" />
              <span className="font-medium text-gray-800">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
