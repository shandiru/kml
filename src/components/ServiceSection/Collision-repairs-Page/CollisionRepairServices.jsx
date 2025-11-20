import React from "react";

const COLORS = {
  blue: "var(--primary)",
  white: "#FFFFFF",
  black: "#000000",
};

export default function CollisionRepairServices() {
  return (
    <section className="py-16 bg-white dark:bg-black transition-colors">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 font-sans text-black dark:text-white">
            Collision Repair Services
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card
              icon={<TriangleAlert color={COLORS.blue} />}
              title="Accident Damage"
              desc="Complete repair services for all types of collision damage from minor to major accidents"
              items={[
                "Front-end collisions",
                "Rear-end impacts",
                "Side impact damage",
                "Multi-vehicle accidents",
              ]}
            />

            <Card
              icon={<Shield color={COLORS.blue} />}
              title="Structural Repairs"
              desc="Advanced structural repair using precision equipment and manufacturer specifications"
              items={[
                "Frame straightening",
                "Unibody repairs",
                "Chassis alignment",
                "Safety system restoration",
              ]}
            />

            <Card
              icon={<Wrench color={COLORS.blue} />}
              title="Complete Restoration"
              desc="Full vehicle restoration including mechanical, electrical, and cosmetic repairs"
              items={[
                "Engine bay repairs",
                "Electrical system repair",
                "Interior restoration",
                "Paint and finish work",
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- CARD ---------------- */
function Card({ icon, title, desc, items }) {
  return (
    <div
      className="flex flex-col gap-6 rounded-xl p-6 shadow-md border transition-all cursor-pointer
                 hover:shadow-xl hover:shadow-[#0096E6]/30 hover:-translate-y-1
                 active:scale-95 bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700"
    >
      {/* Icon bubble */}
      <div className="flex justify-center">
        <div className="w-16 h-16 rounded-full flex items-center justify-center bg-[#0096E6]/10">
          {icon}
        </div>
      </div>

      {/* Text content */}
      <div className="text-center">
        <h3 className="text-lg font-semibold font-sans text-black dark:text-white mb-2">
          {title}
        </h3>
        <p className="text-sm font-serif text-gray-600 dark:text-gray-300">
          {desc}
        </p>
      </div>

      {/* List items */}
      <div className="px-2">
        <ul className="space-y-2 text-sm font-serif">
          {items.map((item) => (
            <li
              key={item}
              className="flex items-center gap-2 text-black dark:text-white"
            >
              <CheckDot />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/* ---------------- ICONS ---------------- */
function CheckDot() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="none"
      stroke={COLORS.blue}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="flex-shrink-0"
    >
      <circle cx="12" cy="12" r="10" stroke={COLORS.blue} />
      <path d="M8 12l3 3 5-6" stroke={COLORS.blue} />
    </svg>
  );
}

function TriangleAlert({ color }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-8 w-8"
    >
      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" />
      <path d="M12 9v4" />
      <path d="M12 17h.01" />
    </svg>
  );
}

function Shield({ color }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-8 w-8"
    >
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
    </svg>
  );
}

function Wrench({ color }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-8 w-8"
    >
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  );
}
