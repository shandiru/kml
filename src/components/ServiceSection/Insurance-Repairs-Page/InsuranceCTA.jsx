import React, { useState } from "react";
import { Phone } from "lucide-react";
import QuoteModal from "../Insurance-Repairs-Page/QuoteModal";

const COLORS = {
  primary: "var(--primary)", // Brand Blue,
  black: "#000000",
  white: "#FFFFFF",
};

export default function InsuranceCTA() {
  // State for modal visibility
  const [isOpen, setIsOpen] = useState(false);

  // Function to handle phone call
  const handleCall = () => {
    window.location.href = "tel:0161 533 3003";
  };

  return (
    <section className="py-16 bg-white dark:bg-black transition-colors">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-3xl font-bold mb-6 font-sans text-gray-900 dark:text-white">
            Need Insurance Repair Services?
          </h2>

          {/* Subtitle */}
          <p className="text-xl mb-8 font-serif text-gray-600 dark:text-gray-300">
            Contact us today for a free assessment and let us handle your
            insurance claim from start to finish.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* Call Button */}
            <button
              onClick={handleCall}
              className="inline-flex items-center justify-center gap-2 text-sm font-medium h-10 rounded-md px-6 font-serif text-white shadow-md 
                         transition-all hover:shadow-lg hover:shadow-[#0096E6]/50 hover:-translate-y-0.5 active:scale-95"
              style={{ backgroundColor: COLORS.primary }}
            >
              <Phone className="h-5 w-5" />
              Call 0161 533 3003
            </button>

            {/* Get Quote Button (opens modal) */}
            <button
              onClick={() => setIsOpen(true)}
              className="inline-flex items-center justify-center gap-2 text-sm font-medium h-10 rounded-md px-6 font-serif 
                         border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200 
                         bg-white dark:bg-gray-900 
                         transition-all hover:shadow-md hover:shadow-[#0096E6]/40 hover:-translate-y-0.5 active:scale-95"
            >
              Get Quote
            </button>
          </div>
        </div>
      </div>

      {/* Quote Modal */}
      <QuoteModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </section>
  );
}
