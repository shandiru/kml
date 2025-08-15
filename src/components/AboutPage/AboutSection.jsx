import React from "react";

export default function AboutSection() {
  const COLORS = {
    bg: "#e6f3f0", // background color from screenshot
    heading: "#1f2937", // dark gray heading
    text: "#374151" // muted foreground text
  };

  return (
    <section style={{ backgroundColor: COLORS.bg }} className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1
            className="text-4xl md:text-5xl font-bold mb-6 font-sans"
            style={{ color: COLORS.heading }}
          >
            About KMLservices
          </h1>
          <p
            className="text-xl mb-8 font-serif"
            style={{ color: COLORS.text }}
          >
            Your trusted partner for professional automotive repairs and
            insurance services across the UK.
          </p>
        </div>
      </div>
    </section>
  );
}
