import React from "react";
import {
    Shield,
    FileText,
    Car,
    CheckCircle2,
} from "lucide-react";

/**
 * Our Insurance Repair Services
 * - Matches the green brand tone (#066a3c)
 * - Light, card-like tiles with subtle border/shadow
 */
const BRAND_GREEN = "#066a3c";

export default function InsuranceServices() {
    return (
        <section className="py-16">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12 font-sans text-gray-800">
                        Our Insurance Repair Services
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Card 1 */}
                        <article className="bg-slate-50 text-gray-800 flex flex-col gap-6 rounded-xl border border-slate-200 py-6 shadow-sm">
                            <header className="grid auto-rows-min items-start gap-1.5 px-6">
                                <Shield className="h-12 w-12 mb-4" color={BRAND_GREEN} />
                                <h3 className="font-semibold font-sans leading-none">
                                    Comprehensive Coverage
                                </h3>
                                <p className="text-sm text-gray-600 font-serif">
                                    We work with all major insurance providers to ensure your
                                    repairs are covered
                                </p>
                            </header>

                            <div className="px-6">
                                <ul className="space-y-2 text-sm font-serif">
                                    {[
                                        "Direct insurer billing",
                                        "No upfront costs",
                                        "Approved repairer network",
                                    ].map((t) => (
                                        <li key={t} className="flex items-center gap-2">
                                            <CheckCircle2 className="h-4 w-4" color={BRAND_GREEN} />
                                            {t}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </article>

                        {/* Card 2 */}
                        <article className="bg-slate-50 text-gray-800 flex flex-col gap-6 rounded-xl border border-slate-200 py-6 shadow-sm">
                            <header className="grid auto-rows-min items-start gap-1.5 px-6">
                                <FileText className="h-12 w-12 mb-4" color={BRAND_GREEN} />
                                <h3 className="font-semibold font-sans leading-none">
                                    Claims Management
                                </h3>
                                <p className="text-sm text-gray-600 font-serif">
                                    Complete claims handling from start to finish with expert
                                    guidance
                                </p>
                            </header>

                            <div className="px-6">
                                <ul className="space-y-2 text-sm font-serif">
                                    {[
                                        "Claims processing",
                                        "Documentation support",
                                        "Liaison with insurers",
                                    ].map((t) => (
                                        <li key={t} className="flex items-center gap-2">
                                            <CheckCircle2 className="h-4 w-4" color={BRAND_GREEN} />
                                            {t}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </article>

                        {/* Card 3 */}
                        <article className="bg-slate-50 text-gray-800 flex flex-col gap-6 rounded-xl border border-slate-200 py-6 shadow-sm">
                            <header className="grid auto-rows-min items-start gap-1.5 px-6">
                                <Car className="h-12 w-12 mb-4" color={BRAND_GREEN} />
                                <h3 className="font-semibold font-sans leading-none">
                                    Quality Repairs
                                </h3>
                                <p className="text-sm text-gray-600 font-serif">
                                    Professional repairs using genuine parts with manufacturer
                                    warranties
                                </p>
                            </header>

                            <div className="px-6">
                                <ul className="space-y-2 text-sm font-serif">
                                    {[
                                        "Genuine OEM parts",
                                        "Manufacturer warranties",
                                        "Quality guarantees",
                                    ].map((t) => (
                                        <li key={t} className="flex items-center gap-2">
                                            <CheckCircle2 className="h-4 w-4" color={BRAND_GREEN} />
                                            {t}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    );
}
