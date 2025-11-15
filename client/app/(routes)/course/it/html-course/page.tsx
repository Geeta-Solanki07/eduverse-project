"use client";

import React from "react";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

export default function HtmlCoursePage() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <header className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="mb-6 text-sm text-gray-600">
            <a href="/" className="hover:text-orange-500">Home</a> /{" "}
            <a href="/courses" className="hover:text-orange-500">Courses</a> /{" "}
            <a href="/beginner" className="hover:text-orange-500">Beginner</a> /{" "}
            <span className="text-gray-900 font-medium">HTML & CSS Fundamentals</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            HTML & CSS Fundamentals
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mb-8">
            Master the building blocks of web development with our comprehensive HTML & CSS course.
            Learn to create beautiful, responsive websites from scratch with hands-on projects and expert guidance.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
            {[
              { icon: "⭐", label: "Rating", value: "4.9 (1,245 reviews)" },
              { icon: "👥", label: "Students", value: "5,320 enrolled" },
              { icon: "⏰", label: "Duration", value: "6 weeks (30 hours)" },
              { icon: "🎓", label: "Certificate", value: "Included" },
            ].map((item, index) => (
              <div key={index} className="flex items-center space-x-3 bg-white p-4 shadow rounded-lg">
                <div className="text-2xl">{item.icon}</div>
                <div>
                  <p className="text-sm text-gray-500">{item.label}</p>
                  <p className="text-gray-900 font-semibold">{item.value}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            <button className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition">
              Enroll Now
            </button>
            <button className="border border-orange-500 text-orange-500 px-6 py-3 rounded-lg hover:bg-orange-500 hover:text-white transition">
              Watch Free Demo
            </button>
          </div>
        </div>
      </header>

      {/* Course Description */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-10 grid md:grid-cols-3 gap-10">
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Course Description</h2>
            <p className="text-gray-700 mb-4">
              This comprehensive HTML & CSS course is designed for absolute beginners who want to learn web
              development from the ground up. You'll start with the fundamentals of HTML structure and
              semantics, then progress to CSS styling, layout techniques, and responsive design principles.
            </p>
            <p className="text-gray-700">
              Through hands-on exercises and real-world projects, you'll
              gain the skills needed to build modern, responsive websites. By the end of the course, you'll
              have created multiple projects for your portfolio.
            </p>

            {/* What You'll Learn */}
            <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900">What You'll Learn</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "HTML5 semantic structure",
                "CSS selectors & properties",
                "Box model & layout fundamentals",
                "Flexbox and CSS Grid",
                "Responsive design with media queries",
                "CSS transitions and animations",
                "Forms and validation",
                "Best practices and accessibility",
                "Working with images and media",
                "Browser developer tools",
              ].map((item, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <span className="text-green-500">✔</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* Curriculum */}
            <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900">Course Curriculum</h2>
            {[
              "Week 1: HTML Fundamentals",
              "Week 2: CSS Fundamentals",
              "Week 3: Layout Techniques",
              "Week 4: Responsive Design",
              "Week 5: Advanced CSS",
              "Week 6: Final Project",
            ].map((week, index) => (
              <details
                key={index}
                className="border rounded-lg mb-3 bg-gray-50 hover:bg-gray-100 transition"
              >
                <summary className="cursor-pointer p-4 font-medium text-gray-800">
                  {week}
                </summary>
                <div className="p-4 text-gray-700 space-y-2">
                  <p>Lesson 1: Introduction</p>
                  <p>Lesson 2: Practice Exercise</p>
                  <p>Lesson 3: Weekly Project</p>
                </div>
              </details>
            ))}
          </div>

          {/* Sidebar */}
          <aside className="space-y-10">
            <div className="p-6 bg-white shadow-lg rounded-lg border">
              <h3 className="text-xl font-semibold mb-4">Course Price</h3>
              <p className="text-3xl font-bold text-orange-500 mb-2">₹2,999/-</p>
              <p className="text-sm text-gray-500 mb-4">One-time payment. Lifetime access.</p>
              <button className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition">
                Enroll Now
              </button>
              <ul className="mt-6 space-y-3 text-gray-700">
                {[
                  "30+ hours of video content",
                  "10 practical exercises",
                  "3 real-world projects",
                  "Downloadable resources",
                  "Certificate of completion",
                  "Q&A support",
                ].map((feature, i) => (
                  <li key={i} className="flex items-center space-x-2">
                    <span className="text-green-500">✔</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Instructor */}
            <div className="p-6 bg-white shadow-lg rounded-lg border text-center">
              <img
                src="/assets/image/it/testi-boy.png"
                alt="Instructor"
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h4 className="text-xl font-semibold">Pradeep Kumar</h4>
              <p className="text-gray-500">Senior Web Developer</p>
              <p className="text-gray-700 mt-3">
                With 8+ years of front-end experience, Pradeep has helped startups and enterprises
                build responsive, accessible web experiences.
              </p>
              <div className="flex justify-center space-x-4 mt-4 text-orange-500">
                <a href="#"><i className="fab fa-linkedin"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-github"></i></a>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <h2 className="text-3xl font-bold mb-10 text-center text-gray-900">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {[
              {
                q: "Do I need any prior experience?",
                a: "No prior experience is required! This course is designed for absolute beginners.",
              },
              {
                q: "What software do I need?",
                a: "You'll just need VS Code and a browser. Setup guide is included in the first lesson.",
              },
              {
                q: "Is there a certificate?",
                a: "Yes, after completing all lessons and projects, you’ll receive a completion certificate.",
              },
              {
                q: "Can I get help if I’m stuck?",
                a: "Yes! You’ll have access to a Q&A section with instructor support.",
              },
            ].map((faq, i) => (
              <details
                key={i}
                className="bg-white p-5 border rounded-lg shadow-sm hover:shadow-md transition"
              >
                <summary className="font-medium cursor-pointer text-gray-900">{faq.q}</summary>
                <p className="mt-3 text-gray-700">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-orange-500 text-white py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Start Your Web Development Journey?</h2>
        <p className="max-w-2xl mx-auto text-lg mb-8">
          Join thousands of students who have transformed their careers with our Web Development course.
        </p>
        <button className="bg-white text-orange-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition">
          Enroll Now
        </button>
      </section>

      <Footer />
    </>
  );
}
