"use client";
import { useState } from "react";
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { Users, BookOpen, DollarSign, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

export default function AnalyticsDashboard() {
  const [darkMode, setDarkMode] = useState(false);

  const stats = {
    users: 1200,
    courses: 45,
    revenue: 18000,
    enrollments: 780,
  };

  const userGrowth = [
    { month: "Jan", users: 200 },
    { month: "Feb", users: 400 },
    { month: "Mar", users: 600 },
    { month: "Apr", users: 800 },
    { month: "May", users: 1000 },
    { month: "Jun", users: 1200 },
  ];

  const courseData = [
    { name: "HTML", enrollments: 200 },
    { name: "CSS", enrollments: 150 },
    { name: "JavaScript", enrollments: 300 },
    { name: "React", enrollments: 130 },
  ];

  const categoryData = [
    { name: "Frontend", value: 60 },
    { name: "Backend", value: 25 },
    { name: "Design", value: 15 },
  ];

  const COLORS = ["#3b82f6", "#10b981", "#f59e0b"];

  return (
    <div className={`min-h-screen p-6 ${darkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"}`}>
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold flex items-center gap-2">📊 Analytics Dashboard</h1>
        <button onClick={() => setDarkMode(!darkMode)} className="p-2 rounded-full bg-gray-200 dark:bg-gray-700">
          {darkMode ? "☀️" : "🌙"}
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
        <StatCard title="Users" value={stats.users} icon={<Users />} color="blue" dark={darkMode} />
        <StatCard title="Courses" value={stats.courses} icon={<BookOpen />} color="green" dark={darkMode} />
        <StatCard title="Revenue" value={`$${stats.revenue}`} icon={<DollarSign />} color="yellow" dark={darkMode} />
        <StatCard title="Enrollments" value={stats.enrollments} icon={<GraduationCap />} color="purple" dark={darkMode} />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <ChartBox title="User Growth" dark={darkMode}>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={userGrowth}>
              <XAxis dataKey="month" stroke={darkMode ? "#ddd" : "#333"} />
              <YAxis stroke={darkMode ? "#ddd" : "#333"} />
              <Tooltip />
              <Line type="monotone" dataKey="users" stroke="#3b82f6" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </ChartBox>

        <ChartBox title="Course Enrollments" dark={darkMode}>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={courseData}>
              <XAxis dataKey="name" stroke={darkMode ? "#ddd" : "#333"} />
              <YAxis stroke={darkMode ? "#ddd" : "#333"} />
              <Tooltip />
              <Bar dataKey="enrollments" fill="#10b981" radius={[8,8,0,0]} />
            </BarChart>
          </ResponsiveContainer>
        </ChartBox>

        <ChartBox title="Category Distribution" dark={darkMode}>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie data={categoryData} dataKey="value" outerRadius={90} label>
                {categoryData.map((entry,index) => <Cell key={index} fill={COLORS[index % COLORS.length]} />)}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </ChartBox>
      </div>
    </div>
  );
}

function StatCard({ title, value, icon, color, dark }: any) {
  const colors: any = {
    blue: dark ? "bg-blue-900 text-blue-300" : "bg-blue-100 text-blue-600",
    green: dark ? "bg-green-900 text-green-300" : "bg-green-100 text-green-600",
    yellow: dark ? "bg-yellow-900 text-yellow-300" : "bg-yellow-100 text-yellow-600",
    purple: dark ? "bg-purple-900 text-purple-300" : "bg-purple-100 text-purple-600",
  };

  return (
    <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 200 }}
      className={`p-6 rounded-2xl shadow flex items-center justify-between ${dark ? "bg-gray-800 text-white" : "bg-white"}`}>
      <div>
        <h3 className="text-gray-400 font-medium">{title}</h3>
        <p className="text-2xl font-semibold">{value}</p>
      </div>
      <div className={`p-3 rounded-full ${colors[color]}`}>{icon}</div>
    </motion.div>
  );
}

function ChartBox({ title, children, dark }: any) {
  return (
    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6 }}
      className={`p-4 rounded-2xl shadow ${dark ? "bg-gray-800 text-white" : "bg-white"}`}>
      <h2 className="text-lg font-semibold mb-4">{title}</h2>
      {children}
    </motion.div>
  );
}
