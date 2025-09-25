// File: WhyChooseClaimsSupport.jsx
import React from "react";

const BRAND = "#0096E6";

export default function WhyChooseClaimsSupport() {
  const items = [
    {
      title: "Save Time",
      body:
        "No need to spend hours on the phone with insurance companies or chasing up repairs",
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
          style={{ color: BRAND }}
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      ),
    },
    {
      title: "Reduce Stress",
      body:
        "We handle all the complicated insurance processes so you can focus on getting back to normal",
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
          style={{ color: BRAND }}
          aria-hidden="true"
        >
          <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
        </svg>
      ),
    },
    {
      title: "Better Outcomes",
      body:
        "Our expertise ensures you get the best possible settlement and highest quality repairs",
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
          style={{ color: BRAND }}
          aria-hidden="true"
        >
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <path d="m9 11 3 3L22 4" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-16 bg-[#f6f8fe] dark:bg-black transition-colors">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <h2 className="text-3xl font-bold text-center mb-12 font-sans text-gray-900 dark:text-white">
            Why Choose Our Claims Support
          </h2>

          {/* Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {items.map(({ title, body, icon }) => (
              <div
                key={title}
                className="group text-center p-6 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#111] shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
                style={{
                  boxShadow: "0 0 0 rgba(0,0,0,0)", // reset
                }}
              >
                {/* Icon circle with hover glow */}
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(0,150,230,0.6)]"
                  style={{ backgroundColor: `${BRAND}20` }}
                >
                  {icon}
                </div>

                <h3 className="text-xl font-semibold mb-2 font-sans text-gray-900 dark:text-white">
                  {title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 font-serif">
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
