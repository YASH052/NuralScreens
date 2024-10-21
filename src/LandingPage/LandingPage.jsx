import '../color.css'
import "../fonts.css";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Mastersetting from '../Pages/Mastersetting.jsx';
import Footer from '../Footer/Footer.jsx';
import Country from '../Pages/Country.jsx';
import {
  faGear,
  faBell,
  faCircleQuestion,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import { Row, Col,Container } from "react-bootstrap";
import SKU from '../Pages/SKU.jsx';
import Region from '../Pages/Region.jsx'
import Area from '../Pages/Area.jsx';
import Brands from '../Pages/Brands.jsx';
import City from '../Pages/City.jsx';
import Model from '../Pages/Model.jsx';
import State from '../Pages/State.jsx';
import SubCategory from '../Pages/SubCategory.jsx';
import Category from '../Pages/Category.jsx';
import SideMenu from '../SideMenu/SideMenu.jsx';
function LandingPage() {
   const [showSetting, setShowSetting] = useState(false); // State to manage visibility
   const handleSetting = () => {
     setShowSetting(!showSetting); // Toggle content visibility
   };
    return (
      <Container fluid>
        
        <Row className="">
          <Col xl={2} className="app-sidemenu-col sidemenubg sidemenuborder">
            <SideMenu />
          </Col>
          <Col xxl={9} xl={9} lg={9} md={9}>
            {/* <Country />
            <Region/> */}
            <Mastersetting />
            {/* <City/>
            <Area/>
            <Brands/>
            <Category/>
            <SubCategory/>
            <Model/>
            <SKU /> */}
          </Col>
        </Row>
        <Footer />
      </Container>
    );
}

export default LandingPage
