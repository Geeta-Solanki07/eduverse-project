"use client";

import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="about-section w-full max-w-6xl mx-auto my-20 px-4 flex flex-col md:flex-row items-center gap-10 text-black">
      
      {/* Image */}
      <div className="w-full md:w-1/2">
        <Image 
          src="/assets/it/about.png" 
          alt="About Us" 
          width={600} 
          height={400} 
          className="rounded-xl shadow-lg"
        />
      </div>

      {/* Content */}
      <div className="w-full md:w-1/2 flex flex-col gap-6">
        <h2 className="text-[#F37021] text-3xl font-light">ABOUT US</h2>
        <h3 className="text-3xl md:text-4xl font-semibold text-black">
          Leading the Way in Software Development
        </h3>
        <p className="text-gray-600 text-lg leading-relaxed">
          We specialize in delivering innovative, high-quality software solutions that empower businesses
          to thrive in the digital era. Our focus is on creating scalable, secure, and efficient applications
          tailored to meet diverse industry needs.
        </p>
        <p className="text-gray-600 text-lg leading-relaxed">
          With a team of skilled developers, designers, and technology strategists, we combine technical
          expertise with creative problem-solving to deliver exceptional results. From concept to deployment,
          we ensure every project is built with precision, performance, and long-term success in mind.
        </p>

        {/* Features */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <i className="fas fa-check-circle text-[#F37021] text-2xl"></i>
            <span className="text-lg font-medium">Expert Faculty Team</span>
          </div>
          <div className="flex items-center gap-3">
            <i className="fas fa-check-circle text-[#F37021] text-2xl"></i>
            <span className="text-lg font-medium">Structured Learning Path</span>
          </div>
        </div>

        {/* Learn More Button */}
        <a 
          href="/about" 
          className="mt-6 inline-block px-6 py-3 bg-[#F37021] text-white font-medium rounded-lg hover:bg-orange-600 transition"
        >
          Learn More
        </a>
      </div>

    </section>
  );
}
