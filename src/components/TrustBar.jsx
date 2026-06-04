import { trustItems } from "../data/products";

export default function TrustBar() {
  return (
    <section className="mx-4 sm:mx-6 lg:mx-8 my-6">
      <div className="bg-white dark:bg-[#161616] border border-stone-200/80 dark:border-stone-800 rounded-2xl px-6 py-5 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {trustItems.map((item, i) => (
          <div key={i} className="flex items-start sm:items-center gap-3 group">
            <div className="w-9 h-9 shrink-0 rounded-xl bg-[#A38F85]/10 dark:bg-[#A38F85]/15 flex items-center justify-center group-hover:bg-[#A38F85]/20 transition-colors duration-200">
              <i className={`fas ${item.icon} text-[#A38F85] text-sm`}></i>
            </div>
            <div>
              <p className="text-xs sm:text-sm font-semibold text-[#1a1a1a] dark:text-white leading-tight">
                {item.title}
              </p>
              <p className="text-[11px] sm:text-xs text-stone-500 dark:text-stone-400 mt-0.5">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
