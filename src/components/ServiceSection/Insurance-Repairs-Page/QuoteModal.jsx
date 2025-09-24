import React from "react";
import {
  FiPhone,
  FiMapPin,
  FiSearch,
  FiFileText,
  FiClipboard,
  FiClock,
  FiX,
} from "react-icons/fi";

const COLORS = {
  primary: "#0096E6", // Brand Blue
  black: "#000000",
  white: "#FFFFFF",
};

const steps = [
  {
    icon: <FiPhone className="w-5 h-5" />,
    title: "Give Us a Call",
    desc: "Start by calling us to arrange a time that suits you for your free quote.",
  },
  {
    icon: <FiMapPin className="w-5 h-5" />,
    title: "Bring Your Vehicle In",
    desc: "Pop down to our workshop and we'll take a look at your vehicle together.",
  },
  {
    icon: <FiSearch className="w-5 h-5" />,
    title: "We Inspect the Damage",
    desc: "Our team will carefully check over the vehicle to understand exactly what's needed.",
  },
  {
    icon: <FiFileText className="w-5 h-5" />,
    title: "Full Comprehensive Estimate",
    desc: "One of our approved VDA engineers will prepare a detailed estimate using professional systems.",
  },
  {
    icon: <FiClipboard className="w-5 h-5" />,
    title: "Clear Quote & Easy Booking",
    desc: "We'll explain the estimate, answer your questions, and confirm a repair date.",
  },
  {
    icon: <FiClock className="w-5 h-5" />,
    title: "Agree a Completion Time",
    desc: "Before you leave, we'll give you a clear idea of how long the job will take.",
  },
];

export default function QuoteModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 dark:bg-black/80 flex justify-center items-start overflow-y-auto transition-colors">
      <div className="bg-white dark:bg-gray-900 rounded-xl shadow-2xl w-full max-w-2xl p-8 relative mt-10 mb-10 mx-4 transition-colors">
        {/* Close button */}
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white"
          onClick={onClose}
        >
          <FiX className="w-6 h-6" />
        </button>

        {/* Header */}
        <div className="text-center mb-10">
          <span className="inline-block bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-xs font-medium px-4 py-1 rounded-full mb-3">
            Free Quote & Estimate
          </span>
          <h2 className="text-3xl font-bold mb-3 text-gray-900 dark:text-white">
            How Our Free Quote & Estimate Works
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
            Our comprehensive 6-step process ensures you get a professional
            estimate and transparent service every time.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-6">
          {steps.map((s, i) => (
            <div key={i} className="flex items-start gap-6">
              <div className="flex flex-col items-center">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white shadow-md"
                  style={{ backgroundColor: COLORS.primary }}
                >
                  {s.icon}
                </div>
                {i < steps.length - 1 && (
                  <div className="flex-grow w-px bg-gray-300 dark:bg-gray-700 mt-1" />
                )}
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-sm p-5 flex-1 transition-colors">
                <h3 className="font-semibold text-gray-800 dark:text-white text-lg">
                  {s.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-10 border-t border-gray-200 dark:border-gray-700 pt-6 text-center">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
            Contact Us Today
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">In-person only</p>
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            Monday–Friday, 7:00 AM – 4:30 PM
          </p>
          <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
            Saturday by prior arrangement
          </p>
          <a
            href="tel:01615333003"
            className="inline-block text-white font-medium py-2 px-6 rounded-lg shadow-md transition-all 
                       hover:shadow-lg hover:shadow-[#0096E6]/50 hover:-translate-y-0.5 active:scale-95"
            style={{ backgroundColor: COLORS.primary }}
          >
            Call Now: 0161 533 3003
          </a>
        </div>
      </div>
    </div>
  );
}
