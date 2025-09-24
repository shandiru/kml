"use client";
import React, { useState } from "react";
import QuoteModal from "../Insurance-Repairs-Page/QuoteModal";

const COLORS = {
  primary: "#0096E6",       // Brand Blue
  primaryHover: "#007bbd",  // Darker Blue for hover
};

export default function CollisionRepairs() {
  const [showQuoteModal, setShowQuoteModal] = useState(false);

  return (
    <>
      <section className="py-16 bg-[#f1f7ff] dark:bg-black transition-colors">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-sans text-gray-900 dark:text-white">
              Collision Repairs
            </h1>

            {/* Subtitle */}
            <p className="text-xl mb-8 font-serif text-gray-700 dark:text-gray-300">
              Expert collision repair services for all types of accident damage.
              From minor bumps to major crashes, we restore your vehicle to
              pre-accident condition.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* Call Button */}
              <a
                href="tel:0161 533 3003"
                className="inline-flex items-center justify-center gap-2 text-sm font-medium h-10 rounded-md px-6 font-serif shadow-md
                           transition-all hover:shadow-lg hover:shadow-[#0096E6]/50 hover:-translate-y-0.5 active:scale-95 text-white"
                style={{ backgroundColor: COLORS.primary }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = COLORS.primaryHover)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = COLORS.primary)
                }
              >
                {/* Phone Icon */}
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
                  className="mr-1.5"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                0161 533 3003 Repairs
              </a>

              {/* Get Quote Button */}
              <button
                onClick={() => setShowQuoteModal(true)}
                className="inline-flex items-center justify-center gap-2 text-sm font-medium h-10 rounded-md px-6 font-serif
                           border border-gray-300 dark:border-gray-600
                           text-gray-800 dark:text-gray-200
                           bg-white dark:bg-gray-900
                           transition-all hover:shadow-md hover:shadow-[#0096E6]/40 hover:-translate-y-0.5 active:scale-95"
              >
                Get Quote
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Modal */}
      <QuoteModal
        isOpen={showQuoteModal}
        onClose={() => setShowQuoteModal(false)}
      />
    </>
  );
}
