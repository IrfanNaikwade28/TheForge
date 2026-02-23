import React from "react";

const plans = [
  {
    name: "Monthly",
    duration: "1 Month",
    price: "Contact Us",
    highlight: false,
    features: [
      "Full gym access",
      "All equipment included",
      "Locker + changing room",
      "Steam room access",
      "Trainer on floor",
    ],
    cta: "Get Pricing",
    note: null,
  },
  {
    name: "Quarterly",
    duration: "3 Months",
    price: "Best Value",
    highlight: true,
    features: [
      "Everything in Monthly",
      "Priority trainer access",
      "Personalized program review",
      "Diet guidance session",
      "Progress check-ins",
    ],
    cta: "Get Best Price",
    note: "Most Popular",
  },
  {
    name: "Half Yearly",
    duration: "6 Months",
    price: "Max Savings",
    highlight: false,
    features: [
      "Everything in Quarterly",
      "2 Personal training sessions",
      "Body composition tracking",
      "Dance / ladies class access",
      "Dedicated support",
    ],
    cta: "Get Pricing",
    note: null,
  },
];

export default function Plans() {
  return (
    <section id="plans" className="bg-[#0F0F0F] py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-[#F04A1D] text-sm font-semibold uppercase tracking-[0.2em]">
            Membership
          </span>
          <h2
            className="text-4xl sm:text-5xl md:text-6xl font-black uppercase text-white mt-2 leading-none"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Simple Plans.
            <br />
            <span className="text-[#F04A1D]">Honest Pricing.</span>
          </h2>
          <p className="text-[#B8B8B8] text-base sm:text-lg mt-4 max-w-xl mx-auto">
            We keep things straightforward. No hidden fees, no upsell traps. Contact us on WhatsApp to get current pricing — we'll give you a straight answer.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`relative flex flex-col rounded-2xl overflow-hidden border transition-all duration-300 ${
                plan.highlight
                  ? "border-[#F04A1D] bg-[#1A1A1A] shadow-xl shadow-[#F04A1D]/10"
                  : "border-white/10 bg-[#1A1A1A] hover:border-[#F04A1D]/40"
              }`}
            >
              {/* Badge */}
              {plan.note && (
                <div className="absolute top-0 right-0 bg-[#F04A1D] text-white text-xs font-bold uppercase tracking-wider px-4 py-1 rounded-bl-xl">
                  {plan.note}
                </div>
              )}

              {/* Top section */}
              <div className={`p-7 pb-5 ${plan.highlight ? "bg-[#F04A1D]/5" : ""}`}>
                <p
                  className="text-[#B8B8B8] text-xs font-semibold uppercase tracking-[0.2em] mb-1"
                >
                  {plan.duration}
                </p>
                <h3
                  className="text-white text-3xl font-black uppercase"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  {plan.name}
                </h3>
                <div className="mt-3 mb-1">
                  <span
                    className={`text-xl font-bold ${plan.highlight ? "text-[#F04A1D]" : "text-white"}`}
                    style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                  >
                    {plan.price}
                  </span>
                </div>
                <p className="text-[#B8B8B8] text-xs">Ask us on WhatsApp for current rates</p>
              </div>

              {/* Divider */}
              <div className={`h-px mx-7 ${plan.highlight ? "bg-[#F04A1D]/30" : "bg-white/10"}`} />

              {/* Features */}
              <div className="p-7 pt-5 flex flex-col flex-1 gap-3">
                <ul className="flex flex-col gap-3 flex-1">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-2.5">
                      <svg
                        className={`w-4 h-4 shrink-0 mt-0.5 ${plan.highlight ? "text-[#F04A1D]" : "text-[#F04A1D]/70"}`}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2.5}
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span className="text-[#B8B8B8] text-sm">{f}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href={`https://wa.me/919226166124?text=Hi%2C%20I%27m%20interested%20in%20the%20${encodeURIComponent(plan.name)}%20membership%20at%20The%20Forge%20Fitness%20Club`}
                  target="_blank"
                  rel="noreferrer"
                  className={`mt-6 inline-flex items-center justify-center gap-2 font-bold text-sm uppercase tracking-wider px-6 py-3.5 rounded-lg transition-colors duration-200 ${
                    plan.highlight
                      ? "bg-[#F04A1D] hover:bg-[#C83410] text-white shadow-lg shadow-[#F04A1D]/20"
                      : "border border-white/20 hover:border-[#F04A1D] text-white hover:text-[#F04A1D]"
                  }`}
                >
                  <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  {plan.cta}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-[#B8B8B8] text-sm mt-8">
          Annual plans also available. Call us at{" "}
          <a href="tel:+919226166124" className="text-[#F04A1D] hover:underline">
            +91 92261 66124
          </a>{" "}
          or message on WhatsApp.
        </p>
      </div>
    </section>
  );
}
