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
    emergencyBtnText: "#0b6b3a",
  };

  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8 xl:px-12"
      style={{ backgroundColor: COLORS.sectionBg }}
    >
      <div className="max-w-7xl mx-auto">
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
          {/* Quote Form */}
          <div
            className="rounded-xl border py-6 shadow-sm"
            style={{ backgroundColor: COLORS.cardBg, borderColor: COLORS.cardBorder }}
          >
            <div className="px-6 mb-4">
              <h3 className="font-semibold font-sans" style={{ color: COLORS.heading }}>
                Request a Quote
              </h3>
            </div>
            <div className="px-6 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input className="input-style" placeholder="First Name" />
                <input className="input-style" placeholder="Last Name" />
              </div>
              <input type="email" className="input-style" placeholder="Email Address" />
              <input type="tel" className="input-style" placeholder="Phone Number" />
              <input className="input-style" placeholder="Vehicle Make & Model" />
              <textarea
                className="w-full min-h-[120px] rounded-md border px-3 py-2 md:text-sm font-serif outline-none shadow-xs"
                style={{ borderColor: COLORS.cardBorder, color: COLORS.heading }}
                placeholder="Describe the damage or repair needed..."
              />
              <button
                className="w-full h-9 rounded-md text-sm font-medium font-serif shadow-xs transition-colors"
                style={{ backgroundColor: COLORS.primary, color: "#ffffff" }}
              >
                Send Quote Request
              </button>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <ContactCard
              title="Emergency Contact"
              content={
                <>
                  <ContactRow
                    icon={<PhoneIcon />}
                    label="24/7 Accident Helpline"
                    detail={<a href="tel:01615333003" className="text-lg font-bold font-serif" style={{ color: COLORS.primary }}>0161 533 3003</a>}
                  />
                  <p className="text-sm font-serif mt-2" style={{ color: COLORS.body }}>
                    Call immediately after an accident for instant support and guidance.
                  </p>
                </>
              }
              COLORS={COLORS}
            />

            <ContactCard
              title="Contact Details"
              content={
                <div className="space-y-4">
                  <ContactRow
                    icon={<MailIcon />}
                    label="Email"
                    detail={<a href="mailto:kmlaccidentrepairecentreltd@gmail.com" className="font-serif" style={{ color: COLORS.primary }}>kmlaccidentrepairecentreltd@gmail.com</a>}
                  />
                  <ContactRow
                    icon={<LocationIcon />}
                    label="Location"
                    detail={<a href="https://www.google.com/maps?q=Oakham+Business+Park,+Hamilton+Way,+Mansfield+NG18+5BU,+United+Kingdom" className="font-serif underline" style={{ color: COLORS.primary }} target="_blank" rel="noopener noreferrer">Haslam Street, Manchester, M24 2, United Kingdom</a>}
                  />
                  <ContactRow
                    icon={<ClockIcon />}
                    label="Business Hours"
                    detail={
                      <p className="font-serif" style={{ color: COLORS.body }}>
                        Mon–Fri: 8AM–6PM<br />
                        Sat: 9AM–4PM
                      </p>
                    }
                  />
                </div>
              }
              COLORS={COLORS}
            />

            <div
              className="rounded-xl border py-6 shadow-sm"
              style={{ backgroundColor: COLORS.primary, borderColor: COLORS.primary, color: "#ffffff" }}
            >
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

      <style jsx>{`
        .input-style {
          height: 2.25rem;
          width: 100%;
          border-radius: 0.375rem;
          border: 1px solid ${COLORS.cardBorder};
          padding: 0.25rem 0.75rem;
          font-family: serif;
          outline: none;
          box-shadow: 0 0 0 0 transparent;
          color: ${COLORS.heading};
        }
      `}</style>
    </section>
  );
}

// ContactCard component (reusable box with title + content)
function ContactCard({ title, content, COLORS }) {
  return (
    <div
      className="rounded-xl border py-6 shadow-sm"
      style={{ backgroundColor: COLORS.cardBg, borderColor: COLORS.cardBorder }}
    >
      <div className="px-6 mb-4">
        <h3 className="font-semibold font-sans" style={{ color: COLORS.heading }}>{title}</h3>
      </div>
      <div className="px-6">{content}</div>
    </div>
  );
}

// ContactRow component (label + detail with icon)
function ContactRow({ icon, label, detail }) {
  return (
    <div className="flex items-start gap-3">
      <div className="flex-shrink-0 mt-1">{icon}</div>
      <div>
        <p className="font-semibold font-sans" style={{ color: "#1f2937" }}>{label}</p>
        {detail}
      </div>
    </div>
  );
}

// SVG Icons
function PhoneIcon() {
  return (
    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#066a3c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2c-3.64-.8-7.12-2.99-9.9-5.77C6.13 13.12 3.94 9.64 3.14 6 3.09 5.78 3 5.52 3 5.26v-3A2 2 0 0 1 5.18 0h3a2 2 0 0 1 2 1.72 12.8 12.8 0 0 0 .7 2.81c.2.55.07 1.17-.38 1.62L8.1 9.9c1.67 2.67 3.98 5 6.6 6.6l1.75-1.38c.45-.35 1.07-.49 1.62-.3 1.03.37 2.05.66 3.08.87.5.11.85.56.85 1.07z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#066a3c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#066a3c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#066a3c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}
