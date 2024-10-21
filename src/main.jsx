import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import LandingPage from "./LandingPage/LandingPage.jsx";
import Country from "./Pages/Country.jsx"; // Component for /country route
import "./index.css";
import State from "./Pages/State.jsx";
import SideMenu from "./SideMenu/SideMenu.jsx";
import Region from "./Pages/Region.jsx";
import Mastersetting from "./Pages/Mastersetting.jsx";
import Area from "./Pages/Area.jsx";
import City from "./Pages/City.jsx";
import Model from "./Pages/Model.jsx";
import Brands from "./Pages/Brands.jsx";
import Category from "./Pages/Category.jsx";
import SubCategory from "./Pages/SubCategory.jsx";
import Header from "./Pages/Header.jsx";
createRoot(document.getElementById("root")).render(
  <>
    <Router>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/country" element={<Country />} /> {/* Country route */}
        <Route path="/state" element={<State />} /> {/* Country route */}
        <Route path="/sidemenu" element={<SideMenu />} /> {/* Country route */}
        <Route path="/region" element={<Region />} /> {/* Country route */}
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/setting" element={<Mastersetting />} />
        <Route path="/city" element={<City />} />
        <Route path="/area" element={<Area />} />
        <Route path="/brand" element={<Brands />} />
        <Route path="/category" element={<Category />} />
        <Route path="/subcategory" element={<SubCategory />} />
        <Route path="/model" element={<Model />} />
      </Routes>
    </Router>
  </>
);
