"use client";

import { useState } from "react";
import { FiMenu, FiSearch, FiSun, FiMoon, FiSettings, FiGithub, FiChevronDown } from "react-icons/fi";
import Image from "next/image";

interface NavbarProps {
  user: { name: string; occupation: string };
  isSidebarOpen: boolean;
  setIsSidebarOpen: (value: boolean) => void;
  mode?: string;
  toggleMode?: () => void;
}

export default function Navbar({
  user,
  isSidebarOpen,
  setIsSidebarOpen,
  mode = "light",
  toggleMode,
}: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-transparent border-b border-gray-200 dark:border-gray-700 px-4 py-3 flex items-center justify-between">
      {/* Left Side */}
      <div className="flex items-center gap-4">
        {/* Sidebar Toggle */}
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
          title="Toggle Sidebar"
        >
          <FiMenu size={22} />
        </button>

        {/* Search Box */}
        <div className="hidden md:flex items-center bg-gray-100 dark:bg-gray-800 rounded-full px-3 py-2 gap-2">
          <FiSearch className="text-gray-500" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none text-sm text-gray-700 dark:text-gray-200"
          />
        </div>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-5">
        {/* GitHub */}
        <button
          onClick={() => window.open("https://github.com/yourusername/yourrepo", "_blank")}
          className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
          title="Source Code"
        >
          <FiGithub size={22} />
        </button>

        {/* Dark/Light Mode */}
        <button
          onClick={toggleMode}
          className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
          title="Toggle Theme"
        >
          {mode === "dark" ? <FiSun size={22} /> : <FiMoon size={22} />}
        </button>

        {/* Settings */}
        <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800" title="Settings">
          <FiSettings size={22} />
        </button>

        {/* User Profile Dropdown */}
        <div className="relative">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 px-3 py-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            <Image
              src="/assets/profile.jpeg"
              alt="Profile"
              width={30}
              height={30}
              className="rounded-full object-cover"
            />
            <div className="text-left hidden sm:block">
              <p className="text-sm font-semibold text-gray-700 dark:text-gray-200">{user.name}</p>
              <p className="text-xs text-gray-500">{user.occupation}</p>
            </div>
            <FiChevronDown className="text-gray-500" />
          </button>

          {/* Dropdown Menu */}
          {menuOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg">
              <button
                onClick={() => setMenuOpen(false)}
                className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                Log Out
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
