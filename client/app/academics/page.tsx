"use client";

import { useEffect, useState } from "react";
import api from "@/lib/api";

import Navbar from "@/components/academics/Navbar";
import HeroSection from "@/components/academics/HeroSection";
import AboutSection from "@/components/academics/AboutSection";
import FeaturesSection from "@/components/academics/FeaturesSection";
import CoursesSection from "@/components/academics/CoursesSection";
import LearnersSection from "@/components/academics/LearnerSection";
import StudyMaterialsSection from "@/components/academics/StudyMaterialSection";
import TestimonialsSection from "@/components/it-professions/TestimonialsSection";
import Footer from "@/components/academics/Footer";

type ClassItem = {
  _id: string;
  title: string;
  slug: string;
  category: "elementary" | "junior" | "senior";
  image?: string;
};

export default function AcademicsPage() {
  const [classes, setClasses] = useState<ClassItem[]>([]);

  useEffect(() => {
    api
      .get("/academics/classes")
      .then((res) => {
        setClasses(res.data.classes || res.data || []);
      })
      .catch((err) => {
        console.error("Academics fetch error:", err);
        setClasses([]);
      });
  }, []);

  const elementary = classes.filter((c) => c.category === "elementary");
  const junior = classes.filter((c) => c.category === "junior");
  const senior = classes.filter((c) => c.category === "senior");

  return (
    <div className="bg-white font-poppins text-gray-800">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <FeaturesSection />

      {/* Show sections only if data exists (real platform behavior) */}
      {elementary.length > 0 && (
        <CoursesSection
          sectionTitle="Elementary Classes (1st - 5th)"
          courses={elementary}
        />
      )}

      {junior.length > 0 && (
        <CoursesSection
          sectionTitle="Junior Classes (6th - 8th)"
          courses={junior}
        />
      )}

      {senior.length > 0 && (
        <CoursesSection
          sectionTitle="Senior Classes (9th - 12th)"
          courses={senior}
        />
      )}

      <LearnersSection />
      <StudyMaterialsSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
}
