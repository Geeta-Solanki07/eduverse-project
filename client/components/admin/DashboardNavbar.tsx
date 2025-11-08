"use client";

export default function DashboardNavbar({ title }: { title: string }) {
  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/auth/login";
  };

  return (
    <nav className="w-full bg-indigo-600 text-white px-6 py-4 flex justify-between items-center shadow-md">
      <h1 className="text-xl font-semibold">{title}</h1>
      <button
        onClick={handleLogout}
        className="bg-white text-indigo-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition"
      >
        Logout
      </button>
    </nav>
  );
}
