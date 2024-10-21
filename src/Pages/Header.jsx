import "../color.css";
import "../fonts.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

import {
  faGear,
  faBell,
  faCircleQuestion,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useLocation } from "react-router-dom";
import { Row, Col, Container } from "react-bootstrap";
import SideMenu from "../SideMenu/SideMenu";
import Footer from "../Footer/Footer";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation(); // Get the current route


  const handleSetting = () => {
    navigate("/setting"); // Navigate to the settings route
  };
   const [showSideMenu, setShowSideMenu] = useState(true);
   const handleSideMenu = () => {
     setShowSideMenu(!showSideMenu);
   };
  const shouldShowSideMenu = location.pathname === "/";

  return (
    <Container fluid>
      <Row className="app-LandingPage-row p-0">
        <Col
          xxl={2}
          xl={2}
          lg={2}
          md={2}
          sm={2}
          className="app-LandingPage-client-logo align-items-center d-flex"
        >
          Client Logo
        </Col>
        <Col
          xxl={8}
          xl={8}
          lg={6}
          md={6}
          sm={7}
          className="app-LandingPage-middlepart justify-content-center d-flex flex-column position-relative"
        >
          <Row
            className="ms-5 largefontbold  cursorpointer paddingleft-LandingPage"
            onClick={handleSideMenu}
          >
            Welcome! John
          </Row>
          <Row className="paddingleft-LandingPage">
            <span className="ms-5 largefontsemibold">
              {new Date().toLocaleDateString("en-GB", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </span>
          </Row>
          <Col className="position-absolute end-0 me-5 mx-auto">
            <FontAwesomeIcon
              className="cursorpointer"
              icon={faBell}
              size="xl"
            />
            <FontAwesomeIcon
              className="ms-3 cursorpointer"
              icon={faGear}
              onClick={handleSetting}
              size="xl"
            />
            <FontAwesomeIcon
              className="ms-3 cursorpointer"
              icon={faCircleQuestion}
              size="xl"
            />
          </Col>
          <Col className="position-absolute">
            <img
              src="https://via.placeholder.com/40"
              alt="Profile"
              className=""
              width="50"
              height="50"
            />
          </Col>
        </Col>

        <Col
          xxl={2}
          xl={2}
          lg={2}
          md={2}
          sm={2}
          className="align-items-center app-LandingPage-rightpart"
        >
          <img
            className=""
            src="./logo.png"
            alt="LandingPage Right"
            style={{ width: "100%", height: "120px" }}
          />
        </Col>
      </Row>

      {/* Render the SideMenu only when on the /setting route */}
      {shouldShowSideMenu && showSideMenu && (
        <Row>
          <Col
            xxl={2}
            xl={2}
            lg={2}
            md={2}
            className="sidemenubg sidemenuborder p-0 "
          >
            <SideMenu />
          </Col>
        </Row>
      )}
      <Footer/>
    </Container>
  );
};

export default Header;
