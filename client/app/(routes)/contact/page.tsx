import HeroSection from "@/components/ui/HeroSection";
import ContactForm from "@/components/ui/ContactForm";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

export default function Home() {
  return (
    <main>
        <Navbar />
      <HeroSection />
      <section className="py-20 container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">Get in Touch</h2>
        <ContactForm />
        <Footer />
      </section>
    </main>
  );
}
