"use client";

import Image from "next/image";
import Link from "next/link";

interface Course {
  _id: string;
  title: string;
  slug: string;
  image?: string;
}

export default function CoursesSection({
  sectionTitle,
  courses,
}: {
  sectionTitle: string;
  courses: Course[];
}) {
  if (!courses || courses.length === 0) return null;

  return (
    <section className="w-full py-16 px-4 md:px-12 bg-green-50">
      <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center md:text-left">
        {sectionTitle}
      </h2>

      <div className="flex gap-6 overflow-x-auto pb-4">
        {courses.map((course) => (
          <div
            key={course._id}
            className="relative shrink-0 w-[280px] p-5 bg-white rounded-2xl shadow hover:shadow-lg transition"
          >
            <div className="h-36 w-full relative mb-3">
              <Image
                src={course.image || "/assets/ac/elementory.png"}
                alt={course.title}
                fill
                className="object-cover rounded"
              />
            </div>

            <h3 className="text-lg font-semibold">{course.title}</h3>

            <Link
              href={`/academics/${course.slug}`}
              className="mt-4 inline-block bg-orange-500 text-white px-4 py-2 rounded-full font-medium"
            >
              Explore
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
