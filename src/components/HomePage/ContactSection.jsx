import React from "react";

export default function ContactSection() {
  const COLORS = {
    heading: "#1f2937",
    body: "#4b5563",
    primary: "#066a3c",
    sectionBg: "#f7fbfc",
    cardBg: "#eef5fb",
    cardBorder: "#dbe7f2",
    emergencyBtnBg: "#e6f4ea",
    emergencyBtnText: "#0b6b3a"
  };

  return (
    <section id="contact" className="py-20" style={{ backgroundColor: COLORS.sectionBg }}>
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-sans" style={{ color: COLORS.heading }}>
            Get In Touch
          </h2>
          <p className="text-xl max-w-2xl mx-auto font-serif" style={{ color: COLORS.body }}>
            Ready to get your vehicle repaired? Contact us today for a free estimate or immediate accident support.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Request a Quote Form */}
          <div className="rounded-xl border py-6 shadow-sm" style={{ backgroundColor: COLORS.cardBg, borderColor: COLORS.cardBorder }}>
            <div className="px-6 mb-4">
              <h3 className="font-semibold font-sans" style={{ color: COLORS.heading }}>Request a Quote</h3>
            </div>
            <div className="px-6 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input className="h-9 w-full rounded-md border px-3 py-1 md:text-sm font-serif outline-none shadow-xs" style={{ borderColor: COLORS.cardBorder, color: COLORS.heading }} placeholder="First Name" />
                <input className="h-9 w-full rounded-md border px-3 py-1 md:text-sm font-serif outline-none shadow-xs" style={{ borderColor: COLORS.cardBorder, color: COLORS.heading }} placeholder="Last Name" />
              </div>
              <input type="email" className="h-9 w-full rounded-md border px-3 py-1 md:text-sm font-serif outline-none shadow-xs" style={{ borderColor: COLORS.cardBorder, color: COLORS.heading }} placeholder="Email Address" />
              <input type="tel" className="h-9 w-full rounded-md border px-3 py-1 md:text-sm font-serif outline-none shadow-xs" style={{ borderColor: COLORS.cardBorder, color: COLORS.heading }} placeholder="Phone Number" />
              <input className="h-9 w-full rounded-md border px-3 py-1 md:text-sm font-serif outline-none shadow-xs" style={{ borderColor: COLORS.cardBorder, color: COLORS.heading }} placeholder="Vehicle Make & Model" />
              <textarea className="w-full min-h-[120px] rounded-md border px-3 py-2 md:text-sm font-serif outline-none shadow-xs" style={{ borderColor: COLORS.cardBorder, color: COLORS.heading }} placeholder="Describe the damage or repair needed..." />
              <button className="w-full h-9 rounded-md text-sm font-medium font-serif shadow-xs transition-colors" style={{ backgroundColor: COLORS.primary, color: "#ffffff" }}>
                Send Quote Request
              </button>
            </div>
          </div>

          {/* Contact Cards */}
          <div className="space-y-6">
            {/* Emergency Contact */}
            <div className="rounded-xl border py-6 shadow-sm" style={{ backgroundColor: COLORS.cardBg, borderColor: COLORS.cardBorder }}>
              <div className="px-6 mb-4">
                <h3 className="font-semibold font-sans" style={{ color: COLORS.heading }}>Emergency Contact</h3>
              </div>
              <div className="px-6">
                <div className="flex items-center gap-3 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke={COLORS.primary} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <div>
                    <p className="font-semibold font-sans" style={{ color: COLORS.heading }}>24/7 Accident Helpline</p>
                    <a href="tel:01615333003" className="text-lg font-bold font-serif" style={{ color: COLORS.primary }}>
                      0161 533 3003
                    </a>
                  </div>
                </div>
                <p className="text-sm font-serif" style={{ color: COLORS.body }}>
                  Call immediately after an accident for instant support and guidance.
                </p>
              </div>
            </div>

            {/* Contact Details */}
            <div className="rounded-xl border py-6 shadow-sm" style={{ backgroundColor: COLORS.cardBg, borderColor: COLORS.cardBorder }}>
              <div className="px-6 mb-4">
                <h3 className="font-semibold font-sans" style={{ color: COLORS.heading }}>Contact Details</h3>
              </div>
              <div className="px-6 space-y-4">
                <div className="flex items-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke={COLORS.primary} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  <div>
                    <p className="font-semibold font-sans" style={{ color: COLORS.heading }}>Email</p>
                    <a href="mailto:kmlaccidentrepairecentreltd@gmail.com" className="font-serif" style={{ color: COLORS.primary }}>
                      kmlaccidentrepairecentreltd@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke={COLORS.primary} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <div>
                    <p className="font-semibold font-sans" style={{ color: COLORS.heading }}>Location</p>
                    <a
                      href="https://www.google.com/maps?q=Oakham+Business+Park,+Hamilton+Way,+Mansfield+NG18+5BU,+United+Kingdom"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-serif underline"
                      style={{ color: COLORS.primary }}
                    >
                      Haslam Street, Manchester, M24 2, United Kingdom, Middleton, United Kingdom
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke={COLORS.primary} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  <div>
                    <p className="font-semibold font-sans" style={{ color: COLORS.heading }}>Business Hours</p>
                    <p className="font-serif" style={{ color: COLORS.body }}>
                      Mon–Fri: 8AM–6PM<br />
                      Sat: 9AM–4PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Banner */}
            <div className="rounded-xl border py-6 shadow-sm" style={{ backgroundColor: COLORS.primary, color: "#ffffff", borderColor: COLORS.primary }}>
              <div className="p-6">
                <h3 className="font-bold mb-2 font-sans">Need Immediate Help?</h3>
                <p className="mb-4 font-serif">
                  If you've been in an accident, don't wait. Call our emergency line now for immediate assistance and support.
                </p>
                <a
                  href="tel:01615333003"
                  className="inline-block h-9 px-4 py-2 rounded-md text-sm font-medium font-serif shadow-xs"
                  style={{ backgroundColor: COLORS.emergencyBtnBg, color: COLORS.emergencyBtnText }}
                >
                  Call Emergency Line
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
