import React from "react";

// Sections from components/HomePage
import CollisionRepairs from "../components/ServiceSection/Collision-repairs-Page/CollisionRepairs";
import CollisionRepairServices from "../components/ServiceSection/Collision-repairs-Page/CollisionRepairServices";
import CollisionDamageTypes from "../components/ServiceSection/Collision-repairs-Page/CollisionDamageTypes";
import CollisionRepairProcess from "../components/ServiceSection/Collision-repairs-Page/CollisionRepairProcess";
import AdvancedRepairTechnology from "../components/ServiceSection/Collision-repairs-Page/AdvancedRepairTechnology";
import EmergencyService from "../components/ServiceSection/Collision-repairs-Page/EmergencyService";
import CollisionRepairServicesbottom from "../components/ServiceSection/Collision-repairs-Page/CollisionRepairServicesbottom";
export default function Home() {
    return (
        <div>
            <CollisionRepairs />
            <CollisionRepairServices />
            <CollisionDamageTypes />
            <CollisionRepairProcess />
            <AdvancedRepairTechnology />
            <EmergencyService />
            <CollisionRepairServicesbottom />
            {/* Add more sections as needed */}

        </div>
    );
}
