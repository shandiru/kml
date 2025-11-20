import React from "react";
import { Car, Wrench, Shield } from "lucide-react";

const COLORS = {
 blue: "var(--primary)", // brand accent
  white: "#FFFFFF",  // light mode background
  black: "#000000",  // dark mode background
};

export default function AdvancedRepairTechnology() {
  const items = [
    {
      icon: <Car className="h-12 w-12 mx-auto mb-4" style={{ color: COLORS.blue }} />,
      title: "3D Measuring Systems",
      text: "Precision measurement technology ensures perfect structural alignment to manufacturer specifications"
    },
    {
      icon: <Wrench className="h-12 w-12 mx-auto mb-4" style={{ color: COLORS.blue }} />,
      title: "Frame Straightening",
      text: "State-of-the-art frame straightening equipment for precise structural repairs"
    },
    {
      icon: <Shield className="h-12 w-12 mx-auto mb-4" style={{ color: COLORS.blue }} />,
      title: "Safety Systems",
      text: "Complete airbag and safety system restoration with manufacturer-approved procedures"
    }
  ];

  return (
    <section className="py-16 bg-white dark:bg-black transition-colors">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 font-sans text-black dark:text-white">
            Advanced Repair Technology
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {items.map((item, index) => (
              <div
                key={index}
                className="flex flex-col gap-6 rounded-xl border py-6 shadow-sm text-center
                           transition-all hover:shadow-lg hover:shadow-[#0096E6]/40 hover:-translate-y-0.5 active:scale-95
                           bg-white dark:bg-black border-[#0096E6]"
              >
                <div className="px-6">
                  {item.icon}
                  <div className="leading-none font-semibold font-sans text-black dark:text-white">
                    {item.title}
                  </div>
                </div>
                <div className="px-6">
                  <p className="text-sm font-serif text-black/70 dark:text-white/80">
                    {item.text}
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
