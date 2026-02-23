import React from "react";
import { AnimatedSection, SectionHeading } from "./AnimatedSection";

const reasons = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "World-Class Equipment",
    desc: "Life Fitness and Hammer Strength machines — the same brands used by professional athletes. Including the rare Hammer Strength deadlift platform.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
    title: "Qualified Trainers",
    desc: "Our coaches know their craft — from strength programming to fat loss. They guide, correct, and push you in the right direction without wasting your time.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    ),
    title: "Central AC + Hygiene",
    desc: "Centralized air conditioning keeps every session comfortable. Changing rooms cleaned regularly so you always walk into a fresh environment.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
    title: "Affordable Membership",
    desc: "Premium facility, honest pricing. We believe serious training shouldn't cost a fortune. Walk in, check it out, and see for yourself.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
    title: "Community, Not a Crowd",
    desc: "Owners, managers, and trainers are all hands-on. You're not a member number here — you're someone they actually track and help progress.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Open 6AM to 10PM",
    desc: "Early morning sessions or late evening lifts — 7 days a week, 365 days a year. Fit training into your schedule, not the other way around.",
  },
];

export default function WhyUs() {
  return (
    <section id="about" className="bg-[#0F0F0F] py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <AnimatedSection className="mb-14">
          <SectionHeading label="Why Train Here">
            Built for People Who
            <br />
            <span className="text-[#F04A1D]">Take It Seriously.</span>
          </SectionHeading>
          <p className="text-[#B8B8B8] text-base sm:text-lg mt-6 max-w-xl">
            The Forge isn't just another gym in Kasba Bawda. It's a proper training facility — clean, well-equipped, and run by people who genuinely care about your progress.
          </p>
        </AnimatedSection>

        {/* Grid — staggered cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((item, i) => (
            <AnimatedSection key={i} delay={i * 80}>
              <div className="bg-[#1A1A1A] rounded-xl p-6 border border-white/5 hover:border-[#F04A1D]/30 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#F04A1D]/5 transition-all duration-300 group h-full">
                <div className="text-[#F04A1D] mb-4 group-hover:scale-110 transition-transform duration-200 inline-block">
                  {item.icon}
                </div>
                <h3
                  className="text-white text-xl font-bold uppercase mb-2"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  {item.title}
                </h3>
                <p className="text-[#B8B8B8] text-sm leading-relaxed">{item.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
