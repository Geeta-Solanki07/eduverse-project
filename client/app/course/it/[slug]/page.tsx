import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/it-professions/Navbar";
import Footer from "@/components/it-professions/Footer";
import api from "@/lib/api";

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

// Dynamic page for App Router
export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;

  let course: ICourse | null = null;

  try {
    const res = await api.get(`/courses?slug=${slug}`);
    course = res.data;
  } catch (err) {
    console.error(err);
  }

  if (!course) {
    return <p className="text-center py-20">Course not found</p>;
  }

  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      <header className="bg-linear-to-br text-black from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="mb-6 text-sm text-gray-600">
            <Link href="/">Home</Link> /{" "}
            <Link href="/course/it" className="ml-1">Courses</Link> /{" "}
            <span className="ml-1 font-medium text-gray-900">{course.title}</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{course.title}</h1>
              <p className="text-lg text-gray-700 max-w-2xl mb-8">{course.summary}</p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
                <div className="bg-white p-4 shadow rounded-lg">
                  <p className="text-sm text-gray-500">Level</p>
                  <p className="font-semibold text-gray-800">{course.level}</p>
                </div>
                <div className="bg-white p-4 shadow rounded-lg">
                  <p className="text-sm text-gray-500">Lessons</p>
                  <p className="font-semibold text-gray-800">{course.lessons?.length ?? 0}</p>
                </div>
                <div className="bg-white p-4 shadow rounded-lg">
                  <p className="text-sm text-gray-500">Price</p>
                  <p className="font-semibold text-gray-800">₹{course.price}</p>
                </div>
              </div>

              <button className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition">
                Enroll Now
              </button>
            </div>

            <div className="flex justify-center">
              <Image
                src={course.image}
                alt={course.title}
                width={550}
                height={400}
                className="rounded-xl shadow-xl object-cover w-full"
              />
            </div>
          </div>
        </div>
      </header>

      {/* LESSONS / SIDEBAR */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold mb-6">Lessons</h2>
            {course.lessons?.map((lesson, i) => (
              <div key={i} className="p-4 mb-3 bg-gray-50 border rounded-lg">{lesson.title}</div>
            ))}
          </div>

          <aside>
            <div className="p-6 bg-white shadow-lg rounded-lg border">
              <h3 className="text-xl font-semibold mb-4">Course Price</h3>
              <p className="text-3xl font-bold text-orange-500 mb-2">₹{course.price}</p>
              <button className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition">
                Enroll Now
              </button>
            </div>
          </aside>
        </div>
      </section>

      <Footer />
    </>
  );
}
