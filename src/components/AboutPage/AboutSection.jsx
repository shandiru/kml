import React from "react";

export default function AboutSection() {
  const COLORS = {
     primary: "var(--primary)",
  };

  return (
    <section className="py-16 bg-white dark:bg-black transition-colors">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Heading */}
          <h1
            className="text-4xl md:text-5xl font-bold mb-6 font-sans text-[#0096E6]"
          >
            About KMLservices
          </h1>

          {/* Subtitle / body */}
          <p className="text-xl mb-8 font-serif text-gray-700 dark:text-gray-300">
            Your trusted partner for professional automotive repairs and
            insurance services across the UK.
          </p>
        </div>
      </div>
    </section>
  );
}
