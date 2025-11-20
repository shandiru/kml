import React, { useState } from "react";
import { Phone } from "lucide-react";
import QuoteModal from "../Insurance-Repairs-Page/QuoteModal";

export default function HeroSection() {
  const [isOpen, setIsOpen] = useState(false);

  // ✅ Brand colors
  const COLORS = {
    primary: "var(--primary)",      // replaced #0096E6
  heading: "var(--fg)", 
    body: "#374151", // slate-700
    bgLight: "#f1f7ff", // light background
    bgDark: "#000000", // dark background
    border: "#d1d5db", // gray-300
  };

  return (
    <section className="py-16 bg-white dark:bg-black transition-colors">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-sans text-gray-900 dark:text-white">
            Insurance Repairs
          </h1>

          {/* Subtitle */}
          <p className="text-xl mb-8 font-serif text-gray-700 dark:text-gray-300">
            Expert insurance repair services with direct insurer relationships.
            We handle everything from initial assessment to final delivery.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* Call for Quote (modal trigger) */}
            <button
              onClick={() => setIsOpen(true)}
              className="inline-flex items-center justify-center gap-2 
                         h-10 rounded-md px-6 font-serif text-sm font-medium 
                         text-white transition-all
                         bg-[#0096E6] hover:bg-[#007bbd] 
                         dark:bg-[#0096E6] dark:hover:bg-[#0080c2]"
            >
              <Phone className="h-5 w-5" />
              Call for Quote
            </button>

            {/* View Our Process */}
            <a
              href="#insurance-process"
              className="inline-flex items-center justify-center gap-2 
                         h-10 rounded-md px-6 font-serif text-sm font-medium 
                         border transition-all
                         border-gray-300 text-gray-800 hover:bg-gray-100
                         dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-800"
            >
              View Our Process
            </a>
          </div>
        </div>
      </div>

      {/* Quote Modal */}
      <QuoteModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </section>
  );
}
