
import React from "react";
import Navbar from "@/components/course/IT/Navbar";
import Support from "@/components/support/Support"; 
import Footer from "@/components/it-professions/Footer";

export const metadata = {
  title: "Support - Dousoft Eduverse",
  description: "Get help, FAQs, and support resources for Dousoft Eduverse students and learners.",
};

export default function SupportPage() {
  return (
    <div className="font-poppins bg-gray-50">
      <Navbar />
      <Support />
      <Footer />
    </div>
  );
}
