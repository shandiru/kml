import React from "react";

const CallUsNow = () => {
    return (
        <section className="py-16">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <div
                        className="rounded-lg p-8 text-center"
                        style={{ backgroundColor: "#E8F1ED" }}
                    >
                        {/* Phone Icon */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="64"
                            height="64"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="mx-auto mb-6 text-green-700"
                        >
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                        </svg>

                        {/* Heading */}
                        <h2 className="text-3xl font-bold mb-4 font-sans">
                            Had an Accident? Call Us Now
                        </h2>

                        {/* Description */}
                        <p className="text-lg text-gray-700 mb-6 font-serif">
                            Don't wait - the sooner you call us, the sooner we can start
                            helping you. Our claims specialists are available 24/7 to take
                            your call and begin the support process immediately.
                        </p>

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            {/* Emergency Call */}
                            <a
                                href="tel:0161 533 3003"
                                className="inline-flex items-center justify-center gap-2 text-sm font-medium bg-green-700 text-white shadow-md hover:bg-green-800 h-10 rounded-md px-6 font-serif"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="mr-2"
                                >
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                </svg>
                                Emergency: 0161 533 3003
                            </a>

                            {/* Claims Line */}
                            <button className="inline-flex items-center justify-center gap-2 text-sm font-medium border shadow-sm hover:bg-gray-100 h-10 rounded-md px-6 font-serif bg-white">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="mr-2"
                                >
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <polyline points="12 6 12 12 16 14"></polyline>
                                </svg>
                                24/7 Claims Line
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CallUsNow;
