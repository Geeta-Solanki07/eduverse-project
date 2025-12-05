"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import api from "@/lib/api";

import Navbar from "@/components/academics/Navbar";
import Footer from "@/components/academics/Footer";

interface ICourse {
  title: string;
  slug: string;
  summary: string;
  price: number;
  image: string;
  instructor: string;
  level: string;
  lessons?: { title: string }[];
}

export default function Page() {
  const params = useParams();

  const slug =
    typeof params?.slug === "string"
      ? params.slug
      : Array.isArray(params?.slug)
      ? params.slug[0]
      : null;

  const [course, setCourse] = useState<ICourse | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;

    const getCourse = async () => {
      try {
        const res = await api.get(`/academics/${slug}`);
        setCourse(res.data);
      } catch (error) {
        console.error("Course fetch error:", error);
      } finally {
        setLoading(false);
      }
    };

    getCourse();
  }, [slug]);

  if (loading) {
    return <p className="text-center py-20">Loading...</p>;
  }

  if (!course) {
    return <p className="text-center py-20 text-red-500">Course not found</p>;
  }

  return (
    <>
      <Navbar />

      <header className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="mb-6 text-sm text-gray-600">
            <Link href="/">Home</Link> /{" "}
            <Link href="/academics" className="ml-1">
              Academics
            </Link>{" "}
            /{" "}
            <span className="ml-1 font-medium text-gray-900">
              {course.title}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                {course.title}
              </h1>

              <p className="text-lg text-gray-700 max-w-2xl mb-8">
                {course.summary}
              </p>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-10">
                <div className="bg-white p-4 shadow rounded-lg">
                  <p className="text-sm text-gray-500">Level</p>
                  <p className="font-semibold text-gray-800">
                    {course.level}
                  </p>
                </div>

                <div className="bg-white p-4 shadow rounded-lg">
                  <p className="text-sm text-gray-500">Lessons</p>
                  <p className="font-semibold text-gray-800">
                    {course.lessons?.length ?? 0}
                  </p>
                </div>

                <div className="bg-white p-4 shadow rounded-lg">
                  <p className="text-sm text-gray-500">Price</p>
                  <p className="font-semibold text-gray-800">
                    ₹{course.price}
                  </p>
                </div>
              </div>

              <button className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition">
                Enroll Now
              </button>
            </div>

            <div className="flex justify-center">
              <Image
                src={course.image || "/default-course.jpg"}
                alt={course.title}
                width={550}
                height={400}
                className="rounded-xl shadow-xl object-cover w-full"
              />
            </div>
          </div>
        </div>
      </header>

      <Footer />
    </>
  );
}
