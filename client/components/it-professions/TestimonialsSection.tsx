"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import quoteImg from "../../public/assets/it/quotes.svg";
import testiImg from "../../public/assets/it/testi.png";

interface Testimonial {
  id: number;
  name: string;
  title: string;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Aarav Sharma",
    title: "Bank Manager (S.B.I)",
    text: "The training was extremely practical and industry-focused. I now apply everything confidently in my banking workflow.",
  },
  {
    id: 2,
    name: "Aarti Sharma",
    title: "Homemaker",
    text: "The teaching style is simple yet powerful. Perfect for beginners. Support team helped me at every step!",
  },
  {
    id: 3,
    name: "Rahul Verma",
    title: "Software Engineer",
    text: "Very polished platform! Real-world case studies and assignments helped me upgrade my career quickly.",
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  // Auto-slide in 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const prevTestimonial = () =>
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));

  const nextTestimonial = () =>
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));

  return (
    <section className="relative py-24 bg-gradient-to-br from-orange-50 via-white to-orange-100 overflow-hidden">

      {/* Soft glowing background circles */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-orange-300/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-60 h-60 bg-orange-200/20 blur-3xl rounded-full"></div>

      {/* Section Title */}
      <div className="text-center mb-14 px-4 relative z-10">
        <h2 className="text-4xl font-bold text-gray-900 tracking-tight">
          What Students Say About Us
        </h2>
        <p className="text-lg text-gray-600 mt-2">
          Trusted by learners across India pursuing IT & Tech skills
        </p>
      </div>

      {/* Main Card */}
      <div className="relative max-w-4xl mx-auto px-6">

        {/* Card with glow */}
        <div className="bg-white shadow-xl border border-orange-200/50 rounded-3xl p-12 
          transition-all duration-700 ease-in-out 
          backdrop-blur-lg relative z-10">

          {/* Floating quote icon */}
          <Image
            src={quoteImg}
            alt="Quote"
            width={70}
            height={70}
            className="opacity-60 mb-6"
            priority
          />

          {/* Testimonial Text */}
          <p className="text-gray-800 text-xl leading-relaxed transition-opacity duration-500">
            {testimonials[current].text}
          </p>

          {/* User Info */}
          <div className="mt-10 flex items-center gap-4">
            <Image
              src={testiImg}
              alt={testimonials[current].name}
              width={70}
              height={70}
              className="rounded-full shadow-md border-2 border-orange-400"
            />

            <div>
              <h4 className="text-2xl font-semibold text-gray-900">
                {testimonials[current].name}
              </h4>
              <p className="text-gray-500 text-sm">{testimonials[current].title}</p>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-center gap-6 mt-10">
          <button
            onClick={prevTestimonial}
            className="w-12 h-12 flex justify-center items-center rounded-full 
              bg-orange-500 text-white text-2xl font-bold hover:bg-orange-600 
              shadow-lg transition"
          >
            ‹
          </button>
          <button
            onClick={nextTestimonial}
            className="w-12 h-12 flex justify-center items-center rounded-full 
              bg-orange-500 text-white text-2xl font-bold hover:bg-orange-600 
              shadow-lg transition"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}
