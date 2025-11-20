// File: CompleteClaimsManagement.jsx
import React from "react";

const BRAND = "var(--primary)";


export default function CompleteClaimsManagement() {
  return (
    <section className="py-16 bg-white dark:bg-black transition-colors">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 font-sans text-gray-900 dark:text-white">
            Complete Claims Management
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-12 w-12 mb-4"
                  style={{ color: BRAND }}
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              }
              title="No Fault Claims"
              desc="Specialized support for no-fault accidents where you're not to blame"
              body="When you're involved in an accident that wasn't your fault, you shouldn't be out of pocket or inconvenienced. We handle everything to ensure you're fully compensated and back on the road quickly."
              items={[
                "Third-party insurer negotiations",
                "Credit hire vehicle provision",
                "Recovery of all costs",
                "Personal injury claim support",
                "Loss of earnings assistance",
              ]}
            />

            <Card
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-12 w-12 mb-4"
                  style={{ color: BRAND }}
                >
                  <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                  <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                  <path d="M10 9H8" />
                  <path d="M16 13H8" />
                  <path d="M16 17H8" />
                </svg>
              }
              title="Insurance Liaison"
              desc="Direct communication with all insurance companies involved in your claim"
              body="We act as your representative with insurance companies, handling all communication, paperwork, and negotiations. You won't need to spend hours on the phone or worry about missing important deadlines."
              items={[
                "Initial claim notification",
                "Damage assessment coordination",
                "Repair authorization management",
                "Settlement negotiations",
                "Final claim closure",
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Card({ icon, title, desc, body, items }) {
  return (
    <div
      className="
        group relative flex flex-col gap-6 rounded-xl border py-6 h-full transition-all
        bg-white text-gray-900 border-[#e6ebf3]
        dark:bg-black dark:text-gray-100 dark:border-[#0096E6]/35

        hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#0096E6]/35
        focus-within:shadow-lg focus-within:shadow-[#0096E6]/40
        active:shadow-[0_0_0_3px_rgba(0,150,230,0.35)]
      "
      role="button"
      tabIndex={0}
    >
      <div className="px-6">
        {icon}
        <div className="font-semibold text-2xl font-sans">{title}</div>
        <div className="text-sm font-serif text-gray-600 dark:text-gray-400">{desc}</div>
      </div>

      <div className="px-6">
        <p className="font-serif text-gray-700 dark:text-gray-300 mb-4">{body}</p>
        <ul className="space-y-2 text-sm font-serif">
          {items.map((item) => (
            <li key={item} className="flex items-center gap-2 text-gray-800 dark:text-gray-200">
              <CheckIcon />
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* subtle blue outline on hover/press for all devices */}
      <span className="pointer-events-none absolute inset-0 rounded-xl ring-0 group-hover:ring-2 group-active:ring-2 ring-[#0096E6]/40 transition" />
    </div>
  );
}

function CheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4"
      style={{ color: "#0096E6" }}
      aria-hidden="true"
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <path d="m9 11 3 3L22 4" />
    </svg>
  );
}
