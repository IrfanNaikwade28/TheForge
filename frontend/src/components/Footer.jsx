import React from "react";
import logo from "../assets/logo/logo.png";

export default function Footer() {
  return (
    <footer className="bg-[#0F0F0F] border-t border-white/10 py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo + name */}
          <div className="flex items-center gap-3">
            <img src={logo} alt="The Forge Fitness Club" className="h-10 w-auto object-contain" />
            <div>
              <p
                className="text-white font-black uppercase text-base leading-tight"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                The Forge Fitness Club
              </p>
              <p className="text-[#B8B8B8] text-xs">Kasba Bawda, Kolhapur</p>
            </div>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {["#about", "#facilities", "#trainers", "#reviews", "#plans", "#contact"].map((href) => (
              <a
                key={href}
                href={href}
                className="text-[#B8B8B8] hover:text-[#F04A1D] text-xs uppercase tracking-wide transition-colors"
              >
                {href.replace("#", "")}
              </a>
            ))}
          </nav>

          {/* Phone */}
          <a href="tel:+919226166124" className="text-[#B8B8B8] hover:text-[#F04A1D] text-sm transition-colors">
            +91 92261 66124
          </a>
        </div>

        <div className="mt-8 pt-6 border-t border-white/5 text-center">
          <p className="text-[#B8B8B8] text-xs">
            © {new Date().getFullYear()} The Forge Fitness Club. All rights reserved. Kasba Bawda, Kolhapur, Maharashtra.
          </p>
        </div>
      </div>
    </footer>
  );
}
