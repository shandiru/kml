// CallToAction.jsx
import React from "react";
import { Phone } from "lucide-react";

const CallToAction = () => {
    return (
        <section style={{ backgroundColor: "#ffffff" }} className="py-16">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-6 font-sans">
                        Ready to Restore Your Vehicle?
                    </h2>
                    <p className="text-xl text-gray-700 mb-8 font-serif">
                        Contact us today for a free assessment and quote. We'll have your
                        car looking like new again.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        {/* Call Button */}
                        <button
                            style={{ backgroundColor: "#006B46", color: "#ffffff" }}
                            className="inline-flex items-center justify-center gap-2 text-sm font-medium h-10 rounded-md px-6 shadow hover:opacity-90 transition-all"
                        >
                            <Phone className="h-5 w-5" />
                            Call 0800 123 4567
                        </button>

                        {/* Book Assessment Button */}
                        <button className="inline-flex items-center justify-center gap-2 text-sm font-medium h-10 rounded-md px-6 border border-gray-300 bg-transparent hover:bg-gray-100 transition-all">
                            Book Assessment
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CallToAction;
