import HeroSection from "@/components/academics/HeroSection";
import AboutSection from "@/components/academics/AboutSection";
import FeaturesSection from "@/components/academics/FeaturesSection";
import CoursesSection from "@/components/academics/CoursesSection";
import LearnersSection from "@/components/academics/LearnerSection";
import StudyMaterialsSection from "@/components/academics/StudyMaterialSection";
import TestimonialsSection from "@/components/it-professions/TestimonialsSection";
import Footer from "@/components/academics/Footer";

export const metadata = {
  title: "Academics - Dousoft Eduverse",
  description:
    "Explore Dousoft Eduverse Academics – your path to excellence with top programs, experienced faculty, and learning opportunities.",
};

const courses = [
  // Elementary (Classes 1-4)
  {
    id: 1,
    title: "Class 1st",
    classText: "Class 1st",
    bg: "bg-orange-200/40",
    bgInner: "bg-orange-100",
    watchColor: "border-orange-400",
    exploreBg: "bg-orange-500",
    image: "/assets/ac/elementory.png",
  },
  {
    id: 2,
    title: "Class 2nd",
    classText: "Class 2nd",
    bg: "bg-orange-200/40",
    bgInner: "bg-orange-100",
    watchColor: "border-orange-400",
    exploreBg: "bg-orange-500",
    image: "/assets/ac/elementory.png",
  },
  {
    id: 3,
    title: "Class 3rd",
    classText: "Class 3rd",
    bg: "bg-orange-200/40",
    bgInner: "bg-orange-100",
    watchColor: "border-orange-400",
    exploreBg: "bg-orange-500",
    image: "/assets/ac/elementory.png",
  },
  {
    id: 4,
    title: "Class 4th",
    classText: "Class 4th",
    bg: "bg-orange-200/40",
    bgInner: "bg-orange-100",
    watchColor: "border-orange-400",
    exploreBg: "bg-orange-500",
    image: "/assets/ac/elementory.png",
  },

  // Junior (Classes 6-8)
  {
    id: 6,
    title: "Class 6th",
    classText: "Class 6th",
    bg: "bg-green-400/30",
    bgInner: "bg-green-200",
    watchColor: "border-green-500",
    exploreBg: "bg-green-500",
    image: "/assets/ac/junior-class.png",
  },
  {
    id: 7,
    title: "Class 7th",
    classText: "Class 7th",
    bg: "bg-green-400/30",
    bgInner: "bg-green-200",
    watchColor: "border-green-500",
    exploreBg: "bg-green-500",
    image: "/assets/ac/junior-class.png",
  },
  {
    id: 8,
    title: "Class 8th",
    classText: "Class 8th",
    bg: "bg-green-400/30",
    bgInner: "bg-green-200",
    watchColor: "border-green-500",
    exploreBg: "bg-green-500",
    image: "/assets/ac/junior-class.png",
  },

  // Senior (Classes 9-12)
  {
    id: 9,
    title: "Class 9th",
    classText: "Class 9th",
    bg: "bg-blue-400/30",
    bgInner: "bg-blue-200",
    watchColor: "border-blue-500",
    exploreBg: "bg-blue-500",
    image: "/assets/ac/senior-class.png",
  },
  {
    id: 10,
    title: "Class 10th",
    classText: "Class 10th",
    bg: "bg-blue-400/30",
    bgInner: "bg-blue-200",
    watchColor: "border-blue-500",
    exploreBg: "bg-blue-500",
    image: "/assets/ac/senior-class.png",
  },
  {
    id: 11,
    title: "Class 11th",
    classText: "Class 11th",
    bg: "bg-blue-400/30",
    bgInner: "bg-blue-200",
    watchColor: "border-blue-500",
    exploreBg: "bg-blue-500",
    image: "/assets/ac/senior-class.png",
  },
  {
    id: 12,
    title: "Class 12th",
    classText: "Class 12th",
    bg: "bg-blue-400/30",
    bgInner: "bg-blue-200",
    watchColor: "border-blue-500",
    exploreBg: "bg-blue-500",
    image: "/assets/ac/senior-class.png",
  },
];

export default function AcademicsPage() {
  return (
    <div className="bg-white font-poppins text-gray-800">
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <CoursesSection
        sectionTitle="Elementary Class Courses (1st to 4th)"
        courses={courses.slice(0, 4)}
      />
      <CoursesSection
        sectionTitle="Junior Class Courses (6th to 8th)"
        courses={courses.slice(4, 7)}
      />
      <CoursesSection
        sectionTitle="Senior Class Courses (9th to 12th)"
        courses={courses.slice(7, 11)}
      />
      <LearnersSection />
      <StudyMaterialsSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
}
