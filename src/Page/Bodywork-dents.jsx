import React from "react";

// Sections from components/HomePage
import BodyworkDentRepairs from "../components/ServiceSection/Bodywork-Dents-Page/BodyworkDentRepairs";
import BodyworkServices from "../components/ServiceSection/Bodywork-Dents-Page/BodyworkServices";
import DamageTypes from "../components/ServiceSection/Bodywork-Dents-Page/DamageTypes";
import BodyworkProcess from "../components/ServiceSection/Bodywork-Dents-Page/BodyworkProcess";
import TransparentPricing from "../components/ServiceSection/Bodywork-Dents-Page/TransparentPricing";
import CallToAction from "../components/ServiceSection/Bodywork-Dents-Page/CallToAction";

export default function Home() {
    return (
        <div>
            <BodyworkDentRepairs />
            <BodyworkServices />
            <DamageTypes />
            <BodyworkProcess />
            <TransparentPricing />
            <CallToAction />

        </div>
    );
}
