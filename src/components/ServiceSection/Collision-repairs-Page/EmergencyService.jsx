"use client";
import React, { useState } from "react";
import { TriangleAlert, Phone, Clock } from "lucide-react";
import QuoteModal from "../Insurance-Repairs-Page/QuoteModal";

const BRAND_GREEN = "#066a3c";
const BG_LIGHT_MINT = "#e6f0ec";

export default function EmergencyService() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <section className="py-16">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <div
                        className="rounded-lg p-8 text-center"
                        style={{ backgroundColor: "#f1f7ff" }}
                    >
                        <TriangleAlert
                            className="h-16 w-16 mx-auto mb-6"
                            style={{ color: BRAND_GREEN }}
                        />
                        <h2 className="text-3xl font-bold mb-4 font-sans">
                            Emergency Service
                        </h2>
                        <p className="text-lg text-gray-700 mb-6 font-serif">
                            Accident happened? Don't worry – we're here to help. Our emergency
                            response team is available around the clock to assist with
                            recovery, courtesy cars, and immediate repair assessment.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            {/* Call Button */}
                            <a
                                href="tel:01615333003"
                                className="inline-flex items-center justify-center gap-2 text-sm font-medium text-white h-10 rounded-md px-6 font-serif shadow transition"
                                style={{ backgroundColor: BRAND_GREEN }}
                            >
                                <Phone className="h-5 w-5" />
                                Support: 0161 533 3003
                            </a>

                            {/* Open Modal Button */}
                            <button
                                onClick={() => setIsOpen(true)}
                                className="inline-flex items-center justify-center gap-2 text-sm font-medium h-10 rounded-md px-6 font-serif border shadow bg-transparent hover:bg-gray-100"
                                style={{ borderColor: "#d1d5db" }}
                            >
                                <Clock className="h-5 w-5" />
                                Get Quote
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Quote Modal */}
            <QuoteModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </section>
    );
}
