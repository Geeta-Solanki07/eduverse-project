"use client";
import React from "react";

interface DashboardCardProps {
  title: string;
  value: string | number;
}

export default function DashboardCard({ title, value }: DashboardCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 text-center">
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
      <span className="text-2xl font-bold text-indigo-600">{value}</span>
    </div>
  );
}
