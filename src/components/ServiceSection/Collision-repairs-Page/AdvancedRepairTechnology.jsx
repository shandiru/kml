import React from "react";
import { Car, Wrench, Shield } from "lucide-react";

/**
 * Advanced Repair Technology
 * - Matches screenshot styling & colors
 * - Uses Lucide icons
 * - Brand green: #066a3c
 * - Background muted light gray
 */

const BRAND_GREEN = "#066a3c";
const BG_MUTED = "#f6f8fb"; // Matches light gray from screenshot

export default function AdvancedRepairTechnology() {
    const items = [
        {
            icon: <Car className="h-12 w-12 mx-auto mb-4" style={{ color: BRAND_GREEN }} />,
            title: "3D Measuring Systems",
            text: "Precision measurement technology ensures perfect structural alignment to manufacturer specifications"
        },
        {
            icon: <Wrench className="h-12 w-12 mx-auto mb-4" style={{ color: BRAND_GREEN }} />,
            title: "Frame Straightening",
            text: "State-of-the-art frame straightening equipment for precise structural repairs"
        },
        {
            icon: <Shield className="h-12 w-12 mx-auto mb-4" style={{ color: BRAND_GREEN }} />,
            title: "Safety Systems",
            text: "Complete airbag and safety system restoration with manufacturer-approved procedures"
        }
    ];

    return (
        <section className="py-16" style={{ backgroundColor: BG_MUTED }}>
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12 font-sans">
                        Advanced Repair Technology
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {items.map((item, index) => (
                            <div
                                key={index}
                                className="bg-white flex flex-col gap-6 rounded-xl border py-6 shadow-sm text-center"
                            >
                                <div className="px-6">
                                    {item.icon}
                                    <div className="leading-none font-semibold font-sans">
                                        {item.title}
                                    </div>
                                </div>
                                <div className="px-6">
                                    <p className="text-sm text-gray-600 font-serif">{item.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
