"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ProcessSection() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,   // animate every scroll
      mirror: true,  // animate back on scroll up
      offset: 120,
    });

    const refreshAOS = () => AOS.refresh();
    window.addEventListener("resize", refreshAOS);
    return () => window.removeEventListener("resize", refreshAOS);
  }, []);

  // ✅ Brand colors
  const COLORS = {
    primary: "#0096E6", // brand blue
    iconBg: "rgba(0,150,230,0.14)",
  };

  const steps = [
    {
      n: 1,
      title: "Contact Us",
      desc:
        "Call us immediately after your accident. We'll guide you through the initial steps and arrange everything.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24" height="24" fill="none"
          stroke={COLORS.primary} strokeWidth="2"
          strokeLinecap="round" strokeLinejoin="round"
          className="h-6 w-6"
        >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      ),
    },
    {
      n: 2,
      title: "Claim Processing",
      desc:
        "We handle all paperwork and liaise directly with your insurance company to process your claim.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24" height="24" fill="none"
          stroke={COLORS.primary} strokeWidth="2"
          strokeLinecap="round" strokeLinejoin="round"
          className="h-6 w-6"
        >
          <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
          <path d="M14 2v4a2 2 0 0 0 2 2h4" />
          <path d="M10 9H8" />
          <path d="M16 13H8" />
          <path d="M16 17H8" />
        </svg>
      ),
    },
    {
      n: 3,
      title: "Courtesy Car",
      desc:
        "Get a courtesy car delivered to keep you mobile while we repair your vehicle to the highest standards.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24" height="24" fill="none"
          stroke={COLORS.primary} strokeWidth="2"
          strokeLinecap="round" strokeLinejoin="round"
          className="h-6 w-6"
        >
          <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
          <circle cx="7" cy="17" r="2" />
          <path d="M9 17h6" />
          <circle cx="17" cy="17" r="2" />
        </svg>
      ),
    },
    {
      n: 4,
      title: "Quality Repair",
      desc:
        "Professional repair using genuine parts and latest techniques. Your car returned better than before.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24" height="24" fill="none"
          stroke={COLORS.primary} strokeWidth="2"
          strokeLinecap="round" strokeLinejoin="round"
          className="h-6 w-6"
        >
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <path d="m9 11 3 3L22 4" />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="process"
      className="py-20 px-4 sm:px-6 lg:px-8 xl:px-12 bg-white dark:bg-black transition-colors"
    >
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-sans text-gray-900 dark:text-white">
            Our Simple Process
          </h2>
          <p className="text-xl max-w-2xl mx-auto font-serif text-gray-600 dark:text-gray-300">
            We make the repair process as smooth as possible, handling
            everything from insurance claims to getting you back on the road.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div
              key={s.n}
              className="
                text-center relative rounded-xl border py-6 shadow-sm
                transition-all duration-300
                hover:shadow-[0_0_20px_rgba(0,150,230,0.6)]
                active:shadow-[0_0_25px_rgba(0,150,230,0.8)]
                hover:-translate-y-1 active:scale-[0.98]
                cursor-pointer
                bg-gray-50 dark:bg-gray-900
                border-gray-200 dark:border-gray-700
              "
              data-aos="fade-up"
              data-aos-delay={i * 150}
            >
              <div className="grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6">
                {/* Number badge */}
                <div
                  className="rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 font-bold font-sans text-white"
                  style={{ backgroundColor: COLORS.primary }}
                >
                  {s.n}
                </div>

                {/* Icon bubble */}
                <div
                  className="p-3 rounded-full w-fit mx-auto mb-4"
                  style={{ backgroundColor: COLORS.iconBg }}
                >
                  {s.icon}
                </div>

                {/* Title */}
                <div className="leading-none font-semibold font-sans text-gray-900 dark:text-white">
                  {s.title}
                </div>
              </div>

              {/* Description */}
              <div className="px-6">
                <p className="font-serif text-gray-600 dark:text-gray-300">
                  {s.desc}
                </p>
              </div>

              {/* Connector line (desktop only) */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 -translate-y-1/2">
                  <div className="w-6 h-0.5 bg-blue-400/40 dark:bg-blue-600/40" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
