import React from "react";
import { Phone } from "lucide-react";

/**
 * Need Collision Repair Services Section
 * - Background: very light gray-blue (#f4f7fb)
 * - Brand green: #066a3c
 */

const BG_LIGHT_GRAY_BLUE = "#f4f7fb";
const BRAND_GREEN = "#066a3c";

export default function CollisionRepairServices() {
    return (
        <section style={{ backgroundColor: BG_LIGHT_GRAY_BLUE }} className="py-16">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-6 font-sans">
                        Need Collision Repair Services?
                    </h2>
                    <p className="text-xl text-gray-700 mb-8 font-serif">
                        From minor bumps to major accidents, we have the expertise and
                        equipment to restore your vehicle safely and efficiently.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        {/* Get Emergency Help Button */}
                        <button
                            className="inline-flex items-center justify-center gap-2 text-sm font-medium text-white h-10 rounded-md px-6 font-serif shadow"
                            style={{ backgroundColor: BRAND_GREEN }}
                        >
                            <Phone className="h-5 w-5" />
                            Get Emergency Help
                        </button>

                        {/* Request Estimate Button */}
                        <button
                            className="inline-flex items-center justify-center gap-2 text-sm font-medium h-10 rounded-md px-6 font-serif border bg-transparent hover:bg-gray-100"
                            style={{ borderColor: "#d1d5db" }}
                        >
                            Request Estimate
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
