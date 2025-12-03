"use client";

import { useState } from "react";
import api from "@/lib/api";

export default function AdminAddSyllabus({ params }: any) {
  const { courseId } = params;

  const [modules, setModules] = useState([
    { title: "", lessons: [{ title: "", content: "" }] }
  ]);

  const addModule = () => {
    setModules([...modules, { title: "", lessons: [{ title: "", content: "" }] }]);
  };

  const addLesson = (index: number) => {
    const copy = [...modules];
    copy[index].lessons.push({ title: "", content: "" });
    setModules(copy);
  };

  const saveSyllabus = async () => {
    await api.post(`/syllabus/${courseId}`, { modules });
    alert("✅ Syllabus saved!");
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Create Syllabus</h1>

      {modules.map((mod, index) => (
        <div key={index} className="bg-white p-5 rounded-lg shadow my-5">
          <input
            placeholder="Module Title"
            value={mod.title}
            onChange={(e) => {
              const copy = [...modules];
              copy[index].title = e.target.value;
              setModules(copy);
            }}
            className="border p-2 w-full mb-3"
          />

          {mod.lessons.map((lesson, i) => (
            <div key={i} className="mb-2">
              <input
                placeholder="Lesson title"
                value={lesson.title}
                onChange={(e) => {
                  const copy = [...modules];
                  copy[index].lessons[i].title = e.target.value;
                  setModules(copy);
                }}
                className="border p-2 w-full mb-2"
              />

              <textarea
                placeholder="Lesson content"
                value={lesson.content}
                onChange={(e) => {
                  const copy = [...modules];
                  copy[index].lessons[i].content = e.target.value;
                  setModules(copy);
                }}
                className="border p-2 w-full"
              />
            </div>
          ))}

          <button className="bg-blue-600 text-white px-4 py-2 mt-2" onClick={() => addLesson(index)}>
            + Add Lesson
          </button>
        </div>
      ))}

      <button className="bg-green-600 text-white px-6 py-2" onClick={addModule}>
        + Add Module
      </button>

      <button className="bg-black text-white px-6 py-2 ml-4" onClick={saveSyllabus}>
        Save Syllabus
      </button>
    </div>
  );
}
