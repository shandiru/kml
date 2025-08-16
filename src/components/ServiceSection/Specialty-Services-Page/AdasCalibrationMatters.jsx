// File: AdasCalibrationMatters.jsx
"use client";
import React from "react";

export default function AdasCalibrationMatters() {
    return (
        <section className="bg-[#f1f5fe] py-16">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    {/* Heading */}
                    <h2 className="text-3xl font-bold text-center mb-8 font-sans text-gray-900">
                        Why ADAS Calibration Matters
                    </h2>
                    <p className="text-lg text-center text-gray-700 mb-12 font-serif">
                        Modern vehicles are equipped with sophisticated safety systems that
                        save lives. After any collision or windscreen replacement, these
                        systems must be recalibrated to function correctly.
                    </p>

                    {/* 3 Columns */}
                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Safety Critical */}
                        <div className="text-center">
                            <div className="w-16 h-16 bg-[#d4ede5] rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="h-8 w-8 text-[#155c3b]"
                                >
                                    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2 font-sans text-gray-900">
                                Safety Critical
                            </h3>
                            <p className="text-gray-700 font-serif">
                                Incorrectly calibrated systems can fail to protect you when you
                                need them most
                            </p>
                        </div>

                        {/* Manufacturer Approved */}
                        <div className="text-center">
                            <div className="w-16 h-16 bg-[#d4ede5] rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="h-8 w-8 text-[#155c3b]"
                                >
                                    <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" />
                                    <circle cx="12" cy="8" r="6" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2 font-sans text-gray-900">
                                Manufacturer Approved
                            </h3>
                            <p className="text-gray-700 font-serif">
                                We use only manufacturer-approved calibration procedures and
                                equipment
                            </p>
                        </div>

                        {/* Certified Technicians */}
                        <div className="text-center">
                            <div className="w-16 h-16 bg-[#d4ede5] rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="h-8 w-8 text-[#155c3b]"
                                >
                                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                    <path d="m9 11 3 3L22 4" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2 font-sans text-gray-900">
                                Certified Technicians
                            </h3>
                            <p className="text-gray-700 font-serif">
                                Our technicians are certified and regularly trained on the
                                latest ADAS technologies
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
