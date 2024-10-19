import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import LandingPage from "./LandingPage/LandingPage.jsx"; // LandingPage is the Headerr page
import Country from "./Pages/Country.jsx"; // Component for /country route
import "./index.css";
import State from "./Pages/State.jsx";
import SideMenu from "./SideMenu/SideMenu.jsx";
import Headerr from "./Pages/Headerr.jsx";
import Region from "./Pages/Region.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />{" "}
        {/* Headerr route with LandingPage */}
        <Route path="/country" element={<Country />} /> {/* Country route */}
        <Route path="/state" element={<State />} /> {/* Country route */}
        <Route path="/header" element={<Headerr />} /> {/* Country route */}
        <Route path="/sidemenu" element={<SideMenu />} /> {/* Country route */}
        <Route path="/region" element={<Region />} /> {/* Country route */}
      </Routes>
    </Router>
  </StrictMode>
);
