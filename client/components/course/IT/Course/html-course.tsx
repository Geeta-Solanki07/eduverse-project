"use client";

import Image from "next/image";
import { useState } from "react";
import { FaStar, FaUsers, FaClock, FaCertificate, FaCheck, FaChevronDown, FaPlayCircle, FaFileAlt } from "react-icons/fa";

export default function HtmlCoursePage() {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <main className="font-poppins">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <nav className="flex justify-between items-center px-6 py-4">
          <a href="/" className="flex items-center gap-2">
            <Image src="/assets/image/logo.png" alt="Dousoft Eduverse Logo" width={140} height={40} />
          </a>
          <div className="hidden md:flex items-center gap-6">
            <a href="#" className="text-gray-800 font-medium hover:text-blue-600">Courses</a>
            <a href="/offline-course" className="text-gray-800 hover:text-blue-600">Offline Courses</a>
            <a href="/study-materials" className="text-gray-800 hover:text-blue-600">Study Materials</a>
            <a href="/support" className="text-gray-800 hover:text-blue-600">Support</a>
          </div>
          <a href="/login" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
            Login / Register
          </a>
        </nav>

        {/* Hero Section */}
        <section className="relative bg-blue-50 flex flex-col md:flex-row items-center justify-between px-8 py-16">
          <div className="max-w-2xl space-y-5">
            <div className="text-sm text-gray-600">
              <a href="#" className="hover:underline">Home</a> / <a href="#" className="hover:underline">Courses</a> /{" "}
              <a href="#" className="hover:underline">Beginner</a> / <span>HTML & CSS Fundamentals</span>
            </div>
            <h1 className="text-4xl font-bold text-gray-800">HTML & CSS Fundamentals</h1>
            <p className="text-gray-600 leading-relaxed">
              Master the building blocks of web development with our comprehensive HTML & CSS course.
              Learn to create beautiful, responsive websites from scratch with hands-on projects and expert guidance.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6 text-gray-700">
              <Meta icon={<FaStar />} label="Rating" value="4.9 (1,245 reviews)" />
              <Meta icon={<FaUsers />} label="Students" value="5,320 enrolled" />
              <Meta icon={<FaClock />} label="Duration" value="6 weeks (30 hours)" />
              <Meta icon={<FaCertificate />} label="Certificate" value="Included" />
            </div>

            <div className="flex gap-4 mt-6">
              <a href="#" className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700">Enroll Now</a>
              <a href="#" className="border border-blue-600 text-blue-600 px-6 py-3 rounded-md hover:bg-blue-50">
                Watch Free Demo
              </a>
            </div>
          </div>
          <Image
            src="/assets/image/it/course.png"
            alt="HTML & CSS Course"
            width={500}
            height={400}
            className="mt-10 md:mt-0"
          />
        </section>
      </header>

      {/* Course Details */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Left: Main */}
        <div className="lg:col-span-2 space-y-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Course Description</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              This comprehensive HTML & CSS course is designed for absolute beginners who want to learn web development from the ground up.
              You'll start with the fundamentals of HTML structure and semantics, then progress to CSS styling, layout techniques, and responsive design principles.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Through video lectures, hands-on exercises, and real-world projects, you'll gain the skills to build modern, responsive websites.
              By the end, you'll have multiple portfolio projects and readiness for advanced concepts.
            </p>
          </div>

          {/* What You’ll Learn */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">What You'll Learn</h2>
            <ul className="grid sm:grid-cols-2 gap-3">
              {[
                "HTML5 semantic structure and elements",
                "CSS selectors, properties, and values",
                "Box model and layout fundamentals",
                "Flexbox and CSS Grid for modern layouts",
                "Responsive design with media queries",
                "CSS transitions and animations",
                "Forms and form validation",
                "Best practices and accessibility",
                "Working with images and media",
                "Browser developer tools",
              ].map((text, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-700">
                  <FaCheck className="text-green-500 mt-1" /> {text}
                </li>
              ))}
            </ul>
          </div>

          {/* Curriculum */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">Course Curriculum</h2>
            {["Week 1: HTML Fundamentals", "Week 2: CSS Fundamentals", "Week 3: Layout Techniques", "Week 4: Responsive Design", "Week 5: Advanced CSS", "Week 6: Final Project"].map(
              (title, i) => (
                <div key={i} className="border-b border-gray-200 mb-4">
                  <button
                    onClick={() => toggleAccordion(i)}
                    className="w-full flex justify-between items-center py-4 text-left font-medium text-gray-800"
                  >
                    {title} <FaChevronDown className={`transition-transform ${activeAccordion === i ? "rotate-180" : ""}`} />
                  </button>
                  {activeAccordion === i && (
                    <div className="pb-4 pl-2 space-y-3 text-gray-600">
                      {i === 0 ? (
                        <>
                          <Lesson title="Introduction to HTML" duration="15 min" />
                          <Lesson title="HTML Document Structure" duration="22 min" />
                          <Lesson title="Text Elements and Headings" duration="18 min" />
                          <Lesson title="Lists and Links" duration="25 min" />
                          <Lesson title="Week 1 Project" duration="1 hour" isProject />
                        </>
                      ) : (
                        <p>Lessons coming soon...</p>
                      )}
                    </div>
                  )}
                </div>
              )
            )}
          </div>
        </div>

        {/* Right: Sidebar */}
        <aside className="space-y-8">
          <div className="p-6 bg-white shadow rounded-xl">
            <h3 className="text-xl font-semibold mb-3">Course Price</h3>
            <p className="text-3xl font-bold text-blue-600">₹2,999/-</p>
            <p className="text-gray-500 text-sm mb-4">One-time payment. Lifetime access.</p>
            <a href="#" className="block text-center bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700">
              Enroll Now
            </a>

            <ul className="mt-6 space-y-3 text-gray-700">
              {[
                "30+ hours of video content",
                "10 practical exercises",
                "3 real-world projects",
                "Downloadable resources",
                "Certificate of completion",
                "Q&A support",
              ].map((f, i) => (
                <li key={i} className="flex items-start gap-2">
                  <FaCheck className="text-green-500 mt-1" /> {f}
                </li>
              ))}
            </ul>
          </div>

          <div className="p-6 bg-white shadow rounded-xl text-center">
            <h3 className="text-xl font-semibold mb-3">Course Instructor</h3>
            <Image src="/assets/image/it/testi-boy.png" alt="Instructor" width={120} height={120} className="mx-auto rounded-full mb-3" />
            <h4 className="font-semibold text-gray-800">Pradeep Kumar</h4>
            <p className="text-sm text-gray-500">Senior Web Developer</p>
            <p className="text-gray-600 text-sm mt-3">
              With over 8 years of experience in front-end development, Pradeep has worked with numerous startups and enterprises.
            </p>
          </div>
        </aside>
      </section>
    </main>
  );
}

/* Helper Components */
const Meta = ({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) => (
  <div className="flex items-center gap-3">
    <div className="text-blue-600 text-lg">{icon}</div>
    <div>
      <p className="text-sm text-gray-500">{label}</p>
      <p className="font-semibold text-gray-800">{value}</p>
    </div>
  </div>
);

const Lesson = ({ title, duration, isProject = false }: { title: string; duration: string; isProject?: boolean }) => (
  <div className="flex justify-between items-center">
    <div className="flex items-center gap-3">
      {isProject ? <FaFileAlt /> : <FaPlayCircle />}
      <span>{title}</span>
    </div>
    <span className="text-sm text-gray-500">{duration}</span>
  </div>
);
