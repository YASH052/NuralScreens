import React from "react";
import Footer from "../Footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLightbulb,
  faPenToSquare,
  faArrowLeft,
  faArrowRight,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import {
  Row,
  Col,
  Button,
  Container,
  Dropdown,
  FormControl,
  InputGroup,
} from "react-bootstrap";
import Header from "./Header";
import SideMenu from "../SideMenu/SideMenu";
import { useNavigate } from "react-router-dom";
import { MenuConstants } from "../Constant/MenuConstants";
const Createisp = () => {
  const navigate = useNavigate();
  const handleSetting = () => {
    navigate("/setting"); // Navigate to the settings route
  };
  const handleviewisp = () => {
    navigate("/ispincentive"); // Navigate to the settings route
  };
  return (
    <Container fluid>
      <Row>
        <Header />
      </Row>
      <Row className="mb-4">
        <>
          <SideMenu />
        </>

        <Col xxl={9} xl={9} lg={9} md={9} xs={7} className="p-0">
          <Col className="mt-1 paddingleft-mastersettings fontcolorblackbold borderbottom app-LandingPage-setting">
            <span className="cursorpointer" onClick={handleSetting}>
              {MenuConstants.master}
            </span>{" "}
            {">"} {MenuConstants.ispIncentive}
          </Col>
          <Row className="ms-4 mt-2 position-relative">
            <Col
              xxl={2}
              xl={2}
              lg={2}
              md={2}
              className="cursorpointer bordercolororange p-1 mediumfont backgroundcolorsecondary fontcolorwhite  me-4 app-LandingPage-locations"
            >
              {MenuConstants.create} {MenuConstants.ispIncentive}
            </Col>
            <Col
              xxl={2}
              xl={2}
              lg={2}
              md={2}
              onClick={handleviewisp}
              className="cursorpointer  position-absolute end-0 p-1  bordercolororange mediumfontbold app-LandingPage-locations"
            >
              {MenuConstants.view} {MenuConstants.ispIncentive}
            </Col>
            <Row className="app-country-box ms-0 ">
              <Col xxl={3} xl={3} lg={3} md={3}>
                <Row className="ms-4 mt-3"> {MenuConstants.Scheme} Name</Row>
                <Col className="ms-4 mb-3">
                  <InputGroup>
                    <FormControl
                      type="text"
                      placeholder="name"
                      className="form-control app-placeholder"
                    />
                  </InputGroup>
                </Col>
              </Col>
              <Col xxl={3} xl={3} lg={3} md={3}>
                <Row className="ms-4 mt-3"> {MenuConstants.Scheme} On</Row>
                <Col className="ms-4 mb-3">
                  <InputGroup>
                    <FormControl
                      type="text"
                      placeholder="select"
                      className="form-control app-placeholder"
                    />
                    <Dropdown>
                      <Dropdown.Toggle
                        variant="outline-none"
                        id="dropdown-basic"
                      ></Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">
                          sales Ach- Qty
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-2">
                          sales Ach-value
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-3">
                          Activation- Qty
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </InputGroup>
                </Col>
              </Col>
              <Col xxl={3} xl={3} lg={3} md={3}>
                <Row className="ms-4 mt-3"> {MenuConstants.payout} Type</Row>
                <Col className="ms-4 mb-3">
                  <InputGroup>
                    <FormControl
                      type="text"
                      placeholder="type"
                      className="form-control app-placeholder"
                    />
                    <Dropdown>
                      <Dropdown.Toggle
                        variant="outline-none"
                        id="dropdown-basic"
                      ></Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">
                          % if Inv value
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-2">
                          Points per Qty
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-3">
                          Rupees per Qty
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </InputGroup>
                </Col>
              </Col>
              <Row className="mt-3">
                <Col xxl={3} xl={3} lg={3} md={3}>
                  <Row className="ms-4 "> {MenuConstants.payout} On</Row>
                  <Col className="ms-4 mb-3">
                    <InputGroup>
                      <FormControl
                        type="text"
                        placeholder="type"
                        className="form-control app-placeholder"
                      />
                      <Dropdown>
                        <Dropdown.Toggle
                          variant="outline-none"
                          id="dropdown-basic"
                        ></Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item href="#/action-1">
                            Primary Sales
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-2">
                            Secondary Sales
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-3">
                            Tertiary Sales
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </InputGroup>
                  </Col>
                </Col>
                <Col className="ms-4" xxl={3} xl={3} lg={3} md={3}>
                  {MenuConstants.Scheme} From
                  <Col className="mt-1">
                    <input
                      type="date"
                      id="date"
                      name="date"
                      placeholder="Select date"
                      className="date-input "
                      //   required
                    />
                  </Col>
                </Col>
                <Col>
                  {MenuConstants.Scheme} To
                  <Col className="input-container mt-1 ">
                    <input
                      type="date"
                      id="date"
                      name="date"
                      placeholder="Select date"
                      className="date-input"
                      //   required
                    />
                  </Col>
                </Col>
              </Row>
              <Row className="ms-2 mb-4 mt-3">
                <Col xxl={2} xl={2} lg={2} md={2}>
                  <Button className="cursorpointer bordercolororange mediumfont mt-2 backgroundcolorsecondary fontcolorwhite  me-4 app-LandingPage-locations">
                    {MenuConstants.search}
                  </Button>
                </Col>
                <Col>
                  <Button className="bordercolororange cursorpointer mediumfont mt-2 backgroundcolorsecondary fontcolorwhite  me-4 app-LandingPage-locations">
                    {MenuConstants.showall}
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
              Select Users
            </Col>
            <Row className="app-country-box ms-0 p-0 position-relative">
              {" "}
              <Col xxl={4} xl={4} lg={4} md={4}>
                <Row className="ms-4 mt-4">
                  {" "}
                  {MenuConstants.upload} {MenuConstants.file}
                </Row>
                <Button className="ms-4 mb-3 app-uploadfile-btn">
                  {MenuConstants.choose} {MenuConstants.file}
                </Button>
                <span className="borderbottom">
                  {" "}
                  {MenuConstants.nofileselected}
                </span>
              </Col>
              <Col xxl={2} xl={2} lg={2} md={2}>
                <Button className="backgroundcolorsecondary bordercolororange mb-4 mt-5">
                  {MenuConstants.upload}
                </Button>
              </Col>
              <Col className="mt-5 fontcolororange cursorpointer" lg={3}>
                {MenuConstants.download} User Template
              </Col>
              <Col className="mt-5 fontcolororange cursorpointer" lg={3}>
                {MenuConstants.download} Reference Code
              </Col>
            </Row>
            <Col
              xxl={2}
              xl={2}
              lg={2}
              md={2}
              className="cursorpointer mt-4 bordercolororange mediumfont backgroundcolorsecondary fontcolorwhite  me-4 app-LandingPage-locations"
            >
              {MenuConstants.upload} {MenuConstants.SKU}
            </Col>
            <Row className="app-country-box ms-0 p-0 position-relative">
              {" "}
              <Col xxl={4} xl={4} lg={4} md={4}>
                <Row className="ms-4 mt-4"> {MenuConstants.upload}File</Row>
                <Button className="ms-4 mb-3 app-uploadfile-btn">
                  {MenuConstants.choose} {MenuConstants.file}
                </Button>
                <span className="borderbottom">
                  {" "}
                  {MenuConstants.nofileselected}
                </span>
              </Col>
              <Col xxl={2} xl={2} lg={2} md={2}>
                <Button className="backgroundcolorsecondary bordercolororange mb-4 mt-5">
                  {MenuConstants.upload}
                </Button>
              </Col>
              <Col className="mt-5 fontcolororange cursorpointer" lg={3}>
                {MenuConstants.download} {MenuConstants.SKU} Template
              </Col>
              <Col className="mt-5 fontcolororange cursorpointer" lg={3}>
                {MenuConstants.download} Reference Code
              </Col>
            </Row>
            <Col
              xxl={2}
              xl={2}
              lg={2}
              md={2}
              className="cursorpointer mt-4 bordercolororange mediumfont backgroundcolorsecondary fontcolorwhite  me-4 app-LandingPage-locations"
            >
              {MenuConstants.upload} {MenuConstants.payout}
            </Col>
            <Row className="app-country-box ms-0 p-0 position-relative">
              {" "}
              <Col xxl={4} xl={4} lg={4} md={4}>
                <Row className="ms-4 mt-4">
                  {" "}
                  {MenuConstants.upload} {MenuConstants.file}
                </Row>
                <Button className="ms-4 mb-3 app-uploadfile-btn">
                  {MenuConstants.choose} {MenuConstants.file}
                </Button>
                <span className="borderbottom">
                  {" "}
                  {MenuConstants.nofileselected}
                </span>
              </Col>
              <Col xxl={2} xl={2} lg={2} md={2}>
                <Button className="backgroundcolorsecondary bordercolororange mb-4 mt-5">
                  {MenuConstants.upload}
                </Button>
              </Col>
              <Col className="mt-5 fontcolororange cursorpointer" lg={4}>
                {MenuConstants.download} {MenuConstants.payout} Template
              </Col>
            </Row>
          </Row>
        </Col>
      </Row>

      <Footer />
    </Container>
  );
};

export default Createisp;
