import React, { useState } from "react";
import { Phone } from "lucide-react";
import QuoteModal from "../Insurance-Repairs-Page/QuoteModal";

const COLORS = {
  primary: "#0096E6", // brand blue
  lightBg: "#f1f7ff", // light mode background
  darkBg: "#000000",  // dark mode background
};

export default function BodyworkDentRepairs() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section
      id="bodywork-dent"
      className="py-16 transition-colors bg-[#f1f7ff] dark:bg-black"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-sans text-gray-900 dark:text-white">
            Bodywork &amp; Dent Repairs
          </h1>

          {/* Subtitle */}
          <p className="text-xl mb-8 font-serif text-gray-700 dark:text-gray-300">
            Professional bodywork services including dent removal, scratch
            repair, and complete paint restoration. We restore your vehicle to
            its original condition.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* Get Free Quote Button */}
            <button
              onClick={() => setIsOpen(true)}
              className="inline-flex items-center justify-center gap-2 text-sm font-medium h-10 rounded-md px-6 font-serif text-white shadow-md
                         transition-all hover:shadow-lg hover:shadow-[#0096E6]/50 hover:-translate-y-0.5 active:scale-95"
              style={{ backgroundColor: COLORS.primary }}
            >
              <Phone className="h-5 w-5" />
              Get Free Quote
            </button>

            {/* View Gallery Button */}
            <button
              className="inline-flex items-center justify-center gap-2 text-sm font-medium h-10 rounded-md px-6 font-serif
                         border border-gray-300 dark:border-gray-600
                         text-gray-800 dark:text-gray-200
                         bg-white dark:bg-gray-900
                         transition-all hover:shadow-md hover:shadow-[#0096E6]/40 hover:-translate-y-0.5 active:scale-95"
            >
              View Gallery
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      <QuoteModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </section>
  );
}
