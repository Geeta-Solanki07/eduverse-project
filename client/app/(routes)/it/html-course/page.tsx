"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/it-professions/Navbar";
import Footer from "@/components/it-professions/Footer";

export default function HtmlCoursePage() {
  return (
    <>
      <Navbar />

      {/* ===================== HERO SECTION ===================== */}
      <header className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          
          {/* Breadcrumb */}
          <div className="mb-6 text-sm text-gray-600">
            <Link href="" className="hover:text-orange-500">Home</Link> / 
            <Link href="" className="hover:text-orange-500 ml-1">Courses</Link> /
            <Link href="" className="hover:text-orange-500 ml-1">Beginner</Link> /
            <span className="text-gray-900 font-medium ml-1">HTML & CSS Fundamentals</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            {/* LEFT TEXT */}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
                HTML & CSS Fundamentals
              </h1>

              <p className="text-lg text-gray-700 max-w-2xl mb-8">
                Master the building blocks of web development with our comprehensive HTML & CSS course.
                Learn to build beautiful, responsive websites from scratch through practical, hands-on projects.
              </p>

              {/* Stats */}
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

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4">
                <button className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition">
                  Enroll Now
                </button>
                <button className="border border-orange-500 text-orange-500 px-6 py-3 rounded-lg hover:bg-orange-500 hover:text-white transition">
                  Watch Free Demo
                </button>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="flex justify-center">
              <Image
                src="/assets/it/html-course.png"
                alt="Course Image"
                width={550}
                height={400}
                className="rounded-xl shadow-xl object-cover w-full"
              />
            </div>
          </div>
        </div>
      </header>

      {/* ===================== COURSE CONTENT ===================== */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-10 grid md:grid-cols-3 gap-10">
          
          {/* LEFT CONTENT */}
          <div className="md:col-span-2">
            
            {/* Description */}
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Course Description</h2>
            <p className="text-gray-700 mb-4">
              This course is perfect for absolute beginners who want to learn modern web development.
              You'll start from the basics of HTML and CSS, move into layout techniques and responsive design,
              and build real-world projects step-by-step.
            </p>

            <p className="text-gray-700">
             Through a combination of video lectures, hands-on exercises, and real-world projects, you'll gain the skills needed to build modern, responsive websites. By the end of the course, you'll have created multiple projects for your portfolio and be ready to tackle more advanced web development concepts.
            </p>

            {/* What You'll Learn */}
            <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900">What You’ll Learn</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-900">
              {[
                "HTML5 semantic structure",
                "CSS selectors & properties",
                "Box model & layout fundamentals",
                "Flexbox & CSS Grid",
                "Responsive design",
                "CSS transitions & animations",
                "Forms & validation",
                "Accessibility basics",
                "Working with media",
                "Developer tools & debugging",
              ].map((item, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <span className="text-orange-600">✔</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* Curriculum */}
            <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900">Course Curriculum</h2>
            {[
              "Week 1: HTML Fundamentals",
              "Week 2: CSS Basics",
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
                  <p>Lesson 2: Hands-on Practice</p>
                  <p>Lesson 3: Weekly Project</p>
                </div>
              </details>
            ))}
          </div>

          {/* ===================== SIDEBAR ===================== */}
          <aside className="space-y-10">
            
            {/* Price Box */}
            <div className="p-6 bg-white shadow-lg rounded-lg border">
              <h3 className="text-xl font-semibold mb-4">Course Price</h3>
              <p className="text-3xl font-bold text-orange-500 mb-2">₹2,999/-</p>
              <p className="text-sm text-gray-500 mb-4">One-time payment · Lifetime access</p>

              <button className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition">
                Enroll Now
              </button>

              <ul className="mt-6 space-y-3 text-gray-700">
                {[
                  "30+ hours of content",
                  "10 practical exercises",
                  "3 real-world projects",
                  "Downloadable resources",
                  "Certificate included",
                  "Instructor support",
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-center space-x-2">
                    <span className="text-orange-600">✔</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Instructor Box */}
            <div className="p-6 bg-white shadow-lg rounded-lg border text-center">
           <h3 className="text-xl font-semibold mb-4 text-gray-900">Course Instructor</h3>
              <img
                src="/assets/it/testi-boy.png"
                alt="Instructor"
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h4 className="text-xl font-semibold text-gray-900">Pradeep Kumar</h4>
              <p className="text-gray-500">Senior Web Developer</p>
              <p className="text-gray-700 mt-3">
                With 8+ years of experience, Pradeep has helped startups build fast, responsive,
                and accessible websites using modern frontend technologies.
              </p>

              <div className="flex justify-center space-x-4 mt-4 text-orange-500 text-xl">
                <a href="#"><i className="fab fa-linkedin"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-github"></i></a>
              </div>
            </div>

          </aside>
        </div>
      </section>

      {/* ===================== FAQ ===================== */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <h2 className="text-3xl font-bold mb-10 text-center text-gray-900">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {[
              {
                q: "Do I need prior experience?",
                a: "No! This course is designed for absolute beginners.",
              },
              {
                q: "What software do I need?",
                a: "Just VS Code and any modern browser like Chrome.",
              },
              {
                q: "Is certificate included?",
                a: "Yes, you’ll get a verified certificate after completion.",
              },
              {
                q: "Will I get help if I'm stuck?",
                a: "Absolutely! You get full Q&A support by the instructor.",
              },
            ].map((faq, i) => (
              <details
                key={i}
                className="bg-white p-5 border rounded-lg shadow-sm hover:shadow-md transition"
              >
                <summary className="font-medium cursor-pointer text-gray-900">
                  {faq.q}
                </summary>
                <p className="mt-3 text-gray-700">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== CTA ===================== */}
      <section className="bg-orange-500 text-white py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Start Your Web Development Journey?
        </h2>
        <p className="max-w-2xl mx-auto text-lg mb-8">
          Join thousands of students building real careers through our Web Development Course.
        </p>

        <button className="bg-white text-orange-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition">
          Enroll Now
        </button>
      </section>

      <Footer />
    </>
  );
}
