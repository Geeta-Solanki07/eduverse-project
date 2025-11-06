import Link from "next/link";
import { BarChart, Users, BookOpen, CreditCard } from "lucide-react";

const Sidebar = () => {
  const menu = [
    { name: "Dashboard", icon: <BarChart size={20} />, path: "/admin" },
    { name: "Users", icon: <Users size={20} />, path: "/admin/users" },
    { name: "Courses", icon: <BookOpen size={20} />, path: "/admin/courses" },
    { name: "Orders", icon: <CreditCard size={20} />, path: "/admin/orders" },
  ];

  return (
    <div className="w-64 bg-white shadow-lg p-4">
      <h2 className="text-xl font-semibold text-gray-700 mb-6">Admin Panel</h2>
      <ul className="space-y-4">
        {menu.map((item, i) => (
          <li key={i}>
            <Link
              href={item.path}
              className="flex items-center gap-3 p-2 rounded-lg hover:bg-indigo-50 transition"
            >
              {item.icon}
              <span>{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
