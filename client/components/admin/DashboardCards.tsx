export default function DashboardCards({ stats }: { stats: { title:string; value:string|number }[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {stats.map((s,i)=>(
        <div key={i} className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
          <h3 className="text-gray-500">{s.title}</h3>
          <p className="text-2xl font-bold">{s.value}</p>
        </div>
      ))}
    </div>
  );
}
