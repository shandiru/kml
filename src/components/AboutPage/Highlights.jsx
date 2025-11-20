import React from "react";

export default function AboutHighlights() {
  const COLORS = {
    primary: "var(--primary)",
  };

  const features = [
    {
      title: "Certified Excellence",
      desc: "Industry certified technicians with ongoing training",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          stroke={COLORS.primary}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mx-auto mb-4"
        >
          <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" />
          <circle cx="12" cy="8" r="6" />
        </svg>
      ),
    },
    {
      title: "Expert Team",
      desc: "Experienced professionals dedicated to quality work",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          stroke={COLORS.primary}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mx-auto mb-4"
        >
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
    },
    {
      title: "Fast Service",
      desc: "Quick turnaround times without compromising quality",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          stroke={COLORS.primary}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mx-auto mb-4"
        >
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      ),
    },
    {
      title: "Guaranteed Work",
      desc: "All repairs backed by comprehensive warranties",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          stroke={COLORS.primary}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mx-auto mb-4"
        >
          <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-16 px-6 md:px-10 bg-white dark:bg-black transition-colors">
      <div className="container mx-auto">
        {/* Intro text */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <p className="text-lg leading-relaxed font-serif text-gray-700 dark:text-gray-300">
            KMLservices has been providing exceptional automotive repair
            services for over a decade, specializing in insurance repairs,
            collision work, and comprehensive vehicle restoration. Our
            commitment to quality and customer satisfaction has made us a
            trusted name in the industry.
          </p>
        </div>

        {/* Feature cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <div
              key={i}
              className="
                flex flex-col gap-4 rounded-xl border py-6 px-4 text-center 
                shadow-sm transition-all duration-300
                hover:shadow-[0_0_20px_rgba(0,150,230,0.6)]
                active:shadow-[0_0_25px_rgba(0,150,230,0.8)]
                hover:scale-[1.02] active:scale-[0.98]
                cursor-pointer
                bg-white dark:bg-gray-900
                border-gray-200 dark:border-gray-700
              "
            >
              <div>{f.icon}</div>
              <div className="font-semibold font-sans text-lg text-black dark:text-white">
                {f.title}
              </div>
              <p className="text-sm font-serif text-gray-600 dark:text-gray-300">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
