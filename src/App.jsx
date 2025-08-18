import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

import Home from "./Page/Home.jsx";
import About from "./Page/About.jsx";
import InsuranceRepairs from "./Page/Insurance-repairs.jsx";
import Bodyworkdents from "./Page/Bodywork-dents.jsx";
import CollisionRepairs from "./Page/collision-repairs.jsx";
import SpecialtyServices from "./Page/specialty-services.jsx"; // Importing the Specialty Services page
import ClaimsSupport from "./Page/claims-support.jsx"; // Importing the Claims Support page

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services/insurance-repairs" element={<InsuranceRepairs />} />
          <Route path="/services/bodywork-dents" element={<Bodyworkdents />} />
          <Route path="/services/collision-repairs" element={<CollisionRepairs />} />
{/*           <Route path="/services/specialty-services" element={<SpecialtyServices />} />
          <Route path="/services/claims-support" element={<ClaimsSupport />} /> */}
          {/* add more pages as needed */}
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
