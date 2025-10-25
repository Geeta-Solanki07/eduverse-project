"use client";

interface Props {
  categories: string[];
  activeCategory: string;
  setActiveCategory: (cat: string) => void;
}

export default function CategoryTabs({
  categories,
  activeCategory,
  setActiveCategory,
}: Props) {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-8">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setActiveCategory(cat)}
          className={`px-5 py-2 rounded-full font-medium transition-colors duration-300 ${
            activeCategory === cat
              ? "bg-orange-600 text-white border-none"
              : "bg-white text-gray-700 border border-gray-300 hover:bg-orange-600 hover:text-white"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
