"use client";

import Image from "next/image";
import logoImg from "../../public/logo.png";
import { 
  FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube, 
  FaGooglePlay, FaApple 
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-[#c5d1ff] pt-16 pb-8 text-black">
      
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Column 1: Logo & Socials */}
        <div className="flex flex-col gap-6">
          <Image src={logoImg} alt="Dousoft Eduverse Logo" className="w-40 h-auto" />

          {/* Social Icons */}
          <div className="flex gap-4 text-white">
            <FaFacebookF className="w-5 h-5 hover:text-gray-800 transition" />
            <FaTwitter className="w-5 h-5 hover:text-gray-800 transition" />
            <FaInstagram className="w-5 h-5 hover:text-gray-800 transition" />
            <FaLinkedinIn className="w-5 h-5 hover:text-gray-800 transition" />
            <FaYoutube className="w-5 h-5 hover:text-gray-800 transition" />
          </div>

          {/* App Stores */}
          <div className="flex flex-col gap-3">
            <a href="#" className="flex items-center gap-3 bg-white/30 hover:bg-white/50 px-3 py-2 rounded-lg transition">
              <FaGooglePlay className="w-6 h-6" />
              <div className="text-left">
                <p className="text-xs text-gray-700">GET IT ON</p>
                <p className="font-semibold text-gray-900">Google Play</p>
              </div>
            </a>
            <a href="#" className="flex items-center gap-3 bg-white/30 hover:bg-white/50 px-3 py-2 rounded-lg transition">
              <FaApple className="w-6 h-6" />
              <div className="text-left">
                <p className="text-xs text-gray-700">DOWNLOAD ON THE</p>
                <p className="font-semibold text-gray-900">App Store</p>
              </div>
            </a>
          </div>
        </div>

        {/* Column 2: Company */}
        <div className="flex flex-col gap-3">
          <h4 className="font-bold text-lg mb-2">COMPANY</h4>
          <a href="/about" className="hover:text-gray-700 transition">About Us</a>
          <a href="/contact" className="hover:text-gray-700 transition">Contact Us</a>
          <a href="/career" className="hover:text-gray-700 transition">Careers</a>
          <a href="/blog" className="hover:text-gray-700 transition">Blog & Updates</a>
        </div>

        {/* Column 3: Training Centers */}
        <div className="flex flex-col gap-3">
          <h4 className="font-bold text-lg mb-2">OUR TRAINING CENTERS</h4>
          <a href="/training-center" className="hover:text-gray-700 transition">New Delhi</a>
          <a href="/training-center" className="hover:text-gray-700 transition">Mumbai</a>
          <a href="/training-center" className="hover:text-gray-700 transition">Hyderabad</a>
          <a href="/training-center" className="hover:text-gray-700 transition">Bengaluru</a>
        </div>

        {/* Column 4: Popular Courses */}
        <div className="flex flex-col gap-3">
          <h4 className="font-bold text-lg mb-2">POPULAR COURSES</h4>
          <a href="/full-stack-web-development" className="hover:text-gray-700 transition">Full Stack Web Development</a>
          <a href="/python-for-beginners" className="hover:text-gray-700 transition">Python for Data Science</a>
          <a href="/react-native-mobile-apps" className="hover:text-gray-700 transition">Mobile App Development</a>
          <a href="/ui-ux-principles" className="hover:text-gray-700 transition">UI/UX Design Fundamentals</a>
        </div>
      </div>

      {/* Useful Links */}
      <div className="max-w-7xl mx-auto px-6 mt-10">
        <h4 className="font-bold text-lg mb-4">USEFUL LINKS</h4>
        <div className="flex flex-wrap gap-4 text-sm">
          <a href="#!" className="hover:underline">Best Web Development Courses in Delhi</a>
          <a href="#!" className="hover:underline">Python Training in Mumbai</a>
          <a href="#!" className="hover:underline">React.js Bootcamp in Pune</a>
          <a href="#!" className="hover:underline">Java Full Stack Courses in Hyderabad</a>
          <a href="#!" className="hover:underline">UI/UX Design Classes in Chennai</a>
          <a href="#!" className="hover:underline">Android Development Courses Online</a>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-300 mt-10"></div>

      {/* Footer Bottom */}
      <div className="max-w-7xl mx-auto px-6 mt-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-700">
        <div className="flex gap-2">
          <a href="/privacy-policy" className="hover:underline">Privacy Policy</a>
          <span>|</span>
          <a href="/terms" className="hover:underline">Terms & Conditions</a>
        </div>
        <div className="mt-2 md:mt-0 flex items-center gap-1">
          <span>© 2025 Dousoft Eduverse. All Rights Reserved.</span>
        </div>
      </div>
    </footer>
  );
}
