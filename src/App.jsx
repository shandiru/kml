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
import GDPRConsent from "./components/GDPRBanner.jsx";
import TermsConditions from "./components/Term.jsx";
import PrivacyPolicy from "./components/PrivacyPolicy.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services/insurance-repairs" element={<InsuranceRepairs />} />
          <Route path="/services/bodywork-dents" element={<Bodyworkdents />} />
          <Route path="/services/collision-repairs" element={<CollisionRepairs />} />
          <Route path="/services/specialty-services" element={<SpecialtyServices />} />
          <Route path="/services/claims-support" element={<ClaimsSupport />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
      </main>
      <GDPRConsent />
      <Footer />
    </div>
  );
}
