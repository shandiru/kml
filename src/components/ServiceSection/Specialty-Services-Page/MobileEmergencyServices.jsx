// File: MobileEmergencyServices.jsx
import React from "react";

export default function MobileEmergencyServices() {
    return (
        <section className="bg-[#f6f8fe] py-16">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Heading */}
                    <h2 className="text-3xl font-bold mb-6 font-sans text-gray-900">
                        Mobile &amp; Emergency Services
                    </h2>
                    <p className="text-xl text-gray-700 mb-8 font-serif">
                        Many of our specialty services are available as mobile services. We
                        can come to your location for windscreen replacement, wheel
                        collection, and emergency vandalism repairs.
                    </p>

                    {/* Cards */}
                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                        {/* Mobile Service */}
                        <div className="bg-white text-gray-900 flex flex-col gap-6 rounded-xl border border-gray-200 py-6 shadow-sm">
                            <div className="px-6 text-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="h-8 w-8 text-green-700 mx-auto mb-2"
                                >
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                </svg>
                                <div className="font-semibold text-lg font-sans">
                                    Mobile Service
                                </div>
                            </div>
                            <div className="px-6 text-center">
                                <p className="text-sm text-gray-600 font-serif">
                                    Windscreen replacement and wheel collection available at your
                                    location
                                </p>
                            </div>
                        </div>

                        {/* Emergency Response */}
                        <div className="bg-white text-gray-900 flex flex-col gap-6 rounded-xl border border-gray-200 py-6 shadow-sm">
                            <div className="px-6 text-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="h-8 w-8 text-green-700 mx-auto mb-2"
                                >
                                    <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
                                </svg>
                                <div className="font-semibold text-lg font-sans">
                                    Emergency Response
                                </div>
                            </div>
                            <div className="px-6 text-center">
                                <p className="text-sm text-gray-600 font-serif">
                                    Rapid response for vandalism damage and emergency windscreen
                                    replacement
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
