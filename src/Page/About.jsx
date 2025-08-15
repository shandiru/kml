import React from "react";

// Sections from components/AboutPage
import AboutSection from "../components/AboutPage/AboutSection.jsx";
import Highlights from "../components/AboutPage/Highlights.jsx";

export default function About() {
  return (
    <div>
      {/* About section */}
      <section id="about">
        <AboutSection />
      </section>

      {/* Highlights */}
      <section id="highlights">
        <Highlights />
      </section>
    </div>
  );
}
