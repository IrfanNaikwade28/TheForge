import React from "react";

const facilities = [
  {
    label: "Hammer Strength",
    desc: "Including the rare deadlift platform — the kind of equipment serious lifters search for.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
  },
  {
    label: "Life Fitness Cardio",
    desc: "Treadmills, bikes, and ellipticals from the brand that sets the industry standard.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    label: "Steam Room",
    desc: "Recover faster and flush out toxins post-workout in our dedicated steam room.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c-4.444 4.667-4.444 9.333 0 14m-5-11.5c-2.222 3.333-2.222 6.667 0 10M17 5.5c2.222 3.333 2.222 6.667 0 10" />
      </svg>
    ),
  },
  {
    label: "Bath & Changing Rooms",
    desc: "Clean, regularly maintained changing rooms with shower facilities. No compromises.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1.5M6.75 5.25l1.06 1.06M17.25 5.25l-1.06 1.06M3 12h1.5M19.5 12H21M6.75 18.75l1.06-1.06M17.25 18.75l-1.06-1.06M12 19.5V21M12 7.5a4.5 4.5 0 100 9 4.5 4.5 0 000-9z" />
      </svg>
    ),
  },
  {
    label: "Secure Lockers",
    desc: "Leave your valuables safely locked up so you can focus entirely on your session.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
  },
  {
    label: "Central AC",
    desc: "Full gym climate control. Train at full intensity without sweltering heat getting in your way.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18M3 12h18M5.636 5.636l12.728 12.728M18.364 5.636L5.636 18.364" />
      </svg>
    ),
  },
  {
    label: "Personal Training",
    desc: "One-on-one sessions with certified trainers who build programs around your specific goals.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
  },
  {
    label: "Ladies Sessions",
    desc: "Dedicated separate sessions for women — a comfortable, focused environment.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    label: "Dance Classes",
    desc: "Cardio meets movement. Dance classes available for those who want variety in their fitness routine.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z" />
      </svg>
    ),
  },
];

export default function Facilities() {
  return (
    <section id="facilities" className="bg-[#1A1A1A] py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-14">
          <span className="text-[#F04A1D] text-sm font-semibold uppercase tracking-[0.2em]">
            What We Offer
          </span>
          <h2
            className="text-4xl sm:text-5xl md:text-6xl font-black uppercase text-white mt-2 leading-none"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Everything You Need
            <br />
            <span className="text-[#F04A1D]">Under One Roof.</span>
          </h2>
          <p className="text-[#B8B8B8] text-base sm:text-lg mt-4 max-w-xl">
            From the first set to post-workout recovery — The Forge has the facilities to support your entire routine, every day.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {facilities.map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-4 bg-[#0F0F0F] border border-white/5 hover:border-[#F04A1D]/40 rounded-xl p-5 transition-colors duration-300 group"
            >
              <div className="shrink-0 w-11 h-11 rounded-lg bg-[#F04A1D]/10 flex items-center justify-center text-[#F04A1D] group-hover:bg-[#F04A1D] group-hover:text-white transition-colors duration-300">
                {item.icon}
              </div>
              <div>
                <h3
                  className="text-white font-bold uppercase text-base mb-1"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  {item.label}
                </h3>
                <p className="text-[#B8B8B8] text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
