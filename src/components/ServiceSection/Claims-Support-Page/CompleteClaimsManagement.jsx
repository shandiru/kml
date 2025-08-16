// File: CompleteClaimsManagement.jsx
import React from "react";

export default function CompleteClaimsManagement() {
    return (
        <section className="bg-[#f6f8fe] py-16">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12 font-sans text-gray-900">
                        Complete Claims Management
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* No Fault Claims */}
                        <div className="bg-[#eff4ff] text-gray-900 flex flex-col gap-6 rounded-xl border border-[#e4e9f3] py-6 shadow-sm h-full">
                            <div className="px-6">
                                {/* users icon */}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="h-12 w-12 text-[#0a6a44] mb-4"
                                    aria-hidden="true"
                                >
                                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                                    <circle cx="9" cy="7" r="4" />
                                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                </svg>

                                <div className="font-semibold text-2xl font-sans">
                                    No Fault Claims
                                </div>
                                <div className="text-sm text-gray-600 font-serif">
                                    Specialized support for no-fault accidents where you're not to
                                    blame
                                </div>
                            </div>

                            <div className="px-6">
                                <p className="text-gray-700 font-serif mb-4">
                                    When you're involved in an accident that wasn't your fault,
                                    you shouldn't be out of pocket or inconvenienced. We handle
                                    everything to ensure you're fully compensated and back on the
                                    road quickly.
                                </p>

                                <ul className="space-y-2 text-sm font-serif">
                                    {[
                                        "Third-party insurer negotiations",
                                        "Credit hire vehicle provision",
                                        "Recovery of all costs",
                                        "Personal injury claim support",
                                        "Loss of earnings assistance",
                                    ].map((item) => (
                                        <li key={item} className="flex items-center gap-2">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="h-4 w-4 text-[#0a6a44]"
                                                aria-hidden="true"
                                            >
                                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                                <path d="m9 11 3 3L22 4" />
                                            </svg>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Insurance Liaison */}
                        <div className="bg-[#eff4ff] text-gray-900 flex flex-col gap-6 rounded-xl border border-[#e4e9f3] py-6 shadow-sm h-full">
                            <div className="px-6">
                                {/* file-text icon */}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="h-12 w-12 text-[#0a6a44] mb-4"
                                    aria-hidden="true"
                                >
                                    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                                    <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                                    <path d="M10 9H8" />
                                    <path d="M16 13H8" />
                                    <path d="M16 17H8" />
                                </svg>

                                <div className="font-semibold text-2xl font-sans">
                                    Insurance Liaison
                                </div>
                                <div className="text-sm text-gray-600 font-serif">
                                    Direct communication with all insurance companies involved in
                                    your claim
                                </div>
                            </div>

                            <div className="px-6">
                                <p className="text-gray-700 font-serif mb-4">
                                    We act as your representative with insurance companies,
                                    handling all communication, paperwork, and negotiations. You
                                    won't need to spend hours on the phone or worry about missing
                                    important deadlines.
                                </p>

                                <ul className="space-y-2 text-sm font-serif">
                                    {[
                                        "Initial claim notification",
                                        "Damage assessment coordination",
                                        "Repair authorization management",
                                        "Settlement negotiations",
                                        "Final claim closure",
                                    ].map((item) => (
                                        <li key={item} className="flex items-center gap-2">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="h-4 w-4 text-[#0a6a44]"
                                                aria-hidden="true"
                                            >
                                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                                <path d="m9 11 3 3L22 4" />
                                            </svg>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
