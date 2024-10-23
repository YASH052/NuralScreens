import { Row, Col, Button,Container } from "react-bootstrap";
import React, { useState } from "react";
import '../App.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLightbulb,
  faPenToSquare,
  faArrowLeft,
  faBars,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { MenuConstants } from "../Constant/MenuConstants";

import SideMenu from "../SideMenu/SideMenu";
import Header from "./Header";
import Footer from "../Footer/Footer";
import { useNavigate } from "react-router-dom";
const Country = () => {
  const navigate = useNavigate();
    const handleSetting = () => {
      navigate("/setting"); // Navigate to the settings route
    };
  const [showSideMenu, setShowSideMenu] = useState(false);

  // Step 2: handleSideMenu function to toggle the side menu

  return (
    <Container fluid>
      <Row>
        <Header />
      </Row>
      <Row className="mb-4">
        <SideMenu />

        <Col lg={9} md={9} sm={9} xl={9} xs={7} className="p-0">
          <Col className="mt-1 paddingleft-mastersettings p-0 fontcolorblackbold app-LandingPage-setting">
            {/* Show icon only on screens smaller than 992px */}
            <Col className="mt-1 paddingleft-mastersettings fontcolorblackbold borderbottom app-LandingPage-setting">
              <span className="cursorpointer" onClick={handleSetting}>
                {MenuConstants.master}
              </span>{" "}
              {">"} {MenuConstants.country}
            </Col>
          </Col>
          {showSideMenu && (
            <Col
              xl={2}
              lg={2}
              md={3}
              sm={4}
              xs={2}
              className="app-sidemenu-col ms-3 d-block d-md-none sidemenubg sidemenuborder"
            >
              <SideMenu />
            </Col>
          )}
          <Row className="ms-4 mt-2">
            <Col
              xxl={2}
              xl={2}
              lg={2}
              md={2}
              className="cursorpointer bordercolororange mediumfont backgroundcolorsecondary fontcolorwhite app-LandingPage-locations"
            >
              {MenuConstants.manage} {MenuConstants.country}
            </Col>
            <Row className="app-country-box ms-0">
              <Row className="paddingleft-mastersettings mt-3 ms-4">
                {MenuConstants.country}
              </Row>
              <Col xxl={2} xl={2} lg={2} md={2} className="ms-4 mb-3">
                <input
                  type="text"
                  className="form-control app-placeholder" // Bootstrap class for styling input
                />
              </Col>
              <Row className="ms-2 mb-4">
                <Col xxl={2} xl={2} lg={2} md={2}>
                  <Button className="cursorpointer bordercolororange mediumfont mt-2 backgroundcolorsecondary fontcolorwhite  me-4 app-LandingPage-locations">
                    {MenuConstants.create}
                  </Button>
                </Col>
                <Col>
                  <Button className="bordercolororange cursorpointer mediumfont mt-2 backgroundcolorsecondary fontcolorwhite  me-4 app-LandingPage-locations">
                    {MenuConstants.cancel}
                  </Button>
                </Col>
              </Row>
            </Row>
          </Row>
          <Row className="ms-4 mt-4 mb-5">
            <Col
              xxl={2}
              xl={2}
              lg={2}
              md={2}
              className="cursorpointer bordercolororange mediumfont backgroundcolorsecondary fontcolorwhite  me-4 app-LandingPage-locations"
            >
              {MenuConstants.list}
            </Col>
            <Row className="app-country-box ms-0 p-0">
              <Row className="mt-3 ms-4">{MenuConstants.country}</Row>
              <Col xxl={2} xl={2} lg={2} md={2} className="">
                <input
                  type="text"
                  className="form-control app-placeholder mb-2" // Bootstrap class for styling input
                />
              </Col>
              <Col
                xxl={2}
                xl={2}
                lg={2}
                md={2}
                sm={3}
                xs={6}
                className="cursorpointer bordercolororange ms-4 mediumfont backgroundcolorsecondary fontcolorwhite  app-LandingPage-locations"
              >
                {MenuConstants.search}
              </Col>

              <Row className="backgroundcolor fontcolorwhite ms-0 mt-4 mb-2">
                <Col xxl={2} xl={2} lg={2} md={2}>
                  S.No
                </Col>
                <Col xxl={2} xl={2} lg={2} md={2}>
                  {MenuConstants.country}
                </Col>
                <Col>{MenuConstants.action}</Col>
              </Row>

              <Row className="ms-0 app-placeholder">
                <Col xxl={2} xl={2} lg={2} md={2}>
                  xxx
                </Col>
                <Col xxl={2} xl={2} lg={2} md={2}>
                  xxxxxxxxx
                </Col>
                <Col>
                  <img
                    src="./action2.png"
                    className="cursorpointer"
                    alt="Merchandizing"
                    style={{ width: "15px", height: "15px" }}
                  />{" "}
                  <img
                    src="./action1.png"
                    className="me-2 cursorpointer"
                    alt="Merchandizing"
                    style={{ width: "20px", height: "20px" }}
                  />{" "}
                </Col>
              </Row>
              <Row className="ms-0 app-placeholder">
                <Col xxl={2} xl={2} lg={2} md={2}>
                  xxx
                </Col>
                <Col xxl={2} xl={2} lg={2} md={2}>
                  xxxxxxxxx
                </Col>
                <Col>
                  <img
                    src="./action2.png"
                    className="cursorpointer"
                    alt="Merchandizing"
                    style={{ width: "15px", height: "15px" }}
                  />{" "}
                  <img
                    src="./action1.png"
                    className="me-2 cursorpointer"
                    alt="Merchandizing"
                    style={{ width: "20px", height: "20px" }}
                  />{" "}
                </Col>
              </Row>
              <Row className="mt-5 d-flex align-items-center justify-content-center text-center mb-3">
                <Col xs="auto" className="">
                  First {MenuConstants.page}
                  <span
                    className="cursorpointer"
                    style={{
                      border: "1px solid black",
                      padding: "10px",
                      marginLeft: "10px",
                    }}
                  >
                    <FontAwesomeIcon icon={faArrowLeft} />
                  </span>{" "}
                  {MenuConstants.page}
                  <span
                    style={{
                      border: "1px solid black",
                      padding: "10px",
                      marginLeft: "10px",
                    }}
                  >
                    1
                  </span>{" "}
                  out of xx
                  <span
                    className="cursorpointer"
                    style={{
                      border: "1px solid black",
                      padding: "10px",
                      marginLeft: "10px",
                    }}
                  >
                    <FontAwesomeIcon icon={faArrowRight} />
                  </span>{" "}
                  Last {MenuConstants.page}
                </Col>
              </Row>
            </Row>
          </Row>
        </Col>
      </Row>
      <Footer />
    </Container>
  );
};

export default Country;
