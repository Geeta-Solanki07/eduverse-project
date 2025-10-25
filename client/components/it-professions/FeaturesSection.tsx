"use client";

import Image from "next/image";

const features = [
  {
    id: 1,
    title: "Professional Courses",
    desc: "Learn Artificial Intelligence, Machine Learning, Web Development, Python, Flutter, React Native, MERN stack and more.",
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
    desc: "Get industry-recognized certificates on course completion to boost your resume and career opportunities.",
    img: "/assets/it/certificate.png",
    bg: "bg-[#B8D7FF]",
  },
];

/*************  ✨ Windsurf Command ⭐  *************/
/**
 * FeaturesSection is a component that displays the features of the IT profession courses,
 * including professional courses, top instructors, and online certificates.
 * It is a section component with a heading, a features grid, and a background color of gray.
 * The features grid is a flex container that wraps around to form a grid of feature cards.
 * Each feature card contains a title, description, and an image.
 * The feature cards are styled with a background color, border radius, and a shadow effect.
 * The component also includes a hover effect that scales the feature cards up when hovered over.
 * The component is exported as the default export of the module.
 */
/*******  71b3bcf2-953f-46b6-82c2-9087627ae5c5  *******/export default function FeaturesSection() {
  return (
    <section className="w-full px-5 md:px-20 py-20 text-center bg-gray-50">
      {/* Section Heading */}
      <h2 className="text-[#F37021] text-3xl font-light mb-2">FEATURES</h2>
      <h3 className="text-black text-3xl md:text-4xl font-semibold mb-16 leading-snug">
        Emerging Technologies and Trends in <br /> Software Development
      </h3>

      {/* Features Grid */}
      <div className="flex flex-wrap justify-center gap-12">
        {features.map((feature) => (
          <div
            key={feature.id}
            className={`flex flex-col items-center justify-between w-full md:w-[380px] h-[450px] p-8 rounded-3xl shadow-xl ${feature.bg} hover:scale-105 transition-transform duration-500`}
          >
            <div className="w-48 h-48 relative mb-6">
              <Image
                src={feature.img}
                alt={feature.title}
                fill
                className="object-contain"
              />
            </div>
            <h4 className="text-black text-2xl font-semibold mb-4">{feature.title}</h4>
            <p className="text-black/70 text-base font-sans leading-7">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
