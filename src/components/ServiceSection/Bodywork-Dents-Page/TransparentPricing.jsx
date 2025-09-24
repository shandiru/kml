// TransparentPricing.jsx
import React from "react";
import { Clock, CheckCircle2, Phone } from "lucide-react";

const COLORS = {
  blue: "#0096E6",   // brand blue
  black: "#000000",  // dark bg
  white: "#FFFFFF",  // light bg
};

const TransparentPricing = () => {
  return (
    <section className="py-16 bg-white dark:bg-black transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-3xl font-bold mb-6 font-sans text-black dark:text-white">
            Transparent Pricing
          </h2>
          <p className="text-xl mb-8 font-serif text-gray-700 dark:text-gray-300">
            We provide upfront, honest pricing with no hidden costs. Get a free
            quote today.
          </p>

          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {/* Card 1 */}
            <div className="bg-white dark:bg-gray-900 text-black dark:text-white flex flex-col gap-6 rounded-xl border border-gray-200 dark:border-gray-700 py-6 shadow-sm hover:shadow-lg hover:scale-[1.02] hover:ring-2 hover:ring-[#0096E6]/50 transition-all">
              <div className="grid items-start gap-1.5 px-6 text-center">
                <Clock className="h-8 w-8 mx-auto mb-2" style={{ color: COLORS.blue }} />
                <div className="font-semibold text-lg font-sans">Quick Turnaround</div>
              </div>
              <div className="px-6">
                <p className="text-sm font-serif text-gray-700 dark:text-gray-300">
                  Most minor repairs completed within 24-48 hours
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white dark:bg-gray-900 text-black dark:text-white flex flex-col gap-6 rounded-xl border border-gray-200 dark:border-gray-700 py-6 shadow-sm hover:shadow-lg hover:scale-[1.02] hover:ring-2 hover:ring-[#0096E6]/50 transition-all">
              <div className="grid items-start gap-1.5 px-6 text-center">
                <CheckCircle2 className="h-8 w-8 mx-auto mb-2" style={{ color: COLORS.blue }} />
                <div className="font-semibold text-lg font-sans">Quality Guarantee</div>
              </div>
              <div className="px-6">
                <p className="text-sm font-serif text-gray-700 dark:text-gray-300">
                  All bodywork backed by comprehensive warranty
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white dark:bg-gray-900 text-black dark:text-white flex flex-col gap-6 rounded-xl border border-gray-200 dark:border-gray-700 py-6 shadow-sm hover:shadow-lg hover:scale-[1.02] hover:ring-2 hover:ring-[#0096E6]/50 transition-all">
              <div className="grid items-start gap-1.5 px-6 text-center">
                <Phone className="h-8 w-8 mx-auto mb-2" style={{ color: COLORS.blue }} />
                <div className="font-semibold text-lg font-sans">Free Quotes</div>
              </div>
              <div className="px-6">
                <p className="text-sm font-serif text-gray-700 dark:text-gray-300">
                  No obligation assessments and competitive pricing
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransparentPricing;
