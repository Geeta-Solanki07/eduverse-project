"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Users, BookOpen, ListChecks, ChartBar } from "lucide-react";

interface SidebarProps {
  open: boolean;
  setOpen: (v: boolean) => void;
}

export default function AdminSidebar({ open, setOpen }: SidebarProps) {
  const pathname = usePathname();

  const links = [
    { name: "Dashboard", href: "/admin/dashboard", icon: <Home size={20} /> },
    { name: "Users", href: "/admin/users", icon: <Users size={20} /> },
    { name: "Courses", href: "/admin/courses", icon: <BookOpen size={20} /> },
    { name: "Categories", href: "/admin/categories", icon: <ListChecks size={20} /> },
    { name: "Orders", href: "/admin/orders", icon: <ChartBar size={20} /> },
  ];

  return (
    <div className={`bg-white shadow-lg h-full transition-all ${open ? "w-64" : "w-16"} overflow-hidden`}>
      <div className="flex items-center justify-between p-4">
        <span className={`text-xl font-bold ${!open && "hidden"}`}>Eduverse</span>
        <button onClick={() => setOpen(!open)} className="p-1 rounded hover:bg-gray-200">
          {open ? "<" : ">"}
        </button>
      </div>
      <nav className="mt-6 flex flex-col gap-1">
        {links.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className={`flex items-center gap-3 p-3 rounded hover:bg-gray-100 transition-all ${
              pathname.startsWith(link.href) ? "bg-indigo-100 text-indigo-700 font-semibold" : "text-gray-700"
            }`}
          >
            {link.icon}
            <span className={`${!open && "hidden"} transition-all`}>{link.name}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
}
