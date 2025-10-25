"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Navbar from "@/components/course/Academics/Navbar";
import HeroSection from "@/components/course/Academics/HeroSection";
import Category from "@/components/course/Academics/Category";
import Card from "@/components/course/Academics/Card";
import Pagination from "@/components/course/Academics/Pagination";
import Footer from "@/components/academics/Footer";

export interface Material {
  id: number;
  title: string;
  pages: string;
  rating: string;
  description: string;
  image: string; // use string for public folder images
  price: string;
  type: string;
}

export default function StudyMaterialsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [showDropdown, setShowDropdown] = useState(false);
  const [sortOption, setSortOption] = useState("Popular");

  const categories = [
    "All",
    "NCERT Solutions",
    "Sample Papers",
    "Revision Notes",
    "Previous Year Papers",
    "Mind Maps",
  ];

  const materials: Material[] = [
    {
      id: 1,
      title: "Class 10 Science Complete Notes",
      pages: "150 pages",
      rating: "4.8 (320)",
      description:
        "Comprehensive notes covering Physics, Chemistry, and Biology as per CBSE syllabus with diagrams, formulas, and important questions.",
      image: "/assets/ac/img.webp",
      price: "Free",
      type: "PDF",
    },
    {
      id: 2,
      title: "Class 12 Mathematics Solved Papers",
      pages: "10 years",
      rating: "4.9 (285)",
      description:
        "Collection of 10 years CBSE board exam papers with detailed solutions for Calculus, Algebra, and Vectors.",
      image: "/assets/ac/img2.webp",
      price: "₹199",
      type: "PDF",
    },
    {
      id: 3,
      title: "NEET Biology Important Diagrams",
      pages: "50 diagrams",
      rating: "4.7 (412)",
      description:
        "High-yield diagrams from Botany and Zoology with labeling practice for NEET exam preparation.",
      image: "/assets/ac/img3.jpg",
      price: "Free",
      type: "Cheat Sheet",
    },
    {
      id: 4,
      title: "JEE Chemistry Formulas Handbook",
      pages: "120 formulas",
      rating: "4.8 (356)",
      description:
        "Essential formulas and concepts for Physical, Organic, and Inorganic Chemistry with practice problems.",
      image: "/assets/ac/img4.jpeg",
      price: "₹249",
      type: "Practice",
    },
    {
      id: 5,
      title: "Class 10 Social Science Mind Maps",
      pages: "25 maps",
      rating: "4.6 (198)",
      description:
        "Visual learning aids for History, Geography, Civics, and Economics covering entire CBSE syllabus.",
      image: "/assets/ac/img5.webp",
      price: "Free",
      type: "PDF",
    },
    {
      id: 6,
      title: "English Grammar & Writing Guide",
      pages: "80 pages",
      rating: "4.5 (176)",
      description:
        "Complete reference for grammar rules, writing formats, and sample answers for board exams.",
      image: "/assets/ac/img6.jpg",
      price: "₹149",
      type: "PDF",
    },
  ];

  return (
    <main className="w-full bg-white text-gray-800">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Materials Section */}
      <section className="px-5 md:px-20 py-16">
        {/* Category Tabs */}
        <Category
          categories={categories}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />

        {/* Heading + Sort */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 mt-8">
          <h2 className="text-3xl font-semibold mb-4 md:mb-0">
            Popular Study Materials
          </h2>

          {/* Sort Dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="flex items-center justify-between gap-2 bg-white border border-gray-300 px-4 py-2 rounded-lg shadow-sm hover:bg-gray-100 transition"
            >
              <span>Sort by: {sortOption}</span>
              <ChevronDown size={18} />
            </button>

            {showDropdown && (
              <div className="absolute right-0 mt-2 bg-white border rounded-lg shadow-lg w-44 z-10">
                {["Popular", "Newest", "Highest Rated", "Free Only"].map(
                  (option) => (
                    <div
                      key={option}
                      onClick={() => {
                        setSortOption(option);
                        setShowDropdown(false);
                      }}
                      className="px-4 py-2 text-sm hover:bg-orange-100 cursor-pointer transition"
                    >
                      {option}
                    </div>
                  )
                )}
              </div>
            )}
          </div>
        </div>

        {/* Materials Grid */}
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
          {materials.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-12">
          <Pagination />
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
