// File: SpecialtyServicesGrid.jsx
"use client";
import React from "react";

const COLORS = {
  brand: "#0096E6", // your blue
  white: "#FFFFFF",
  black: "#000000",
};

export default function SpecialtyServicesGrid() {
  const services = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-12 w-12 mb-4"
          style={{ color: COLORS.brand }}
        >
          <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      ),
      title: "ADAS Calibrations",
      subtitle:
        "Advanced Driver Assistance System calibration for modern vehicle safety features",
      desc: "Modern vehicles rely on sophisticated safety systems that require precise calibration after any repair work.",
      bullets: [
        "Lane departure warning systems",
        "Adaptive cruise control",
        "Automatic emergency braking",
        "Blind spot monitoring",
        "Parking assist systems",
      ],
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-12 w-12 mb-4"
          style={{ color: COLORS.brand }}
        >
          <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
        </svg>
      ),
      title: "Windscreen Replacement",
      subtitle:
        "Professional windscreen replacement with same-day service and insurance direct billing",
      desc: "Fast, professional windscreen replacement using genuine manufacturer glass. Insurance claims handled directly.",
      bullets: [
        "Same-day replacement service",
        "Mobile windscreen service",
        "Insurance direct billing",
        "Genuine manufacturer glass",
        "ADAS recalibration included",
      ],
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-12 w-12 mb-4"
          style={{ color: COLORS.brand }}
        >
          <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      ),
      title: "Alloy Wheel Refurbishment",
      subtitle:
        "Complete alloy wheel restoration including diamond cutting, powder coating, and custom finishes",
      desc: "Restore your alloy wheels to showroom condition with our refurbishment service.",
      bullets: [
        "Kerb damage repair",
        "Diamond cutting service",
        "Powder coating finishes",
        "Custom color matching",
        "Wheel straightening",
      ],
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-12 w-12 mb-4"
          style={{ color: COLORS.brand }}
        >
          <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
        </svg>
      ),
      title: "Vandalism Repairs",
      subtitle:
        "Comprehensive vandalism damage repair with insurance claim support and rapid response",
      desc: "We provide rapid vandalism repair with full insurance support, helping you get back on the road quickly.",
      bullets: [
        "Key scratch repairs",
        "Paint damage restoration",
        "Window replacement",
        "Interior damage repair",
        "Insurance claim assistance",
      ],
    },
  ];

  return (
    <section className="py-16 bg-white dark:bg-black transition-colors">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 font-sans text-gray-900 dark:text-white">
            Our Specialty Services
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((s) => (
              <div
                key={s.title}
                className="flex flex-col gap-6 rounded-xl py-6 shadow-sm border
                           bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100
                           transition-all hover:shadow-lg hover:shadow-[#0096E6]/50 hover:-translate-y-0.5 active:scale-95"
                style={{ borderColor: COLORS.brand }}
              >
                <div className="px-6">
                  {s.icon}
                  <div className="font-semibold text-2xl font-sans">{s.title}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300 font-serif">
                    {s.subtitle}
                  </div>
                </div>

                <div className="px-6">
                  <div className="space-y-4">
                    <p className="text-gray-700 dark:text-gray-300 font-serif">
                      {s.desc}
                    </p>
                    <ul className="space-y-2 text-sm font-serif">
                      {s.bullets.map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-2 text-gray-800 dark:text-gray-200"
                        >
                          <CheckIcon />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* Small check icon with brand blue */
function CheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 shrink-0"
      style={{ color: COLORS.brand }}
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <path d="m9 11 3 3L22 4" />
    </svg>
  );
}
