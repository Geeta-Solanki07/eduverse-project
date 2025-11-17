"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { requireAuthCheck } from "@/lib/requireAuthCheck";

// Chart.js (USER Progress)
import { Bar as ChartBar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";
ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

// Recharts (Analytics)
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  Tooltip as RTooltip,
  ResponsiveContainer,
} from "recharts";

import {
  Users,
  BookOpen,
  DollarSign,
  GraduationCap,
  Sun,
  Moon,
} from "lucide-react";

import { motion } from "framer-motion";

export default function UserDashboard() {
  const router = useRouter();
  const [ready, setReady] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const [stats, setStats] = useState({
    users: 0,
    courses: 0,
    revenue: 0,
    enrollments: 0,
  });

  useEffect(() => {
    const ok = requireAuthCheck(router, ["user"]);
    if (!ok) return;

    setReady(true);
    fetchStats();
  }, []);

  async function fetchStats() {
    try {
      const res = await fetch(
        "https://eduverse-project.onrender.com//api/admin/stats"
      );
      const data = await res.json();
      setStats(data);
    } catch (error) {
      console.log("Error fetching stats");
    }
  }

  if (!ready) return <div>Redirecting...</div>;

  // USER PROGRESS CHART.JS
  const progressChart = {
    labels: ["HTML", "CSS", "JS", "React", "DSA"],
    datasets: [
      {
        label: "Progress (%)",
        data: [80, 60, 50, 40, 30],
        backgroundColor: "#3b82f6",
      },
    ],
  };

  // ADMIN ANALYTICS — Recharts Data
  const userGrowth = [
    { month: "Jan", users: 200 },
    { month: "Feb", users: 400 },
    { month: "Mar", users: 600 },
    { month: "Apr", users: 800 },
    { month: "May", users: 1000 },
    { month: "Jun", users: stats.users },
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

  // Logout
  function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    router.replace("/auth/login");
  }

  return (
    <div
      className={`min-h-screen transition ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      {/* NAVBAR */}
      <header className="flex justify-between items-center p-5 bg-white dark:bg-gray-800 shadow">
        <h2 className="text-2xl font-bold">📊 SaaS User Dashboard</h2>

        <div className="flex items-center gap-4">
          {/* DARK MODE */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full"
          >
            {darkMode ? <Sun /> : <Moon />}
          </button>

          {/* LOGOUT */}
          <button
            onClick={logout}
            className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
          >
            Logout
          </button>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <div className="p-6">
        <h1 className="text-3xl font-bold">Welcome Geeta 👋</h1>

        {/* USER SUMMARY CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <Card title="Enrolled Courses" value="5" color="blue" />
          <Card title="Completed" value="2" color="green" />
          <Card title="Hours Learned" value="38 hrs" color="purple" />
        </div>

        {/* USER PROGRESS CHART.JS */}
        <div className="mt-8 bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-4">Learning Progress</h2>
          <ChartBar data={progressChart} />
        </div>

        {/* ADMIN ANALYTICS SECTION */}
        <h2 className="text-2xl font-bold mt-12 mb-3">📈 Analytics Overview</h2>

        {/* ADMIN CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
          <Acard
            title="Total Users"
            value={stats.users}
            icon={<Users />}
            color="blue"
            dark={darkMode}
          />
          <Acard
            title="Courses"
            value={stats.courses}
            icon={<BookOpen />}
            color="green"
            dark={darkMode}
          />
          <Acard
            title="Revenue"
            value={`$${stats.revenue}`}
            icon={<DollarSign />}
            color="yellow"
            dark={darkMode}
          />
          <Acard
            title="Enrollments"
            value={stats.enrollments}
            icon={<GraduationCap />}
            color="purple"
            dark={darkMode}
          />
        </div>

        {/* CHARTS (RECHARTS) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* LINE CHART */}
          <ChartBox dark={darkMode} title="User Growth">
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={userGrowth}>
                <XAxis
                  dataKey="month"
                  stroke={darkMode ? "#ddd" : "#333"}
                />
                <YAxis stroke={darkMode ? "#ddd" : "#333"} />
                <RTooltip />
                <Line
                  type="monotone"
                  dataKey="users"
                  stroke="#3b82f6"
                  strokeWidth={3}
                />
              </LineChart>
            </ResponsiveContainer>
          </ChartBox>

          {/* BAR CHART */}
          <ChartBox dark={darkMode} title="Course Enrollments">
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={courseData}>
                <XAxis
                  dataKey="name"
                  stroke={darkMode ? "#ddd" : "#333"}
                />
                <YAxis stroke={darkMode ? "#ddd" : "#333"} />
                <RTooltip />
                <Bar
                  dataKey="enrollments"
                  fill="#10b981"
                  radius={[8, 8, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </ChartBox>

          {/* PIE CHART */}
          <ChartBox dark={darkMode} title="Category Breakdown">
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie data={categoryData} outerRadius={90} dataKey="value">
                  {categoryData.map((item, index) => (
                    <Cell key={index} fill={COLORS[index]} />
                  ))}
                </Pie>
                <RTooltip />
              </PieChart>
            </ResponsiveContainer>
          </ChartBox>
        </div>
      </div>
    </div>
  );
}

/* ---------------------- UI COMPONENTS ---------------------- */

function Card({ title, value, color }: any) {
  const map: any = {
    blue: "text-blue-600",
    green: "text-green-600",
    purple: "text-purple-600",
  };

  return (
    <div className="p-5 bg-white dark:bg-gray-800 rounded-xl shadow">
      <h2 className="text-gray-600 dark:text-gray-400">{title}</h2>
      <p className={`text-3xl font-bold ${map[color]}`}>{value}</p>
    </div>
  );
}

function Acard({ title, value, icon, color, dark }: any) {
  const colors: any = {
    blue: dark ? "bg-blue-900 text-blue-300" : "bg-blue-100 text-blue-600",
    green: dark ? "bg-green-900 text-green-300" : "bg-green-100 text-green-600",
    yellow: dark ? "bg-yellow-900 text-yellow-300" : "bg-yellow-100 text-yellow-600",
    purple: dark ? "bg-purple-900 text-purple-300" : "bg-purple-100 text-purple-600",
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="p-6 rounded-2xl shadow flex justify-between items-center bg-white dark:bg-gray-800"
    >
      <div>
        <h3 className="text-gray-400">{title}</h3>
        <p className="text-2xl font-bold">{value}</p>
      </div>
      <div className={`p-3 rounded-full ${colors[color]}`}>{icon}</div>
    </motion.div>
  );
}

function ChartBox({ title, dark, children }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      className={`p-4 rounded-2xl shadow ${
        dark ? "bg-gray-800 text-white" : "bg-white"
      }`}
    >
      <h2 className="text-lg font-semibold mb-4">{title}</h2>
      {children}
    </motion.div>
  );
}
