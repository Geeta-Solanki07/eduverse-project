"use client";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Jan", users: 400 },
  { name: "Feb", users: 800 },
  { name: "Mar", users: 1200 },
  { name: "Apr", users: 1600 },
  { name: "May", users: 1800 },
  { name: "Jun", users: 2000 },
];

export default function ChartCard() {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h3 className="text-gray-700 font-semibold mb-4">User Growth Overview</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="users" stroke="#2563eb" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
