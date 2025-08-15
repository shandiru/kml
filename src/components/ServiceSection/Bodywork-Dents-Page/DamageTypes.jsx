import React from "react";
import { CircleCheckBig } from "lucide-react";

const BRAND_GREEN = "#066a3c";   // icon color
const BG_MUTED = "#f3f7fb";      // light muted page bg to match the image
const TEXT_DARK = "#2a2f36";
const TEXT_MUTED = "#667085";

export default function DamageTypes() {
    const minor = [
        {
            title: "Car Park Dents",
            desc: "Small dents from car doors and shopping trolleys",
        },
        {
            title: "Surface Scratches",
            desc: "Light scratches that haven't penetrated the paint",
        },
        {
            title: "Scuff Marks",
            desc: "Paint transfer from other vehicles or objects",
        },
    ];

    const major = [
        {
            title: "Deep Scratches",
            desc: "Scratches through to the metal requiring full repair",
        },
        {
            title: "Large Dents",
            desc: "Significant dents requiring panel work and repainting",
        },
        {
            title: "Panel Damage",
            desc: "Severe damage requiring panel replacement",
        },
    ];

    const Item = ({ title, desc }) => (
        <div className="flex items-start gap-3">
            <CircleCheckBig
                className="h-5 w-5 mt-1 shrink-0"
                style={{ color: BRAND_GREEN }}
                aria-hidden="true"
            />
            <div>
                <h4 className="font-semibold font-sans" style={{ color: TEXT_DARK }}>
                    {title}
                </h4>
                <p className="text-sm font-serif" style={{ color: TEXT_MUTED }}>
                    {desc}
                </p>
            </div>
        </div>
    );

    return (
        <section className="py-16" style={{ backgroundColor: BG_MUTED }}>
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <h2
                        className="text-3xl font-bold text-center mb-12 font-sans"
                        style={{ color: TEXT_DARK }}
                    >
                        Types of Damage We Repair
                    </h2>

                    {/* Two equal columns; Minor (left) and Major (right) */}
                    <div className="grid md:grid-cols-2 gap-12 ">
                        {/* Minor column */}
                        <div className="space-y-6">
                            <h3
                                className="text-2xl font-semibold font-sans"
                                style={{ color: TEXT_DARK }}
                            >
                                Minor Damage
                            </h3>
                            <div className="space-y-4">
                                {minor.map((m) => (
                                    <Item key={m.title} title={m.title} desc={m.desc} />
                                ))}
                            </div>
                        </div>

                        {/* Major column */}
                        <div className="space-y-6">
                            <h3
                                className="text-2xl font-semibold font-sans"
                                style={{ color: TEXT_DARK }}
                            >
                                Major Damage
                            </h3>
                            <div className="space-y-4">
                                {major.map((m) => (
                                    <Item key={m.title} title={m.title} desc={m.desc} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
