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
      "We accept credit/debit cards, PayPal, and bank transfers. All transactions are secure and encrypted.",
  },
  {
    question: "Can I access courses on mobile devices?",
    answer:
      "Yes! Our platform is responsive on smartphones and tablets. Download our mobile app for an optimized experience.",
  },
  {
    question: "How do I get my course certificate?",
    answer:
      "Certificates are generated automatically upon successful course completion. Download from your dashboard or request a physical copy.",
  },
  {
    question: "What if I need help with course content?",
    answer:
      "Each course has dedicated instructors and assistants. Ask questions in forums, schedule 1:1 sessions, or attend live Q&A.",
  },
  {
    question: "What's your refund policy?",
    answer:
      "We offer a 14-day money-back guarantee for most courses if less than 20% of content is completed.",
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
    text: "We'll respond within 24 hours.",
    link: "mailto:support@dousoft.com",
  },
  {
    icon: "fas fa-phone-alt",
    title: "Call Us",
    text: "Speak directly with support.",
    link: "tel:+01523456789",
  },
  {
    icon: "fas fa-comments",
    title: "Live Chat",
    text: "Chat with a representative in real-time.",
    link: "#",
  },
  {
    icon: "fas fa-book",
    title: "Documentation",
    text: "Access guides and tutorials.",
    link: "#",
  },
  {
    icon: "fas fa-users",
    title: "Community Forum",
    text: "Connect with other learners.",
    link: "#",
  },
];

const SupportPage: React.FC = () => {
  const [faqActive, setFaqActive] = useState<number | null>(null);

  return (
    <div className="font-poppins bg-gray-50 min-h-screen text-black">
      {/* Hero Section */}
      <section className="relative text-center py-20 bg-[#c5d1ff] overflow-hidden">
        <Image
          src="/assets/it/python.png"
          alt="Python Icon"
          width={120}
          height={120}
          className="absolute top-10 left-8 animate-bounce hidden md:block"
        />
        <Image
          src="/assets/it/html.png"
          alt="HTML Icon"
          width={120}
          height={120}
          className="absolute bottom-10 right-8 animate-pulse hidden md:block"
        />
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-black">
            How Can We Help You?
          </h1>
          <p className="text-lg text-black mb-8">
            Find answers to your questions or contact our support team. We&apos;re here to assist you with any issues.
          </p>
          <div className="flex items-center justify-center gap-2 max-w-md mx-auto">
            <input
              type="text"
              placeholder="Describe your issue..."
              className="w-full px-4 py-3 rounded-xl focus:outline-none text-gray-800"
            />
            <button className="px-6 py-3 bg-orange-600 text-white rounded-xl hover:bg-orange-500 transition">
              Search
            </button>
          </div>
        </div>
      </section>

      {/* Support Options */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {supportOptions.map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-md p-6 flex flex-col gap-4 items-start hover:shadow-xl transition"
          >
            <i className={`${item.icon} text-3xl text-orange-600`}></i>
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p className="text-gray-600 text-sm">{item.text}</p>
            <a
              href={item.link}
              className="text-orange-600 font-medium hover:underline flex items-center gap-1"
            >
              Learn More <i className="fas fa-arrow-right"></i>
            </a>
          </div>
        ))}
      </section>

      {/* FAQ Section */}
      <section id="faqs" className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-orange-600 mb-2">FAQS</h2>
        <h3 className="text-2xl font-medium mb-6">Frequently Asked Questions</h3>
        <div className="flex flex-col gap-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-md overflow-hidden">
              <button
                className="w-full text-left px-6 py-4 flex justify-between items-center font-medium text-gray-800 hover:bg-gray-50 transition"
                onClick={() => setFaqActive(faqActive === idx ? null : idx)}
              >
                {faq.question}
                <ChevronDown
                  className={`transition-transform ${faqActive === idx ? "rotate-180" : ""}`}
                />
              </button>
              {faqActive === idx && (
                <div className="px-6 py-4 text-gray-600 border-t border-gray-200">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-orange-600 mb-2">CONTACT US</h2>
          <h3 className="text-2xl font-medium mb-6">Still Need Help?</h3>
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-3 border rounded-xl focus:outline-none"
              required
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-3 border rounded-xl focus:outline-none"
              required
            />
            <select className="w-full px-4 py-3 border rounded-xl focus:outline-none">
              <option>Technical Support</option>
              <option>Billing Inquiry</option>
              <option>Course Content</option>
              <option>Feedback/Suggestions</option>
              <option>Other</option>
            </select>
            <textarea
              placeholder="Your Message"
              className="w-full px-4 py-3 border rounded-xl focus:outline-none"
              rows={6}
              required
            ></textarea>
            <button className="w-full py-3 bg-orange-600 text-white rounded-xl hover:bg-orange-500 transition">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default SupportPage;
