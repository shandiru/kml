import React from "react";
import { FiPhone } from "react-icons/fi";

export default function SpecializedServices() {
    return (
        <section className="bg-[#F9FAFB] py-16">
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
                        href="tel:0161 533 3003"
                        className="inline-flex items-center justify-center gap-2 bg-green-800 text-white font-medium px-6 py-3 rounded-md shadow hover:bg-green-700 transition"
                    >
                        <FiPhone className="text-lg" />
                        Call 0161 533 3003
                    </a>

                    {/* Book Consultation Button */}
                    <button className="px-6 py-3 rounded-md border border-gray-300 text-gray-800 font-medium bg-white hover:bg-gray-100 transition">
                        Book Consultation
                    </button>
                </div>
            </div>
        </section>
    );
}
