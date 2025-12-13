"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import api from "@/lib/api";
import { Menu, X, Search } from "lucide-react";

type ClassItem = {
  _id: string;
  title: string;
  slug: string;
  category: "elementary" | "junior" | "senior";
  image?: string;
};

export default function Navbar() {
  const [classes, setClasses] = useState<ClassItem[]>([]);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const getClasses = async () => {
      try {
        const res = await api.get("/academics/classes");
        if (Array.isArray(res.data)) setClasses(res.data);
        else setClasses(res.data.classes);
      } catch (err) {
        console.log("ERROR 👉", err);
      }
    };
    getClasses();
  }, []);

  const elementary = classes.filter((c) => c.category === "elementary");
  const junior = classes.filter((c) => c.category === "junior");
  const senior = classes.filter((c) => c.category === "senior");

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "elementary":
        return "text-orange-500 hover:text-orange-600";
      case "junior":
        return "text-green-600 hover:text-green-500";
      case "senior":
        return "text-blue-600 hover:text-blue-500";
      default:
        return "text-gray-700";
    }
  };

  return (
    <nav className="flex items-center justify-between px-5 md:px-10 py-4 bg-white/90 backdrop-blur-md shadow-md sticky top-0 z-50">

      <Link href="/" className="flex items-center gap-2">
        <Image src="/logo.png" width={120} height={40} alt="Logo" />
      </Link>

      {/* DESKTOP MENU */}
      <div className="hidden md:flex flex-1 justify-center items-center gap-6">

        {/* ACADEMICS DROPDOWN */}
        <div className="relative group">
          <button className="flex items-center gap-2 font-semibold text-gray-700 hover:text-orange-500 transition">
            Academics
            <Image src="/assets/it/Polygon 1.svg" width={10} height={10} alt="Arrow" />
          </button>

          <div className="absolute left-1/2 -translate-x-1/2 top-full mt-3 hidden group-hover:grid grid-cols-3 gap-6 bg-white rounded-2xl shadow-2xl p-6 w-[900px] border border-gray-100">

            {/* Elementary */}
            <div>
              <h4 className="text-orange-500 font-bold pb-2 border-b">Elementary</h4>
              <ul className="pt-3 space-y-2">
                {elementary.map((c) => (
                  <li key={c._id}>
                    <Link href={`/academics/${c.slug}`} className={getCategoryColor(c.category)}>
                      {c.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Junior */}
            <div>
              <h4 className="text-green-600 font-bold pb-2 border-b">Junior</h4>
              <ul className="pt-3 space-y-2">
                {junior.map((c) => (
                  <li key={c._id}>
                    <Link href={`/academics/${c.slug}`} className={getCategoryColor(c.category)}>
                      {c.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Senior */}
            <div>
              <h4 className="text-blue-600 font-bold pb-2 border-b">Senior</h4>
              <ul className="pt-3 space-y-2">
                {senior.map((c) => (
                  <li key={c._id}>
                    <Link href={`/academics/${c.slug}`} className={getCategoryColor(c.category)}>
                      {c.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

        <Link href="/course/academics" className="font-semibold text-gray-700 hover:text-orange-500 transition">
          Study Materials
        </Link>

        <Link href="/support" className="font-semibold text-gray-700 hover:text-orange-500 transition">
          Support
        </Link>

      </div>

      {/* RIGHT SIDE */}
      <div className="hidden md:flex items-center gap-4">
        <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 w-64">
          <Search size={18} className="text-gray-500" />
          <input type="text" placeholder="Search..." className="bg-transparent outline-none px-2 text-sm text-gray-700 w-full" />
        </div>

        <Link href="/auth/register" className="bg-orange-500 text-white px-6 py-2 rounded-full font-semibold">
          Login / Register
        </Link>
      </div>

      {/* MOBILE MENU */}
      <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-gray-700">
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg p-6 flex flex-col gap-4 md:hidden">

          {classes.map((c) => (
            <Link
              key={c._id}
              href={`/academics/${c.slug}`}
              className={`font-medium ${getCategoryColor(c.category)}`}
              onClick={() => setMenuOpen(false)}
            >
              {c.title}
            </Link>
          ))}

          <Link href="/course/academics" className="font-medium text-gray-800 hover:text-orange-500">
            Study Materials
          </Link>

          <Link href="/support" className="font-medium text-gray-800 hover:text-orange-500">
            Support
          </Link>

          <Link href="/auth/register" className="bg-orange-500 text-white py-2 rounded-lg text-center font-semibold">
            Login / Register
          </Link>

        </div>
      )}

    </nav>
  );
}
