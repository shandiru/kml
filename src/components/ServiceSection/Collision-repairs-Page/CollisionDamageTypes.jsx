import React from "react";

const COLORS = {
  blue: "#0096E6",   // brand accent
  white: "#FFFFFF",  // light text/bg
  black: "#000000",  // dark text/bg
};

export default function CollisionDamageTypes() {
  return (
    <section className="py-16 bg-white dark:bg-black transition-colors">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 font-sans text-black dark:text-white">
            Types of Collision Damage We Handle
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Minor Collisions */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold font-sans text-black dark:text-white">
                Minor Collisions
              </h3>

              <div className="space-y-4">
                <ListItem
                  title="Bumper Damage"
                  text="Cracked, dented, or scratched bumpers from low-speed impacts"
                />
                <ListItem
                  title="Headlight Damage"
                  text="Broken or damaged headlights and surrounding panels"
                />
                <ListItem
                  title="Wing Mirror Damage"
                  text="Damaged or broken wing mirrors and housing"
                />
              </div>
            </div>

            {/* Major Collisions */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold font-sans text-black dark:text-white">
                Major Collisions
              </h3>

              <div className="space-y-4">
                <ListItem
                  title="Structural Damage"
                  text="Frame damage requiring precision straightening equipment"
                />
                <ListItem
                  title="Multiple Panel Damage"
                  text="Extensive damage across multiple body panels"
                />
                <ListItem
                  title="Airbag Deployment"
                  text="Complete airbag system replacement and safety checks"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- LIST ITEM ---------------- */
function ListItem({ title, text }) {
  return (
    <div className="flex items-start gap-3">
      <CheckDot className="mt-1" />
      <div>
        <h4 className="font-semibold font-sans text-black dark:text-white">
          {title}
        </h4>
        <p className="text-sm font-serif text-black/70 dark:text-white/80">
          {text}
        </p>
      </div>
    </div>
  );
}

/* ---------------- ICON ---------------- */
function CheckDot({ className = "" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke={COLORS.blue}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`h-5 w-5 ${className}`}
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <path d="m9 11 3 3L22 4" />
    </svg>
  );
}
