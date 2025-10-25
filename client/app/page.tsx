import Navbar from "@/components/common/Navbar";
import ChooseSection from "@/components/common/ChooseSection";
import JoinSection from "@/components/common/JoinSection";
import Footer from "@/components/common/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <ChooseSection />
      <JoinSection />
      <Footer />
    </main>
  );
}
