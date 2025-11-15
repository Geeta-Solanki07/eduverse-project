"use client";

import Image from "next/image";

const features = [
  {
    id: 1,
    title: "Professional Courses",
    desc: "Learn AI, ML, Web Development, Python, Flutter, React Native, MERN stack and much more with industry experts.",
    img: "/assets/it/proffesional.png",
    bg: "bg-[#D9FFE6]",
  },
  {
    id: 2,
    title: "Top Instructors",
    desc: "Experienced professionals delivering hands-on training in AI, ML, Web, and App Development.",
    img: "/assets/it/instructor.png",
    bg: "bg-[#FFE7D9]",
  },
  {
    id: 3,
    title: "Online Certificates",
    desc: "Industry-recognized certificates to boost your resume and career opportunities.",
    img: "/assets/it/certificate.png",
    bg: "bg-[#B8D7FF]",
  },
];

export default function FeaturesAndCTA() {
  return (
    <section className="w-full bg-gradient-to-b from-orange-50 to-white py-20 px-5 md:px-20">

      {/* ==== TOP HEADING ==== */}
      <div className="text-center mb-16">
        <h2 className="text-[#F37021] text-3xl font-light mb-2">FEATURES</h2>
        <h3 className="text-black text-3xl md:text-4xl font-semibold leading-snug">
          Emerging Technologies and Trends in <br /> Software Development
        </h3>
      </div>

      {/* ==== FEATURES GRID ==== */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto mb-20">
        {features.map((f) => (
          <div
            key={f.id}
            className={`rounded-3xl shadow-xl p-10 text-center ${f.bg} 
            hover:-translate-y-3 hover:shadow-2xl transition-all duration-500`}
          >
            <div className="w-56 h-56 mx-auto relative mb-8">
              <Image
                src={f.img}
                alt={f.title}
                fill
                className="object-contain scale-110"
              />
            </div>

            <h4 className="text-2xl font-bold text-gray-900 mb-3">
              {f.title}
            </h4>

            <p className="text-gray-700 leading-relaxed text-lg">
              {f.desc}
            </p>
          </div>
        ))}
      </div>

      {/* ==== CTA MERGED BELOW ==== */}
      <div className="bg-gradient-to-r from-red-600 to-blue-600 text-white py-14 px-8 rounded-3xl 
      shadow-xl max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">

        {/* EMAIL */}
        <div className="text-center md:text-left">
          <h3 className="text-2xl md:text-3xl font-semibold mb-1">Get in Touch :</h3>
          <p className="text-2xl font-bold hover:text-orange-200 transition">
            info@dousoft.com
          </p>
        </div>

        {/* DIVIDER */}
        <span className="text-orange-200 font-bold text-4xl hidden md:block">|</span>
        <span className="text-orange-200 font-bold text-3xl md:hidden">OR</span>

        {/* CALL */}
        <div className="text-center md:text-left">
          <h3 className="text-2xl md:text-3xl font-semibold mb-1">Call Us Via :</h3>
          <p className="text-2xl font-bold hover:text-orange-200 transition">
            +01 523 456 789
          </p>
        </div>
      </div>

    </section>
  );
}
