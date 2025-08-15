import React from "react";

/**
 * CollisionRepairServices
 * - Heading + 3 feature cards
 * - Card tint and border tuned to the screenshot
 * - Brand/primary green matches the rest of your site
 */

const BRAND_GREEN = "#066a3c";        // icon / accents
const CARD_BG = "#EEF4FA";        // subtle blue card tint from image
const CARD_BORDER = "#E5EAF0";        // soft border line

export default function CollisionRepairServices() {
    return (
        <section className="py-16">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12 font-sans">
                        Collision Repair Services
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Card 1 */}
                        <div
                            className="flex flex-col gap-6 rounded-xl py-6 shadow-sm"
                            style={{ backgroundColor: CARD_BG, border: `1px solid ${CARD_BORDER}` }}
                        >
                            <div className="grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6">
                                {/* Triangle Alert icon */}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="h-12 w-12 mb-4"
                                    style={{ color: BRAND_GREEN }}
                                >
                                    <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" />
                                    <path d="M12 9v4" />
                                    <path d="M12 17h.01" />
                                </svg>

                                <div className="leading-none font-semibold font-sans">
                                    Accident Damage
                                </div>
                                <div className="text-muted-foreground text-sm font-serif">
                                    Complete repair services for all types of collision damage from
                                    minor to major accidents
                                </div>
                            </div>

                            <div className="px-6">
                                <ul className="space-y-2 text-sm font-serif">
                                    {[
                                        "Front-end collisions",
                                        "Rear-end impacts",
                                        "Side impact damage",
                                        "Multi-vehicle accidents",
                                    ].map((item) => (
                                        <li key={item} className="flex items-center gap-2">
                                            <CheckDot />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div
                            className="flex flex-col gap-6 rounded-xl py-6 shadow-sm"
                            style={{ backgroundColor: CARD_BG, border: `1px solid ${CARD_BORDER}` }}
                        >
                            <div className="grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6">
                                {/* Shield icon */}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="h-12 w-12 mb-4"
                                    style={{ color: BRAND_GREEN }}
                                >
                                    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                                </svg>

                                <div className="leading-none font-semibold font-sans">
                                    Structural Repairs
                                </div>
                                <div className="text-muted-foreground text-sm font-serif">
                                    Advanced structural repair using precision equipment and
                                    manufacturer specifications
                                </div>
                            </div>

                            <div className="px-6">
                                <ul className="space-y-2 text-sm font-serif">
                                    {[
                                        "Frame straightening",
                                        "Unibody repairs",
                                        "Chassis alignment",
                                        "Safety system restoration",
                                    ].map((item) => (
                                        <li key={item} className="flex items-center gap-2">
                                            <CheckDot />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div
                            className="flex flex-col gap-6 rounded-xl py-6 shadow-sm"
                            style={{ backgroundColor: CARD_BG, border: `1px solid ${CARD_BORDER}` }}
                        >
                            <div className="grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6">
                                {/* Wrench icon */}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="h-12 w-12 mb-4"
                                    style={{ color: BRAND_GREEN }}
                                >
                                    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                                </svg>

                                <div className="leading-none font-semibold font-sans">
                                    Complete Restoration
                                </div>
                                <div className="text-muted-foreground text-sm font-serif">
                                    Full vehicle restoration including mechanical, electrical, and
                                    cosmetic repairs
                                </div>
                            </div>

                            <div className="px-6">
                                <ul className="space-y-2 text-sm font-serif">
                                    {[
                                        "Engine bay repairs",
                                        "Electrical system repair",
                                        "Interior restoration",
                                        "Paint and finish work",
                                    ].map((item) => (
                                        <li key={item} className="flex items-center gap-2">
                                            <CheckDot />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        {/* /Card 3 */}
                    </div>
                </div>
            </div>
        </section>
    );
}

/* Small check-with-circle icon, tinted to brand green */
function CheckDot() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ color: BRAND_GREEN }}
        >
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <path d="m9 11 3 3L22 4" />
        </svg>
    );
}
