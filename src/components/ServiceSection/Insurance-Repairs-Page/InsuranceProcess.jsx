import React from "react";

const COLORS = {
  primary: "#0096E6", // Brand Blue
};

const STEPS = [
  {
    n: 1,
    title: "Initial Assessment",
    desc: "We conduct a thorough assessment of your vehicle damage and provide a detailed estimate for your insurance company.",
  },
  {
    n: 2,
    title: "Insurance Approval",
    desc: "We work directly with your insurance provider to get approval for repairs and handle all documentation.",
  },
  {
    n: 3,
    title: "Professional Repair",
    desc: "Our certified technicians perform high-quality repairs using genuine parts and industry-standard techniques.",
  },
  {
    n: 4,
    title: "Quality Check & Delivery",
    desc: "Final quality inspection and vehicle delivery with all warranty documentation and insurance paperwork completed.",
  },
];

export default function InsuranceProcess() {
  return (
    <section
      id="insurance-process"
      className="py-16 bg-white dark:bg-black transition-colors"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Heading */}
          <h2 className="text-3xl font-bold text-center mb-12 font-sans text-gray-900 dark:text-white">
            Insurance Repair Process
          </h2>

          {/* Steps */}
          <div className="space-y-8">
            {STEPS.map((s) => (
              <div
                key={s.n}
                className="flex gap-6 items-start p-4 rounded-lg 
                           bg-gray-50 dark:bg-gray-900 
                           border border-gray-200 dark:border-gray-700
                           transition-all hover:shadow-lg hover:shadow-[#0096E6]/40"
              >
                {/* Number badge */}
                <div
                  className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center 
                             font-bold text-white"
                  style={{ backgroundColor: COLORS.primary }}
                >
                  {s.n}
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-xl font-semibold mb-2 font-sans text-gray-900 dark:text-white">
                    {s.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 font-serif leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
