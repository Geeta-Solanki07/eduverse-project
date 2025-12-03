"use client";

import { useEffect, useState } from "react";
import api from "@/lib/api";

export default function SyllabusPage({ params }: any) {
  const { slug } = params;
  const [syllabus, setSyllabus] = useState<any>(null);

  useEffect(() => {
    api.get(`/syllabus/${slug}`).then((res) => setSyllabus(res.data));
  }, []);

  if (!syllabus) return <p>Loading...</p>;

  return (
    <div className="max-w-3xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Course Syllabus</h1>

      {syllabus.modules.map((mod: any, i: number) => (
        <div key={i} className="bg-white p-5 rounded-xl shadow mb-4">
          <h2 className="font-bold text-xl mb-2">{mod.title}</h2>

          <ul className="ml-4 list-disc">
            {mod.lessons.map((lesson: any, idx: number) => (
              <li key={idx} className="mb-2">
                <strong>{lesson.title}</strong>
                <p className="text-sm text-gray-600">{lesson.content}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
