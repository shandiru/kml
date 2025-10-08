import React, { useEffect, useState, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import QuoteModal from "../components/QuoteModal";
import ThemeToggle from "../components/ThemeToggle";

const BRAND_BLUE = "#0096E6";
const BRAND_BLUE_HOVER = "#007BC2";
const BRAND_WHITE = "#FFFFFF";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [showQuoteModal, setShowQuoteModal] = useState(false);
  const servicesRef = useRef(null);

  useEffect(() => {
    const onResize = () => window.innerWidth >= 1024 && setOpen(false);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target)) {
        setServicesOpen(false);
      }
    };
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
        className="border-b bg-white text-gray-900 dark:bg-black dark:text-white fixed top-0 left-0 w-full z-50"
        style={{ borderColor: "rgba(0,0,0,0.08)" }}
      >
        <div className="container mx-auto px-4 py-3 md:py-4">
          <div className="flex items-center justify-between">
            {/* Brand */}
            <Link to="/" className="flex items-baseline">
              <h1
                className="text-xl sm:text-2xl font-bold font-sans"
                style={{ color: BRAND_BLUE }}
              >
                KML Accident
              </h1>
              <span className="ml-2 text-sm font-serif text-gray-600 dark:text-gray-300">
                Repair Centre
              </span>
            </Link>

            {/* Desktop Nav (visible lg and up) */}
            <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8 text-gray-800 dark:text-gray-200">
              <NavLink
                to="/"
                className="font-serif transition-colors hover:text-[#0096E6]"
              >
                Home
              </NavLink>

              {/* Services Dropdown */}
              <div className="relative" ref={servicesRef}>
                <button
                  onClick={() => setServicesOpen((p) => !p)}
                  className="flex items-center gap-1 font-serif transition-colors hover:text-[#0096E6] text-gray-800 dark:text-gray-200"
                >
                  Services
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-gray-800 dark:text-gray-200"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>
                {servicesOpen && (
                  <div className="absolute top-full left-0 bg-white dark:bg-gray-900 shadow-md rounded-md mt-2 py-2 z-50 w-48 animate-fadeIn">
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
                className="font-serif transition-colors hover:text-[#0096E6]"
              >
                About
              </NavLink>

              <HashLink
                smooth
                to="/#process"
                className="font-serif transition-colors hover:text-[#0096E6]"
              >
                Our Process
              </HashLink>

              <HashLink
                smooth
                to="/#contact"
                className="font-serif transition-colors hover:text-[#0096E6]"
              >
                Contact
              </HashLink>
            </nav>

            {/* CTA + Theme Toggle */}
            <div className="flex items-center space-x-3 md:space-x-4">
              <button
                className="hidden lg:inline-flex items-center justify-center rounded-md text-sm font-medium h-9 px-4 py-2 font-serif transition-colors shadow-sm"
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
              {/* Mobile Burger (visible below lg) */}
              <button
                aria-label="Toggle menu"
                className="lg:hidden inline-flex items-center justify-center w-10 h-10 text-gray-800 dark:text-white hover:text-[#0096E6] transition-colors"
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
                    className="text-gray-800 dark:text-white"
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
                    className="text-gray-800 dark:text-white"
                  >
                    <path d="M3 6h18M3 12h18M3 18h18" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Mobile Drawer (for tablet & below) */}
          {open && (
            <div
              className="lg:hidden border-t mt-3 bg-white text-gray-800 dark:bg-black dark:text-white animate-slideDown"
              style={{ borderColor: "rgba(0,0,0,0.08)" }}
            >
              <nav className="py-3 flex flex-col">
                <NavLink
                  to="/"
                  className="px-2 py-2 font-serif hover:text-[#0096E6]"
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
                        className="block py-1 text-sm transition-colors px-2 rounded hover:text-[#0096E6]"
                        onClick={() => setOpen(false)}
                      >
                        {s.label}
                      </NavLink>
                    ))}
                  </div>
                </details>

                <NavLink
                  to="/about"
                  className="px-2 py-2 font-serif hover:text-[#0096E6]"
                  onClick={() => setOpen(false)}
                >
                  About
                </NavLink>

                <HashLink
                  smooth
                  to="/#process"
                  className="px-2 py-2 font-serif hover:text-[#0096E6]"
                  onClick={() => setOpen(false)}
                >
                  Our Process
                </HashLink>

                <HashLink
                  smooth
                  to="/#contact"
                  className="px-2 py-2 font-serif hover:text-[#0096E6]"
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
