"use client";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

interface ChartCardProps {
  data: { month: number; users: number; revenue: number }[];
}

export default function ChartCard({ data }: ChartCardProps) {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const chartData = data.map(d => ({ month: months[d.month - 1], users: d.users, revenue: d.revenue }));

  return (
    <div className="bg-white rounded-xl shadow-md p-6 mt-6">
      <h3 className="text-gray-700 font-semibold mb-4">Monthly Users & Revenue</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={chartData}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="users" stroke="#3b82f6" strokeWidth={3} />
          <Line type="monotone" dataKey="revenue" stroke="#10b981" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
