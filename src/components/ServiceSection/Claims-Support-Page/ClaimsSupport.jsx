// File: ClaimsSupport.jsx
import React from "react";

export default function ClaimsSupport() {
    return (
        <section className="bg-gradient-to-br from-[#e8f3ef] to-[#e3f2ec] py-16">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-sans">
                        Claims Support
                    </h1>

                    <p className="text-xl text-gray-700 mb-8 font-serif">
                        Complete end-to-end support for your insurance claim. From the
                        moment of accident to getting your repaired vehicle back, we handle
                        everything so you don't have to worry.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        {/* Primary / Start Claim */}
                        <button
                            type="button"
                            className="inline-flex items-center justify-center gap-2 bg-[#0a6a44] text-white shadow-xs hover:bg-[#095a3a] h-10 rounded-md px-6 font-medium font-serif"
                        >
                            {/* phone icon (inline SVG) */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="h-5 w-5"
                                aria-hidden="true"
                            >
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                            </svg>
                            Start Your Claim
                        </button>

                        {/* Secondary / 24/7 Support */}
                        <button
                            type="button"
                            className="inline-flex items-center justify-center gap-2 border border-gray-200 bg-white/60 backdrop-blur-[1px] text-gray-800 shadow-xs hover:bg-white h-10 rounded-md px-6 font-medium font-serif"
                        >
                            24/7 Support Line
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
