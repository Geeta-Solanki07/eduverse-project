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
    <footer className="bg-green-50 w-full px-5 py-16">
      {/* Main Footer Grid */}
      <div className="flex flex-wrap justify-between gap-10 max-w-[1200px] mx-auto mb-10">
        {/* Column 1: Logo + Social + App Buttons */}
        <div className="flex-1 min-w-[250px]">
          <Image
            src="/logo.png"
            alt="Dousoft Eduverse Logo"
            width={120}
            height={40}
            className="mb-5"
          />

          {/* Social Icons */}
          <div className="flex gap-4 mb-5">
            {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube].map(
              (Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full text-gray-700 hover:bg-orange-500 hover:text-white transition"
                >
                  <Icon />
                </a>
              )
            )}
          </div>

          {/* App Buttons */}
          <div className="flex gap-4 flex-wrap">
            <a
              href="#"
              className="flex items-center gap-2 bg-black text-white rounded-lg px-3 py-2 hover:-translate-y-1 transition"
            >
              <FaGooglePlay size={24} />
              <div className="flex flex-col text-xs">
                <span>GET IT ON</span>
                <span className="font-medium text-sm">Google Play</span>
              </div>
            </a>
            <a
              href="#"
              className="flex items-center gap-2 bg-black text-white rounded-lg px-3 py-2 hover:-translate-y-1 transition"
            >
              <FaApple size={24} />
              <div className="flex flex-col text-xs">
                <span>DOWNLOAD ON THE</span>
                <span className="font-medium text-sm">APP STORE</span>
              </div>
            </a>
          </div>
        </div>

        {/* Column 2: Company Links */}
        <div className="flex-1 min-w-[200px]">
          <h4 className="text-black font-medium text-lg mb-4 border-b-2 border-orange-500 inline-block pb-1">
            COMPANY
          </h4>
          {["About Us", "Contact Us", "Careers", "Updates"].map((item, idx) => (
            <a
              key={idx}
              href="#"
              className="text-gray-600 hover:text-orange-500 transition block mb-2"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Column 3: Our Centers */}
        <div className="flex-1 min-w-[200px]">
          <h4 className="text-black font-medium text-lg mb-4 border-b-2 border-orange-500 inline-block pb-1">
            OUR CENTERS
          </h4>
          {["New Delhi", "Mumbai", "Hyderabad", "Chennai"].map((center, idx) => (
            <a
              key={idx}
              href="#"
              className="text-gray-600 hover:text-orange-500 transition block mb-2"
            >
              {center}
            </a>
          ))}
        </div>

        {/* Column 4: Popular Courses */}
        <div className="flex-1 min-w-[200px]">
          <h4 className="text-black font-medium text-lg mb-4 border-b-2 border-orange-500 inline-block pb-1">
            POPULAR COURSES
          </h4>
          {[
            "Class 11th (Physics)",
            "Class 11th (Chemistry)",
            "Class 11th (Maths)",
            "Class 11th (Biology)",
          ].map((course, idx) => (
            <a
              key={idx}
              href="#"
              className="text-gray-600 hover:text-orange-500 transition block mb-2"
            >
              {course}
            </a>
          ))}
        </div>
      </div>

      {/* Useful Links */}
      <div className="mb-8 max-w-[1200px] mx-auto">
        <h4 className="text-black font-medium text-lg mb-3 border-b-2 border-orange-500 inline-block pb-1">
          USEFUL LINKS
        </h4>
        <div className="flex flex-wrap gap-2">
          {[
            "10th class courses in New Delhi",
            "10th class courses in Navi Mumbai",
            "10th class courses in Pune",
            "12th class courses in New Delhi",
            "12th class courses in Navi Mumbai",
            "12th class courses in Pune",
          ].map((link, idx) => (
            <a
              key={idx}
              href="#"
              className="bg-gray-100 text-gray-600 px-3 py-1 rounded hover:bg-gray-200 hover:text-orange-500 transition text-sm"
            >
              {link}
            </a>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-300 pt-5 max-w-[1200px] mx-auto flex flex-wrap justify-between items-center gap-3 text-gray-600 text-sm">
        <div className="flex flex-wrap gap-3 items-center">
          <a href="#" className="hover:text-orange-500 transition">
            Privacy Policy
          </a>
          <span>|</span>
          <a href="#" className="hover:text-orange-500 transition">
            Terms of Condition
          </a>
        </div>

        <div>&copy; 2025 Dousoft Eduverse. All Rights Reserved.</div>
      </div>
    </footer>
  );
}
