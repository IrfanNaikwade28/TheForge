import React from "react";

const trainers = [
  {
    name: "Amit Sir",
    role: "Head Strength Coach",
    speciality: "Strength & Conditioning",
    bio: "Years of hands-on experience. Members consistently call out Amit Sir for his technical depth and the way he keeps sessions purposeful without being preachy.",
    badges: ["Strength Training", "Form Correction", "Programming"],
    initial: "A",
  },
  {
    name: "Raj Sir",
    role: "Personal Trainer",
    speciality: "Fat Loss & Transformation",
    bio: "Results-driven and motivating. Raj Sir builds custom routines and holds you accountable — members credit him directly for their transformation milestones.",
    badges: ["Fat Loss", "Personal Training", "Nutrition Guidance"],
    initial: "R",
  },
  {
    name: "Vinod Shere",
    role: "Manager & Member Coach",
    speciality: "Member Support",
    bio: "Vinod keeps the floor running and genuinely connects with every member. He doesn't just manage — he makes sure you're progressing and feeling supported.",
    badges: ["Communication", "Goal Setting", "Member Support"],
    initial: "V",
  },
];

export default function Trainers() {
  return (
    <section id="trainers" className="bg-[#0F0F0F] py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-14">
          <span className="text-[#F04A1D] text-sm font-semibold uppercase tracking-[0.2em]">
            The Team
          </span>
          <h2
            className="text-4xl sm:text-5xl md:text-6xl font-black uppercase text-white mt-2 leading-none"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Coached by People
            <br />
            <span className="text-[#F04A1D]">Who Know What Works.</span>
          </h2>
          <p className="text-[#B8B8B8] text-base sm:text-lg mt-4 max-w-xl">
            Our trainers are hands-on, knowledgeable, and invested in your progress. You'll notice the difference on your first session.
          </p>
        </div>

        {/* Trainer Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {trainers.map((trainer, i) => (
            <div
              key={i}
              className="bg-[#1A1A1A] rounded-2xl overflow-hidden border border-white/5 hover:border-[#F04A1D]/30 transition-colors duration-300"
            >
              {/* Avatar area */}
              <div className="relative bg-gradient-to-br from-[#1A1A1A] to-[#0F0F0F] h-52 flex items-center justify-center overflow-hidden">
                {/* Decorative pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="grid grid-cols-8 gap-2 p-4 h-full">
                    {Array.from({ length: 32 }).map((_, j) => (
                      <div key={j} className="bg-[#F04A1D] rounded-sm aspect-square" />
                    ))}
                  </div>
                </div>
                {/* Avatar circle */}
                <div className="relative z-10 w-24 h-24 rounded-full bg-[#F04A1D]/20 border-2 border-[#F04A1D]/50 flex items-center justify-center">
                  <span
                    className="text-[#F04A1D] text-4xl font-black"
                    style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                  >
                    {trainer.initial}
                  </span>
                </div>
                {/* Speciality tag */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-[#F04A1D] text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full whitespace-nowrap">
                  {trainer.speciality}
                </div>
              </div>

              {/* Info */}
              <div className="p-6">
                <h3
                  className="text-white text-2xl font-black uppercase"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  {trainer.name}
                </h3>
                <p className="text-[#F04A1D] text-sm font-semibold uppercase tracking-wide mb-3">
                  {trainer.role}
                </p>
                <p className="text-[#B8B8B8] text-sm leading-relaxed mb-4">{trainer.bio}</p>
                <div className="flex flex-wrap gap-2">
                  {trainer.badges.map((badge, j) => (
                    <span
                      key={j}
                      className="text-xs text-[#B8B8B8] border border-white/15 rounded-full px-3 py-1"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center text-[#B8B8B8] text-sm mt-10">
          All trainers provide personalized guidance.{" "}
          <a
            href="https://wa.me/919226166124?text=Hi%2C%20I%20want%20to%20know%20about%20personal%20training%20at%20The%20Forge"
            target="_blank"
            rel="noreferrer"
            className="text-[#F04A1D] hover:underline"
          >
            Enquire about personal training →
          </a>
        </p>
      </div>
    </section>
  );
}
