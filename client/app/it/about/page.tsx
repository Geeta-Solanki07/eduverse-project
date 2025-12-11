import About from "@/components/it-professions/About_US";
import Navbar from "@/components/it-professions/Navbar";
import Footer from "@/components/it-professions/Footer";

export const metadata = {
  title: "About US - Dousoft Eduverse",
  description:
    "Explore Dousoft Eduverse About – your path to excellence with top programs, experienced faculty, and learning opportunities.",
};

export default function AboutPage() {
  return (
    <div className="bg-white font-poppins">
    <Navbar />
    <About />
    <Footer />
    </div>
  );
}