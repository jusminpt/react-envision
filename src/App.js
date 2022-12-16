import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar, Footer } from "./components";
import Home from "./pages/Home/Home";
import MeetTeam from "./pages/MeetTeam/MeetTeam";
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
            <Route path="/meet-the-team" element={<MeetTeam />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
