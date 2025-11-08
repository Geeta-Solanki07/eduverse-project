"use client";
import React from "react";

interface DashboardCardProps {
  title: string;
  description: string;
  price: string;
  image: string;
  onDelete: () => void;
}

export default function DashboardCard({
  title,
  description,
  price,
  image,
  onDelete,
}: DashboardCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-transform transform hover:-translate-y-1">
      <img
        src={image || "/assets/default-course.png"}
        alt={title}
        className="w-full h-40 object-cover"
      />

      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-800 mb-1">{title}</h3>
        <p className="text-gray-600 text-sm mb-3">{description}</p>

        <div className="flex justify-between items-center">
          <span className="font-bold text-indigo-600">{price}</span>
          <button
            onClick={onDelete}
            className="text-red-500 hover:text-red-700 text-sm font-medium"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
