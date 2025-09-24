import React, { useState } from "react";
import { Phone } from "lucide-react";
import QuoteModal from "../Insurance-Repairs-Page/QuoteModal";

const BRAND_GREEN = "#066a3c";
const LIGHT_GREEN_BG = "#f1f7ff";

export default function BodyworkDentRepairs() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="py-16" style={{ backgroundColor: LIGHT_GREEN_BG }}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 font-sans">
            Bodywork &amp; Dent Repairs
          </h1>
          <p className="text-xl text-gray-600 mb-8 font-serif">
            Professional bodywork services including dent removal, scratch repair, and complete
            paint restoration. We restore your vehicle to its original condition.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* Get Free Quote Button */}
            <button
              onClick={() => setIsOpen(true)}
              className="inline-flex items-center justify-center gap-2 text-sm font-medium h-10 rounded-md px-6 font-serif text-white shadow hover:opacity-90 transition"
              style={{ backgroundColor: BRAND_GREEN }}
            >
              <Phone className="h-5 w-5" />
              Get Free Quote
            </button>

            {/* View Gallery Button */}
            <button className="inline-flex items-center justify-center gap-2 text-sm font-medium h-10 rounded-md px-6 font-serif border border-gray-300 text-gray-800 hover:bg-gray-100 transition">
              View Gallery
            </button>
          </div>
        </div>
      </div>

      {/* ✅ Modal */}
      <QuoteModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </section>
  );
}
