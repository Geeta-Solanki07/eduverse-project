import { notFound } from "next/navigation";
import api from "@/lib/api";
import Image from "next/image";

interface Course {
  _id?: string;
  title: string;
  slug: string;
  summary: string;
  price: number;
  image: string;
  instructor: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  lessons: { title: string }[];
}

interface PageProps {
  params: {
    slug: string;
  };
}

// Server component
export default async function CoursePage({ params }: PageProps) {
  let course: Course | null = null;

  try {
    const res = await api.get(`/courses/${params.slug}`);
    course = res.data;
  } catch (err) {
    console.error(err);
  }

  if (!course) {
    return notFound();
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      {/* Course Header */}
      <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-center">
        <Image
          src={course.image}
          alt={course.title}
          width={300}
          height={200}
          className="rounded-xl shadow-lg"
        />
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-gray-800">{course.title}</h1>
          <p className="text-gray-600 mt-2">{course.summary}</p>
          <p className="mt-4 text-lg font-semibold">
            Price: ₹{course.price}
          </p>
          <p className="mt-2 text-sm text-gray-500">Instructor: {course.instructor}</p>
          <p className="mt-1 text-sm text-gray-500">Level: {course.level}</p>
        </div>
      </div>

      {/* Lessons */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Lessons</h2>
        <ul className="space-y-2">
          {course.lessons.map((lesson, idx) => (
            <li
              key={idx}
              className="p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition"
            >
              {idx + 1}. {lesson.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
