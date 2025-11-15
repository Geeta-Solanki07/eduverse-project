"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How do I enroll in a course?",
    answer:
      'To enroll in a course, browse the catalog, select a course, and click "Enroll Now". Complete the payment process to access course materials.',
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept credit/debit cards, UPI, PayPal, and bank transfers. All transactions are secure and encrypted.",
  },
  {
    question: "Can I access courses on mobile devices?",
    answer:
      "Yes! Our platform is fully responsive and available on mobile browsers for an optimized learning experience.",
  },
  {
    question: "How do I get my course certificate?",
    answer:
      "Certificates are generated automatically after successful course completion. You can download them from your dashboard.",
  },
  {
    question: "What if I need help with course content?",
    answer:
      "Each course has dedicated instructors and assistants. You can ask questions in discussion forums or contact support directly.",
  },
  {
    question: "What’s your refund policy?",
    answer:
      "We offer a 14-day money-back guarantee if you’ve completed less than 20% of the course content.",
  },
];

const supportOptions = [
  {
    icon: "fas fa-question-circle",
    title: "FAQs",
    text: "Find quick answers to common questions.",
    link: "#faqs",
  },
  {
    icon: "fas fa-envelope",
    title: "Email Support",
    text: "We’ll respond within 24 hours.",
    link: "mailto:dousoftit@gmail.com",
  },
  {
    icon: "fas fa-phone-alt",
    title: "Call Us",
    text: "Speak directly with our support team.",
    link: "tel:+917734996636",
  },
  {
    icon: "fas fa-comments",
    title: "Live Chat",
    text: "Chat with a representative in real-time.",
    link: "#",
  },
  {
    icon: "fas fa-map-marker-alt",
    title: "Visit Office",
    text: "Meet us at our Jaipur headquarters.",
    link: "https://maps.app.goo.gl/EQXrUmXxomExoM8y8",
  },
  {
    icon: "fas fa-book",
    title: "Documentation",
    text: "Access detailed guides and tutorials.",
    link: "#",
  },
];

const SupportPage: React.FC = () => {
  const [faqActive, setFaqActive] = useState<number | null>(null);

  return (
    <div className="font-poppins bg-gray-50 min-h-screen text-black">

      {/* ======================
          HERO SECTION (UPGRADED)
      ======================= */}
      <section className="relative text-center py-24 bg-gradient-to-r from-orange-500 via-orange-400 to-orange-300 text-white shadow-lg overflow-hidden">

        {/* Floating Icons */}
        <Image
          src="/assets/it/python.png"
          alt="Python Icon"
          width={130}
          height={130}
          className="absolute top-12 left-16 opacity-90 animate-bounce hidden md:block"
        />
        <Image
          src="/assets/it/html.png"
          alt="HTML Icon"
          width={130}
          height={130}
          className="absolute bottom-14 right-16 opacity-90 animate-pulse hidden md:block"
        />

        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <h1 className="text-5xl font-extrabold mb-4 drop-shadow-lg">
            How Can We Help You?
          </h1>
          <p className="text-lg text-orange-100 mb-8">
            Search solutions, explore FAQs, or connect with our support team.
          </p>

          {/* Search Bar */}
          <div className="flex items-center justify-center gap-2 max-w-lg mx-auto bg-white/80 backdrop-blur-lg p-2 rounded-2xl shadow-md">
            <input
              type="text"
              placeholder="Describe your issue..."
              className="w-full px-4 py-3 rounded-xl focus:outline-none text-gray-800 bg-white"
            />
            <button className="px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition">
              Search
            </button>
          </div>
        </div>
      </section>

      {/* ======================
          SUPPORT OPTIONS (UPGRADED)
      ======================= */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {supportOptions.map((item, idx) => (
          <div
            key={idx}
            className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-xl p-7 border border-orange-100 hover:shadow-2xl transition-transform hover:-translate-y-1 flex flex-col gap-4"
          >
            <i className={`${item.icon} text-4xl text-orange-600`}></i>
            <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
            <p className="text-gray-600 text-sm">{item.text}</p>
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 font-medium hover:underline flex items-center gap-2"
            >
              Learn More <i className="fas fa-arrow-right"></i>
            </a>
          </div>
        ))}
      </section>

      {/* ======================
          FAQ SECTION (UPGRADED)
      ======================= */}
      <section id="faqs" className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-extrabold text-orange-600 mb-2">
          FAQs
        </h2>
        <h3 className="text-2xl font-semibold text-gray-900 mb-6">
          Frequently Asked Questions
        </h3>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-md border border-orange-100 overflow-hidden">
              <button
                className="w-full text-left px-6 py-4 flex justify-between items-center font-medium text-gray-800 hover:bg-orange-50 transition"
                onClick={() => setFaqActive(faqActive === idx ? null : idx)}
              >
                {faq.question}
                <ChevronDown
                  className={`transition-transform duration-300 ${
                    faqActive === idx ? "rotate-180" : ""
                  }`}
                />
              </button>

              {faqActive === idx && (
                <div className="px-6 py-4 text-gray-700 border-t border-orange-200 bg-orange-50/40">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ======================
          CONTACT FORM (UPGRADED)
      ======================= */}
      <section className="bg-white py-20 border-t border-orange-100">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-extrabold text-orange-600 mb-2">
            CONTACT US
          </h2>
          <h3 className="text-2xl font-semibold mb-6">Still Need Help?</h3>

          <form className="flex flex-col gap-5">
            <input
              name="name"
              type="text"
              placeholder="Full Name"
              className="w-full px-5 py-3 border rounded-xl focus:outline-orange-500 shadow-sm"
              required
            />

            <input
              name="email"
              type="email"
              placeholder="Email Address"
              className="w-full px-5 py-3 border rounded-xl focus:outline-orange-500 shadow-sm"
              required
            />

            <select
              name="subject"
              className="w-full px-5 py-3 border rounded-xl focus:outline-orange-500 shadow-sm"
            >
              <option>Technical Support</option>
              <option>Billing Inquiry</option>
              <option>Course Content</option>
              <option>Feedback/Suggestions</option>
              <option>Other</option>
            </select>

            <textarea
              name="message"
              placeholder="Your Message"
              rows={6}
              className="w-full px-5 py-3 border rounded-xl focus:outline-orange-500 shadow-sm"
              required
            ></textarea>

            <button className="w-full py-3 bg-orange-600 text-white rounded-xl hover:bg-orange-500 shadow-md transition">
              Send Message
            </button>
          </form>
        </div>
      </section>

    </div>
  );
};

export default SupportPage;
