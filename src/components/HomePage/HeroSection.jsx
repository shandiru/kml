import React from "react";

export default function HeroSection() {
  const PRIMARY = "#0b6b3a";      // deep green
  const PRIMARY_HOVER = "#085a31";
  const FG = "#1f2937";           // heading text
  const MUTED = "#4b5563";        // body text

  const PHONE = "0161 533 3003";
  const TEL_LINK = "tel:0161 533 3003";

  return (
    <section
      className="relative py-20"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(11,107,58,0.05) 0%, rgba(6,104,60,0.05) 100%)`,
      }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1
            className="text-4xl md:text-6xl font-bold mb-6 font-sans"
            style={{ color: FG }}
          >
            Your Trusted Partner in
            <span className="block md:inline"> </span>
            <span style={{ color: PRIMARY }}> Insurance Repairs</span>
          </h1>

          <p
            className="text-xl mb-8 max-w-2xl mx-auto font-serif leading-relaxed"
            style={{ color: MUTED }}
          >
            From the moment of accident to getting you back on the road, we
            handle everything. Professional repairs, courtesy cars, and
            complete insurance claim support.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="#contact"
              className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium rounded-md h-10 px-6 font-serif shadow-xs transition-colors"
              style={{ backgroundColor: PRIMARY, color: "#ffffff" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = PRIMARY_HOVER)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = PRIMARY)
              }
            >
              Get Free Estimate
            </a>

            <a
              href={TEL_LINK}
              className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium rounded-md h-10 px-6 font-serif border shadow-xs transition-colors"
              style={{
                backgroundColor: "transparent",
                borderColor: "#e5e7eb",
                color: FG,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = PRIMARY;
                e.currentTarget.style.color = "#ffffff";
                e.currentTarget.style.borderColor = PRIMARY;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = FG;
                e.currentTarget.style.borderColor = "#e5e7eb";
              }}
            >
              Call Now: {PHONE}
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {/* Feature 1 */}
            <div className="flex flex-col items-center">
              <div
                className="p-4 rounded-full mb-4"
                style={{ backgroundColor: "rgba(11,107,58,0.10)" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={PRIMARY}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2 font-sans" style={{ color: FG }}>
                Insurance Approved
              </h3>
              <p className="text-sm font-serif text-center" style={{ color: MUTED }}>
                Trusted by major insurance companies nationwide
              </p>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col items-center">
              <div
                className="p-4 rounded-full mb-4"
                style={{ backgroundColor: "rgba(11,107,58,0.10)" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={PRIMARY}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
                  <circle cx="7" cy="17" r="2" />
                  <path d="M9 17h6" />
                  <circle cx="17" cy="17" r="2" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2 font-sans" style={{ color: FG }}>
                Courtesy Cars
              </h3>
              <p className="text-sm font-serif text-center" style={{ color: MUTED }}>
                Keep you mobile while we repair your vehicle
              </p>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col items-center">
              <div
                className="p-4 rounded-full mb-4"
                style={{ backgroundColor: "rgba(11,107,58,0.10)" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={PRIMARY}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2 font-sans" style={{ color: FG }}>
                Full Support
              </h3>
              <p className="text-sm font-serif text-center" style={{ color: MUTED }}>
                We handle your claim from start to finish
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
