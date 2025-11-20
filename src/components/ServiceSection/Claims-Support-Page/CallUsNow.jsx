// File: CallUsNow.jsx
import React, { useState } from "react";
import QuoteModal from "../Insurance-Repairs-Page/QuoteModal";

const BRAND_BLUE = "var(--primary)";


const CallUsNow = () => {
  const [isOpen, setIsOpen] = useState(false); // ✅ Modal state

  return (
    <section className="py-16 bg-[#f1f7ff] dark:bg-black transition-colors">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-lg p-8 text-center bg-white dark:bg-[#111] shadow-md border border-gray-200 dark:border-gray-700 transition-colors">
            {/* Phone Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="64"
              height="64"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mx-auto mb-6"
              style={{ color: BRAND_BLUE }}
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>

            {/* Heading */}
            <h2 className="text-3xl font-bold mb-4 font-sans text-gray-900 dark:text-white">
              Had an Accident? Call Us Now
            </h2>

            {/* Description */}
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 font-serif">
              Don't wait — the sooner you call us, the sooner we can start helping you.
              Our claims specialists are available to take your call and begin the
              support process immediately.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* Claims Line: tel link */}
              <a
                href="tel:01615333003"
                className="inline-flex items-center justify-center gap-2 text-sm font-medium text-white shadow-md h-10 rounded-md px-6 font-serif transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,150,230,0.7)]"
                style={{ backgroundColor: BRAND_BLUE }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                Claims Line: 0161 533 3003
              </a>

              {/* Get Quote: Opens modal */}
              <button
                onClick={() => setIsOpen(true)}
                className="inline-flex items-center justify-center gap-2 text-sm font-medium border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200 h-10 rounded-md px-6 font-serif bg-white dark:bg-[#1a1a1a] shadow-sm transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,150,230,0.6)]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                Get Quote
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Modal Component */}
      <QuoteModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </section>
  );
};

export default CallUsNow;
