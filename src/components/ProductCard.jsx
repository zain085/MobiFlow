const tagColors = {
  "Best Seller": "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
  "New": "bg-sky-100 text-sky-700 dark:bg-sky-900/30 dark:text-sky-400",
  "Creator Pick": "bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-400",
  "Gaming": "bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-400",
  "Value Pick": "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400",
};

export default function ProductCard({ product }) {
  const { name, badge, image, alt, specs, price, storage, tag } = product;

  return (
    <article className="group bg-white dark:bg-[#161616] rounded-2xl border border-stone-200/80 dark:border-stone-800 flex flex-col overflow-hidden hover:border-[#A38F85]/50 dark:hover:border-[#A38F85]/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      {/* Image area */}
      <div className="relative bg-stone-50 dark:bg-[#1e1e1e] p-5 flex items-center justify-center h-48">
        {tag && (
          <span
            className={`absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${
              tagColors[tag] || "bg-stone-100 text-stone-600"
            }`}
          >
            {tag}
          </span>
        )}
        <img
          src={image}
          alt={alt}
          className="max-h-36 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        <h3 className="font-heading text-[1.05rem] font-bold text-[#1a1a1a] dark:text-white leading-tight">
          {name}
        </h3>
        <span className="text-[11px] font-semibold uppercase tracking-widest text-[#A38F85] mt-1 mb-3">
          {badge}
        </span>

        {/* Specs */}
        <ul className="border-t border-stone-100 dark:border-stone-800 pt-3 mb-4 space-y-1.5">
          {specs.map((spec, i) => (
            <li key={i} className="flex items-center gap-2.5 text-[12px] text-stone-600 dark:text-stone-400">
              <i className={`fas ${spec.icon} text-[#A38F85] w-3.5 text-center text-[10px] shrink-0`}></i>
              {spec.text}
            </li>
          ))}
        </ul>

        {/* Price + CTA */}
        <div className="mt-auto">
          <div className="flex items-baseline gap-1.5 mb-3">
            <span className="text-xl font-extrabold text-[#1a1a1a] dark:text-white font-heading">
              {price}
            </span>
            <span className="text-xs text-stone-400 font-medium">{storage}</span>
          </div>
          <button
            onClick={() => alert("Proceed to secure checkout")}
            className="w-full py-2.5 rounded-xl border border-[#A38F85] text-[#A38F85] font-semibold text-sm hover:bg-[#A38F85] hover:text-white transition-all duration-200 font-heading"
          >
            Buy Now
          </button>
        </div>
      </div>
    </article>
  );
}
