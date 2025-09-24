import React, { useState } from "react";
import { FiPhone } from "react-icons/fi";
import QuoteModal from "../Insurance-Repairs-Page/QuoteModal";

export default function SpecializedServices() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <section className="bg-[#f1f7ff] py-16">
            <div className="max-w-3xl mx-auto text-center px-4">
                {/* Heading */}
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                    Need Specialized Automotive Services?
                </h2>

                {/* Description */}
                <p className="text-lg text-gray-700 mb-8">
                    From ADAS calibration to alloy wheel refurbishment, our expert
                    technicians provide specialized services with the precision your
                    vehicle deserves.
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    {/* Call Button */}
                    <a
                        href="tel:01615333003"
                        className="inline-flex items-center justify-center gap-2 bg-green-800 text-white font-medium px-6 py-3 rounded-md shadow hover:bg-green-700 transition"
                    >
                        <FiPhone className="text-lg" />
                        Call 0161 533 3003
                    </a>

                    {/* Get Quote Button */}
                    <button
                        onClick={() => setIsOpen(true)}
                        className="px-6 py-3 rounded-md border border-gray-300 text-gray-800 font-medium bg-white hover:bg-gray-100 transition"
                    >
                        Get Quote
                    </button>
                </div>
            </div>

            {/* Quote Modal */}
            <QuoteModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </section>
    );
}
