// File: SpecialtyServicesGrid.jsx
"use client";
import React from "react";

export default function SpecialtyServicesGrid() {
    return (
        <section className="py-16">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12 font-sans">
                        Our Specialty Services
                    </h2>

                    {/* Row 1 */}
                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        {/* ADAS Calibrations */}
                        <div className="bg-[#eef4ff] text-slate-800 flex flex-col gap-6 rounded-xl border border-slate-200 py-6 shadow-sm h-full">
                            <div className="px-6">
                                {/* eye icon */}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="h-12 w-12 text-emerald-700 mb-4"
                                    aria-hidden="true"
                                >
                                    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                                    <circle cx="12" cy="12" r="3" />
                                </svg>

                                <div className="font-semibold text-2xl font-sans">
                                    ADAS Calibrations
                                </div>
                                <div className="text-slate-500 text-sm font-serif">
                                    Advanced Driver Assistance System calibration for modern
                                    vehicle safety features
                                </div>
                            </div>

                            <div className="px-6">
                                <div className="space-y-4">
                                    <p className="text-slate-600 font-serif">
                                        Modern vehicles rely on sophisticated safety systems that
                                        require precise calibration after any repair work. Our
                                        certified technicians use manufacturer-approved equipment to
                                        ensure your ADAS systems function correctly.
                                    </p>
                                    <ul className="space-y-2 text-sm font-serif">
                                        {[
                                            "Lane departure warning systems",
                                            "Adaptive cruise control",
                                            "Automatic emergency braking",
                                            "Blind spot monitoring",
                                            "Parking assist systems",
                                        ].map((item) => (
                                            <li key={item} className="flex items-center gap-2">
                                                <CheckIcon />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Windscreen Replacement */}
                        <div className="bg-[#eef4ff] text-slate-800 flex flex-col gap-6 rounded-xl border border-slate-200 py-6 shadow-sm h-full">
                            <div className="px-6">
                                {/* shield icon */}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="h-12 w-12 text-emerald-700 mb-4"
                                    aria-hidden="true"
                                >
                                    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                                </svg>

                                <div className="font-semibold text-2xl font-sans">
                                    Windscreen Replacement
                                </div>
                                <div className="text-slate-500 text-sm font-serif">
                                    Professional windscreen replacement with same-day service and
                                    insurance direct billing
                                </div>
                            </div>

                            <div className="px-6">
                                <div className="space-y-4">
                                    <p className="text-slate-600 font-serif">
                                        Fast, professional windscreen replacement using genuine
                                        manufacturer glass. We handle insurance claims directly and
                                        can often complete replacements the same day with mobile
                                        service available.
                                    </p>
                                    <ul className="space-y-2 text-sm font-serif">
                                        {[
                                            "Same-day replacement service",
                                            "Mobile windscreen service",
                                            "Insurance direct billing",
                                            "Genuine manufacturer glass",
                                            "ADAS recalibration included",
                                        ].map((item) => (
                                            <li key={item} className="flex items-center gap-2">
                                                <CheckIcon />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Row 2 */}
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Alloy Wheel Refurbishment */}
                        <div className="bg-[#eef4ff] text-slate-800 flex flex-col gap-6 rounded-xl border border-slate-200 py-6 shadow-sm h-full">
                            <div className="px-6">
                                {/* settings/gear icon */}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="h-12 w-12 text-emerald-700 mb-4"
                                    aria-hidden="true"
                                >
                                    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
                                    <circle cx="12" cy="12" r="3" />
                                </svg>

                                <div className="font-semibold text-2xl font-sans">
                                    Alloy Wheel Refurbishment
                                </div>
                                <div className="text-slate-500 text-sm font-serif">
                                    Complete alloy wheel restoration including diamond cutting,
                                    powder coating, and custom finishes
                                </div>
                            </div>

                            <div className="px-6">
                                <div className="space-y-4">
                                    <p className="text-slate-600 font-serif">
                                        Restore your alloy wheels to showroom condition with our
                                        comprehensive refurbishment service. From minor scuffs to
                                        major damage, we can repair and refinish wheels to original
                                        specifications or custom colors.
                                    </p>
                                    <ul className="space-y-2 text-sm font-serif">
                                        {[
                                            "Kerb damage repair",
                                            "Diamond cutting service",
                                            "Powder coating finishes",
                                            "Custom color matching",
                                            "Wheel straightening",
                                        ].map((item) => (
                                            <li key={item} className="flex items-center gap-2">
                                                <CheckIcon />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Vandalism Repairs */}
                        <div className="bg-[#eef4ff] text-slate-800 flex flex-col gap-6 rounded-xl border border-slate-200 py-6 shadow-sm h-full">
                            <div className="px-6">
                                {/* zap icon */}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="h-12 w-12 text-emerald-700 mb-4"
                                    aria-hidden="true"
                                >
                                    <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
                                </svg>

                                <div className="font-semibold text-2xl font-sans">
                                    Vandalism Repairs
                                </div>
                                <div className="text-slate-500 text-sm font-serif">
                                    Comprehensive vandalism damage repair with insurance claim
                                    support and rapid response
                                </div>
                            </div>

                            <div className="px-6">
                                <div className="space-y-4">
                                    <p className="text-slate-600 font-serif">
                                        Vandalism can be distressing and disruptive. We provide
                                        rapid response vandalism repair services with full insurance
                                        support, helping you get back on the road quickly while
                                        handling all the paperwork.
                                    </p>
                                    <ul className="space-y-2 text-sm font-serif">
                                        {[
                                            "Key scratch repairs",
                                            "Paint damage restoration",
                                            "Window replacement",
                                            "Interior damage repair",
                                            "Insurance claim assistance",
                                        ].map((item) => (
                                            <li key={item} className="flex items-center gap-2">
                                                <CheckIcon />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* /Row 2 */}
                </div>
            </div>
        </section>
    );
}

/* Small check icon used in lists */
function CheckIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4 text-emerald-700 shrink-0"
            aria-hidden="true"
        >
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <path d="m9 11 3 3L22 4" />
        </svg>
    );
}
