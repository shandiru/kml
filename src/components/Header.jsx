import React, { useEffect, useState, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiMapPin, FiClock, FiCalendar, FiX } from "react-icons/fi";

const GREEN = "#066a3c";
const GREEN_HOVER = "#055a33";
const BRAND_GREEN = "#0b6b3a";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [showQuoteModal, setShowQuoteModal] = useState(false);
  const servicesRef = useRef(null);

  useEffect(() => {
    const onResize = () => window.innerWidth >= 768 && setOpen(false);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    function handleClickOutside(e) {
      if (servicesRef.current && !servicesRef.current.contains(e.target)) {
        setServicesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navStyle = ({ isActive }) => ({
    color: isActive ? GREEN : "#1f2937",
    borderBottom: isActive ? `2px solid ${GREEN}` : "none",
    paddingBottom: isActive ? 2 : 0,
  });

  const serviceLinks = [
    { label: "Insurance Repairs", to: "/services/insurance-repairs" },
    { label: "Bodywork & Dents", to: "/services/bodywork-dents" },
    { label: "Collision Repairs", to: "/services/collision-repairs" },
    { label: "Specialty Services", to: "/services/specialty-services" },
    { label: "Claims Support", to: "/services/claims-support" },
  ];

  return (
    <>
      <header
        className="border-b"
        style={{ borderColor: "rgba(0,0,0,0.08)", backgroundColor: "#fff" }}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Brand */}
            <Link to="/" className="flex items-baseline">
              <h1
                className="text-2xl font-bold font-sans"
                style={{ color: BRAND_GREEN }}
              >
                KMLservices
              </h1>
              <span
                className="ml-2 text-sm font-serif"
                style={{ color: "rgba(0,0,0,0.6)" }}
              >
                Insurance Repairs
              </span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center space-x-8">
              {/* Services dropdown */}
              <div className="relative" ref={servicesRef}>
                <button
                  onClick={() => setServicesOpen((prev) => !prev)}
                  className="flex items-center gap-1 font-serif transition-colors"
                  style={{ color: "#1f2937" }}
                >
                  Services
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>
                {servicesOpen && (
                  <div className="absolute top-full left-0 bg-white shadow-md rounded-md mt-2 py-2 z-50 w-48">
                    {serviceLinks.map((s) => (
                      <NavLink
                        key={s.label}
                        to={s.to}
                        className="block px-4 py-2 text-sm transition-colors"
                        style={{ color: "#1f2937" }}
                        onClick={() => setServicesOpen(false)}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = GREEN;
                          e.currentTarget.style.color = "#fff";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = "transparent";
                          e.currentTarget.style.color = "#1f2937";
                        }}
                      >
                        {s.label}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>

              <NavLink
                to="/about"
                className="font-serif transition-colors"
                style={navStyle}
              >
                About
              </NavLink>

              <a
                href="/#process"
                className="font-serif transition-colors"
                style={{ color: "#1f2937" }}
              >
                Our Process
              </a>
              <a
                href="/#contact"
                className="font-serif transition-colors"
                style={{ color: "#1f2937" }}
              >
                Contact
              </a>
            </nav>

            {/* CTA */}
            <button
              className="hidden md:inline-flex items-center justify-center rounded-md text-sm font-medium h-9 px-4 py-2 shadow-xs font-serif"
              style={{ backgroundColor: GREEN, color: "#ffffff" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = GREEN_HOVER)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = GREEN)
              }
              onClick={() => setShowQuoteModal(true)}
            >
              Get Quote
            </button>

            {/* Mobile burger */}
            <button
              aria-label="Toggle menu"
              className="md:hidden inline-flex items-center justify-center w-10 h-10"
              onClick={() => setOpen((o) => !o)}
            >
              {open ? (
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                >
                  <path d="M18 6 6 18M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                >
                  <path d="M3 6h18M3 12h18M3 18h18" />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile drawer */}
          {open && (
            <div
              className="md:hidden border-t mt-3"
              style={{ borderColor: "rgba(0,0,0,0.08)" }}
            >
              <nav className="py-3 flex flex-col">
                <details className="px-2 py-2">
                  <summary className="cursor-pointer font-serif">
                    Services
                  </summary>
                  <div className="ml-4 mt-1">
                    {serviceLinks.map((s) => (
                      <NavLink
                        key={s.label}
                        to={s.to}
                        className="block py-1 text-sm transition-colors px-2 rounded"
                        style={{ color: "#1f2937" }}
                        onClick={() => setOpen(false)}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = GREEN;
                          e.currentTarget.style.color = "#fff";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = "transparent";
                          e.currentTarget.style.color = "#1f2937";
                        }}
                      >
                        {s.label}
                      </NavLink>
                    ))}
                  </div>
                </details>

                <NavLink
                  to="/about"
                  className="px-2 py-2 font-serif"
                  style={({ isActive }) => ({
                    color: isActive ? GREEN : "#1f2937",
                  })}
                  onClick={() => setOpen(false)}
                >
                  About
                </NavLink>
                <a
                  href="/#process"
                  className="px-2 py-2 font-serif"
                  style={{ color: "#1f2937" }}
                  onClick={() => setOpen(false)}
                >
                  Our Process
                </a>
                <a
                  href="/#contact"
                  className="px-2 py-2 font-serif"
                  style={{ color: "#1f2937" }}
                  onClick={() => setOpen(false)}
                >
                  Contact
                </a>
              </nav>

              <div className="pb-4 px-2">
                <button
                  className="inline-flex w-full items-center justify-center rounded-md text-sm font-medium h-10 px-4 py-2 font-serif"
                  style={{ backgroundColor: GREEN, color: "#ffffff" }}
                  onClick={() => {
                    setOpen(false);
                    setShowQuoteModal(true);
                  }}
                >
                  Get Quote
                </button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* ✅ Quote Modal */}
      {showQuoteModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white rounded-lg shadow-lg max-w-sm w-full p-6 relative">
            {/* Close button */}
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
              onClick={() => setShowQuoteModal(false)}
            >
              <FiX className="w-5 h-5" />
            </button>

            <div className="text-center mb-6">
              <div className="flex items-center justify-center gap-2 mb-4">
                <FiMapPin className="w-5 h-5 text-green-700" />
                <h2 className="text-xl font-bold text-gray-800">
                  In-person only
                </h2>
              </div>

              <div className="space-y-2 text-gray-700 font-serif">
                <p className="flex items-center justify-center gap-2">
                  <FiClock className="w-4 h-4 text-green-700" />
                  Monday–Friday, 7:00 AM – 4:30 PM
                </p>
                <p className="flex items-center justify-center gap-2">
                  <FiCalendar className="w-4 h-4 text-green-700" />
                  Saturday by prior arrangement
                </p>
              </div>
            </div>

            <a
              href="tel:01615333003"
              className="block text-center w-full bg-green-700 hover:bg-green-800 text-white font-medium py-2 px-4 rounded-md"
            >
              Call Now: 0161 533 3003
            </a>
          </div>
        </div>
      )}
    </>
  );
}
