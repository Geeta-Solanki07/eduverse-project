"use client";

import { useEffect, useState } from "react";
import api from "@/lib/api";
import { useRouter } from "next/navigation";

type AcademicClass = { _id: string; title: string; slug: string; category: string };
type Subject = { _id: string; title: string; slug: string; classId: string };

export default function AdminCoursesPage() {
  const router = useRouter();

  const [type, setType] = useState<"" | "it" | "academics">("");
  const [level, setLevel] =
    useState<"Beginner" | "Intermediate" | "Advanced">("Beginner");

  // IT Course Fields
  const [itTitle, setItTitle] = useState("");
  const [itSlug, setItSlug] = useState("");
  const [itDesc, setItDesc] = useState("");

  // Academic Fields
  const [classes, setClasses] = useState<AcademicClass[]>([]);
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [selectedClass, setSelectedClass] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("");
  const [chapterTitle, setChapterTitle] = useState("");
  const [chapterSlug, setChapterSlug] = useState("");
  const [videoUrl, setVideoUrl] = useState("");

  // Fetch Classes (Working)
  useEffect(() => {
    api
      .get("/academics/classes")
      .then((res) => setClasses(res.data.classes || res.data))
      .catch(() => setClasses([]));
  }, []);

  // Fetch Subjects After Selecting Class (Working)
  useEffect(() => {
    if (!selectedClass) return setSubjects([]);

    api
      .get(`/admin/subjects?classId=${selectedClass}`)
      .then((res) => setSubjects(res.data || []))
      .catch(() => setSubjects([]));
  }, [selectedClass]);

  // Add IT Course (Fixed network error)
  const handleAddIT = async (e: any) => {
    e.preventDefault();

    try {
      await api.post("/admin/it-courses", {
        title: itTitle,
        slug: itSlug,
        level,
        description: itDesc,
      });

      alert("IT Course Added Successfully ⭐");

      setItTitle("");
      setItSlug("");
      setItDesc("");
      router.refresh();
    } catch (err) {
      console.log("IT ERROR:", err);
      alert("Error Adding IT Course ❌");
    }
  };

  // Add Chapter (Working)
  const handleAddChapter = async (e: any) => {
    e.preventDefault();

    try {
      await api.post("/admin/chapters", {
        title: chapterTitle,
        slug: chapterSlug,
        subjectId: selectedSubject,
        videoUrl,
        notesUrl: "",
      });

      alert("Chapter Added Successfully ⭐");

      setChapterTitle("");
      setChapterSlug("");
      setVideoUrl("");
    } catch (err) {
      console.log("CHAPTER ERROR:", err);
      alert("Error Adding Chapter ❌");
    }
  };

  return (
    <div className="max-w-4xl mx-auto text-black space-y-8 px-2">
      <h1 className="text-3xl font-bold text-gray-800">Course Management</h1>
      <p className="text-gray-600 -mt-3">
        Add new IT Courses or add Chapters to Academic Subjects.
      </p>

      {/* TYPE SELECT */}
      <div className="bg-white p-6 rounded-xl shadow-sm border">
        <label className="block mb-2 font-semibold text-gray-700">
          Select Adding Type
        </label>

        <select
          value={type}
          onChange={(e) => setType(e.target.value as any)}
          className="border p-3 rounded-lg w-full bg-gray-50 focus:ring focus:ring-orange-300"
        >
          <option value="">Choose an option</option>
          <option value="it">➤ IT Course</option>
          <option value="academics">➤ Academics (Add Chapter)</option>
        </select>
      </div>

      {/* ---------------- IT COURSES FORM ---------------- */}
      {type === "it" && (
        <form
          onSubmit={handleAddIT}
          className="bg-white p-6 rounded-xl shadow-sm border space-y-5"
        >
          <h2 className="text-xl font-semibold text-orange-600 mb-3">
            Add New IT Course
          </h2>

          <div>
            <label className="font-medium">Select Level</label>
            <select
              value={level}
              onChange={(e) => setLevel(e.target.value as any)}
              className="border p-3 rounded-lg w-full bg-gray-50 focus:ring focus:ring-orange-300"
            >
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Advanced</option>
            </select>
          </div>

          <input
            required
            placeholder="Course Title"
            value={itTitle}
            onChange={(e) => setItTitle(e.target.value)}
            className="w-full p-3 border rounded-lg bg-gray-50 focus:ring focus:ring-orange-300"
          />

          <input
            required
            placeholder="Slug (e.g. react-basics)"
            value={itSlug}
            onChange={(e) => setItSlug(e.target.value)}
            className="w-full p-3 border rounded-lg bg-gray-50 focus:ring focus:ring-orange-300"
          />

          <textarea
            placeholder="Description"
            value={itDesc}
            onChange={(e) => setItDesc(e.target.value)}
            className="w-full p-3 border rounded-lg bg-gray-50 focus:ring focus:ring-orange-300"
          />

          <button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg w-full transition">
            Add IT Course
          </button>
        </form>
      )}

      {/* ---------------- ACADEMICS FORM ---------------- */}
      {type === "academics" && (
        <div className="bg-white p-6 rounded-xl shadow-sm border space-y-6">
          <h2 className="text-xl font-semibold text-blue-600">
            Add Chapter to Subject
          </h2>

          <div>
            <label className="font-medium">Select Class</label>
            <select
              className="border p-3 w-full rounded-lg bg-gray-50 focus:ring focus:ring-blue-300"
              value={selectedClass}
              onChange={(e) => setSelectedClass(e.target.value)}
            >
              <option value="">Choose a class</option>
              {classes.map((c) => (
                <option key={c._id} value={c._id}>
                  {c.title} — {c.category}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="font-medium">Select Subject</label>
            <select
              className="border p-3 w-full rounded-lg bg-gray-50 focus:ring focus:ring-blue-300"
              value={selectedSubject}
              onChange={(e) => setSelectedSubject(e.target.value)}
            >
              <option value="">Choose a subject</option>
              {subjects.map((s) => (
                <option key={s._id} value={s._id}>
                  {s.title}
                </option>
              ))}
            </select>
          </div>

          <input
            placeholder="Chapter Title"
            value={chapterTitle}
            onChange={(e) => setChapterTitle(e.target.value)}
            className="w-full p-3 border rounded-lg bg-gray-50 focus:ring focus:ring-blue-300"
          />

          <input
            placeholder="Chapter Slug"
            value={chapterSlug}
            onChange={(e) => setChapterSlug(e.target.value)}
            className="w-full p-3 border rounded-lg bg-gray-50 focus:ring focus:ring-blue-300"
          />

          <input
            placeholder="Video URL (optional)"
            value={videoUrl}
            onChange={(e) => setVideoUrl(e.target.value)}
            className="w-full p-3 border rounded-lg bg-gray-50 focus:ring focus:ring-blue-300"
          />

          <button
            onClick={handleAddChapter}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg w-full transition"
          >
            Add Chapter
          </button>
        </div>
      )}
    </div>
  );
}
