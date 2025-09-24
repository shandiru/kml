import React from "react";

export default function AboutSection() {
  const COLORS = {
    primary: "#0096E6", // KML Blue
    dark: "#000000",    // Black
    light: "#FFFFFF",   // White
    muted: "#4b5563",   // Neutral slate-600 for body text
  };

  return (
    <section className="py-16 bg-white dark:bg-black transition-colors">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1
            className="text-4xl md:text-5xl font-bold mb-6 font-sans"
            style={{ color: COLORS.primary }}
          >
            About KMLservices
          </h1>
          <p
            className="text-xl mb-8 font-serif"
            style={{ color: COLORS.muted }}
          >
            Your trusted partner for professional automotive repairs and
            insurance services across the UK.
          </p>
        </div>
      </div>
    </section>
  );
}
