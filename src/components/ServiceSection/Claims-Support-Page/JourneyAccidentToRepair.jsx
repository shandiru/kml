// File: JourneyAccidentToRepair.jsx
import React from "react";

export default function JourneyAccidentToRepair() {
    const steps = [
        {
            n: 1,
            title: "Accident Happens - Call Us First",
            body:
                "The moment you have an accident, call our  helpline. We'll guide you through the immediate steps, arrange recovery if needed, and start your claim process right away.",
        },
        {
            n: 2,
            title: "Immediate Support & Courtesy Car",
            body:
                "We arrange a courtesy car or van to keep you mobile while your vehicle is being repaired. No waiting around - we get you back on the road immediately.",
        },
        {
            n: 3,
            title: "We Handle All Insurance Work",
            body:
                "Our claims specialists contact all relevant insurance companies, provide damage assessments, and handle all paperwork. You don't need to speak to anyone except us.",
        },
        {
            n: 4,
            title: "Professional Repairs",
            body:
                "Your vehicle is repaired to the highest standards using genuine parts and manufacturer-approved methods. We keep you updated throughout the repair process.",
        },
        {
            n: 5,
            title: "Vehicle Delivery & Claim Closure",
            body:
                "We deliver your fully repaired vehicle and handle the final claim closure with your insurance company. All paperwork completed, warranty provided, and you're back to normal.",
        },
    ];

    return (
        <section className="bg-white py-16">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12 font-sans text-gray-900">
                        Your Journey From Accident to Repair
                    </h2>

                    <div className="space-y-8">
                        {steps.map((s) => (
                            <div key={s.n} className="flex gap-6">
                                {/* number circle — deep green like the screenshot */}
                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#0a6a44] text-white font-bold flex items-center justify-center">
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
