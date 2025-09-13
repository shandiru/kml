// File: SpecialtyServices.jsx
"use client";
import React from "react";

export default function SpecialtyServices() {
    return (
        <section className="bg-[#f1f7ff] py-16">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-sans">
                        Specialty Services
                    </h1>

                    <p className="text-xl text-gray-700 mb-8 font-serif">
                        Advanced automotive services including ADAS calibration, windscreen
                        replacement, alloy wheel refurbishment, and vandalism repairs. Expert
                        solutions for specialized vehicle needs.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            type="button"
                            className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 bg-green-800 text-white shadow-xs hover:bg-green-700 h-10 rounded-md px-6 font-serif"
                        >
                            {/* Phone icon (inline SVG to avoid extra deps) */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="mr-2 h-5 w-5"
                                aria-hidden="true"
                            >
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                            </svg>
                            Book Service
                        </button>

                        <button
                            type="button"
                            className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 border shadow-xs hover:bg-gray-100 hover:text-gray-900 h-10 rounded-md px-6 bg-transparent text-gray-700 font-serif"
                        >
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
