"use client";
import Image from "next/image";

export default function JoinSection() {
  return (
    <section className="bg-blue-50 relative px-6 overflow-hidden text-black py-20">
      <div className="max-w-6xl mx-auto text-center md:text-left">
        {/* Heading */}
        <h3 className="text-3xl md:text-4xl font-extrabold mb-8 leading-snug mt-5">
          Join 50,000+ Students on the App Today!
        </h3>

        {/* Features List */}
        <ul className="text-gray-700 space-y-4 mb-8 text-left md:inline-block">
          <li className="flex items-center gap-3">
            <span className="text-orange-500 text-2xl">✔</span> Live & Recorded classes available at ease
          </li>
          <li className="flex items-center gap-3">
            <span className="text-orange-500 text-2xl">✔</span> Dashboards for Progress Tracking
          </li>
          <li className="flex items-center gap-3">
            <span className="text-orange-500 text-2xl">✔</span> Thousands of Practice Questions
          </li>
        </ul>

        {/* App Store Buttons */}
        <div className="flex gap-6 flex-wrap justify-center md:justify-start mb-10">
          <Image
            src="/assets/ra4.svg"
            alt="Google Play"
            width={180}
            height={60}
            className="hover:scale-105 transition-transform duration-300"
          />
          <Image
            src="/assets/ra5.png"
            alt="App Store"
            width={180}
            height={60}
            className="hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Phone Mockup */}
        <div className="md:absolute md:right-10 md:top-10">
          <Image
            src="/assets/ra6.png"
            alt="Phone App"
            width={350}
            height={450}
            className="drop-shadow-2xl rounded-xl mx-auto md:mx-0"
          />
        </div>
      </div>

      {/* Subtle background shapes */}
      <div className="absolute -top-32 -left-32 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl -z-10" />
      <div className="absolute -bottom-32 -right-32 w-72 h-72 bg-orange-200/20 rounded-full blur-3xl -z-10" />
    </section>
  );
}
