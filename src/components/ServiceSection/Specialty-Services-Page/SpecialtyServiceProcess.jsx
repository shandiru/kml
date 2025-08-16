// File: SpecialtyServiceProcess.jsx
import React from "react";

export default function SpecialtyServiceProcess() {
    const steps = [
        {
            n: 1,
            title: "Initial Consultation",
            body:
                "We assess your specific needs and explain the required services, including any ADAS systems that need calibration after repairs.",
        },
        {
            n: 2,
            title: "Specialized Equipment Setup",
            body:
                "Using manufacturer-specific diagnostic tools and calibration equipment to ensure precise adjustments and measurements.",
        },
        {
            n: 3,
            title: "Expert Service Delivery",
            body:
                "Our certified technicians perform the specialized service using approved procedures and genuine parts where required.",
        },
        {
            n: 4,
            title: "Testing & Certification",
            body:
                "Comprehensive testing to ensure all systems function correctly, with certification documentation provided for your records.",
        },
    ];

    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12 font-sans text-gray-900">
                        Our Specialty Service Process
                    </h2>

                    <div className="space-y-8">
                        {steps.map((s) => (
                            <div key={s.n} className="flex gap-6">
                                {/* Step number circle — deep green like the screenshot */}
                                <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-white bg-[#0a6a44]">
                                    {s.n}
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold mb-2 font-sans text-gray-900">
                                        {s.title}
                                    </h3>
                                    <p className="text-gray-700 font-serif">{s.body}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
