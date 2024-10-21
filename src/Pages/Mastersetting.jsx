import { Row, Col, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import SideMenu from "../SideMenu/SideMenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import {
  faLightbulb,
  faPenToSquare,
  faArrowLeft,
  faArrowRight,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

import Footer from "../Footer/Footer";
const Mastersetting = () => {
   const [showSideMenu, setShowSideMenu] = useState(false);

   // Step 2: handleSideMenu function to toggle the side menu
   const handleSideMenu = () => {
     setShowSideMenu(!showSideMenu);
   };
  const navigate = useNavigate(); // Hook to navigate programmatically

  const handleCountryClick = () => {
    navigate("/country"); // Redirect to the /country route on click
  };
  const handleStateClick = () => {
    navigate("/state"); // Redirect to the /country route on click
  };
  const handleRegionClick =() =>{
    navigate("/region")
  }
    const handleCityClick = () => {
      navigate("/city"); // Redirect to the /country route on click
    };
    const handleAreaClick = () => {
      navigate("/area");
    };
  const handleBrandClick = () => {
    navigate("/brand");
  };
  const handleCategoryClick = () => {
    navigate("/category"); // Redirect to the /country route on click
  };
  const handleSubCategoryClick = () => {
    navigate("/subcategory");
  };
  const handleModelClick = () => {
    navigate("/model");
  };
  return (
    <Container fluid className="">
      <Row>
        <Header />
      </Row>
      <Row className="">
        <Col
          xl={2}
          lg={2}
          md={4}
          className="app-sidemenu-col d-md-block d-none sidemenubg sidemenuborder"
        >
          <SideMenu />
        </Col>
        <Col xxl={9} xl={9} lg={9} md={8} className="p-0">
          <Col className="mt-1 paddingleft-mastersettings borderbottom fontcolorblackbold app-LandingPage-setting">
            {/* Show icon only on screens smaller than 992px */}
            <span className="d-md-none cursorpointer ">
              <FontAwesomeIcon icon={faBars} onClick={handleSideMenu} />
            </span>{" "}
            Setting / Master
            {showSideMenu && (
              <Col
                xl={2}
                lg={2}
                md={4}
                sm={4}
                xs={5}
                className="app-sidemenu-col ms-2 sidemenubg d-block d-md-none sidemenuborder"
              >
                <SideMenu />
              </Col>
            )}
          </Col>
          <Row className="ms-4 mt-2 fontcolorblackbold">Location</Row>
          <Row className="ms-4">
            <Col
              xxl={2}
              xl={2}
              lg={2}
              md={2}
              className="cursorpointer mt-2 p-4  backgroundcolor fontcolorwhite cursorpointer  me-4 app-LandingPage-locations"
              onClick={handleCountryClick}
            >
              Country
            </Col>
            <Col
              xxl={2}
              xl={2}
              lg={2}
              md={2}
              className=" cursorpointer mt-2 p-4 backgroundcolor fontcolorwhite cursorpointer  me-4 app-LandingPage-locations"
              onClick={handleRegionClick}
            >
              Region
            </Col>
            <Col
              xxl={2}
              xl={2}
              lg={2}
              md={2}
              className="cursorpointer mt-2 p-4  backgroundcolor fontcolorwhite cursorpointer  me-4 app-LandingPage-locations"
              onClick={handleStateClick}
            >
              State
            </Col>
            <Col
              xxl={2}
              xl={2}
              lg={2}
              md={2}
              className=" cursorpointer mt-2 p-4 backgroundcolor fontcolorwhite cursorpointer  me-4 app-LandingPage-locations"
              onClick={handleCityClick}
            >
              City
            </Col>
            <Col
              xxl={2}
              xl={2}
              lg={2}
              md={2}
              className=" cursorpointer mt-2 p-4 backgroundcolor fontcolorwhite cursorpointer  app-LandingPage-locations"
              onClick={handleAreaClick}
            >
              Area
            </Col>
          </Row>
          <Row className="mt-2 ms-4">
            <Col
              xxl={2}
              xl={2}
              lg={2}
              md={2}
              className=" cursorpointer backgroundcolor p-4 fontcolorwhite  app-LandingPage-locations"
            >
              Bulk Upload
            </Col>
          </Row>
          <Row className="ms-4 mt-4 fontcolorblackbold">Product</Row>
          <Row className="ms-4">
            <Col
              xxl={2}
              xl={2}
              lg={2}
              md={2}
              className="cursorpointer mt-2 p-4  backgroundcolor fontcolorwhite cursorpointer  me-4 app-LandingPage-locations"
              onClick={handleBrandClick}
            >
              Brand
            </Col>
            <Col
              xxl={2}
              xl={2}
              lg={2}
              md={2}
              className=" cursorpointer mt-2 p-4 backgroundcolor fontcolorwhite cursorpointer  me-4 app-LandingPage-locations"
              onClick={handleCategoryClick}
            >
              Category
            </Col>
            <Col
              xxl={2}
              xl={2}
              lg={2}
              md={2}
              className=" cursorpointer mt-2 p-4 backgroundcolor fontcolorwhite cursorpointer  me-4 app-LandingPage-locations"
              onClick={handleSubCategoryClick}
            >
              Subcategory / classification
            </Col>
            <Col
              xxl={2}
              xl={2}
              lg={2}
              md={2}
              className=" cursorpointer mt-2 p-4 backgroundcolor fontcolorwhite cursorpointer  me-4 app-LandingPage-locations"
              onClick={handleModelClick}
            >
              Model
            </Col>
            <Col
              xxl={2}
              xl={2}
              lg={2}
              md={2}
              className=" backgroundcolor mt-2 p-4 cursorpointer fontcolorwhite  app-LandingPage-locations"
            >
              Bulk upload
            </Col>
          </Row>

          <Row className="ms-4 mt-4 fontcolorblackbold">Retailer</Row>
          <Row className="ms-4">
            <Col
              xxl={2}
              xl={2}
              lg={2}
              md={2}
              className=" backgroundcolor fontcolorwhite cursorpointer p-4  me-4 app-LandingPage-locations"
            >
              Manage retailers
            </Col>
          </Row>

          <Row className="ms-4 mt-4 fontcolorblackbold">Sales channel</Row>
          <Row className="ms-4">
            <Col
              xxl={2}
              xl={2}
              lg={2}
              md={2}
              className=" backgroundcolor fontcolorwhite cursorpointer mt-2 p-4 me-4 app-LandingPage-locations"
            >
              Manage sales channel
            </Col>
            <Col
              xxl={2}
              xl={2}
              lg={2}
              md={2}
              className=" backgroundcolor p-4 fontcolorwhite  cursorpointer me-4 mt-2 app-LandingPage-locations"
            >
              Spare
            </Col>
            <Col
              xxl={2}
              xl={2}
              lg={2}
              md={2}
              className=" backgroundcolor fontcolorwhite cursorpointer p-4  me-4 mt-2 app-LandingPage-locations"
            >
              Warranty void reason
            </Col>
          </Row>

          <Row className="ms-4 fontcolorblackbold mt-4">User Master</Row>
          <Row className="ms-4">
            <Col
              xxl={2}
              xl={2}
              lg={2}
              md={2}
              className="backgroundcolor fontcolorwhite cursorpointer me-4 mt-2 p-4 app-LandingPage-locations"
            >
              User masters
            </Col>
            <Col
              xxl={2}
              xl={2}
              lg={2}
              md={2}
              className=" backgroundcolor fontcolorwhite cursorpointer  me-4 mt-2 p-4 app-LandingPage-locations"
            >
              Bulk upload mapping
            </Col>
          </Row>

          <Row className="ms-4 fontcolorblackbold mt-2">Price</Row>
          <Row className="ms-4">
            <Col
              xxl={2}
              xl={2}
              lg={2}
              md={2}
              className="backgroundcolor fontcolorwhite cursorpointer  me-4 mt-2 p-4 app-LandingPage-locations"
            >
              price
            </Col>
            <Col
              xxl={2}
              xl={2}
              lg={2}
              md={2}
              className="backgroundcolor fontcolorwhite cursorpointer  me-4 mt-2 p-4 app-LandingPage-locations"
            >
              price group
            </Col>
          </Row>

          <Row className="ms-4 fontcolorblackbold mt-4">Leave Master</Row>
          <Row className="ms-4">
            <Col
              xxl={2}
              xl={2}
              lg={2}
              md={2}
              className=" backgroundcolor fontcolorwhite cursorpointer  me-4 mt-2 p-4 app-LandingPage-locations"
            >
              Manage leaves types
            </Col>
            <Col
              xxl={2}
              xl={2}
              lg={2}
              md={2}
              className=" backgroundcolor fontcolorwhite cursorpointer  me-4 mt-2 p-4 app-LandingPage-locations"
            >
              Leaves allocation
            </Col>
          </Row>
          <Row className="ms-4 fontcolorblackbold mt-4">ISP Master</Row>
          <Row className="ms-4 mb-5">
            <Col
              xxl={2}
              xl={2}
              lg={2}
              md={2}
              className="backgroundcolor fontcolorwhite cursorpointer  me-4 mt-2 p-4 app-LandingPage-locations"
            >
              Manage ISP
            </Col>
            <Col
              xxl={2}
              xl={2}
              lg={2}
              md={2}
              className="backgroundcolor fontcolorwhite cursorpointer  me-4 mt-2 p-4 app-LandingPage-locations"
            >
              Pre-booking SKU
            </Col>
            <Col
              xxl={2}
              xl={2}
              lg={2}
              md={2}
              className=" backgroundcolor fontcolorwhite cursorpointer cursorpointer me-4 mt-2 p-4 app-LandingPage-locations"
            >
              Ranking weightage
            </Col>
          </Row>
        </Col>
      </Row>
      <Footer />
    </Container>
  );
}

export default Mastersetting
