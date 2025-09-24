import React, { useState } from "react";
import { FiPhone } from "react-icons/fi";
import QuoteModal from "../Insurance-Repairs-Page/QuoteModal";

const COLORS = {
  blue: "#0096E6", // brand blue
};

export default function SpecializedServices() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="py-16 bg-white dark:bg-black transition-colors">
      <div className="max-w-3xl mx-auto text-center px-4">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 font-sans text-gray-900 dark:text-white">
          Need Specialized Automotive Services?
        </h2>

        {/* Description */}
        <p className="text-lg mb-8 font-serif text-gray-700 dark:text-gray-300">
          From ADAS calibration to alloy wheel refurbishment, our expert
          technicians provide specialized services with the precision your
          vehicle deserves.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          {/* Call Button */}
          <a
            href="tel:01615333003"
            className="inline-flex items-center justify-center gap-2 text-white font-medium px-6 py-3 rounded-md shadow-md
                       transition-all hover:shadow-lg hover:shadow-[#0096E6]/50 hover:-translate-y-0.5 active:scale-95"
            style={{ backgroundColor: COLORS.blue }}
          >
            <FiPhone className="text-lg" />
            Call 0161 533 3003
          </a>

          {/* Get Quote Button */}
          <button
            onClick={() => setIsOpen(true)}
            className="px-6 py-3 rounded-md border font-medium transition-all
                       border-gray-300 dark:border-gray-600
                       text-gray-900 dark:text-white
                       bg-white dark:bg-black
                       hover:shadow-md hover:shadow-[#0096E6]/40 hover:-translate-y-0.5 active:scale-95"
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
