export default function Hero() {
  return (
    <section className="relative overflow-hidden mx-4 sm:mx-6 lg:mx-8 mt-4 rounded-3xl min-h-[480px] sm:min-h-[560px] flex items-center">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat rounded-3xl"
        style={{ backgroundImage: "url('assets/images/hero.avif')" }}
      />
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-black/65 via-black/40 to-black/10" />

      {/* Decorative accent ring */}
      <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full border border-white/10 hidden lg:block" />
      <div className="absolute -bottom-10 -right-10 w-60 h-60 rounded-full border border-white/5 hidden lg:block" />

      {/* Content */}
      <div className="relative z-10 px-8 sm:px-12 lg:px-16 py-12 max-w-2xl">
        <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#b9d9eb] mb-5 opacity-90">
          <span className="w-4 h-px bg-[#b9d9eb]"></span>
          New Collection 2025
        </span>

        <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-white mb-5">
          Upgrade{" "}
          <span className="italic font-normal text-[#b9d9eb]">Your</span> Flow.
        </h1>

        <p className="text-white/80 text-base sm:text-lg leading-relaxed mb-8 max-w-md">
          Discover the all-new MobiFlow Series — where engineering excellence
          meets everyday intelligence. 5G, AI, and timeless design.
        </p>

        <div className="flex flex-wrap items-center gap-4">
          <a
            href="#features"
            className="flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#A38F85] hover:bg-[#8a7670] text-white font-semibold text-sm transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5"
          >
            Shop Now
            <i className="fas fa-arrow-right text-xs"></i>
          </a>
          <a
            href="#about"
            className="flex items-center gap-2 text-white/70 hover:text-white text-sm font-medium transition-colors duration-200"
          >
            <span>Our Story</span>
            <i className="fas fa-chevron-right text-xs opacity-60"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
