import { useState, useEffect } from "react";

export default function Navbar({ darkMode, toggleDark, onAuthOpen }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 dark:bg-[#0E0E0E]/95 shadow-sm backdrop-blur-md border-b border-stone-200/60 dark:border-stone-800/60"
          : "bg-white/80 dark:bg-[#0E0E0E]/80 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <span className="w-8 h-8 rounded-lg bg-[#A38F85] flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform duration-200">
            <i className="fas fa-mobile-alt text-white text-sm"></i>
          </span>
          <span className="font-heading font-800 text-[1.25rem] tracking-tight text-[#1a1a1a] dark:text-white">
            Mobi<span className="text-[#A38F85]">Flow</span>
          </span>
        </a>

        {/* Nav Controls */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle */}
          <button
            onClick={toggleDark}
            className="w-9 h-9 flex items-center justify-center rounded-full text-stone-500 dark:text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-800 hover:text-[#A38F85] dark:hover:text-amber-400 transition-all duration-200"
            title="Toggle theme"
          >
            <i className={`fas ${darkMode ? "fa-sun" : "fa-moon"} text-sm`}></i>
          </button>

          {/* Sign In */}
          <button
            onClick={onAuthOpen}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#A38F85] hover:bg-[#8a7670] text-white text-sm font-semibold transition-all duration-200 hover:shadow-md hover:-translate-y-px"
          >
            <i className="fas fa-user-circle text-xs"></i>
            <span className="hidden sm:inline">Sign In</span>
          </button>
        </div>
      </div>
    </header>
  );
}
