import { useState } from "react";
import { products } from "../data/products";
import ProductCard from "./ProductCard";

const filters = ["All", "Flagship", "Mid-range", "Gaming"];

const filterMap = {
  All: () => true,
  Flagship: (p) => parseInt(p.price.replace(/\D/g, "")) >= 999,
  "Mid-range": (p) => {
    const price = parseInt(p.price.replace(/\D/g, ""));
    return price >= 499 && price < 999;
  },
  Gaming: (p) => p.tag === "Gaming",
};

export default function ProductGrid() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = products.filter(filterMap[activeFilter]);

  return (
    <section id="features" className="mx-4 sm:mx-6 lg:mx-8 py-4">
      {/* Section header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-[#A38F85] mb-1">
            Curated Collection
          </p>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#1a1a1a] dark:text-white tracking-tight">
            Featured Devices
          </h2>
        </div>

        {/* Filter tabs */}
        <div className="flex items-center gap-1.5 bg-stone-100 dark:bg-[#1a1a1a] p-1 rounded-xl border border-stone-200 dark:border-stone-800">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all duration-200 ${
                activeFilter === f
                  ? "bg-white dark:bg-[#2a2a2a] text-[#1a1a1a] dark:text-white shadow-sm"
                  : "text-stone-500 dark:text-stone-400 hover:text-stone-700 dark:hover:text-stone-200"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-16 text-stone-400 dark:text-stone-600">
          <i className="fas fa-mobile-alt text-3xl mb-3 block opacity-40"></i>
          <p className="text-sm">No devices found for this filter.</p>
        </div>
      )}
    </section>
  );
}
