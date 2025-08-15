import React from "react";
import { Phone } from "lucide-react"; // You can also use any other icon library

export default function HeroSection() {
    return (
        <section className="bg-gradient-to-br from-green-50 to-green-50 py-16">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Title */}
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 font-sans">
                        Insurance Repairs
                    </h1>

                    {/* Subtitle */}
                    <p className="text-xl text-gray-700 mb-8 font-serif">
                        Expert insurance repair services with direct insurer relationships. We handle
                        everything from initial assessment to final delivery.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        {/* Call for Quote */}
                        <button
                            className="inline-flex items-center justify-center gap-2 bg-green-800 text-white hover:bg-green-900 h-10 rounded-md px-6 font-serif text-sm font-medium transition-all"
                        >
                            <Phone className="h-5 w-5" />
                            Call for Quote
                        </button>

                        {/* View Our Process */}
                        <button
                            className="inline-flex items-center justify-center gap-2 border border-gray-300 text-gray-800 hover:bg-gray-100 h-10 rounded-md px-6 font-serif text-sm font-medium transition-all"
                        >
                            View Our Process
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
