import React from "react";
import { AnimatedSection, SectionHeading } from "./AnimatedSection";

export default function Contact() {
  return (
    <section id="contact" className="bg-[#0F0F0F] py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <AnimatedSection className="mb-12">
          <SectionHeading label="Find Us">
            We're Right Here
            <br />
            <span className="text-[#F04A1D]">In Kasba Bawda.</span>
          </SectionHeading>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Info column */}
          <div className="flex flex-col gap-7">
            {/* Address */}
            <AnimatedSection delay={100}>
              <div className="bg-[#1A1A1A] rounded-xl p-6 border border-white/5 hover:border-[#F04A1D]/20 transition-colors duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#F04A1D]/10 flex items-center justify-center text-[#F04A1D] shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-bold uppercase text-sm mb-1" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>Address</p>
                    <p className="text-[#B8B8B8] text-sm leading-relaxed">
                      Dwarka Adreno, 2nd Floor,<br />
                      Kasaba Bawada Main Rd,<br />
                      Opp. D. Y. Patil Medical College,<br />
                      Kolhapur, Maharashtra 416006
                    </p>
                    <a
                      href="https://maps.google.com/?q=The+Forge+Fitness+Club,+Kasaba+Bawada+Main+Rd,+Kolhapur"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-[#F04A1D] text-xs font-semibold mt-2 hover:underline"
                    >
                      Open in Google Maps →
                    </a>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Phone */}
            <AnimatedSection delay={200}>
              <div className="bg-[#1A1A1A] rounded-xl p-6 border border-white/5 hover:border-[#F04A1D]/20 transition-colors duration-300">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#F04A1D]/10 flex items-center justify-center text-[#F04A1D] shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-bold uppercase text-sm mb-0.5" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>Phone</p>
                    <a href="tel:+919226166124" className="text-[#B8B8B8] hover:text-[#F04A1D] transition-colors text-sm">
                      +91 92261 66124
                    </a>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Timings */}
            <AnimatedSection delay={300}>
              <div className="bg-[#1A1A1A] rounded-xl p-6 border border-white/5 hover:border-[#F04A1D]/20 transition-colors duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#F04A1D]/10 flex items-center justify-center text-[#F04A1D] shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-bold uppercase text-sm mb-1" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>Timings</p>
                    <p className="text-[#B8B8B8] text-sm">Monday – Sunday</p>
                    <p className="text-white font-semibold text-sm">6:00 AM – 10:00 PM</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* WhatsApp CTA */}
            <AnimatedSection delay={400}>
              <a
                href="https://wa.me/919226166124?text=Hi%2C%20I%20want%20to%20know%20more%20about%20The%20Forge%20Fitness%20Club"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#F04A1D] hover:bg-[#C83410] text-white font-black text-sm uppercase tracking-wider px-6 py-4 rounded-xl transition-colors duration-200 shadow-lg shadow-[#F04A1D]/20 w-full"
              >
                <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Chat on WhatsApp
              </a>
            </AnimatedSection>
          </div>

          {/* Map column */}
          <AnimatedSection delay={150}>
            <div className="rounded-2xl overflow-hidden border border-white/10 h-[380px] lg:h-full min-h-[380px]">
              <iframe
                title="The Forge Fitness Club Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.7428955454326!2d74.20500897504254!3d16.700680384175497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc1001bcb9b11c3%3A0xa05b1a39a81dd0d5!2sThe%20Forge%20Fitness%20Club!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(0.9) hue-rotate(180deg)" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
