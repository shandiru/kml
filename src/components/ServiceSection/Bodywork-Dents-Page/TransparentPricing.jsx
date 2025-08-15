// TransparentPricing.jsx
import React from "react";
import { Clock, CheckCircle2, Phone } from "lucide-react";

const TransparentPricing = () => {
    return (
        <section style={{ backgroundColor: "#f1f5fc" }} className="py-16">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-6 font-sans">
                        Transparent Pricing
                    </h2>
                    <p className="text-xl text-gray-600 mb-8 font-serif">
                        We provide upfront, honest pricing with no hidden costs. Get a free
                        quote today.
                    </p>

                    <div className="grid md:grid-cols-3 gap-6 mb-8">
                        {/* Card 1 */}
                        <div className="bg-white text-gray-900 flex flex-col gap-6 rounded-xl border border-gray-200 py-6 shadow-sm">
                            <div className="grid items-start gap-1.5 px-6 text-center">
                                <Clock className="h-8 w-8 text-green-800 mx-auto mb-2" />
                                <div className="font-semibold text-lg font-sans">
                                    Quick Turnaround
                                </div>
                            </div>
                            <div className="px-6">
                                <p className="text-sm text-gray-600 font-serif">
                                    Most minor repairs completed within 24-48 hours
                                </p>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-white text-gray-900 flex flex-col gap-6 rounded-xl border border-gray-200 py-6 shadow-sm">
                            <div className="grid items-start gap-1.5 px-6 text-center">
                                <CheckCircle2 className="h-8 w-8 text-green-800 mx-auto mb-2" />
                                <div className="font-semibold text-lg font-sans">
                                    Quality Guarantee
                                </div>
                            </div>
                            <div className="px-6">
                                <p className="text-sm text-gray-600 font-serif">
                                    All bodywork backed by comprehensive warranty
                                </p>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-white text-gray-900 flex flex-col gap-6 rounded-xl border border-gray-200 py-6 shadow-sm">
                            <div className="grid items-start gap-1.5 px-6 text-center">
                                <Phone className="h-8 w-8 text-green-800 mx-auto mb-2" />
                                <div className="font-semibold text-lg font-sans">
                                    Free Quotes
                                </div>
                            </div>
                            <div className="px-6">
                                <p className="text-sm text-gray-600 font-serif">
                                    No obligation assessments and competitive pricing
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TransparentPricing;
