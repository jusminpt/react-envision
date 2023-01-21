import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar, Footer } from "./components";
import { Home, WhatWeDo, Resources, GetInvolved, AboutUs } from "./pages";
import "./App.scss";

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main>
          <Routes>
            {/* TODO: Add more paths when finalize */}
            <Route exact path="/" element={<Home />} />
            <Route exact path="/whatwedo" element={<WhatWeDo />} />
            <Route exact path="/resources" element={<Resources />} />
            <Route exact path="/getinvolved" element={<GetInvolved />} />
            <Route exact path="/aboutus" element={<AboutUs />} />
            <Route path="*" element={"Page not founded 404"} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
