import React from "react";
import heroBg from "../assets/img/hero.png";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="The Forge Fitness Club gym floor"
          className="w-full h-full object-cover object-center"
        />
        {/* Dark overlay — heavier at bottom for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F0F0F]/70 via-[#0F0F0F]/50 to-[#0F0F0F]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center pt-24 pb-16">
        {/* Location badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6">
          <span className="w-2 h-2 rounded-full bg-[#F04A1D] animate-pulse" />
          <span className="text-xs font-medium text-[#B8B8B8] uppercase tracking-widest">
            Kasba Bawda, Kolhapur
          </span>
        </div>

        {/* Main Headline */}
        <h1
          className="font-heading text-5xl sm:text-7xl md:text-8xl font-black uppercase leading-none tracking-tight mb-4"
          style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
        >
          <span className="text-white">Stop Waiting.</span>
          <br />
          <span className="text-[#F04A1D]">Start Forging.</span>
        </h1>

        {/* Sub-headline */}
        <p className="text-[#B8B8B8] text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
          Kolhapur's most serious training floor — equipped with{" "}
          <span className="text-white font-semibold">Life Fitness</span> and{" "}
          <span className="text-white font-semibold">Hammer Strength</span> machinery.
          Real coaching. Real results.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <a
            href="https://wa.me/919226166124?text=Hi%2C%20I%20want%20to%20book%20a%20free%20trial%20at%20The%20Forge%20Fitness%20Club"
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#F04A1D] hover:bg-[#C83410] text-white font-bold text-base uppercase tracking-wider px-8 py-4 rounded transition-colors duration-200 shadow-lg shadow-[#F04A1D]/30"
          >
            {/* WhatsApp icon */}
            <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Book Free Trial
          </a>
          <a
            href="#facilities"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-white/30 hover:border-[#F04A1D] text-white hover:text-[#F04A1D] font-semibold text-base uppercase tracking-wider px-8 py-4 rounded transition-colors duration-200"
          >
            Explore Gym
          </a>
        </div>

        {/* Stats row */}
        <div className="flex items-center justify-center gap-6 sm:gap-12 flex-wrap">
          <div className="text-center">
            <div
              className="text-3xl sm:text-4xl font-black text-[#F04A1D]"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              4.4★
            </div>
            <div className="text-xs text-[#B8B8B8] uppercase tracking-wide mt-0.5">220+ Reviews</div>
          </div>
          <div className="w-px h-10 bg-white/20 hidden sm:block" />
          <div className="text-center">
            <div
              className="text-3xl sm:text-4xl font-black text-white"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              Top 3
            </div>
            <div className="text-xs text-[#B8B8B8] uppercase tracking-wide mt-0.5">World Machinery</div>
          </div>
          <div className="w-px h-10 bg-white/20 hidden sm:block" />
          <div className="text-center">
            <div
              className="text-3xl sm:text-4xl font-black text-white"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              6AM–10PM
            </div>
            <div className="text-xs text-[#B8B8B8] uppercase tracking-wide mt-0.5">7 Days a Week</div>
          </div>
        </div>
      </div>

      {/* Scroll arrow */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-[#B8B8B8] hover:text-[#F04A1D] transition-colors"
        aria-label="Scroll down"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </a>
    </section>
  );
}
