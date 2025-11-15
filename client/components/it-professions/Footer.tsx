"use client";

import Image from "next/image";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaGooglePlay,
  FaApple,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-orange-50 w-full px-6 py-16 border-t border-orange-200">
      <div className="max-w-[1250px] mx-auto">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">
          
          {/* Column 1: Logo + Social + App */}
          <div>
            <Image
              src="/logo.png"
              alt="Dousoft Eduverse Logo"
              width={140}
              height={50}
              className="mb-6"
            />

            {/* Social Icons */}
            <div className="flex gap-4 mb-6">
              {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube].map(
                (Icon, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="w-10 h-10 flex items-center justify-center bg-white 
                    shadow-sm rounded-full text-gray-600 
                    hover:bg-orange-500 hover:text-white transition transform hover:-translate-y-1"
                  >
                    <Icon size={18} />
                  </a>
                )
              )}
            </div>

            {/* App Buttons */}
            <div className="flex gap-4 flex-wrap">
              <a
                href="#"
                className="flex items-center gap-3 bg-black text-white rounded-xl px-4 py-2.5 hover:opacity-80 transition"
              >
                <FaGooglePlay size={24} />
                <div className="text-xs leading-tight">
                  <p>GET IT ON</p>
                  <p className="font-semibold text-sm">Google Play</p>
                </div>
              </a>

              <a
                href="#"
                className="flex items-center gap-3 bg-black text-white rounded-xl px-4 py-2.5 hover:opacity-80 transition"
              >
                <FaApple size={24} />
                <div className="text-xs leading-tight">
                  <p>DOWNLOAD ON THE</p>
                  <p className="font-semibold text-sm">App Store</p>
                </div>
              </a>
            </div>
          </div>

          {/* Column 2: Company Links */}
          <div>
            <h4 className="font-semibold text-lg text-gray-900 mb-4 
              border-b-2 border-orange-600 inline-block pb-1">
              COMPANY
            </h4>

            <div className="space-y-2">
              {["About Us", "Contact Us", "Careers", "Updates"].map((item, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="block text-gray-600 hover:text-orange-600 transition"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Column 3: IT Centers */}
          <div>
            <h4 className="font-semibold text-lg text-gray-900 mb-4 
              border-b-2 border-orange-600 inline-block pb-1">
              OUR IT CENTERS
            </h4>

            <div className="space-y-2">
              {["New Delhi", "Bengaluru", "Hyderabad", "Pune"].map((center, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="block text-gray-600 hover:text-orange-600 transition"
                >
                  {center}
                </a>
              ))}
            </div>
          </div>

          {/* Column 4: IT Courses */}
          <div>
            <h4 className="font-semibold text-lg text-gray-900 mb-4 
              border-b-2 border-orange-600 inline-block pb-1">
              POPULAR IT COURSES
            </h4>

            <div className="space-y-2">
              {[
                "Full Stack Development",
                "Python for Data Science",
                "React Native Basics",
                "UI/UX Design",
              ].map((course, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="block text-gray-600 hover:text-orange-600 transition"
                >
                  {course}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Useful Links */}
        <div className="mb-14">
          <h4 className="font-semibold text-lg text-gray-900 mb-3 
            border-b-2 border-orange-600 inline-block pb-1">
            USEFUL LINKS
          </h4>

          <div className="flex flex-wrap gap-3">
            {[
              "Best Web Dev Courses in Delhi",
              "Python Training in Mumbai",
              "React.js Bootcamp in Pune",
              "Java Full Stack Course in Hyderabad",
              "UI/UX Design Classes in Chennai",
              "Android Development Online",
            ].map((link, idx) => (
              <a
                key={idx}
                href="#"
                className="bg-white border border-gray-200 text-gray-700 
                px-3 py-1.5 rounded-lg text-sm 
                hover:border-orange-500 hover:text-orange-600 transition"
              >
                {link}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t pt-6 border-gray-300 flex flex-wrap justify-between items-center gap-4 text-gray-600 text-sm">
          <div className="flex gap-4 items-center">
            <a href="#" className="hover:text-orange-600 transition">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:text-orange-600 transition">Terms of Condition</a>
          </div>

          <div className="text-gray-700 font-medium">
            &copy; 2025 Dousoft Eduverse. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
