"use client";
import React, { useState } from "react";
import { Phone } from "lucide-react";
import QuoteModal from "../Insurance-Repairs-Page/QuoteModal";

const BG_LIGHT_GRAY_BLUE = "#f4f7fb";
const BRAND_GREEN = "#066a3c";

export default function CollisionRepairServices() {
    const [isOpen, setIsOpen] = useState(false); // modal state

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
                        {/* ✅ Call Button */}
                        <a
                            href="tel:01615333003"
                            className="inline-flex items-center justify-center gap-2 text-sm font-medium text-white h-10 rounded-md px-6 font-serif shadow transition"
                            style={{ backgroundColor: BRAND_GREEN }}
                        >
                            <Phone className="h-5 w-5" />
                            Get Help
                        </a>

                        {/* ✅ Open Modal Button */}
                        <button
                            onClick={() => setIsOpen(true)}
                            className="inline-flex items-center justify-center gap-2 text-sm font-medium h-10 rounded-md px-6 font-serif border bg-transparent hover:bg-gray-100 transition"
                            style={{ borderColor: "#d1d5db" }}
                        >
                            Request Estimate
                        </button>
                    </div>
                </div>
            </div>

            {/* ✅ Modal */}
            <QuoteModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </section>
    );
}
