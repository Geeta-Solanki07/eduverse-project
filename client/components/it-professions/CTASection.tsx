"use client";

export default function CTASection() {
  return (
    <section className="bg-gradient-to-r from-red-600 to-blue-600 text-white py-16 px-6 relative rounded-2xl max-w-6xl mx-auto my-20 flex flex-col md:flex-row items-center justify-around shadow-lg">
      {/* Email Section */}
      <div className="text-center md:text-left mb-6 md:mb-0">
        <h3 className="text-2xl md:text-3xl font-semibold mb-2">Get in Touch :</h3>
        <p className="text-xl font-bold tracking-wide hover:text-orange-300 transition-colors duration-300">
          info@dousoft.com
        </p>
      </div>

      {/* OR Divider */}
      <span className="text-orange-400 font-bold text-2xl my-4 md:my-0">Or</span>

      {/* Call Section */}
      <div className="text-center md:text-left">
        <h3 className="text-2xl md:text-3xl font-semibold mb-2">Call Us Via :</h3>
        <p className="text-xl font-bold tracking-wide hover:text-orange-300 transition-colors duration-300">
          +01 523 456 789
        </p>
      </div>
    </section>
  );
}
