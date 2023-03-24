import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar, Footer } from "./components";
import ScrollToTop from "./components/ScrollToTop";
import {
  Home,
  WhatWeDo,
  Resources,
  GetInvolved,
  AboutUs,
  HIVCovid19,
  FinancialReport,
} from "./pages";
import "./App.scss";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <Navbar />
        <main>
          <Routes>
            {/* TODO: Add more paths when finalize */}
            <Route exact path="/" element={<Home />} />
            <Route path="whatwedo" element={<WhatWeDo />} />
            <Route path="resources" element={<Resources />} />
            <Route path="resources/hiv-covid-19" element={<HIVCovid19 />} />
            <Route
              path="resources/financial-report"
              element={<FinancialReport />}
            />
            <Route path="getinvolved" element={<GetInvolved />} />
            <Route path="aboutus" element={<AboutUs />} />
            <Route path="*" element={"Page not founded 404"} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
