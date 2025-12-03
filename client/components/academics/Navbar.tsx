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
    api
      .get("/academics/classes")
      .then((res) => {
        console.log("CLASSES FROM DB =", res.data);
        setClasses(res.data);
      })
      .catch((err) => console.log("academics fetch err", err));
  }, []);

  const elementary = classes.filter((c) => c.category === "elementary");
  const junior = classes.filter((c) => c.category === "junior");
  const senior = classes.filter((c) => c.category === "senior"); // 9-12

  return (
    <nav className="flex items-center justify-between px-5 md:px-10 py-4 bg-white/80 backdrop-blur-xl shadow-md sticky top-0 z-50">

      {/* LOGO */}
      <Link href="/" className="flex items-center gap-2">
        <Image src="/logo.png" width={120} height={40} alt="Logo" />
      </Link>

      {/* DESKTOP MENU */}
      <div className="hidden md:flex flex-1 justify-center items-center gap-10">

        {/* ACADEMICS DROPDOWN */}
        <div className="relative group">
          <button className="flex items-center gap-2 font-semibold text-gray-700 hover:text-orange-500">
            <Image
              src="/assets/it/emojione-monotone_books.svg"
              width={20}
              height={20}
              alt="Books"
            />
            Academics
            <Image
              src="/assets/it/Polygon 1.svg"
              width={10}
              height={10}
              alt="Arrow"
            />
          </button>

          {/* DROPDOWN PANEL */}
          <div className="absolute left-1/2 -translate-x-1/2 top-full mt-3 hidden group-hover:grid grid-cols-3 gap-8 bg-white rounded-2xl shadow-2xl p-6 w-[900px] border border-gray-100">

            {/* ELEMENTARY */}
            <div>
              <h4 className="text-orange-500 font-bold pb-2 border-b">
                Elementary (1st - 5th)
              </h4>
              <ul className="pt-3 space-y-2">
                {elementary.map((c) => (
                  <li key={c._id}>
                    <Link
                      href={`/academics/${c.slug}`}
                      className="hover:text-orange-500"
                    >
                      {c.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* JUNIOR */}
            <div>
              <h4 className="text-green-600 font-bold pb-2 border-b">
                Junior (6th - 8th)
              </h4>
              <ul className="pt-3 space-y-2">
                {junior.map((c) => (
                  <li key={c._id}>
                    <Link
                      href={`/academics/${c.slug}`}
                      className="hover:text-green-500"
                    >
                      {c.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* SENIOR (9 - 12) ✅ */}
            <div>
              <h4 className="text-blue-600 font-bold pb-2 border-b">
                Senior (9th - 12th)
              </h4>
              <ul className="pt-3 space-y-2">
                {senior.map((c) => (
                  <li key={c._id}>
                    <Link
                      href={`/academics/${c.slug}`}
                      className="hover:text-blue-500"
                    >
                      {c.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

        <Link
          href="/course/academics"
          className="font-semibold text-gray-700 hover:text-orange-500"
        >
          Study Materials
        </Link>

        <Link
          href="/support"
          className="font-semibold text-gray-700 hover:text-orange-500"
        >
          Support
        </Link>
      </div>

      {/* RIGHT SIDE */}
      <div className="hidden md:flex items-center gap-5">
        <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 shadow-inner w-64">
          <Search size={18} className="text-gray-500" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none px-2 text-sm text-gray-700 w-full"
          />
        </div>

        <Link
          href="/auth/login"
          className="bg-orange-500 text-white px-6 py-2 rounded-full font-semibold"
        >
          Login
        </Link>
      </div>

      {/* MOBILE ICON */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden text-gray-700"
      >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg p-6 flex flex-col gap-4 md:hidden">
          {classes.map((c) => (
            <Link
              key={c._id}
              href={`/academics/${c.slug}`}
              className="text-gray-700 font-medium"
              onClick={() => setMenuOpen(false)}
            >
              {c.title}
            </Link>
          ))}

          <Link
            href="/auth/login"
            className="bg-orange-500 text-white py-2 rounded-lg text-center font-semibold"
          >
            Login / Register
          </Link>
        </div>
      )}
    </nav>
  );
}
