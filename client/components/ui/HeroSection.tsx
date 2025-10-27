import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-green-900 to-green-600 text-white py-32 text-center">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Empowering Businesses Through Technology
        </h1>
        <p className="mt-4 text-lg">
          Let’s build something amazing together.
        </p>
        <a
          href="/contact"
          className="inline-block mt-6 bg-white text-green-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
        >
          Book a Free Consultation
        </a>
      </div>
    </section>
  );
}
