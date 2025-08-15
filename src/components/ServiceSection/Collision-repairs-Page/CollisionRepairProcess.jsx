import React from "react";

/**
 * Our Collision Repair Process
 * - Uses brand green (#066a3c) for numbered circles
 * - Typography and spacing matched to screenshot
 */

const BRAND_GREEN = "#066a3c";

export default function CollisionRepairProcess() {
    const steps = [
        {
            number: 1,
            title: "Emergency Response",
            text: "24/7 emergency response service. We arrange recovery, provide courtesy cars, and begin the claims process immediately."
        },
        {
            number: 2,
            title: "Comprehensive Assessment",
            text: "Detailed damage assessment including hidden damage inspection using advanced diagnostic equipment and 3D measuring systems."
        },
        {
            number: 3,
            title: "Precision Repair",
            text: "Expert repair work using manufacturer-approved methods, genuine parts, and state-of-the-art equipment for structural and cosmetic repairs."
        },
        {
            number: 4,
            title: "Safety & Quality Checks",
            text: "Comprehensive safety inspection, road testing, and final quality control before vehicle handover with full documentation."
        }
    ];

    return (
        <section className="py-16">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12 font-sans">
                        Our Collision Repair Process
                    </h2>

                    <div className="space-y-8">
                        {steps.map((step) => (
                            <div key={step.number} className="flex gap-6">
                                <div
                                    className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-white"
                                    style={{ backgroundColor: BRAND_GREEN }}
                                >
                                    {step.number}
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-2 font-sans">
                                        {step.title}
                                    </h3>
                                    <p className="text-muted-foreground font-serif">{step.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
