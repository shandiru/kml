import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

import Home from "./Page/Home.jsx";
import About from "./Page/About.jsx";
import InsuranceRepairs from "./Page/Insurance-repairs.jsx";
import Bodyworkdents from "./Page/Bodywork-dents.jsx";

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
          {/* add more pages as needed */}
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
