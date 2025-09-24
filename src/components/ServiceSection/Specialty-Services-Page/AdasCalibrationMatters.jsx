// File: AdasCalibrationMatters.jsx
"use client";
import React from "react";

const COLORS = {
  brand: "#0096E6", // primary blue
  white: "#FFFFFF",
  black: "#000000",
};

export default function AdasCalibrationMatters() {
  const features = [
    {
      title: "Safety Critical",
      text: "Incorrectly calibrated systems can fail to protect you when you need them most",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-8 w-8"
          style={{ color: COLORS.brand }}
        >
          <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
        </svg>
      ),
    },
    {
      title: "Manufacturer Approved",
      text: "We use only manufacturer-approved calibration procedures and equipment",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-8 w-8"
          style={{ color: COLORS.brand }}
        >
          <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" />
          <circle cx="12" cy="8" r="6" />
        </svg>
      ),
    },
    {
      title: "Certified Technicians",
      text: "Our technicians are certified and regularly trained on the latest ADAS technologies",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-8 w-8"
          style={{ color: COLORS.brand }}
        >
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <path d="m9 11 3 3L22 4" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-16 bg-white dark:bg-black transition-colors">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Heading */}
          <h2 className="text-3xl font-bold text-center mb-8 font-sans text-gray-900 dark:text-white">
            Why ADAS Calibration Matters
          </h2>
          <p className="text-lg text-center mb-12 font-serif text-gray-700 dark:text-gray-300">
            Modern vehicles are equipped with sophisticated safety systems that
            save lives. After any collision or windscreen replacement, these
            systems must be recalibrated to function correctly.
          </p>

          {/* 3 Columns */}
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((f) => (
              <div
                key={f.title}
                className="text-center p-6 rounded-lg transition-all hover:shadow-lg hover:shadow-[#0096E6]/40 hover:-translate-y-0.5 active:scale-95"
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transition-all hover:shadow-md hover:shadow-[#0096E6]/50"
                  style={{ backgroundColor: COLORS.white, color: COLORS.brand }}
                >
                  {f.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 font-sans text-gray-900 dark:text-white">
                  {f.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 font-serif">
                  {f.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
