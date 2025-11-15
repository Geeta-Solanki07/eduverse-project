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
    <footer className="bg-green-50 w-full px-6 py-16 border-t border-green-200">
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
                    className="w-10 h-10 flex items-center justify-center bg-white shadow-sm rounded-full text-gray-600 hover:bg-orange-500 hover:text-white transition transform hover:-translate-y-1"
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
            <h4 className="font-semibold text-lg mb-4 border-b-2 border-orange-500 inline-block pb-1">
              COMPANY
            </h4>
            <div className="space-y-2">
              {["About Us", "Contact Us", "Careers", "Updates"].map(
                (item, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="block text-gray-600 hover:text-orange-500 transition"
                  >
                    {item}
                  </a>
                )
              )}
            </div>
          </div>

          {/* Column 3: Centers */}
          <div>
            <h4 className="font-semibold text-lg mb-4 border-b-2 border-orange-500 inline-block pb-1">
              OUR CENTERS
            </h4>
            <div className="space-y-2">
              {["New Delhi", "Mumbai", "Hyderabad", "Chennai"].map(
                (center, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="block text-gray-600 hover:text-orange-500 transition"
                  >
                    {center}
                  </a>
                )
              )}
            </div>
          </div>

          {/* Column 4: Courses */}
          <div>
            <h4 className="font-semibold text-lg mb-4 border-b-2 border-orange-500 inline-block pb-1">
              POPULAR COURSES
            </h4>
            <div className="space-y-2">
              {[
                "Class 11th (Physics)",
                "Class 11th (Chemistry)",
                "Class 11th (Maths)",
                "Class 11th (Biology)",
              ].map((course, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="block text-gray-600 hover:text-orange-500 transition"
                >
                  {course}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Useful Links */}
        <div className="mb-14">
          <h4 className="font-semibold text-lg mb-3 border-b-2 border-orange-500 inline-block pb-1">
            USEFUL LINKS
          </h4>
          <div className="flex flex-wrap gap-3">
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
                className="bg-white border border-gray-200 text-gray-700 px-3 py-1.5 rounded-lg text-sm hover:border-orange-400 hover:text-orange-500 transition"
              >
                {link}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t pt-6 border-gray-300 flex flex-wrap justify-between items-center gap-4 text-gray-600 text-sm">
          <div className="flex gap-4 items-center">
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
      </div>
    </footer>
  );
}
