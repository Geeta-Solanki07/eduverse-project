"use client";

import Image from "next/image";

export default function FeaturesSection() {
  const features = [
    {
      id: 1,
      title: "Hands-On Projects",
      description: "Focus on experiments, and real-life applications",
      image: "/assets/ac/interactive.svg",
      bg: "bg-[#D9FFE6]",
    },
    {
      id: 2,
      title: "Interactive Sessions",
      description: "Play-based learning for deeper understanding of the concepts",
      image: "/assets/ac/interactive.svg",
      bg: "bg-[#FFE7D9]",
    },
    {
      id: 3,
      title: "Future Ready",
      description: "Developing communication, empathy, and leadership skills",
      image: "/assets/ac/future-ready.svg",
      bg: "bg-[#B8D7FF]",
    },
  ];

  return (
    <section className="w-full py-16 px-6 md:px-12 text-center bg-white">
      {/* Section Titles */}
      <h2 className="text-[#F37021] text-2xl md:text-3xl font-light mb-3">
        FEATURES
      </h2>
      <h3 className="text-black text-2xl md:text-3xl font-semibold leading-snug mb-12">
        Emerging Technologies and Trends in <br className="hidden md:block" />
        Software Development
      </h3>

      {/* Feature Cards */}
      <div className="flex flex-wrap justify-center gap-10">
        {features.map((feature) => (
          <div
            key={feature.id}
            className={`${feature.bg} w-full sm:w-[300px] md:w-[360px] lg:w-[384px] h-auto rounded-2xl shadow-lg p-8 flex flex-col items-center justify-between hover:scale-105 transition-transform duration-300`}
          >
            <div>
              <h4 className="text-black text-xl md:text-2xl font-semibold mb-4">
                {feature.title}
              </h4>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
                {feature.description}
              </p>
            </div>

            <div className="w-40 h-40 flex justify-center items-center">
              <Image
                src={feature.image}
                alt={feature.title}
                width={160}
                height={160}
                className="object-contain"
                priority
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
