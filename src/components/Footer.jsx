// src/components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-100 dark:bg-gray-900 dark:text-gray-200 py-7 px-4 sm:px-6 lg:px-8 xl:px-12">
      <div className="container mx-auto px-4">
        {/* Tablet fix: 2 columns, Email font smaller at 1024 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 font-sans text-white">
              KMLservices
            </h3>
            <p className="text-sm mb-4 opacity-90 font-serif text-gray-300 leading-relaxed">
              Your trusted partner for professional insurance repairs, collision
              work, and complete automotive repair services.
            </p>

            <div className="space-y-2 text-sm">
              {/* Phone */}
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <a
                  href="tel:01615333003"
                  className="font-serif hover:text-blue-500 transition-colors"
                >
                  0161 533 3003
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                {/* Opens Gmail compose directly */}
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=kmlaccidentrepairecentreltd@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-serif hover:text-blue-500 transition-colors break-words max-w-[260px] text-sm md:text-[13px] lg:text-sm"
                >
                  kmlaccidentrepairecentreltd@gmail.com
                </a>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 mt-6">
              <a
                href="https://web.facebook.com/KMLAccidentRepairCentre/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition-colors"
              >
                <FaFacebookF size={18} />
              </a>
              <a
                href="https://www.instagram.com/kml_accident_repair_centre/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-500 transition-colors"
              >
                <FaInstagram size={18} />
              </a>
            </div>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="font-semibold mb-4 font-sans text-white">
              Our Services
            </h4>
            <ul className="space-y-2 text-sm opacity-90 font-serif">
              <li>
                <Link to="/services/insurance-repairs" className="hover:text-blue-500">
                  Insurance Repairs
                </Link>
              </li>
              <li>
                <Link to="/services/collision-repairs" className="hover:text-blue-500">
                  Collision Repairs
                </Link>
              </li>
              <li>
                <Link to="/services/bodywork-dents" className="hover:text-blue-500">
                  Bodywork &amp; Dents
                </Link>
              </li>
              <li>
                <Link to="/services/specialty-services" className="hover:text-blue-500">
                  End of Lease Repairs
                </Link>
              </li>
              <li>
                <Link to="/services/claims-support" className="hover:text-blue-500">
                  Windscreen Replacement
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4 font-sans text-white">
              Support
            </h4>
            <ul className="space-y-2 text-sm opacity-90 font-serif">
              <li>
                <Link to="/" className="hover:text-blue-500">
                  Accident Support
                </Link>
              </li>
              <li>
                <Link to="/services/claims-support" className="hover:text-blue-500">
                  Insurance Claims
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-blue-500">
                  Courtesy Cars
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-blue-500">
                  Free Estimates
                </Link>
              </li>
              <li>
                <Link to="/services/specialty-services" className="hover:text-blue-500">
                  ADAS Calibration
                </Link>
              </li>
            </ul>
          </div>

          {/* Emergency Contact */}
          <div>
            <h4 className="font-semibold mb-4 font-sans text-white">
              Contact Support
            </h4>
            <div className="bg-blue-600/20 p-4 rounded">
              <p className="text-sm mb-2 font-serif text-gray-200">
                Accident Helpline:
              </p>
              <a
                href="tel:01615333003"
                className="text-lg font-bold text-white hover:text-blue-400"
              >
                0161 533 3003
              </a>
              <p className="text-xs mt-2 opacity-75 font-serif text-gray-300">
                Available for immediate assistance
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center">
          <p className="text-sm opacity-75 font-serif text-gray-400">
            © 2025 KMLservices. All rights reserved. Professional automotive
            repair services nationwide.
          </p>
          <div className="flex justify-center gap-4 mt-3 text-sm font-serif text-gray-400 flex-wrap">
            <Link to="/terms-conditions" className="hover:text-blue-400 hover:underline underline-offset-4">
              Terms &amp; Conditions
            </Link>
            <Link to="/privacy-policy" className="hover:text-blue-400 hover:underline underline-offset-4">
              Privacy Policy
            </Link>
          </div>
          <p className="text-sm mt-3 font-serif text-gray-400">
            Powered by{" "}
            <a
              href="https://www.ansely.co.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 hover:underline underline-offset-4"
            >
              Ansely
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
