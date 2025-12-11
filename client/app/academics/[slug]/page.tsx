"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import api from "@/lib/api";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import Image from "next/image";

export default function AcademicClassPage(){
  const pathname = usePathname();
  const slug = pathname?.split("/").pop() ?? "";
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;
    setLoading(true);
    api.get(`/academics/classes/${slug}`)
      .then(res => {
        // Accept different shapes
        const classObj = res.data.class || res.data;
        setData(classObj);
      })
      .catch(err => {
        console.error(err);
        setData(null);
      })
      .finally(()=>setLoading(false));
  }, [slug]);

  if (loading) return <div className="p-8 text-center">Loading...</div>;
  if (!data) return <div className="p-8 text-center text-red-500">Class not found</div>;

  return (
    <>
      <Navbar />
      <section className="p-8 text-black" >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
          <div>
            <h1 className="text-4xl font-bold">{data.title}</h1>
            <p className="mt-3 text-gray-700">{data.description}</p>
            <div className="mt-4"><span className="bg-blue-500 text-white px-3 py-1 rounded">{data.category}</span></div>
          </div>
          <div>
            <Image src={data.image || "/fallback-class.png"} width={500} height={300} alt={data.title} className="rounded" />
          </div>
        </div>
      </section>

      <section className="p-8 text-black">
        <div className="max-w-6xl mx-auto space-y-6">
          {data.subjects?.length ? data.subjects.map((s:any, idx:number) => (
            <div key={idx} className="border rounded p-4">
              <h2 className="font-semibold text-lg">{s.title}</h2>
              <div className="mt-3 space-y-2">
                {s.chapters?.length ? s.chapters.map((c:any,i:number)=>(
                  <div key={i} className="p-3 bg-gray-50 rounded">
                    <div className="font-medium">{c.title}</div>
                    {c.videoUrl && <a href={c.videoUrl} className="text-blue-600 text-sm">Watch</a>}
                  </div>
                )) : <div className="text-sm text-gray-500">No chapters yet.</div>}
              </div>
            </div>
          )) : <div>No subjects yet.</div>}
        </div>
      </section>

      <Footer />
    </>
  );
}
