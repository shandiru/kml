import React from "react";
import { Shield, FileText, Car, CheckCircle2 } from "lucide-react";

// ✅ Brand palette
const COLORS = {
   primary: "var(--primary)",   // was #0096E6
  heading: "var(--fg)",        // was #1f2937
  text: "#374151", // slate-700
  cardLight: "#f9fafb", // light background
  cardDark: "#111827", // dark card
  borderLight: "#e5e7eb",
  borderDark: "#374151",
};

export default function InsuranceServices() {
  const services = [
    {
      icon: <Shield className="h-12 w-12 mb-4" color={COLORS.primary} />,
      title: "Comprehensive Coverage",
      desc: "We work with all major insurance providers to ensure your repairs are covered",
      points: ["Direct insurer billing", "No upfront costs", "Approved repairer network"],
    },
    {
      icon: <FileText className="h-12 w-12 mb-4" color={COLORS.primary} />,
      title: "Claims Management",
      desc: "Complete claims handling from start to finish with expert guidance",
      points: ["Claims processing", "Documentation support", "Liaison with insurers"],
    },
    {
      icon: <Car className="h-12 w-12 mb-4" color={COLORS.primary} />,
      title: "Quality Repairs",
      desc: "Professional repairs using genuine parts with manufacturer warranties",
      points: ["Genuine OEM parts", "Manufacturer warranties", "Quality guarantees"],
    },
  ];

  return (
    <section className="py-16 bg-white dark:bg-black transition-colors">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 font-sans text-gray-900 dark:text-white">
            Our Insurance Repair Services
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <article
                key={i}
                className="flex flex-col gap-6 rounded-xl border py-6 shadow-sm 
                           bg-gray-50 dark:bg-gray-900 
                           border-gray-200 dark:border-gray-700 
                           text-gray-800 dark:text-gray-200 
                           transition-all hover:shadow-xl hover:-translate-y-1 hover:shadow-[#0096E6]/40
                           active:scale-[0.98] cursor-pointer"
              >
                <header className="grid auto-rows-min items-start gap-1.5 px-6">
                  {s.icon}
                  <h3 className="font-semibold font-sans leading-none text-gray-900 dark:text-white">
                    {s.title}
                  </h3>
                  <p className="text-sm font-serif text-gray-600 dark:text-gray-400">
                    {s.desc}
                  </p>
                </header>

                <div className="px-6">
                  <ul className="space-y-2 text-sm font-serif">
                    {s.points.map((t) => (
                      <li key={t} className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4" color={COLORS.primary} />
                        <span className="text-gray-700 dark:text-gray-300">{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
