import React from "react";

const FAQSection = () => {
    return (
        <section className="bg-[#f1f7ff] py-16"> {/* new light blue/gray background */}
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12 font-sans text-gray-900">
                        Common Questions
                    </h2>

                    <div className="space-y-6">
                        {/* Card 1 */}
                        <div className="bg-white text-gray-900 flex flex-col gap-6 rounded-xl border border-gray-200 py-6 shadow-sm">
                            <div className="px-6">
                                <h3 className="font-semibold font-sans text-lg">
                                    What if the accident wasn't my fault?
                                </h3>
                            </div>
                            <div className="px-6">
                                <p className="text-gray-600 font-serif">
                                    If you're not at fault, we handle everything to ensure you're
                                    not out of pocket. We'll recover all costs from the third
                                    party's insurance, including repairs, courtesy car, and any
                                    other expenses.
                                </p>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-white text-gray-900 flex flex-col gap-6 rounded-xl border border-gray-200 py-6 shadow-sm">
                            <div className="px-6">
                                <h3 className="font-semibold font-sans text-lg">
                                    How quickly can I get a courtesy car?
                                </h3>
                            </div>
                            <div className="px-6">
                                <p className="text-gray-600 font-serif">
                                    Usually within hours of your call. We have a large fleet of
                                    courtesy cars and vans available, and we'll arrange delivery
                                    to your location if needed.
                                </p>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-white text-gray-900 flex flex-col gap-6 rounded-xl border border-gray-200 py-6 shadow-sm">
                            <div className="px-6">
                                <h3 className="font-semibold font-sans text-lg">
                                    Do I need to contact my insurance company?
                                </h3>
                            </div>
                            <div className="px-6">
                                <p className="text-gray-600 font-serif">
                                    We handle all insurance communications for you. We'll contact
                                    your insurer and any third parties involved, keeping you
                                    informed throughout the process.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
