"use client";

import { useEffect, useState } from "react";
import Sidebar from "@/components/admin/Sidebar";
import Navbar from "@/components/admin/Navbar";
import UserModal from "@/components/admin/UserModel";
import { motion } from "framer-motion";
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
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Users, BookOpen, DollarSign, GraduationCap, Sun, Moon } from "lucide-react";

interface User {
  _id?: string;
  name: string;
  email: string;
  role: string;
}

interface Stats {
  users: number;
  courses: number;
  revenue: number;
  enrollments: number;
}

export default function AdminDashboard() {
  const [darkMode, setDarkMode] = useState(false);
  const [stats, setStats] = useState<Stats>({ users: 0, courses: 0, revenue: 0, enrollments: 0 });
  const [userGrowth, setUserGrowth] = useState<any[]>([]);
  const [courseData, setCourseData] = useState<any[]>([]);
  const [categoryData, setCategoryData] = useState<any[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [editUser, setEditUser] = useState<User | null>(null);

  const COLORS = ["#3b82f6", "#10b981", "#f59e0b"];

  // ✅ Fetch all data from backend
  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const statsRes = await fetch("https://eduverse-project.onrender.com/admin/stats");
        const statsData = await statsRes.json();
        setStats(statsData);

        const usersRes = await fetch("https://eduverse-project.onrender.com/admin/users");
        const usersData = await usersRes.json();
        setUsers(usersData.users || []);

        // Sample charts data, ideally fetch from backend
        setUserGrowth([
          { month: "Jan", users: 200 },
          { month: "Feb", users: 400 },
          { month: "Mar", users: 600 },
          { month: "Apr", users: 800 },
          { month: "May", users: 1000 },
          { month: "Jun", users: statsData.users || 1200 },
        ]);

        setCourseData([
          { name: "HTML", enrollments: 200 },
          { name: "CSS", enrollments: 150 },
          { name: "JavaScript", enrollments: 300 },
          { name: "React", enrollments: 130 },
        ]);

        setCategoryData([
          { name: "Frontend", value: 60 },
          { name: "Backend", value: 25 },
          { name: "Design", value: 15 },
        ]);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboard();
  }, []);

  // Add/Edit User
  const handleSaveUser = async (user: User) => {
    try {
      if (user._id) {
        const res = await fetch(`https://eduverse-project.onrender.com/admin/users/${user._id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(user),
        });
        if (res.ok) setUsers(users.map((u) => (u._id === user._id ? user : u)));
      } else {
        const res = await fetch(`https://eduverse-project.onrender.com/admin/users`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(user),
        });
        const data = await res.json();
        setUsers([...users, data.user]);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setModalOpen(false);
      setEditUser(null);
    }
  };

  const handleDeleteUser = async (id: string) => {
    if (!confirm("Are you sure?")) return;
    try {
      const res = await fetch(`https://eduverse-project.onrender.com/admin/users/${id}`, { method: "DELETE" });
      if (res.ok) setUsers(users.filter((u) => u._id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) return <p className="text-center mt-20">Loading dashboard...</p>;

  return (
    <div className={`flex min-h-screen ${darkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"}`}>
      <Sidebar />
      <div className="flex-1 p-6">
        <Navbar />

        {/* Header + Dark Mode Toggle */}
        <div className="flex justify-between items-center mt-6 mb-6">
          <h1 className="text-2xl font-semibold">📊 Admin Dashboard</h1>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition"
          >
            {darkMode ? <Sun className="text-yellow-400" /> : <Moon className="text-gray-800" />}
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
          <StatCard title="Users" value={stats.users} icon={<Users />} color="blue" dark={darkMode} />
          <StatCard title="Courses" value={stats.courses} icon={<BookOpen />} color="green" dark={darkMode} />
          <StatCard title="Revenue" value={`$${stats.revenue}`} icon={<DollarSign />} color="yellow" dark={darkMode} />
          <StatCard title="Enrollments" value={stats.enrollments} icon={<GraduationCap />} color="purple" dark={darkMode} />
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
          {/* Line Chart */}
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} className={`p-4 rounded-2xl shadow ${darkMode ? "bg-gray-800 text-white" : "bg-white"}`}>
            <h2 className="text-lg font-semibold mb-4">User Growth</h2>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={userGrowth}>
                <XAxis dataKey="month" stroke={darkMode ? "#ddd" : "#333"} />
                <YAxis stroke={darkMode ? "#ddd" : "#333"} />
                <Tooltip />
                <Line type="monotone" dataKey="users" stroke="#3b82f6" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Bar Chart */}
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className={`p-4 rounded-2xl shadow ${darkMode ? "bg-gray-800 text-white" : "bg-white"}`}>
            <h2 className="text-lg font-semibold mb-4">Course Enrollments</h2>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={courseData}>
                <XAxis dataKey="name" stroke={darkMode ? "#ddd" : "#333"} />
                <YAxis stroke={darkMode ? "#ddd" : "#333"} />
                <Tooltip />
                <Bar dataKey="enrollments" fill="#10b981" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Pie Chart */}
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className={`p-4 rounded-2xl shadow ${darkMode ? "bg-gray-800 text-white" : "bg-white"}`}>
            <h2 className="text-lg font-semibold mb-4">Category Distribution</h2>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie data={categoryData} dataKey="value" outerRadius={90} label>
                  {categoryData.map((entry, index) => <Cell key={index} fill={COLORS[index % COLORS.length]} />)}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </motion.div>
        </div>

        {/* Users Table */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Manage Users</h2>
          <button onClick={() => setModalOpen(true)} className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">+ Add User</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="py-3 px-4 text-left">Name</th>
                <th className="py-3 px-4 text-left">Email</th>
                <th className="py-3 px-4 text-left">Role</th>
                <th className="py-3 px-4 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <tr key={user._id} className="border-b hover:bg-gray-50 dark:hover:bg-gray-700">
                  <td className="py-3 px-4">{user.name}</td>
                  <td className="py-3 px-4">{user.email}</td>
                  <td className="py-3 px-4 capitalize">{user.role}</td>
                  <td className="py-3 px-4 text-center flex justify-center gap-2">
                    <button onClick={() => { setEditUser(user); setModalOpen(true); }} className="bg-yellow-500 text-white px-3 py-1 rounded-md hover:bg-yellow-600 transition">Edit</button>
                    <button onClick={() => handleDeleteUser(user._id!)} className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <UserModal show={modalOpen} onClose={() => { setModalOpen(false); setEditUser(null); }} onSave={handleSaveUser} editUser={editUser} />
      </div>
    </div>
  );
}

// ✅ StatCard Component
function StatCard({ title, value, icon, color, dark }: any) {
  const colors: any = {
    blue: dark ? "bg-blue-900 text-blue-300" : "bg-blue-100 text-blue-600",
    green: dark ? "bg-green-900 text-green-300" : "bg-green-100 text-green-600",
    yellow: dark ? "bg-yellow-900 text-yellow-300" : "bg-yellow-100 text-yellow-600",
    purple: dark ? "bg-purple-900 text-purple-300" : "bg-purple-100 text-purple-600",
  };

  return (
    <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 200 }} className={`p-6 rounded-2xl shadow flex items-center justify-between ${dark ? "bg-gray-800 text-white" : "bg-white"}`}>
      <div>
        <h3 className="text-gray-400 font-medium">{title}</h3>
        <p className="text-2xl font-semibold">{value}</p>
      </div>
      <div className={`p-3 rounded-full ${colors[color]}`}>{icon}</div>
    </motion.div>
  );
}

// "use client";
// import Sidebar from "@/components/Sidebar";
// import Navbar from "@/components/Navbar";
// import AnalyticsDashboard from "@/components/AnalyticsDashboard";

// export default function AdminDashboardPage() {
//   return (
//     <div className="flex">
//       <Sidebar />
//       <div className="flex-1 flex flex-col">
//         <Navbar />
//         <AnalyticsDashboard />
//       </div>
//     </div>
//   );
// }
