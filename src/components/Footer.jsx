export default function Footer() {
  return (
    <footer className="mx-4 sm:mx-6 lg:mx-8 mb-4 mt-2">
      <div className="rounded-2xl bg-[#4a4e54] dark:bg-[#111] px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="w-6 h-6 rounded-md bg-[#A38F85] flex items-center justify-center">
            <i className="fas fa-mobile-alt text-white text-[10px]"></i>
          </span>
          <span className="font-heading font-bold text-white text-sm">
            Mobi<span className="text-[#A38F85]">Flow</span>
          </span>
        </div>

        <p className="text-stone-400 text-xs text-center">
          © 2025 MobiFlow Inc. — Precision meets durability.{" "}
          <span className="text-stone-500">v2.1.0-secure</span>
        </p>

        <div className="flex items-center gap-1.5 text-stone-400 text-xs">
          <i className="fas fa-shield-alt text-[#A38F85] text-[10px]"></i>
          <span>Secure payments · 24/7 concierge</span>
        </div>
      </div>
    </footer>
  );
}
