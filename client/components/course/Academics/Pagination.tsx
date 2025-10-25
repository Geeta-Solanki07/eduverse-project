"use client";

export default function Pagination() {
  return (
    <div className="flex justify-center mt-12 gap-3 flex-wrap">
      {[1, 2, 3, 4, 5].map((num) => (
        <button
          key={num}
          className={`px-4 py-2 rounded-md font-medium border transition-colors duration-200 ${
            num === 1
              ? "bg-orange-600 text-white border-orange-600"
              : "bg-white text-gray-700 border-gray-300 hover:bg-orange-600 hover:text-white"
          }`}
        >
          {num}
        </button>
      ))}
      <button className="px-4 py-2 rounded-md font-medium border bg-white text-gray-700 border-gray-300 hover:bg-orange-600 hover:text-white transition-colors duration-200">
        &gt;
      </button>
    </div>
  );
}
