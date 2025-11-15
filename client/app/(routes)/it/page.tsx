import HeroSection from "@/components/it-professions/HeroSection";
import FeaturesSection from "@/components/it-professions/FeaturesSection";
import CoursesSection from "@/components/it-professions/CoursesSection";
import AboutSection from "@/components/it-professions/AboutSection";
import TestimonialsSection from "@/components/it-professions/TestimonialsSection";
import EbookSection from "@/components/it-professions/EbookSection";
import Footer from "@/components/it-professions/Footer";
import Navbar from "@/components/it-professions/Navbar";
export const metadata = {
  title: "IT Professions - Dousoft Eduverse",
  description: "Explore IT courses and kickstart your career with Dousoft Eduverse.",
};

export default function ITProfessionsPage() {
  return (
    <div className="bg-white font-poppins">
      
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <AboutSection />
      <CoursesSection />
      <TestimonialsSection />
      <EbookSection />
      <Footer/>
    </div>
  );
}
