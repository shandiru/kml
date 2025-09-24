"use client";
import React, { useState } from "react";
import { Phone } from "lucide-react";
import QuoteModal from "../Insurance-Repairs-Page/QuoteModal";

const COLORS = {
  blue: "#0096E6", // brand blue
};

export default function CollisionRepairServices() {
  const [isOpen, setIsOpen] = useState(false); // modal state

  return (
    <section className="py-16 bg-white dark:bg-black transition-colors">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 font-sans text-gray-900 dark:text-white">
            Need Collision Repair Services?
          </h2>
          <p className="text-xl mb-8 font-serif text-gray-700 dark:text-gray-300">
            From minor bumps to major accidents, we have the expertise and
            equipment to restore your vehicle safely and efficiently.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* ✅ Call Button */}
            <a
              href="tel:01615333003"
              className="inline-flex items-center justify-center gap-2 text-sm font-medium h-10 rounded-md px-6 font-serif text-white shadow-md
                         transition-all hover:shadow-lg hover:shadow-[#0096E6]/50 hover:-translate-y-0.5 active:scale-95"
              style={{ backgroundColor: COLORS.blue }}
            >
              <Phone className="h-5 w-5" />
              Get Help
            </a>

            {/* ✅ Open Modal Button */}
            <button
              onClick={() => setIsOpen(true)}
              className="inline-flex items-center justify-center gap-2 text-sm font-medium h-10 rounded-md px-6 font-serif
                         border bg-white dark:bg-black
                         text-gray-900 dark:text-white
                         border-gray-300 dark:border-gray-600
                         transition-all hover:shadow-md hover:shadow-[#0096E6]/40 hover:-translate-y-0.5 active:scale-95"
            >
              Request Estimate
            </button>
          </div>
        </div>
      </div>

      {/* ✅ Modal */}
      <QuoteModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </section>
  );
}
