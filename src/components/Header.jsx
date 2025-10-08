import React, { useEffect, useState, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link"; // ✅ import
import QuoteModal from "../components/QuoteModal";
import ThemeToggle from "../components/ThemeToggle"; // ✅ Theme Toggle import

// 🎨 Brand Colors
const BRAND_BLUE = "#0096E6";
const BRAND_BLUE_HOVER = "#007BC2";
const BRAND_BLACK = "#000000";
const BRAND_WHITE = "#FFFFFF";

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
        className="border-b bg-white dark:bg-black dark:text-white"
        style={{ borderColor: "rgba(0,0,0,0.08)" }}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Brand */}
            <Link to="/" className="flex items-baseline">
              <h1
                className="text-2xl font-bold font-sans"
                style={{ color: BRAND_BLUE }}
              >
                KML Accident
              </h1>
              <span className="ml-2 text-sm font-serif text-gray-600 dark:text-gray-300">
                Repair Centre
              </span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center space-x-8">
              <NavLink
                to="/"
                className="font-serif transition-colors text-gray-800 dark:text-gray-200"
              >
                Home
              </NavLink>

              {/* Services dropdown */}
              <div className="relative" ref={servicesRef}>
                <button
                  onClick={() => setServicesOpen((prev) => !prev)}
                  className="flex items-center gap-1 font-serif transition-colors text-gray-800 dark:text-gray-200"
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
                  <div className="absolute top-full left-0 bg-white dark:bg-gray-900 shadow-md rounded-md mt-2 py-2 z-50 w-48">
                    {serviceLinks.map((s) => (
                      <NavLink
                        key={s.label}
                        to={s.to}
                        className="block px-4 py-2 text-sm transition-colors text-gray-800 dark:text-gray-200 hover:text-[#0096E6]"
                        onClick={() => setServicesOpen(false)}
                      >
                        {s.label}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>

              <NavLink
                to="/about"
                className="font-serif transition-colors text-gray-800 dark:text-gray-200"
              >
                About
              </NavLink>

              <HashLink
                smooth
                to="/#process"
                className="font-serif transition-colors text-gray-800 dark:text-gray-200"
              >
                Our Process
              </HashLink>
              <HashLink
                smooth
                to="/#contact"
                className="font-serif transition-colors text-gray-800 dark:text-gray-200"
              >
                Contact
              </HashLink>
            </nav>

            {/* CTA & Theme Toggle */}
            <div className="flex items-center space-x-4">
              <button
                className="hidden md:inline-flex items-center justify-center rounded-md text-sm font-medium h-9 px-4 py-2 shadow-xs font-serif"
                style={{ backgroundColor: BRAND_BLUE, color: BRAND_WHITE }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = BRAND_BLUE_HOVER)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = BRAND_BLUE)
                }
                onClick={() => setShowQuoteModal(true)}
              >
                Get Quote
              </button>

              <ThemeToggle />
            </div>

            {/* Mobile burger */}
            <button
              aria-label="Toggle menu"
              className="md:hidden inline-flex items-center justify-center w-10 h-10 text-gray-800 dark:text-white hover:text-[#0096E6] transition-colors"
              onClick={() => setOpen((o) => !o)}
            >
              {open ? (
                // Close (X) Icon
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
                // Hamburger Icon
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
              className="md:hidden border-t mt-3 bg-white dark:bg-black dark:text-white"
              style={{ borderColor: "rgba(0,0,0,0.08)" }}
            >
              <nav className="py-3 flex flex-col">
                <NavLink
                  to="/"
                  className="px-2 py-2 font-serif text-gray-800 dark:text-gray-200"
                  onClick={() => setOpen(false)}
                >
                  Home
                </NavLink>

                <details className="px-2 py-2">
                  <summary className="cursor-pointer font-serif">
                    Services
                  </summary>
                  <div className="ml-4 mt-1">
                    {serviceLinks.map((s) => (
                      <NavLink
                        key={s.label}
                        to={s.to}
                        className="block py-1 text-sm transition-colors px-2 rounded text-gray-800 dark:text-gray-200 hover:text-[#0096E6]"
                        onClick={() => setOpen(false)}
                      >
                        {s.label}
                      </NavLink>
                    ))}
                  </div>
                </details>

                <NavLink
                  to="/about"
                  className="px-2 py-2 font-serif text-gray-800 dark:text-gray-200"
                  onClick={() => setOpen(false)}
                >
                  About
                </NavLink>

                <HashLink
                  smooth
                  to="/#process"
                  className="px-2 py-2 font-serif text-gray-800 dark:text-gray-200"
                  onClick={() => setOpen(false)}
                >
                  Our Process
                </HashLink>
                <HashLink
                  smooth
                  to="/#contact"
                  className="px-2 py-2 font-serif text-gray-800 dark:text-gray-200"
                  onClick={() => setOpen(false)}
                >
                  Contact
                </HashLink>
              </nav>

              <div className="pb-4 px-2 flex items-center justify-between">
                <button
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium h-10 px-4 py-2 font-serif"
                  style={{ backgroundColor: BRAND_BLUE, color: BRAND_WHITE }}
                  onClick={() => {
                    setOpen(false);
                    setShowQuoteModal(true);
                  }}
                >
                  Get Quote
                </button>
                <ThemeToggle />
              </div>
            </div>
          )}
        </div>
      </header>

      {showQuoteModal && <QuoteModal onClose={() => setShowQuoteModal(false)} />}
    </>
  );
}
