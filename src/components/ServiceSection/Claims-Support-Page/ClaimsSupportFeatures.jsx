// File: ClaimSupportFeatures.jsx
import React from "react";

const COLORS = {
  brand: "#0096E6", // Brand Blue
  white: "#FFFFFF",
  black: "#000000",
};

export default function ClaimSupportFeatures() {
  return (
    <section className="py-16 bg-white dark:bg-black transition-colors">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
            className="h-16 w-16 mx-auto mb-6"
            style={{ color: COLORS.brand }}
          >
            <path d="M11 14h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 16" />
            <path d="m7 20 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9" />
            <path d="m2 15 6 6" />
            <path d="M19.5 8.5c.7-.7 1.5-1.6 1.5-2.7A2.73 2.73 0 0 0 16 4a2.78 2.78 0 0 0-5 1.8c0 1.2.8 2 1.5 2.8L16 12Z" />
          </svg>

          <h2 className="text-3xl font-bold mb-6 font-sans text-gray-900 dark:text-white">
            We Hold Your Hand Through Everything
          </h2>
          <p className="text-lg font-serif text-gray-700 dark:text-gray-300">
            Having an accident is stressful enough. That's why we take care of
            every aspect of your claim - from initial contact with your insurer
            to delivering your fully repaired vehicle. You focus on getting back
            to normal, we'll handle the rest.
          </p>
        </div>

        {/* Features Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Immediate Response",
                text: "Emergency response from the moment you call us",
                icon: (
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                ),
              },
              {
                title: "Courtesy Vehicle",
                text: "Replacement car or van arranged immediately",
                icon: (
                  <>
                    <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
                    <circle cx="7" cy="17" r="2" />
                    <path d="M9 17h6" />
                    <circle cx="17" cy="17" r="2" />
                  </>
                ),
              },
              {
                title: "Claims Handling",
                text: "Complete paperwork and insurer communication",
                icon: (
                  <>
                    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                    <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                    <path d="M10 9H8" />
                    <path d="M16 13H8" />
                    <path d="M16 17H8" />
                  </>
                ),
              },
              {
                title: "Quality Repairs",
                text: "Professional repairs with full warranty coverage",
                icon: (
                  <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                ),
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="flex flex-col gap-4 rounded-xl py-6 shadow-sm text-center transition-all transform border border-gray-200 dark:border-gray-700 bg-[#f5f8fd] dark:bg-[#111] text-gray-900 dark:text-gray-100 hover:shadow-lg hover:shadow-[#0096E6]/50 hover:-translate-y-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                  className="h-12 w-12 mx-auto mb-4"
                  style={{ color: COLORS.brand }}
                >
                  {feature.icon}
                </svg>
                <h3 className="font-semibold font-sans">{feature.title}</h3>
                <p className="text-sm font-serif text-gray-600 dark:text-gray-400 px-4">
                  {feature.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
