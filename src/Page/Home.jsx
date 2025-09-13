import React from "react";

// Sections from components/HomePage
import HeroSection from "../components/HomePage/HeroSection.jsx";
import ServicesSection from "../components/HomePage/ServicesSection.jsx";
import ProcessSection from "../components/HomePage/ProcessSection.jsx";
import ContactSection from "../components/HomePage/ContactSection.jsx";
import ReviewsSlider from "../components/HomePage/Testimonial.jsx";
export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section id="hero">
        <HeroSection />
      </section>

      {/* Services */}
      <section id="services">
        <ServicesSection />
      </section>

      {/* Process */}
      <section id="process">
        <ProcessSection />
      </section>
      <section>
        <ReviewsSlider />
      </section>

      {/* Contact */}
      <section id="contact">
        <ContactSection />
      </section>
    </div>
  );
}
