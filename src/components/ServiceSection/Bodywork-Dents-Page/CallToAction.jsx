// CallToAction.jsx
import React from "react";
import { Phone } from "lucide-react";

const COLORS = {
  blue: "#0096E6",   // brand primary
  black: "#000000",  // dark mode bg
  white: "#FFFFFF",  // light mode bg
};

const CallToAction = () => {
  return (
    <section className="py-16 bg-white dark:bg-black transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-3xl font-bold mb-6 font-sans text-black dark:text-white">
            Ready to Restore Your Vehicle?
          </h2>

          {/* Subheading */}
          <p className="text-xl mb-8 font-serif text-gray-700 dark:text-gray-300">
            Contact us today for a free assessment and quote. We'll have your car
            looking like new again.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* Call Button */}
            <button
              className="inline-flex items-center justify-center gap-2 text-sm font-medium h-10 rounded-md px-6 shadow transition-all hover:scale-[1.02] hover:shadow-lg"
              style={{ backgroundColor: COLORS.blue, color: COLORS.white }}
            >
              <Phone className="h-5 w-5" />
              Call 0161 533 3003
            </button>

            {/* Book Assessment Button */}
            <button
              className="inline-flex items-center justify-center gap-2 text-sm font-medium h-10 rounded-md px-6 border transition-all hover:bg-gray-100 dark:hover:bg-gray-800 hover:scale-[1.02]"
              style={{
                borderColor: "#d1d5db", // Tailwind gray-300
                color: "inherit",
                backgroundColor: "transparent",
              }}
            >
              Book Assessment
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
