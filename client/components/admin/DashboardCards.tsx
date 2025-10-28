"use client";

export default function DashboardCards() {
  const data = [
    { title: "Users", value: 120 },
    { title: "Courses", value: 14 },
    { title: "Revenue", value: "₹45,200" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
      {data.map((d) => (
        <div key={d.title} className="p-6 bg-white rounded shadow">
          <div className="text-sm text-gray-500">{d.title}</div>
          <div className="text-2xl font-bold mt-2">{d.value}</div>
        </div>
      ))}
    </div>
  );
}
