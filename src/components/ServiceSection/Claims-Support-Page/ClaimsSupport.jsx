// File: ClaimsSupport.jsx
import React, { useState } from "react";
import QuoteModal from "../Insurance-Repairs-Page/QuoteModal";

const COLORS = {
  brand: "#0096E6", // Blue
  white: "#FFFFFF",
  black: "#000000",
};

export default function ClaimsSupport() {
  const [isOpen, setIsOpen] = useState(false); // ✅ Modal state

  return (
    <section className="py-16 bg-white dark:bg-black transition-colors">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 font-sans">
            Claims Support
          </h1>

          <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 font-serif">
            Complete end-to-end support for your insurance claim. From the
            moment of accident to getting your repaired vehicle back, we handle
            everything so you don't have to worry.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* ✅ Start Claim - phone call */}
            <a
              href="tel:01615333003"
              className="inline-flex items-center justify-center gap-2 text-white shadow-md h-10 rounded-md px-6 font-medium font-serif transition-all hover:shadow-lg hover:scale-105"
              style={{ backgroundColor: COLORS.brand }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              Start Your Claim
            </a>

            {/* ✅ Get Quote - opens modal */}
            <button
              type="button"
              onClick={() => setIsOpen(true)}
              className="inline-flex items-center justify-center gap-2 border text-gray-800 dark:text-gray-200 bg-white dark:bg-transparent shadow-sm hover:bg-gray-100 dark:hover:bg-gray-800 h-10 rounded-md px-6 font-medium font-serif transition-all border-gray-300 dark:border-gray-600"
            >
              Get Quote
            </button>
          </div>
        </div>
      </div>

      {/* ✅ Quote Modal */}
      <QuoteModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </section>
  );
}
