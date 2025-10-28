"use client";

import { FiLogOut, FiBell } from "react-icons/fi";

export default function AdminNavbar() {
  return (
    <header className="flex items-center justify-between bg-white dark:bg-gray-900 shadow-md px-6 py-4 sticky top-0 z-50">
      <h1 className="text-2xl font-bold text-blue-600">Eduverse Admin</h1>

      <div className="flex items-center gap-4">
        <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full">
          <FiBell className="text-gray-600 dark:text-gray-300 text-lg" />
        </button>
        <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition">
          <FiLogOut /> Logout
        </button>
      </div>
    </header>
  );
}
