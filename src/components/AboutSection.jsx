import { aboutPoints } from "../data/products";

export default function AboutSection() {
  return (
    <section id="about" className="mx-4 sm:mx-6 lg:mx-8 my-8">
      <div className="bg-white dark:bg-[#161616] rounded-3xl border border-stone-200/80 dark:border-stone-800 overflow-hidden grid grid-cols-1 md:grid-cols-2">
        {/* Image */}
        <div className="h-64 md:h-auto overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1616348436168-de43ad0db179?q=80&w=800&auto=format&fit=crop"
            alt="Modern lifestyle & connectivity"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
          />
        </div>

        {/* Text */}
        <div className="p-8 sm:p-10 lg:p-14 flex flex-col justify-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#A38F85] mb-3">
            About MobiFlow
          </p>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#1a1a1a] dark:text-white tracking-tight mb-4">
            Designed for{" "}
            <span className="text-[#A38F85] italic font-normal">
              Refinement.
            </span>
          </h2>
          <p className="text-stone-500 dark:text-stone-400 text-sm sm:text-base leading-relaxed mb-7">
            MobiFlow isn't just a marketplace — it's a curation of the most
            advanced mobile engineering. We partner with top-tier manufacturers
            to offer certified devices with genuine warranties, carbon-neutral
            shipping, and industry-leading client support.
          </p>

          <ul className="space-y-3">
            {aboutPoints.map((point, i) => (
              <li key={i} className="flex items-center gap-3">
                <span className="w-5 h-5 shrink-0 rounded-full bg-[#A38F85] flex items-center justify-center">
                  <i className="fas fa-check text-white text-[9px]"></i>
                </span>
                <span className="text-sm font-medium text-[#1a1a1a] dark:text-stone-200">
                  {point}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
