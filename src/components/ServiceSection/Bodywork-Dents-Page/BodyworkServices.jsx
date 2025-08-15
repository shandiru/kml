import React from "react";
import {
    Hammer,
    Paintbrush,
    Wrench,
    CircleCheckBig,
} from "lucide-react";

const BRAND_GREEN = "#066a3c";
const CARD_BG = "#eef5ff"; // subtle cool light-blue like in the image
const BORDER = "rgba(0,0,0,.08)";

export default function BodyworkServices() {
    const cards = [
        {
            title: "Dent Removal",
            icon: <Hammer className="h-12 w-12" />,
            desc:
                "Professional dent repair using paintless dent removal and traditional bodywork techniques",
            bullets: [
                "Paintless dent removal (PDR)",
                "Traditional panel beating",
                "Hail damage repair",
                "Door ding removal",
            ],
        },
        {
            title: "Scratch Repair",
            icon: <Paintbrush className="h-12 w-12" />,
            desc:
                "Complete scratch removal and paint restoration services for all types of surface damage",
            bullets: [
                "Key scratch repair",
                "Scuff mark removal",
                "Paint touch-ups",
                "Clear coat restoration",
            ],
        },
        {
            title: "Panel Replacement",
            icon: <Wrench className="h-12 w-12" />,
            desc:
                "Complete panel replacement and fitting using genuine manufacturer parts",
            bullets: [
                "Door panel replacement",
                "Wing and quarter panels",
                "Bumper replacement",
                "Bonnet and boot lids",
            ],
        },
    ];

    return (
        <section className="py-16">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12 font-sans text-gray-800">
                        Our Bodywork Services
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {cards.map((c) => (
                            <div
                                key={c.title}
                                className="flex flex-col gap-6 rounded-xl py-6 shadow-sm"
                                style={{ backgroundColor: CARD_BG, border: `1px solid ${BORDER}` }}
                            >
                                <div className="px-6">
                                    <div
                                        className="mb-4"
                                        style={{ color: BRAND_GREEN }}
                                        aria-hidden="true"
                                    >
                                        {c.icon}
                                    </div>
                                    <div className="leading-none font-semibold font-sans text-gray-800">
                                        {c.title}
                                    </div>
                                    <div className="text-sm text-gray-600 mt-2 font-serif">
                                        {c.desc}
                                    </div>
                                </div>

                                <div className="px-6">
                                    <ul className="space-y-2 text-sm font-serif">
                                        {c.bullets.map((b, i) => (
                                            <li key={i} className="flex items-center gap-2">
                                                <CircleCheckBig
                                                    className="h-4 w-4"
                                                    style={{ color: BRAND_GREEN }}
                                                    aria-hidden="true"
                                                />
                                                <span className="text-gray-800">{b}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
