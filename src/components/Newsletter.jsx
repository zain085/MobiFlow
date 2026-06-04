import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setEmail("");
  };

  return (
    <section className="mx-4 sm:mx-6 lg:mx-8 my-8">
      <div className="relative overflow-hidden rounded-3xl bg-[#1a1a1a] dark:bg-[#111] text-white px-8 sm:px-14 py-12 sm:py-16 text-center">
        {/* Decorative blobs */}
        <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-[#A38F85]/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-[#b9d9eb]/10 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-xl mx-auto">
          <div className="w-12 h-12 rounded-2xl bg-[#A38F85]/20 border border-[#A38F85]/30 flex items-center justify-center mx-auto mb-5">
            <i className="fas fa-envelope-open-text text-[#A38F85] text-lg"></i>
          </div>

          <h3 className="font-heading text-2xl sm:text-3xl font-bold tracking-tight mb-2">
            Stay Ahead of the Curve
          </h3>
          <p className="text-white/50 text-sm sm:text-base mb-7">
            Get exclusive early access to pre-orders, tech deep-dives, and
            seasonal discounts.
          </p>

          {submitted ? (
            <div className="flex items-center justify-center gap-2.5 text-emerald-400 font-semibold text-sm">
              <i className="fas fa-check-circle text-base"></i>
              You're in! Check your inbox for a welcome offer.
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 px-5 py-3 rounded-full bg-white/8 border border-white/15 text-white placeholder-white/35 text-sm focus:outline-none focus:border-[#A38F85]/60 transition-colors duration-200 backdrop-blur-sm"
              />
              <button
                type="submit"
                className="px-7 py-3 rounded-full bg-[#A38F85] hover:bg-[#8a7670] text-white font-semibold text-sm whitespace-nowrap transition-all duration-200 hover:shadow-lg hover:-translate-y-px"
              >
                Join MobiFlow
              </button>
            </form>
          )}

          <p className="text-white/25 text-xs mt-4">
            No spam. Unsubscribe anytime. Your data stays private.
          </p>
        </div>
      </div>
    </section>
  );
}
