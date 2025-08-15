import React from "react";

const BRAND_GREEN = "#066a3c";   // primary green (number circles)
const TEXT_DARK = "#2a2f36";     // headings
const TEXT_MUTED = "#667085";    // paragraph copy

export default function BodyworkProcess() {
    const steps = [
        {
            n: 1,
            title: "Damage Assessment",
            copy:
                "Thorough inspection of all damage with detailed photography and assessment report for accurate repair planning.",
        },
        {
            n: 2,
            title: "Repair Method Selection",
            copy:
                "Choose the most appropriate repair technique - PDR for minor dents or traditional bodywork for major damage.",
        },
        {
            n: 3,
            title: "Professional Repair",
            copy:
                "Expert repair work using industry-standard techniques and equipment, with color matching for paint work.",
        },
        {
            n: 4,
            title: "Quality Control",
            copy:
                "Final inspection and quality check to ensure perfect finish and customer satisfaction before delivery.",
        },
    ];

    return (
        <section className="py-16">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <h2
                        className="text-3xl font-bold text-center mb-12 font-sans"
                        style={{ color: TEXT_DARK }}
                    >
                        Our Bodywork Process
                    </h2>

                    <div className="space-y-8">
                        {steps.map(({ n, title, copy }) => (
                            <div key={n} className="flex gap-6">
                                {/* Number badge */}
                                <div
                                    className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold"
                                    style={{ backgroundColor: BRAND_GREEN, color: "#ffffff" }}
                                    aria-hidden="true"
                                >
                                    {n}
                                </div>

                                {/* Content */}
                                <div>
                                    <h3
                                        className="text-xl font-semibold mb-2 font-sans"
                                        style={{ color: TEXT_DARK }}
                                    >
                                        {title}
                                    </h3>
                                    <p className="font-serif" style={{ color: TEXT_MUTED }}>
                                        {copy}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
