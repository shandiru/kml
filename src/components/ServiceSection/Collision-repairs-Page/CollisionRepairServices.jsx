import React from "react";

const COLORS = {
  blue: "#0096E6",
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
      className="flex flex-col gap-6 rounded-xl py-6 shadow-sm border transition-all cursor-pointer
                 hover:shadow-lg hover:shadow-[#0096E6]/40 hover:-translate-y-0.5
                 active:scale-95 focus:ring-2 focus:ring-[#0096E6]
                 bg-white dark:bg-black border-[#0096E6]"
    >
      <div className="grid auto-rows-min items-start gap-1.5 px-6">
        {icon}
        <div className="leading-none font-semibold font-sans text-black dark:text-white">
          {title}
        </div>
        <div className="text-sm font-serif text-black dark:text-white/80">
          {desc}
        </div>
      </div>

      <div className="px-6">
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
      width="18"
      height="18"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ color: "#0096E6" }}
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <path d="m9 11 3 3L22 4" />
    </svg>
  );
}

function TriangleAlert({ color }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-12 w-12 mb-4"
      style={{ color }}
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
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-12 w-12 mb-4"
      style={{ color }}
    >
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
    </svg>
  );
}

function Wrench({ color }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-12 w-12 mb-4"
      style={{ color }}
    >
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  );
}
