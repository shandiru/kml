"use client";
import React, { useState } from "react";
import { TriangleAlert, Phone, Clock } from "lucide-react";
import QuoteModal from "../Insurance-Repairs-Page/QuoteModal";

const COLORS = {
  blue: "#0096E6",
};

export default function EmergencyService() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="py-16 bg-white dark:bg-black transition-colors">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div
            className="rounded-lg p-8 text-center border transition-all 
                       bg-white dark:bg-black 
                       text-black dark:text-white
                       hover:shadow-lg hover:shadow-[#0096E6]/40"
            style={{ borderColor: COLORS.blue }}
          >
            <TriangleAlert
              className="h-16 w-16 mx-auto mb-6"
              style={{ color: COLORS.blue }}
            />

            <h2 className="text-3xl font-bold mb-4 font-sans">
              Emergency Service
            </h2>
            <p className="text-lg mb-6 font-serif text-black/70 dark:text-white/80">
              Accident happened? Don't worry – we're here to help. Our emergency
              response team is available around the clock to assist with
              recovery, courtesy cars, and immediate repair assessment.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* Call Button */}
              <a
                href="tel:01615333003"
                className="inline-flex items-center justify-center gap-2 text-sm font-medium h-10 rounded-md px-6 font-serif
                           shadow-md transition-all
                           hover:shadow-lg hover:shadow-[#0096E6]/50 hover:-translate-y-0.5 active:scale-95"
                style={{ backgroundColor: COLORS.blue, color: "#fff" }}
              >
                <Phone className="h-5 w-5" />
                Support: 0161 533 3003
              </a>

              {/* Open Modal Button */}
              <button
                onClick={() => setIsOpen(true)}
                className="inline-flex items-center justify-center gap-2 text-sm font-medium h-10 rounded-md px-6 font-serif
                           border transition-all 
                           text-black dark:text-white
                           bg-transparent 
                           hover:bg-[#0096E6]/10 hover:border-[#0096E6] hover:text-[#0096E6]"
                style={{ borderColor: COLORS.blue }}
              >
                <Clock className="h-5 w-5" />
                Get Quote
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Quote Modal */}
      <QuoteModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </section>
  );
}
