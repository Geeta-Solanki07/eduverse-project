import Navbar from "@/components/course/IT/Navbar";
import Card from "@/components/course/IT/Card";
import Footer from "@/components/it-professions/Footer";

export const metadata = {
  title: "Study Materials - Dousoft Eduverse",
};

export default function StudyMaterialsPage() {
  return (
    <div className="font-poppins bg-gray-50">
      <Navbar />
      <Card />
      <Footer />
    </div>
  );
}
