import React from "react";

// Sections from components/HomePage
import ClaimsSupport from "../components/ServiceSection/Claims-Support-Page/ClaimsSupport";
import ClaimsSupportFeatures from "../components/ServiceSection/Claims-Support-Page/ClaimsSupportFeatures";
import CompleteClaimsManagement from "../components/ServiceSection/Claims-Support-Page/CompleteClaimsManagement";
import JourneyAccidentToRepair from "../components/ServiceSection/Claims-Support-Page/JourneyAccidentToRepair";
import WhyChooseClaimsSupport from "../components/ServiceSection/Claims-Support-Page/WhyChooseClaimsSupport";
import CallUsNow from "../components/ServiceSection/Claims-Support-Page/CallUsNow";
import FAQSection from "../components/ServiceSection/Claims-Support-Page/FAQSection";
export default function Home() {
    return (
        <div>
            <ClaimsSupport />
            <ClaimsSupportFeatures />
            <CompleteClaimsManagement />
            <JourneyAccidentToRepair />
            <WhyChooseClaimsSupport />
            <CallUsNow />
            <FAQSection />
            {/* Add more sections as needed */}


        </div>
    );
}
