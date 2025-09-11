import React from "react";

export default function ServicesSection() {
  const COLORS = {
    heading: "#1f2937",
    body: "#4b5563",
    primary: "#0b6b3a",
    iconBg: "rgba(11,107,58,0.14)",
    sectionBg: "#f7fbfc",
    cardBg: "#eef5fb",
    cardBorder: "#dbe7f2",
  };

  const cards = [
    {
      title: "Insurance Repairs",
      desc: "Complete insurance claim repairs with direct billing to your insurer",
      href: "/services/insurance-repairs",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
          fill="none" stroke={COLORS.primary} strokeWidth="2"
          strokeLinecap="round" strokeLinejoin="round"
          className="h-6 w-6">
          <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
        </svg>
      ),
    },
    {
      title: "Collision Repairs",
      desc: "Expert collision damage repair using latest techniques and genuine parts",
      href: "/services/collision-repairs",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
          fill="none" stroke={COLORS.primary} strokeWidth="2"
          strokeLinecap="round" strokeLinejoin="round"
          className="h-6 w-6">
          <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
          <circle cx="7" cy="17" r="2" />
          <path d="M9 17h6" />
          <circle cx="17" cy="17" r="2" />
        </svg>
      ),
    },
    {
      title: "Bodywork & Dents",
      desc: "Professional bodywork, dent removal, and scratch repair services",
      href: "/services/bodywork-dents",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
          fill="none" stroke={COLORS.primary} strokeWidth="2"
          strokeLinecap="round" strokeLinejoin="round"
          className="h-6 w-6">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
      ),
    },
    {
      title: "End of Lease Repairs",
      desc: "Cost-effective repairs to avoid expensive lease return charges",
      href: "/services/specialty-services",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
          fill="none" stroke={COLORS.primary} strokeWidth="2"
          strokeLinecap="round" strokeLinejoin="round"
          className="h-6 w-6">
          <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
          <path d="M14 2v4a2 2 0 0 0 2 2h4" />
          <path d="M10 9H8" />
          <path d="M16 13H8" />
          <path d="M16 17H8" />
        </svg>
      ),
    },
    {
      title: "No Fault Claims",
      desc: "Complete support from accident to repair - we handle everything",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
          fill="none" stroke={COLORS.primary} strokeWidth="2"
          strokeLinecap="round" strokeLinejoin="round"
          className="h-6 w-6">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      ),
    },
    {
      title: "ADAS Calibrations",
      desc: "Advanced driver assistance system calibration after repairs",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
          fill="none" stroke={COLORS.primary} strokeWidth="2"
          strokeLinecap="round" strokeLinejoin="round"
          className="h-6 w-6">
          <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      ),
    },
    {
      title: "Windscreen Replacement",
      desc: "Professional windscreen replacement with ADAS recalibration",
      href: "/services/claims-support",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
          fill="none" stroke={COLORS.primary} strokeWidth="2"
          strokeLinecap="round" strokeLinejoin="round"
          className="h-6 w-6">
          <rect width="20" height="14" x="2" y="3" rx="2" />
          <line x1="8" x2="16" y1="21" y2="21" />
          <line x1="12" x2="12" y1="17" y2="21" />
        </svg>
      ),
    },
    {
      title: "Alloy Wheel Refurb",
      desc: "Complete alloy wheel refurbishment and repair services",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
          fill="none" stroke={COLORS.primary} strokeWidth="2"
          strokeLinecap="round" strokeLinejoin="round"
          className="h-6 w-6">
          <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
          <path d="M3 3v5h5" />
        </svg>
      ),
    },
    {
      title: "Vandalism Repairs",
      desc: "Quick and professional vandalism damage repair services",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
          fill="none" stroke={COLORS.primary} strokeWidth="2"
          strokeLinecap="round" strokeLinejoin="round"
          className="h-6 w-6">
          <path d="m15 12-8.373 8.373a1 1 0 1 1-3-3L12 9" />
          <path d="m18 15 4-4" />
          <path d="m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172V7l-2.26-2.26A6 6 0 0 0 12.54 3L9 2.96l.92.82A6.18 6.18 0 0 1 12 8.4V10l2 2h1.172A2 2 0 0 1 16.586 12.586L18.5 14.5" />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="services"
      className="py-20 px-4 md:px-8"      // ✅ Added full-page horizontal padding
      style={{ backgroundColor: COLORS.sectionBg }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4 font-sans"
            style={{ color: COLORS.heading }}
          >
            Comprehensive Repair Services
          </h2>
          <p
            className="text-xl max-w-2xl mx-auto font-serif"
            style={{ color: COLORS.body }}
          >
            From minor scratches to major collision damage, we provide expert
            repair services for all your automotive needs.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((c, i) => {
            const Wrapper = c.href ? "a" : "div";
            return (
              <Wrapper
                key={i}
                href={c.href}
                className="flex flex-col gap-6 rounded-xl py-6 shadow-sm hover:shadow-lg transition-shadow border"
                style={{ backgroundColor: COLORS.cardBg, borderColor: COLORS.cardBorder }}
              >
                <div className="grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6">
                  <div
                    className="p-3 rounded-full w-fit mb-4"
                    style={{ backgroundColor: COLORS.iconBg }}
                  >
                    {c.icon}
                  </div>
                  <div
                    className="leading-none font-semibold font-sans"
                    style={{ color: COLORS.heading }}
                  >
                    {c.title}
                  </div>
                </div>
                <div className="px-6">
                  <div className="text-sm font-serif" style={{ color: COLORS.body }}>
                    {c.desc}
                  </div>
                </div>
              </Wrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}
