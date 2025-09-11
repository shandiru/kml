import React from "react";

// Sections from components/HomePage
import SpecialtyServices from "../components/ServiceSection/Specialty-Services-Page/SpecialtyServices";
import SpecialtyServicesGrid from "../components/ServiceSection/Specialty-Services-Page/SpecialtyServicesGrid";
import AdasCalibrationMatters from "../components/ServiceSection/Specialty-Services-Page/AdasCalibrationMatters";
import SpecialtyServiceProcess from "../components/ServiceSection/Specialty-Services-Page/SpecialtyServiceProcess";
import MobileEmergencyServices from "../components/ServiceSection/Specialty-Services-Page/MobileEmergencyServices";
import SpecializedServicesSection from "../components/ServiceSection/Specialty-Services-Page/SpecializedServicesSection";
export default function Home() {
    return (
        <div>
            <SpecialtyServices />
            <SpecialtyServicesGrid />
            <AdasCalibrationMatters />
            <SpecialtyServiceProcess />
            {/* <MobileEmergencyServices /> */}
            <SpecializedServicesSection />

        </div>
    );
}
