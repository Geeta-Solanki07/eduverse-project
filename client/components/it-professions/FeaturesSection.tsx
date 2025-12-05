"use client";

import Image from "next/image";

type Feature = {
  id: number;
  title: string;
  desc: string;
  img: string;
  bg: string;
};

const features: Feature[] = [
  {
    id: 1,
    title: "Professional Courses",
    desc:
      "Learn AI, ML, Web Development, Python, Flutter, React Native, MERN stack and much more with industry experts.",
    img: "/assets/it/proffesional.png",
    bg: "bg-[#D9FFE6]",
  },
  {
    id: 2,
    title: "Top Instructors",
    desc:
      "Experienced professionals delivering hands-on training in AI, ML, Web, and App Development.",
    img: "/assets/it/instructor.png",
    bg: "bg-[#FFE7D9]",
  },
  {
    id: 3,
    title: "Online Certificates",
    desc:
      "Industry-recognized certificates to boost your resume and career opportunities.",
    img: "/assets/it/certificate.png",
    bg: "bg-[#B8D7FF]",
  },
];

export default function FeaturesAndCTA() {
  return (
    <section className="w-full bg-gradient-to-b from-orange-50 to-white py-14 md:py-20 px-4 sm:px-8 md:px-20">

      {/* ================== HEADING ================== */}
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-[#F37021] text-xl sm:text-2xl md:text-3xl font-light mb-3">
          FEATURES
        </h2>

        <h3 className="text-black text-2xl sm:text-3xl md:text-4xl font-semibold leading-snug">
          Emerging Technologies and Trends in
          <span className="block">Software Development</span>
        </h3>
      </div>

      {/* ================== FEATURES GRID ================== */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16 md:mb-20">

        {features.map((f) => (
          <div
            key={f.id}
            className={`rounded-3xl shadow-lg p-6 md:p-8 text-center ${f.bg}
            hover:-translate-y-2 hover:shadow-2xl transition-all duration-500`}
          >
            {/* ✅ FIXED RESPONSIVE IMAGE */}
            <div className="relative w-full h-[180px] sm:h-[220px] md:h-[250px] mb-6">
              <Image
                src={f.img}
                alt={f.title}
                fill
                className="object-contain"
                sizes="(max-width: 640px) 100vw,
                       (max-width: 1024px) 50vw,
                       33vw"
                priority
              />
            </div>

            <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3">
              {f.title}
            </h4>

            <p className="text-gray-700 leading-relaxed text-sm sm:text-base md:text-lg">
              {f.desc}
            </p>
          </div>
        ))}

      </div>

      {/* ================== CTA SECTION ================== */}
      <div
        className="bg-gradient-to-r from-red-600 to-blue-600 text-white py-10 md:py-14 
        px-6 md:px-10 rounded-3xl shadow-xl max-w-6xl mx-auto 
        flex flex-col md:flex-row items-center justify-between gap-10"
      >
        {/* EMAIL */}
        <div className="text-center md:text-left">
          <h3 className="text-lg sm:text-xl md:text-3xl font-semibold mb-1">
            Get in Touch :
          </h3>
          <p className="text-base sm:text-lg md:text-2xl font-bold break-all">
            info@dousoft.com
          </p>
        </div>

        {/* Divider */}
        <span className="hidden md:block text-orange-200 text-4xl font-bold">|</span>
        <span className="md:hidden text-orange-200 text-xl font-bold">OR</span>

        {/* CALL */}
        <div className="text-center md:text-left">
          <h3 className="text-lg sm:text-xl md:text-3xl font-semibold mb-1">
            Call Us Via :
          </h3>
          <p className="text-base sm:text-lg md:text-2xl font-bold">
            +01 523 456 789
          </p>
        </div>
      </div>

    </section>
  );
}
