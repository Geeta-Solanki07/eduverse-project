"use client";
import Image from "next/image";

export default function JoinSection() {
  return (
    <section className="bg-blue-50 relative px-6 overflow-hidden text-black py-20">
      <div className="max-w-6xl mx-auto text-center md:text-left">
        <h3 className="text-3xl md:text-4xl font-extrabold mb-8 mt-5">
          Join 50,000+ Students on the App Today!
        </h3>

        <ul className="text-gray-700 space-y-4 mb-8 text-left md:inline-block">
          <li className="flex items-center gap-3">
            <span className="text-orange-500 text-2xl">✔</span> Live & Recorded classes
          </li>
          <li className="flex items-center gap-3">
            <span className="text-orange-500 text-2xl">✔</span> Progress Tracking Dashboards
          </li>
          <li className="flex items-center gap-3">
            <span className="text-orange-500 text-2xl">✔</span> Thousands of Practice Questions
          </li>
        </ul>

        <div className="flex gap-6 flex-wrap justify-center md:justify-start mb-10">
          <Image src="/assets/ra4.svg" alt="Play Store" width={180} height={60} />
          <Image src="/assets/ra5.png" alt="App Store" width={180} height={60} />
        </div>

        <div className="md:absolute md:right-10 md:top-10">
          <Image
            src="/assets/ra6.png"
            alt="App Mockup"
            width={350}
            height={450}
            className="drop-shadow-2xl rounded-xl"
          />
        </div>
      </div>
    </section>
  );
}
