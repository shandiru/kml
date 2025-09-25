// File: FAQSection.jsx
import React from "react";

const BRAND_BLUE = "#0096E6";

const FAQSection = () => {
  return (
    <section className="py-16 bg-[#f1f7ff] dark:bg-black transition-colors">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Heading */}
          <h2 className="text-3xl font-bold text-center mb-12 font-sans text-gray-900 dark:text-white">
            Common Questions
          </h2>

          {/* FAQ Cards */}
          <div className="space-y-6">
            {/* Card 1 */}
            <div className="bg-white dark:bg-[#111] text-gray-900 dark:text-gray-200 flex flex-col gap-6 rounded-xl border border-gray-200 dark:border-gray-700 py-6 shadow-sm px-6 transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,150,230,0.6)]">
              <h3
                className="font-semibold font-sans text-lg"
                style={{ color: BRAND_BLUE }}
              >
                What if the accident wasn't my fault?
              </h3>
              <p className="text-gray-600 dark:text-gray-400 font-serif">
                If you're not at fault, we handle everything to ensure you're not
                out of pocket. We'll recover all costs from the third party's
                insurance, including repairs, courtesy car, and any other expenses.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white dark:bg-[#111] text-gray-900 dark:text-gray-200 flex flex-col gap-6 rounded-xl border border-gray-200 dark:border-gray-700 py-6 shadow-sm px-6 transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,150,230,0.6)]">
              <h3
                className="font-semibold font-sans text-lg"
                style={{ color: BRAND_BLUE }}
              >
                How quickly can I get a courtesy car?
              </h3>
              <p className="text-gray-600 dark:text-gray-400 font-serif">
                Usually within hours of your call. We have a large fleet of courtesy
                cars and vans available, and we'll arrange delivery to your location
                if needed.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white dark:bg-[#111] text-gray-900 dark:text-gray-200 flex flex-col gap-6 rounded-xl border border-gray-200 dark:border-gray-700 py-6 shadow-sm px-6 transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,150,230,0.6)]">
              <h3
                className="font-semibold font-sans text-lg"
                style={{ color: BRAND_BLUE }}
              >
                Do I need to contact my insurance company?
              </h3>
              <p className="text-gray-600 dark:text-gray-400 font-serif">
                We handle all insurance communications for you. We'll contact your
                insurer and any third parties involved, keeping you informed
                throughout the process.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
