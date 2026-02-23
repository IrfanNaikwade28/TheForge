import React, { useState, useEffect } from "react";
import logo from "../assets/logo/logo.png";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Facilities", href: "#facilities" },
  { label: "Trainers", href: "#trainers" },
  { label: "Reviews", href: "#reviews" },
  { label: "Plans", href: "#plans" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#0F0F0F]/95 backdrop-blur-sm shadow-lg shadow-black/40" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between py-3 md:py-4">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-3 shrink-0">
          <img
            src={logo}
            alt="The Forge Fitness Club"
            className="h-14 md:h-16 w-auto object-contain drop-shadow-lg"
          />
          <div className="flex flex-col leading-tight">
            <span
              className="text-white font-black uppercase text-base md:text-lg tracking-wide leading-none"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              The Forge
            </span>
            <span
              className="text-[#F04A1D] font-semibold uppercase text-xs tracking-widest leading-none mt-0.5"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              Fitness Club
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium tracking-wide text-[#B8B8B8] hover:text-[#F04A1D] transition-colors duration-200 uppercase"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="https://wa.me/919226166124?text=Hi%2C%20I%20want%20to%20know%20more%20about%20The%20Forge%20Fitness%20Club"
          target="_blank"
          rel="noreferrer"
          className="hidden md:inline-flex items-center gap-2 bg-[#F04A1D] hover:bg-[#C83410] text-white text-sm font-semibold px-5 py-2.5 rounded transition-colors duration-200 uppercase tracking-wide"
        >
          Free Trial
        </a>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 bg-[#1A1A1A] border-t border-white/10 ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col px-4 py-4 gap-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-[#B8B8B8] hover:text-[#F04A1D] text-base font-medium uppercase tracking-wide transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/919226166124?text=Hi%2C%20I%20want%20to%20know%20more%20about%20The%20Forge%20Fitness%20Club"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#F04A1D] hover:bg-[#C83410] text-white text-sm font-semibold px-5 py-3 rounded transition-colors mt-2 uppercase tracking-wide"
          >
            Get Free Trial
          </a>
        </nav>
      </div>
    </header>
  );
}
