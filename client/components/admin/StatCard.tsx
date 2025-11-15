import React from "react";
import { motion } from "framer-motion";

interface StatCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  color: string;
  dark?: boolean;
}

export default function StatCard({ title, value, icon, color, dark }: StatCardProps) {
  const colors: any = {
    blue: dark ? "bg-blue-900 text-blue-300" : "bg-blue-100 text-blue-600",
    green: dark ? "bg-green-900 text-green-300" : "bg-green-100 text-green-600",
    yellow: dark ? "bg-yellow-900 text-yellow-300" : "bg-yellow-100 text-yellow-600",
    purple: dark ? "bg-purple-900 text-purple-300" : "bg-purple-100 text-purple-600",
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 200 }}
      className={`p-6 rounded-2xl shadow flex items-center justify-between ${
        dark ? "bg-gray-800 text-white" : "bg-white"
      }`}
    >
      <div>
        <h3 className="text-gray-400 font-medium">{title}</h3>
        <p className="text-2xl font-semibold">{value}</p>
      </div>
      <div className={`p-3 rounded-full ${colors[color]}`}>{icon}</div>
    </motion.div>
  );
}
