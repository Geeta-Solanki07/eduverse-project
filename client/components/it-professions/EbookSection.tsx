"use client";

import Image from "next/image";
import mainImg from "../../public/assets/it/proffesional.png";
import decor1 from "../../public/assets/it/html.png";
import decor2 from "../../public/assets/it/python.png";

export default function EbookSection() {
  return (
    <section className="relative w-full bg-orange-50/70 py-16 overflow-hidden">
      
      {/* Decorative Circle */}
      <div className="absolute top-[-50px] left-0 w-[196px] h-[196px] bg-orange-400/60 rounded-full z-0"></div>

      <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-[323px]">
        
        {/* Main Image */}
        <div className="relative z-10">
          <Image
            src={mainImg}
            alt="Main Image"
            className="w-[290px] h-auto mx-auto md:mx-0"
          />

          {/* Decorative Images */}
          <div className="hidden lg:block">
            <Image
              src={decor1}
              alt="Decor Image"
              className="absolute top-0 right-[68%] w-[159px] h-auto"
            />
            <Image
              src={decor2}
              alt="Decor Image"
              className="absolute bottom-[-14px] left-[-103px] w-[152px] h-auto"
            />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 text-center md:text-left z-10">
          <h2 className="text-3xl md:text-4xl font-medium mb-8 text-black leading-snug">
            Visit Our Free Programming Ebook, Study Material & Notes
          </h2>
          <a
            href="/study-materials"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg px-8 py-4 rounded-[22px] shadow-lg transition-all duration-300"
          >
            Browse Study Materials
          </a>
        </div>
      </div>

      {/* Optional Background Decorations */}
      <div className="absolute top-0 right-0 w-60 h-60 bg-yellow-200/20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl -z-10"></div>
    </section>
  );
}
