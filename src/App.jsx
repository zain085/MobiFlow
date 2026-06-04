import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustBar from "./components/TrustBar";
import ProductGrid from "./components/ProductGrid";
import PromoBanner from "./components/PromoBanner";
import AboutSection from "./components/AboutSection";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import AuthModal from "./components/AuthModal";

export default function App() {
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("theme") === "dark"
  );
  const [authOpen, setAuthOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-[#F7F6F3] dark:bg-[#0E0E0E] text-[#1a1a1a] dark:text-[#EBEBEB] transition-colors duration-300 font-body">
      <Navbar
        darkMode={darkMode}
        toggleDark={() => setDarkMode((d) => !d)}
        onAuthOpen={() => setAuthOpen(true)}
      />
      <main>
        <Hero />
        <TrustBar />
        <ProductGrid />
        <PromoBanner />
        <AboutSection />
        <Newsletter />
      </main>
      <Footer />
      <AuthModal open={authOpen} onClose={() => setAuthOpen(false)} />
    </div>
  );
}
