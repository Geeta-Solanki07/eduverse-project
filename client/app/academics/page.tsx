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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get("/academics/classes")
      .then((res) => setClasses(res.data.classes))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  const elementary = classes.filter((c) => c.category === "elementary");
  const junior = classes.filter((c) => c.category === "junior");
  const senior = classes.filter((c) => c.category === "senior");

  if (loading)
    return <p className="text-center py-20 text-gray-700">Loading...</p>;

  return (
    <div className="bg-white font-poppins text-gray-800">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <FeaturesSection />

      <CoursesSection
        sectionTitle="Elementary Classes (1st - 5th)"
        courses={elementary}
      />

      <CoursesSection
        sectionTitle="Junior Classes (6th - 8th)"
        courses={junior}
      />

      <CoursesSection
        sectionTitle="Senior Classes (9th - 12th)"
        courses={senior}
      />

      <LearnersSection />
      <StudyMaterialsSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
}
