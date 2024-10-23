import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

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
import Access from "./Pages/Access.jsx";
import Login from "./Pages/Login.jsx";
import ForgetPassword from "./Pages/ForgetPassword.jsx";
import ViewTarget from "./Pages/ViewTarget.jsx";
import CreateTarget from "./Pages/CreateTarget.jsx";
import UploadPrice from "./Pages/UploadPrice.jsx";
import ViewPrice from "./Pages/ViewPrice.jsx";
import PriceList from "./Pages/PriceList.jsx";
import ISPincentive from "./Pages/ISPincentive.jsx";
import Createisp from "./Pages/Createisp.jsx";
createRoot(document.getElementById("root")).render(
  <>
    <Router>
      <Routes>
        <Route path="/" element={<Access />} />
        <Route path="/login" element={<Login />} />
        <Route path="/header" element={<Header />} />
        <Route path="/forgotpassword" element={<ForgetPassword />} />
        <Route path="/viewtarget" element={<ViewTarget />} />
        <Route path="/createtarget" element={<CreateTarget />} />
        <Route path="/uploadprice" element={<UploadPrice />} />
        <Route path="/viewprice" element={<ViewPrice />} />
        <Route path="/pricelist" element={<PriceList />} />
        <Route path="/ispincentive" element={<ISPincentive />} />
        <Route path="/createisp" element={<Createisp />} />
        <Route path="/country" element={<Country />} /> {/* Country route */}
        <Route path="/state" element={<State />} /> {/* Country route */}
        <Route path="/sidemenu" element={<SideMenu />} /> {/* Country route */}
        <Route path="/region" element={<Region />} /> {/* Country route */}
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
