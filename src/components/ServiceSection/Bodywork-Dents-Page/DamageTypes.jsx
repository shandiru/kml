import React from "react";
import { CircleCheckBig } from "lucide-react";

const COLORS = {
  blue: "var(--primary)",   // brand accent
  black: "#000000", // dark bg & text
  white: "#FFFFFF", // light bg & text
};

export default function DamageTypes() {
  const minor = [
    { title: "Car Park Dents", desc: "Small dents from car doors and shopping trolleys" },
    { title: "Surface Scratches", desc: "Light scratches that haven't penetrated the paint" },
    { title: "Scuff Marks", desc: "Paint transfer from other vehicles or objects" },
  ];

  const major = [
    { title: "Deep Scratches", desc: "Scratches through to the metal requiring full repair" },
    { title: "Large Dents", desc: "Significant dents requiring panel work and repainting" },
    { title: "Panel Damage", desc: "Severe damage requiring panel replacement" },
  ];

  const Item = ({ title, desc }) => (
    <div className="flex items-start gap-3">
      <CircleCheckBig
        className="h-5 w-5 mt-1 shrink-0"
        style={{ color: COLORS.blue }}
        aria-hidden="true"
      />
      <div>
        <h4 className="font-semibold font-sans text-black dark:text-white">
          {title}
        </h4>
        <p className="text-sm font-serif text-gray-700 dark:text-gray-300">
          {desc}
        </p>
      </div>
    </div>
  );

  return (
    <section className="py-16 bg-white dark:bg-black transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 font-sans text-black dark:text-white">
            Types of Damage We Repair
          </h2>

          {/* Two equal columns; Minor (left) and Major (right) */}
          <div className="grid md:grid-cols-2 gap-12">
            {/* Minor column */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold font-sans text-black dark:text-white">
                Minor Damage
              </h3>
              <div className="space-y-4">
                {minor.map((m) => (
                  <Item key={m.title} title={m.title} desc={m.desc} />
                ))}
              </div>
            </div>

            {/* Major column */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold font-sans text-black dark:text-white">
                Major Damage
              </h3>
              <div className="space-y-4">
                {major.map((m) => (
                  <Item key={m.title} title={m.title} desc={m.desc} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
