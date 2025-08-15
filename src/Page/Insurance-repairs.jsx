import React from "react";

// Sections from components/HomePage
import HeroSection from "../components/ServiceSection/Insurance-Repairs-Page/HeroSection";
import InsuranceServices from "../components/ServiceSection/Insurance-Repairs-Page/InsuranceServices";
import InsuranceProcess from "../components/ServiceSection/Insurance-Repairs-Page/InsuranceProcess";
import InsuranceCTA from "../components/ServiceSection/Insurance-Repairs-Page/InsuranceCTA";

export default function Home() {
    return (
        <div>
            <HeroSection />
            <InsuranceServices />
            <InsuranceProcess />
            <InsuranceCTA />
        </div>
    );
}
