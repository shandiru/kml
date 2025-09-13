import React from "react";

const PRIMARY = "#066a3c";
const PRIMARY_HOVER = "#055a33";

// Exact mint gradient from the screenshot
// top-left:  #E9F6F1  → bottom-right: #E6F2EE
export default function CollisionRepairs() {
    return (
        <section className="bg-[#f1f7ff] py-16">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-sans">
                        Collision Repairs
                    </h1>
                    <p className="text-xl text-muted-foreground mb-8 font-serif">
                        Expert collision repair services for all types of accident damage.
                        From minor bumps to major crashes, we restore your vehicle to
                        pre-accident condition.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        {/* Primary CTA */}
                        <button
                            className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all h-10 rounded-md px-6 shadow-xs font-serif focus-visible:ring-[3px] focus-visible:ring-ring/50"
                            style={{ backgroundColor: PRIMARY, color: "#ffffff" }}
                            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = PRIMARY_HOVER)}
                            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = PRIMARY)}
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
                                className="mr-1.5"
                            >
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                            </svg>
                            Emergency Repairs
                        </button>

                        {/* Secondary CTA */}
                        <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all h-10 rounded-md px-6 border shadow-xs font-serif bg-transparent hover:bg-accent hover:text-accent-foreground focus-visible:ring-[3px] focus-visible:ring-ring/50">
                            Insurance Estimates
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
