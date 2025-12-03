"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Navbar from "@/components/academics/Navbar";
import Footer from "@/components/academics/Footer";
import api from "@/lib/api";

interface Chapter {
  title: string;
  videoUrl?: string;
  notes?: string;
}

interface Subject {
  title: string;
  slug: string;
  chapters: Chapter[];
}

interface AcademicClass {
  title: string;
  slug: string;
  category: string;
  image?: string;
  description?: string;
  subjects?: Subject[];
}

export default function AcademicClassPage() {
  const { slug } = useParams();
  const [data, setData] = useState<AcademicClass | null>(null);

  useEffect(() => {
    if (!slug) return;

    api.get(`/academics/classes/${slug}`)
      .then((res) => setData(res.data))
      .catch((err) => {
        console.error("Error:", err);
        setData(null);
      });

  }, [slug]);

  if (!data) {
    return (
      <div className="h-screen flex items-center justify-center text-xl">
        Loading...
      </div>
    );
  }

  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="bg-gray-50 py-14">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

          <div>
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              {data.title}
            </h1>
            <p className="text-gray-600 mb-6">{data.description}</p>

            <span className="inline-block px-5 py-2 bg-blue-600 text-white rounded-lg">
              Category: {data.category}
            </span>
          </div>

          {data.image && (
            <Image
              src={data.image}
              alt={data.title}
              width={500}
              height={300}
              className="rounded-xl shadow-lg object-cover"
            />
          )}
        </div>
      </section>

      {/* SUBJECTS + CHAPTERS */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">Subjects & Chapters</h2>

          {data.subjects?.map((subject, sIndex) => (
            <div key={sIndex} className="mb-10">

              <h3 className="text-xl font-semibold mb-4 text-blue-700">
                {subject.title}
              </h3>

              {subject.chapters?.map((chapter, cIndex) => (
                <div
                  key={cIndex}
                  className="border p-4 rounded-lg mb-3 hover:shadow transition"
                >
                  <h4 className="font-medium">{chapter.title}</h4>

                  {chapter.videoUrl && (
                    <a
                      className="text-blue-500 underline text-sm"
                      href={chapter.videoUrl}
                      target="_blank"
                    >
                      Watch Video
                    </a>
                  )}

                  {chapter.notes && (
                    <p className="text-sm text-gray-600 mt-1">
                      {chapter.notes}
                    </p>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
