import { useState, useEffect } from "react";

export default function AuthModal({ open, onClose }) {
  const [mode, setMode] = useState("login"); // "login" | "register"
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Trap scroll when open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  // Close on Escape
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  if (!open) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      mode === "login"
        ? "Demo: secure access flow enabled. Welcome to MobiFlow."
        : "Registration demo — premium account benefits unlocked."
    );
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="bg-white dark:bg-[#1a1a1a] rounded-3xl shadow-2xl w-full max-w-sm p-8 relative animate-[fadeSlideIn_0.25s_ease]">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-7 h-7 flex items-center justify-center rounded-full text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 hover:bg-stone-100 dark:hover:bg-stone-800 transition-all text-sm"
        >
          <i className="fas fa-times"></i>
        </button>

        {/* Header */}
        <div className="mb-6">
          <div className="w-10 h-10 rounded-2xl bg-[#A38F85]/15 flex items-center justify-center mb-4">
            <i className="fas fa-user-circle text-[#A38F85] text-xl"></i>
          </div>
          <h2 className="font-heading text-xl font-bold text-[#1a1a1a] dark:text-white tracking-tight">
            {mode === "login" ? "Welcome back" : "Create account"}
          </h2>
          <p className="text-stone-500 dark:text-stone-400 text-xs mt-1">
            {mode === "login"
              ? "Sign in to your MobiFlow account"
              : "Join MobiFlow for exclusive benefits"}
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-3">
          {mode === "register" && (
            <input
              type="text"
              placeholder="Full name"
              required
              className="w-full px-4 py-2.5 rounded-full border border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-[#222] text-sm text-[#1a1a1a] dark:text-white placeholder-stone-400 focus:outline-none focus:border-[#A38F85] transition-colors"
            />
          )}
          <input
            type="email"
            placeholder="Email address"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2.5 rounded-full border border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-[#222] text-sm text-[#1a1a1a] dark:text-white placeholder-stone-400 focus:outline-none focus:border-[#A38F85] transition-colors"
          />
          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2.5 rounded-full border border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-[#222] text-sm text-[#1a1a1a] dark:text-white placeholder-stone-400 focus:outline-none focus:border-[#A38F85] transition-colors"
          />

          <button
            type="submit"
            className="w-full py-3 rounded-full bg-[#A38F85] hover:bg-[#8a7670] text-white font-semibold text-sm transition-all duration-200 hover:shadow-md mt-1"
          >
            {mode === "login" ? "Sign In" : "Create Account"}
          </button>
        </form>

        {/* Toggle */}
        <p className="text-center text-xs text-stone-500 dark:text-stone-400 mt-5">
          {mode === "login" ? "New here? " : "Already have an account? "}
          <button
            onClick={() => setMode(mode === "login" ? "register" : "login")}
            className="text-[#A38F85] font-semibold hover:underline"
          >
            {mode === "login" ? "Create an account" : "Sign in"}
          </button>
        </p>
      </div>
    </div>
  );
}
