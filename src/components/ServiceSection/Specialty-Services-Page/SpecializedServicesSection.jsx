// File: SpecializedServices.jsx
import React, { useState } from "react";
import { FiPhone } from "react-icons/fi";
import QuoteModal from "../Insurance-Repairs-Page/QuoteModal";

const COLORS = {
  blue: "var(--primary)", // brand accent
  white: "#FFFFFF",
  black: "#000000",
};

export default function SpecializedServices() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="py-16 bg-white dark:bg-black transition-colors">
      <div className="max-w-3xl mx-auto text-center px-4">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Need Specialized Automotive Services?
        </h2>

        {/* Description */}
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 font-serif">
          From ADAS calibration to alloy wheel refurbishment, our expert
          technicians provide specialized services with the precision your
          vehicle deserves.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          {/* Call Button */}
          <a
            href="tel:01615333003"
            className="inline-flex items-center justify-center gap-2 text-white font-medium px-6 py-3 rounded-md shadow transition-all"
            style={{ backgroundColor: COLORS.brand }}
          >
            <FiPhone className="text-lg" />
            Call 0161 533 3003
          </a>

          {/* Get Quote Button */}
          <button
            onClick={() => setIsOpen(true)}
            className="px-6 py-3 rounded-md border text-gray-800 dark:text-gray-200 font-medium bg-white dark:bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 transition-all border-gray-300 dark:border-gray-600"
          >
            Get Quote
          </button>
        </div>
      </div>

      {/* Quote Modal */}
      <QuoteModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </section>
  );
}
