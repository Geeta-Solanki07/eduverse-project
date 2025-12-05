import Navbar from "@/components/academics/Navbar";
import Footer from "@/components/academics/Footer";
import Image from "next/image";
import { notFound } from "next/navigation";

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

export default async function AcademicClassPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;

  const API = process.env.NEXT_PUBLIC_API_URL;

  try {
    const res = await fetch(`${API}/academics/classes/${slug}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      return notFound();
    }

    const data: AcademicClass = await res.json();

    return (
      <>
        <Navbar />

        <section className="bg-gray-50 py-14">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">
            <div>
              <h1 className="text-4xl font-bold mb-4">{data.title}</h1>
              <p className="text-gray-600 mb-6">{data.description}</p>

              <span className="bg-blue-600 text-white px-4 py-2 rounded">
                {data.category}
              </span>
            </div>

            {data.image && (
              <Image
                src={data.image}
                alt={data.title}
                width={500}
                height={300}
                className="rounded-xl object-cover"
                priority
              />
            )}
          </div>
        </section>

        <section className="py-12">
          <div className="max-w-6xl mx-auto px-6 space-y-10">
            {data.subjects?.length ? (
              data.subjects.map((subject, index) => (
                <div key={index}>
                  <h2 className="text-xl font-bold text-blue-700 mb-4">
                    {subject.title}
                  </h2>

                  <div className="space-y-4">
                    {subject.chapters?.map((chapter, i) => (
                      <div
                        key={i}
                        className="border p-4 rounded-lg bg-white shadow-sm"
                      >
                        <h4 className="font-semibold">{chapter.title}</h4>

                        {chapter.videoUrl && (
                          <a
                            href={chapter.videoUrl}
                            className="text-blue-500 underline text-sm mt-2 block"
                            target="_blank"
                          >
                            Watch video
                          </a>
                        )}

                        {chapter.notes && (
                          <p className="text-gray-600 text-sm mt-2">
                            {chapter.notes}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))
            ) : (
              <p>No subjects available yet.</p>
            )}
          </div>
        </section>

        <Footer />
      </>
    );
  } catch (error) {
    return notFound();
  }
}
