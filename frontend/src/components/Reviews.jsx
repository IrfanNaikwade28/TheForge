import React, { useState } from "react";
import { AnimatedSection, SectionHeading } from "./AnimatedSection";

const reviews = [
  {
    name: "Rahul M.",
    rating: 5,
    tag: "Equipment",
    text: "They haven't compromised on the equipment at all — Life Fitness and Hammer Strength machines throughout. The Hammer Strength deadlift platform alone is reason enough to train here. Staff is knowledgeable and genuinely helpful.",
  },
  {
    name: "Priya S.",
    rating: 5,
    tag: "Facilities",
    text: "One of the best gyms in Maharashtra. Steam room, bath, lockers, central AC — everything works and everything is clean. Fees are also reasonable for what you get. Highly recommend a visit.",
  },
  {
    name: "Nikhil D.",
    rating: 5,
    tag: "Trainers",
    text: "The trainers here are professional and actually experienced. Amit Sir in particular — his knowledge and coaching style is the kind you don't find at every gym. Very helpful for anyone serious about their training.",
  },
  {
    name: "Sneha P.",
    rating: 5,
    tag: "Transformation",
    text: "Lost 10 kg in a month with the support of the team here. Raj Sir designed a proper program and actually followed up. Vinod from management made the whole onboarding process smooth and pressure-free.",
  },
  {
    name: "Gaurav K.",
    rating: 5,
    tag: "Cleanliness",
    text: "New gym, great equipment, very clean. The trainers are qualified and know how to communicate. The gym has both strength and cardio areas well laid out. Overall one of the best experiences I've had at a local gym.",
  },
  {
    name: "Deepika R.",
    rating: 5,
    tag: "Classes",
    text: "Modern facility with everything you'd expect from a premium gym. Dance classes and separate ladies sessions are a great plus. Well maintained, neatly organized, and the vibe keeps you motivated.",
  },
];

function StarRating({ count }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < count ? "text-[#F04A1D]" : "text-white/20"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section id="reviews" className="bg-[#1A1A1A] py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <AnimatedSection className="mb-14 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <SectionHeading label="Real Members">
            What Kasba Bawda
            <br />
            <span className="text-[#F04A1D]">Is Saying.</span>
          </SectionHeading>
          {/* Rating block */}
          <div className="flex items-center gap-4 bg-[#0F0F0F] border border-white/10 rounded-xl px-6 py-4 shrink-0">
            <div>
              <div
                className="text-5xl font-black text-[#F04A1D] leading-none"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                4.4
              </div>
              <StarRating count={4} />
              <p className="text-[#B8B8B8] text-xs mt-1">220+ reviews</p>
            </div>
            <div className="w-px h-14 bg-white/10" />
            <div>
              <p className="text-white font-semibold text-sm">Google Rating</p>
              <p className="text-[#B8B8B8] text-xs">Verified reviews</p>
            </div>
          </div>
        </AnimatedSection>

        {/* Review Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((review, i) => (
            <AnimatedSection key={i} delay={i * 100}>
              <div
                className="bg-[#0F0F0F] border border-white/5 rounded-xl p-6 flex flex-col gap-4 h-full"
                style={{
                  transition: "border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow = "0 12px 32px rgba(240,74,29,0.12)";
                  e.currentTarget.style.borderColor = "rgba(240,74,29,0.3)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = "translateY(0px)";
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.05)";
                }}
              >
                {/* Top row */}
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#F04A1D]/15 flex items-center justify-center">
                      <span
                        className="text-[#F04A1D] font-black text-base"
                        style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                      >
                        {review.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm">{review.name}</p>
                      <StarRating count={review.rating} />
                    </div>
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wide text-[#F04A1D] bg-[#F04A1D]/10 rounded-full px-2.5 py-0.5">
                    {review.tag}
                  </span>
                </div>

                {/* Quote mark */}
                <svg className="w-6 h-6 text-[#F04A1D]/30" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>

                <p className="text-[#B8B8B8] text-sm leading-relaxed flex-1">{review.text}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Google review CTA */}
        <AnimatedSection delay={200} className="text-center mt-10">
          <p className="text-[#B8B8B8] text-sm">
            Read all 220+ reviews on{" "}
            <a
              href="https://maps.google.com/?q=The+Forge+Fitness+Club+Kolhapur"
              target="_blank"
              rel="noreferrer"
              className="text-[#F04A1D] hover:underline"
            >
              Google Maps →
            </a>
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
