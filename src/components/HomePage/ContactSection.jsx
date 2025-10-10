"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ContactSection() {
  useEffect(() => {
    AOS.init({ duration: 800, once: false, mirror: true, offset: 100 });
  }, []);

  const COLORS = {
    primary: "#0096E6",
    primaryHover: "#007BC2",
    cardBg: "#ffffff",
    cardBorder: "#dbe7f2",
  };

  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black transition-colors"
    >
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-sans text-gray-900 dark:text-white">
            Get In Touch
          </h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto font-serif text-gray-600 dark:text-gray-300">
            Ready to get your vehicle repaired? Contact us today for a free
            estimate or immediate accident support.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="space-y-8">
          {/* Emergency Contact */}
          <ContactCard
            title="Contact Support"
            COLORS={COLORS}
            aos="fade-up"
            content={
              <>
                <ContactRow
                  icon={<PhoneIcon />}
                  label="Accident Helpline"
                  detail={
                    <a
                      href="tel:01615333003"
                      className="text-lg font-bold font-serif transition hover:underline"
                      style={{ color: COLORS.primary }}
                    >
                      0161 533 3003
                    </a>
                  }
                />
                <p className="text-sm font-serif mt-2 text-gray-600 dark:text-gray-400">
                  Call immediately after an accident for instant support and
                  guidance.
                </p>
              </>
            }
          />

          {/* Contact Details */}
          <ContactCard
            title="Contact Details"
            COLORS={COLORS}
            aos="fade-up"
            content={
              <div className="space-y-4">
                <ContactRow
                  icon={<MailIcon />}
                  label="Email"
                  detail={
                   <a
                    href="mailto:kmlaccidentrepairecentreltd@gmail.com"
                    className="font-serif transition hover:underline text-[15px] sm:text-base"
                    style={{ color: COLORS.primary }}
                  >
                    kmlaccidentrepairecentreltd@gmail.com
                  </a>

                  }
                />
                <ContactRow
                  icon={<LocationIcon />}
                  label="Location"
                  detail={
                    <a
                      href="https://www.google.com/maps?q=Haslam+Street,+Manchester,+M24+2,+United+Kingdom"
                      className="font-serif underline transition hover:text-[#007BC2]"
                      style={{ color: COLORS.primary }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Haslam Street, Manchester, M24 2, United Kingdom
                    </a>
                  }
                />
                <ContactRow
                  icon={<ClockIcon />}
                  label="Business Hours"
                  detail={
                    <p className="font-serif text-gray-700 dark:text-gray-300">
                      Mon–Fri: 8AM–6PM
                      <br />
                      Sat: 9AM–4PM
                    </p>
                  }
                />
              </div>
            }
          />

          {/* Emergency Box */}
          <div
            className="rounded-xl shadow-md overflow-hidden border text-center transition hover:shadow-lg"
            style={{
              backgroundColor: COLORS.primary,
              borderColor: COLORS.primary,
              color: "#ffffff",
            }}
            data-aos="zoom-in"
          >
            <div className="p-8">
              <h3 className="font-bold text-xl mb-3 font-sans">
               Need a Hand with Your Car?
              </h3>
              <p className="mb-6 font-serif text-base opacity-90">
                Whether it’s repairs, servicing, or diagnostics — we’re here to help. Call us today to get your vehicle sorted by our expert team.
              </p>
              <a
                href="tel:01615333003"
                className="inline-block px-6 py-3 rounded-md text-sm font-medium font-serif shadow-md bg-white text-[#0096E6] hover:bg-gray-100 transition"
              >
               Call Us Today
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Card wrapper */
function ContactCard({ title, content, COLORS, aos }) {
  return (
    <div
      className="rounded-xl border shadow-sm p-6 bg-white dark:bg-gray-900 transition"
      style={{ borderColor: COLORS.cardBorder }}
      data-aos={aos}
    >
      <h3 className="font-semibold font-sans text-lg mb-4 text-gray-900 dark:text-white">
        {title}
      </h3>
      {content}
    </div>
  );
}

/* Row layout */
function ContactRow({ icon, label, detail }) {
  return (
    <div className="flex items-start gap-3">
      <div className="flex-shrink-0 mt-1">{icon}</div>
      <div>
        <p className="font-semibold font-sans text-sm text-gray-800 dark:text-gray-200">
          {label}
        </p>
        {detail}
      </div>
    </div>
  );
}

/* Icons */
function PhoneIcon() {
  return (
    <svg
      className="h-5 w-5"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="#0096E6"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2c-3.64-.8-7.12-2.99-9.9-5.77C6.13 13.12 3.94 9.64 3.14 6 3.09 5.78 3 5.52 3 5.26v-3A2 2 0 0 1 5.18 0h3a2 2 0 0 1 2 1.72 12.8 12.8 0 0 0 .7 2.81c.2.55.07 1.17-.38 1.62L8.1 9.9c1.67 2.67 3.98 5 6.6 6.6l1.75-1.38c.45-.35 1.07-.49 1.62-.3 1.03.37 2.05.66 3.08.87.5.11.85.56.85 1.07z" />
    </svg>
  );
}
function MailIcon() {
  return (
    <svg
      className="h-5 w-5"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="#0096E6"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}
function LocationIcon() {
  return (
    <svg
      className="h-5 w-5"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="#0096E6"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
function ClockIcon() {
  return (
    <svg
      className="h-5 w-5"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="#0096E6"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}
