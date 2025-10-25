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
    text: "The course was outstanding! I gained practical skills and confidence to apply in real scenarios. Highly recommended!",
  },
  {
    id: 2,
    name: "Aarti Sharma",
    title: "Housewife",
    text: "I never thought online learning could be this effective. The trainers are supportive and the content is top-notch.",
  },
  {
    id: 3,
    name: "Rahul Verma",
    title: "Software Engineer",
    text: "Excellent training platform! Clear explanations, real-world examples, and continuous support throughout the program.",
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const prevTestimonial = () =>
    setCurrent((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );

  const nextTestimonial = () =>
    setCurrent((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );

  return (
    <section className="relative py-20 bg-gradient-to-r from-orange-50 to-white overflow-hidden">
      <div className="text-center mb-12 px-4">
        <h2 className="text-3xl font-bold text-orange-600 mb-2">
          Testimonials
        </h2>
        <p className="text-lg text-gray-700">
          What Our Students Have To Say
        </p>
      </div>

      <div className="relative max-w-4xl mx-auto px-6">
        {/* Testimonial Card */}
        <div className="bg-white shadow-lg rounded-2xl p-10 transition-transform duration-500 transform hover:scale-105">
          <div className="flex flex-col sm:flex-row items-start gap-5">
            <div className="flex-shrink-0">
              <Image
                src={quoteImg}
                alt="Quote"
                width={50}
                height={50}
                className="opacity-70"
                priority
              />
            </div>
            <p className="text-gray-800 text-lg leading-relaxed">
              {testimonials[current].text}
            </p>
          </div>

          <div className="flex items-center gap-4 mt-6">
            <Image
              src={testiImg}
              alt={testimonials[current].name}
              width={60}
              height={60}
              className="rounded-full border-2 border-orange-400"
              priority
            />
            <div>
              <p className="font-semibold text-orange-600">
                {testimonials[current].name}
              </p>
              <p className="text-gray-500 text-sm">
                {testimonials[current].title}
              </p>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevTestimonial}
          aria-label="Previous Testimonial"
          className="absolute top-1/2 -translate-y-1/2 left-0 bg-orange-300 text-white p-3 rounded-full shadow hover:bg-orange-500 transition"
        >
          &#8592;
        </button>
        <button
          onClick={nextTestimonial}
          aria-label="Next Testimonial"
          className="absolute top-1/2 -translate-y-1/2 right-0 bg-orange-300 text-white p-3 rounded-full shadow hover:bg-orange-500 transition"
        >
          &#8594;
        </button>

        {/* Dots Indicators */}
        <div className="flex justify-center mt-6 gap-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === current
                  ? "bg-orange-600 scale-110"
                  : "bg-orange-200"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
