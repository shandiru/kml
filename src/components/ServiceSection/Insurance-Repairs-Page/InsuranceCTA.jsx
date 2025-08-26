import React from "react";
import { Phone } from "lucide-react";

const BRAND_GREEN = "#066a3c";

export default function InsuranceCTA() {
  // Function to handle phone call
  const handleCall = () => {
    window.location.href = "tel:0161 533 3003"; // This will trigger the phone dialer
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 font-sans text-gray-800">
            Need Insurance Repair Services?
          </h2>
          <p className="text-xl text-gray-600 mb-8 font-serif">
            Contact us today for a free assessment and let us handle your
            insurance claim from start to finish.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* Call Button */}
            <button
              onClick={handleCall}
              className="inline-flex items-center justify-center gap-2 text-sm font-medium h-10 rounded-md px-6 font-serif text-white shadow hover:opacity-90 transition"
              style={{ backgroundColor: BRAND_GREEN }}
            >
              <Phone className="h-5 w-5" />
              Call 0161 533 3003
            </button>

            {/* Request Callback Button */}
            <button
              className="inline-flex items-center justify-center gap-2 text-sm font-medium h-10 rounded-md px-6 font-serif border border-gray-300 text-gray-800 hover:bg-gray-100 transition"
            >
              Request Callback
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
