export default function PromoBanner() {
  return (
    <section className="mx-4 sm:mx-6 lg:mx-8 my-8">
      <div className="relative overflow-hidden rounded-3xl bg-[#4a4e54] dark:bg-[#1e1e1e] flex flex-col md:flex-row items-stretch min-h-[280px]">
        {/* Decorative circles */}
        <div className="absolute -top-12 -left-12 w-48 h-48 rounded-full bg-white/5 pointer-events-none" />
        <div className="absolute top-4 left-16 w-24 h-24 rounded-full bg-white/5 pointer-events-none" />

        {/* Content */}
        <div className="flex-1 flex flex-col justify-center p-8 sm:p-12 z-10">
          <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest bg-[#A38F85] text-white px-3 py-1 rounded-full w-fit mb-5">
            <i className="fas fa-clock text-[8px]"></i>
            Limited Time
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-white leading-tight tracking-tight mb-3">
            Trade-in &amp; Save<br />
            <span className="text-[#b9d9eb]">up to $600</span>
          </h2>
          <p className="text-white/65 text-sm sm:text-base leading-relaxed max-w-sm mb-7">
            Upgrade to the latest flagship and get the best value for your old
            device. We accept all major brands in any condition.
          </p>
          <button
            onClick={() => alert("Trade-in calculator loading...")}
            className="flex items-center gap-2.5 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/20 hover:border-white/40 transition-all duration-200 w-fit backdrop-blur-sm"
          >
            Estimate Your Value
            <i className="fas fa-calculator text-xs opacity-70"></i>
          </button>
        </div>

        {/* Image */}
        <div className="md:w-[42%] relative overflow-hidden">
          <img
            src="assets/images/promo-image.avif"
            alt="Phones for trade"
            className="w-full h-64 md:h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#4a4e54] md:from-[#4a4e54]/80 dark:from-[#1e1e1e] to-transparent md:to-transparent" />
        </div>
      </div>
    </section>
  );
}
