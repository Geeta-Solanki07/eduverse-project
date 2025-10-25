"use client";

import Image from "next/image";
import { FileText, Star, Download, ShoppingCart } from "lucide-react";

interface Material {
  id: number;
  title: string;
  pages: string;
  rating: string;
  description: string;
  image: string;
  price: string;
  type: string;
}

export default function MaterialCard({ item }: { item: Material }) {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-1 duration-300 overflow-hidden flex flex-col">
      {/* Image Section */}
      <div className="relative w-full h-60">
        <Image
          src={item.image} // must start with "/"
          alt={item.title}
          fill
          className="object-cover"
        />
        <div className="absolute top-3 left-3 bg-orange-500 text-white text-xs px-3 py-1 rounded-full shadow">
          {item.type}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>

        <div className="flex justify-between text-gray-500 text-sm mb-3">
          <span className="flex items-center gap-1">
            <FileText size={16} /> {item.pages}
          </span>
          <span className="flex items-center gap-1">
            <Star size={16} className="text-yellow-500" /> {item.rating}
          </span>
        </div>

        <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow">
          {item.description}
        </p>

        <div className="flex justify-between items-center mt-auto">
          <span
            className={`font-semibold ${
              item.price.toLowerCase() === "free" ? "text-green-600" : "text-gray-900"
            }`}
          >
            {item.price}
          </span>
          <button
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-white text-sm shadow-md transition-transform transform hover:-translate-y-0.5 ${
              item.price.toLowerCase() === "free"
                ? "bg-green-600 hover:bg-green-500"
                : "bg-orange-500 hover:bg-orange-600"
            }`}
          >
            {item.price.toLowerCase() === "free" ? (
              <>
                <Download size={16} /> Download
              </>
            ) : (
              <>
                <ShoppingCart size={16} /> Buy Now
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
