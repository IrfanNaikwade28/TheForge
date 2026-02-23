import React from "react";
import { useInView } from "../hooks/useInView";

/**
 * Wraps any block. Fades + slides up when it enters the viewport.
 * `delay` in ms for staggered children (e.g. 100, 200, 300)
 */
export function AnimatedSection({ children, className = "", delay = 0, threshold = 0.1 }) {
  const [ref, inView] = useInView({ threshold });

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0px)" : "translateY(36px)",
        transition: `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

/**
 * Section heading with animated orange underline.
 * Usage:
 *   <SectionHeading label="What We Offer">
 *     Everything You Need<br /><span className="text-[#F04A1D]">Under One Roof.</span>
 *   </SectionHeading>
 */
export function SectionHeading({ label, children, className = "", center = false }) {
  const [ref, inView] = useInView({ threshold: 0.3 });

  return (
    <div ref={ref} className={`${center ? "text-center" : ""} ${className}`}>
      {label && (
        <span className="text-[#F04A1D] text-sm font-semibold uppercase tracking-[0.2em]">
          {label}
        </span>
      )}
      <h2
        className="text-4xl sm:text-5xl md:text-6xl font-black uppercase text-white mt-2 leading-none"
        style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
      >
        {children}
      </h2>
      {/* Animated orange underline */}
      <div className="mt-4 flex" style={center ? { justifyContent: "center" } : {}}>
        <div
          style={{
            height: "3px",
            backgroundColor: "#F04A1D",
            width: inView ? "64px" : "0px",
            transition: "width 0.7s cubic-bezier(0.22, 1, 0.36, 1) 200ms",
            borderRadius: "2px",
          }}
        />
        <div
          style={{
            height: "3px",
            backgroundColor: "#F04A1D",
            opacity: 0.25,
            width: inView ? "32px" : "0px",
            transition: "width 0.7s cubic-bezier(0.22, 1, 0.36, 1) 400ms",
            borderRadius: "2px",
            marginLeft: "4px",
          }}
        />
      </div>
    </div>
  );
}
