"use client";

import React, { JSX, useState } from "react";
import Image from "next/image";

// Place the images used in this file under the /public/assets/image/ folder
// Example public path: /assets/image/logo.png, /assets/image/it/course.png, etc.

export default function JavaScriptBasicsPage(): JSX.Element {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openAccordions, setOpenAccordions] = useState<Record<number, boolean>>({});
  const [openFaq, setOpenFaq] = useState<Record<number, boolean>>({});

  const toggleAccordion = (i: number) =>
    setOpenAccordions((s) => ({ ...s, [i]: !s[i] }));
  const toggleFaq = (i: number) => setOpenFaq((s) => ({ ...s, [i]: !s[i] }));

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      {/* HEADER / NAV */}
      <header className="bg-white shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-6">
              <a href="/" className="relative w-36 h-8 block">
                <Image src="/assets/image/logo.png" alt="logo" fill sizes="(max-width: 768px) 120px, 144px" style={{ objectFit: "contain" }} />
              </a>

              <div className="hidden lg:flex items-center gap-4">
                <div className="relative group">
                  <button className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-100">
                    <img src="/assets/image/emojione-monotone_books.svg" alt="" className="w-5 h-5" />
                    <span className="text-sm font-medium">Courses</span>
                    <svg className="w-3 h-3" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </button>

                  {/* Mega menu */}
                  <div className="absolute left-0 top-full mt-3 hidden group-hover:block bg-white border shadow-lg rounded-md p-6 w-[880px] z-20">
                    <div className="grid grid-cols-3 gap-6">
                      <div>
                        <h4 className="text-sm font-semibold mb-2">Beginner</h4>
                        <ul className="space-y-2 text-sm">
                          <li><a href="/html-course" className="hover:underline">HTML & CSS Fundamentals</a></li>
                          <li><a href="/js-basic" className="hover:underline">JavaScript Basics</a></li>
                          <li><a href="/python-for-beginners" className="hover:underline">Python for Beginners</a></li>
                          <li><a href="/version-control" className="hover:underline">Version Control (Git & GitHub)</a></li>
                          <li><a href="/introduction-to-databases" className="hover:underline">Introduction to Databases</a></li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold mb-2">Intermediate</h4>
                        <ul className="space-y-2 text-sm">
                          <li><a href="/react-development" className="hover:underline">React.js Development</a></li>
                          <li><a href="/node-development" className="hover:underline">Node.js & Express.js</a></li>
                          <li><a href="/rest-api-development" className="hover:underline">REST API Development</a></li>
                          <li><a href="/mongodb" className="hover:underline">MongoDB & SQL Databases</a></li>
                          <li><a href="/ui-ux-principles" className="hover:underline">UI/UX Principles</a></li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold mb-2">Advanced</h4>
                        <ul className="space-y-2 text-sm">
                          <li><a href="/full-stack-web-development" className="hover:underline">Full-Stack Web Development</a></li>
                          <li><a href="/react-native-mobile-apps" className="hover:underline">React Native Mobile Apps</a></li>
                          <li><a href="/cloud-computing" className="hover:underline">Cloud Computing (AWS, Azure)</a></li>
                          <li><a href="/devops" className="hover:underline">DevOps & Deployment</a></li>
                          <li><a href="/ai-machine-learning" className="hover:underline">AI & Machine Learning</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <a href="/offline-course" className="text-sm px-2 py-2 hover:bg-gray-100 rounded-md">Offline courses</a>
                <a href="/study-materials" className="text-sm px-2 py-2 hover:bg-gray-100 rounded-md">Study Materials</a>
                <a href="/support" className="text-sm px-2 py-2 hover:bg-gray-100 rounded-md">Support</a>
              </div>
            </div>

            <div className="hidden lg:flex items-center gap-4">
              <div className="relative">
                <input placeholder="search here..." className="w-60 px-3 py-2 border rounded-md text-sm" />
              </div>
              <a href="/login" className="px-4 py-2 border rounded-md text-sm">Login/Register</a>
            </div>

            <div className="lg:hidden flex items-center gap-2">
              <button onClick={() => setMobileOpen((s) => !s)} className="p-2">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/></svg>
              </button>
            </div>
          </div>

          {/* mobile menu */}
          {mobileOpen && (
            <div className="lg:hidden mt-2 pb-4">
              <div className="flex flex-col gap-2">
                <a href="/" className="px-3 py-2">Home</a>
                <a href="/js-basic" className="px-3 py-2 font-medium">JavaScript Basics</a>
                <a href="/study-materials" className="px-3 py-2">Study Materials</a>
                <a href="/support" className="px-3 py-2">Support</a>
                <a href="/login" className="px-3 py-2">Login/Register</a>
              </div>
            </div>
          )}
        </nav>

        {/* Hero */}
        <section className="bg-gradient-to-r from-indigo-50 to-sky-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 flex flex-col lg:flex-row items-center gap-8">
            <div className="w-full lg:w-1/2">
              <div className="text-sm text-gray-600 mb-3">
                <a href="/">Home</a> / <a href="/courses" className="underline">Courses</a> / <span>Beginner</span> / <span className="font-medium">JavaScript Basics</span>
              </div>

              <h1 className="text-3xl lg:text-4xl font-semibold mb-4">JavaScript Basics</h1>

              <p className="text-gray-700 mb-6">Learn the fundamentals of JavaScript—the language of the web. Start from zero and build up to writing interactive features using variables, data types, functions, arrays, objects, conditionals, loops, DOM manipulation, events, and modern ES6+ syntax. Practice with hands-on mini projects and real browser workflows.</p>

              <div className="flex flex-wrap gap-3 mb-6">
                <div className="flex items-center gap-3 bg-white px-4 py-3 rounded-lg shadow-sm">
                  <svg className="w-5 h-5 text-yellow-500" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .587l3.668 7.431L23.4 9.748l-5.6 5.458L18.8 24 12 19.897 5.2 24l1-8.794L.6 9.748l7.732-1.73L12 .587z"/></svg>
                  <div>
                    <div className="text-xs text-gray-500">Rating</div>
                    <div className="text-sm font-medium">4.9 (1,245 reviews)</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-white px-4 py-3 rounded-lg shadow-sm">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zM2 20c0-2.21 3.582-4 10-4s10 1.79 10 4v2H2v-2z"/></svg>
                  <div>
                    <div className="text-xs text-gray-500">Students</div>
                    <div className="text-sm font-medium">5,320 enrolled</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-white px-4 py-3 rounded-lg shadow-sm">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 7a5 5 0 100 10 5 5 0 000-10z"/></svg>
                  <div>
                    <div className="text-xs text-gray-500">Duration</div>
                    <div className="text-sm font-medium">5 weeks (25 hours)</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-white px-4 py-3 rounded-lg shadow-sm">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M6 2h9a2 2 0 012 2v14l-3-2-3 2-3-2-2 1V4a2 2 0 012-2z"/></svg>
                  <div>
                    <div className="text-xs text-gray-500">Certificate</div>
                    <div className="text-sm font-medium">Included</div>
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <a href="#" className="inline-block px-6 py-3 bg-indigo-600 text-white rounded-md">Enroll Now</a>
                <a href="#" className="inline-block px-6 py-3 border rounded-md">Watch Free Demo</a>
              </div>
            </div>

            <div className="w-full lg:w-1/2 flex justify-center">
              <div className="w-full max-w-md">
                <Image src="/assets/image/it/course.png" alt="course" width={560} height={360} style={{ objectFit: "contain" }} />
              </div>
            </div>
          </div>
        </section>
      </header>

      {/* COURSE DETAILS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <div>
            <h2 className="text-2xl font-semibold mb-3">Course Description</h2>
            <p className="text-gray-700">This comprehensive JavaScript course is designed for beginners who want to learn programming fundamentals and web development. You'll start with core programming concepts, then progress to DOM manipulation, event handling, and basic application development.</p>
            <p className="text-gray-700 mt-3">Through hands-on coding exercises, real-world projects, and interactive challenges, you'll gain the skills needed to create dynamic, interactive websites. By the end of the course, you'll be able to build functional web applications and be prepared to learn more advanced JavaScript frameworks.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">What You'll Learn</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'JavaScript syntax and fundamentals',
                'Variables, data types, and operators',
                'Control structures and loops',
                'Functions and scope',
                'Arrays and objects',
                'DOM manipulation',
                'Event handling',
                'Basic error handling',
                'Working with APIs',
                'Building simple applications'
              ].map((t) => (
                <div key={t} className="flex items-center gap-3 bg-white p-3 rounded-md shadow-sm">
                  <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor"><path d="M20 6L9 17l-5-5"/></svg>
                  <div className="text-sm">{t}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">Course Curriculum</h2>

            {[
              { title: 'Week 1: JavaScript Fundamentals', lessons: ['Introduction to JavaScript', 'Variables and Data Types', 'Operators and Expressions', 'Conditional Statements', 'Week 1 Project: Simple Calculator'] },
              { title: 'Week 2: Functions and Loops', lessons: ['Functions and Scope', 'Loops and Iteration', 'Arrays and Array Methods', 'Week 2 Project: To-Do List'] },
              { title: 'Week 3: Objects and DOM', lessons: ['Objects and Properties', 'Introduction to the DOM', 'Selecting and Modifying Elements', 'Week 3 Project: Interactive Quiz'] },
              { title: 'Week 4: Events and Forms', lessons: ['Event Listeners', 'Form Handling', 'Error Handling', 'Week 4 Project: Contact Form'] },
              { title: 'Week 5: APIs and Final Project', lessons: ['Introduction to APIs', 'Fetch API and AJAX', 'Final Project: Weather App'] }
            ].map((week, idx) => (
              <div key={idx} className="border rounded-md overflow-hidden mb-3">
                <button onClick={() => toggleAccordion(idx)} className="w-full text-left px-4 py-3 flex items-center justify-between bg-white">
                  <span className="font-medium">{week.title}</span>
                  <svg className={`w-4 h-4 transform transition-transform ${openAccordions[idx] ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="none"><path d="M5 8l5 5 5-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </button>
                {openAccordions[idx] && (
                  <div className="px-4 py-3 bg-gray-50">
                    {week.lessons.map((lesson) => (
                      <div key={lesson} className="flex items-center justify-between py-2 border-b last:border-b-0">
                        <div className="flex items-center gap-3">
                          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M10 17l5-5-5-5v10z"/></svg>
                          <div className="text-sm">{lesson}</div>
                        </div>
                        <div className="text-xs text-gray-500">{lesson.includes('Project') ? (lesson.includes('Week 1') ? '1.5 hours' : lesson.includes('Week 2') ? '2 hours' : lesson.includes('Week 3') ? '2.5 hours' : lesson.includes('Week 5') ? '3 hours' : '—') : '20-40 min'}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* FAQ */}
          <div>
            <h2 className="text-2xl font-semibold mb-3">Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                { q: 'Is JavaScript hard to learn for beginners?', a: 'JavaScript is one of the most beginner-friendly programming languages to start with. This course introduces concepts gradually with plenty of hands-on practice.' },
                { q: 'Do I need to know HTML/CSS before taking this course?', a: "Basic familiarity helps but it's not required. We include a quick intro to essential HTML/CSS you'll need." },
                { q: 'What kind of projects will I build?', a: 'Calculator, to-do list, interactive quiz, contact form with validation, and a weather app that uses an API.' },
                { q: 'Will this course prepare me for frameworks like React?', a: 'Yes — core JavaScript concepts covered here are fundamental for React, Vue, Angular and more.' },
                { q: 'How much time should I dedicate to this course?', a: 'We recommend 5-7 hours per week to finish in ~5 weeks. The course is self-paced.' },
                { q: 'What support is available if I get stuck?', a: 'Access to our student community, regular Q&A sessions, and code reviews for enrolled students.' }
              ].map((f, i) => (
                <div key={i} className="border rounded-md">
                  <button onClick={() => toggleFaq(i)} className="w-full text-left px-4 py-3 flex items-center justify-between">
                    <span className="font-medium">{f.q}</span>
                    <svg className={`w-4 h-4 transform transition-transform ${openFaq[i] ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="none"><path d="M5 8l5 5 5-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </button>
                  {openFaq[i] && (
                    <div className="px-4 py-3 bg-white text-gray-700">{f.a}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* SIDEBAR */}
        <aside className="space-y-6">
          <div className="bg-white p-6 rounded-md shadow">
            <h3 className="text-lg font-semibold mb-2">Course Price</h3>
            <div className="text-3xl font-bold text-indigo-700 mb-2">₹3,499/-</div>
            <p className="text-sm text-gray-500 mb-4">One-time payment. Lifetime access.</p>
            <a href="#" className="block text-center px-4 py-2 bg-indigo-600 text-white rounded-md">Enroll Now</a>

            <div className="mt-4 space-y-2">
              <div className="flex items-center gap-2 text-sm"><svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M20 6L9 17l-5-5"/></svg><span>35+ hours of video content</span></div>
              <div className="flex items-center gap-2 text-sm"><svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M20 6L9 17l-5-5"/></svg><span>15 coding exercises</span></div>
              <div className="flex items-center gap-2 text-sm"><svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M20 6L9 17l-5-5"/></svg><span>5 real-world projects</span></div>
              <div className="flex items-center gap-2 text-sm"><svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M20 6L9 17l-5-5"/></svg><span>Cheat sheets and resources</span></div>
              <div className="flex items-center gap-2 text-sm"><svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M20 6L9 17l-5-5"/></svg><span>Certificate of completion</span></div>
              <div className="flex items-center gap-2 text-sm"><svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M20 6L9 17l-5-5"/></svg><span>24/7 Q&A support</span></div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-md shadow text-center">
            <h3 className="text-lg font-semibold mb-2">Course Instructor</h3>
            <div className="w-32 h-32 mx-auto relative mb-3 rounded-full overflow-hidden">
              <Image src="/assets/image/it/testi-boy.png" alt="Instructor" fill sizes="(max-width: 640px) 120px, 128px" style={{ objectFit: 'cover' }} />
            </div>
            <h4 className="font-medium">Rahul Verma</h4>
            <p className="text-sm text-gray-500 mb-3">JavaScript Developer</p>
            <p className="text-sm text-gray-700 mb-3">With 10 years of experience in JavaScript development, Rahul has worked on projects ranging from small business websites to enterprise applications.</p>
            <div className="flex items-center justify-center gap-3 text-xl text-gray-600">
              <a href="#" aria-label="Linkedin">in</a>
              <a href="#" aria-label="Twitter">tw</a>
              <a href="#" aria-label="Github">gh</a>
            </div>
          </div>
        </aside>
      </section>

      {/* CTA & FOOTER */}
      <section className="bg-indigo-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-semibold mb-2">Ready to Start Your Web Development Journey?</h2>
          <p className="text-gray-700 mb-4">Join thousands of students who have transformed their careers with our Web Development course. Enroll today and take the first step toward becoming a web developer.</p>
          <a href="#" className="px-6 py-3 bg-indigo-600 text-white rounded-md">Enroll Now</a>
        </div>
      </section>

      <footer className="bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div>
            <div className="w-36 h-10 relative mb-3">
              <Image src="/assets/image/logo.png" alt="logo" fill sizes="(max-width: 768px) 120px, 144px" style={{ objectFit: 'contain' }} />
            </div>
            <div className="flex items-center gap-3 mb-3 text-xl text-gray-600">
              <a href="#">f</a>
              <a href="#">t</a>
              <a href="#">ig</a>
              <a href="#">in</a>
              <a href="#">yt</a>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M3 12h18"/></svg>
                <div>
                  <div className="text-sm">GET IT ON</div>
                  <div className="text-sm font-medium">Google Play</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M3 12h18"/></svg>
                <div>
                  <div className="text-sm">DOWNLOAD ON THE</div>
                  <div className="text-sm font-medium">APP STORE</div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-2">COMPANY</h4>
            <div className="space-y-2 text-sm">
              <a href="/about" className="block">About Us</a>
              <a href="/contact" className="block">Contact Us</a>
              <a href="/career" className="block">Careers</a>
              <a href="/blog" className="block">Blog & Updates</a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-2">OUR TRAINING CENTERS</h4>
            <div className="space-y-2 text-sm">
              <a href="/training-center/new-delhi" className="block">New Delhi</a>
              <a href="/training-center/mumbai" className="block">Mumbai</a>
              <a href="/training-center/hyderabad" className="block">Hyderabad</a>
              <a href="/training-center/bengaluru" className="block">Bengaluru</a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-2">POPULAR COURSES</h4>
            <div className="space-y-2 text-sm">
              <a href="/full-stack-web-development" className="block">Full Stack Web Development</a>
              <a href="/python-for-beginners" className="block">Python for Data Science</a>
              <a href="/react-native-mobile-apps" className="block">Mobile App Development</a>
              <a href="/ui-ux-principles" className="block">UI/UX Design Fundamentals</a>
            </div>
          </div>
        </div>

        <div className="border-t">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between text-sm">
            <div className="flex items-center gap-3">
              <a href="/privacy-policy">Privacy Policy</a>
              <span>|</span>
              <a href="/terms">Terms & Conditions</a>
            </div>
            <div className="text-gray-600">© 2025 Dousoft Eduverse. All Rights Reserved.</div>
          </div>
        </div>
      </footer>
    </main>
  );
}
