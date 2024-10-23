import React from 'react'
import Footer from '../Footer/Footer';
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
import Header from './Header';
import SideMenu from '../SideMenu/SideMenu';
import { useNavigate } from 'react-router-dom';
import { MenuConstants } from '../Constant/MenuConstants';
const ViewTarget = () => {
      const navigate = useNavigate();
     const handleSetting = () => {
       navigate("/setting"); // Navigate to the settings route
     };
       const handleCreateTarget = () => {
         navigate("/createtarget"); // Navigate to the settings route
       };
  return (
    <Container fluid>
      <Row>
        <Header />
      </Row>
      <Row className="mb-4">
        <SideMenu />

        <Col xxl={9} xl={9} lg={9} md={9} xs={7} className="p-0">
          <Col className="mt-1 paddingleft-mastersettings fontcolorblackbold borderbottom app-LandingPage-setting">
            <span className="cursorpointer" onClick={handleSetting}>
              {MenuConstants.master}
            </span>{" "}
            {">"} {MenuConstants.target}
          </Col>
          <Row className="ms-4 mt-2 position-relative">
            <Col
              xxl={2}
              xl={2}
              lg={2}
              md={2}
              className="cursorpointer bordercolororange mediumfont backgroundcolorsecondary fontcolorwhite  me-4 app-LandingPage-locations"
            >
              {MenuConstants.view} {MenuConstants.target}
            </Col>
            <Col
              xxl={2}
              xl={2}
              lg={2}
              md={2}
              className="cursorpointer  position-absolute end-0  bordercolororange mediumfontbold app-LandingPage-locations"
              onClick={handleCreateTarget}
            >
              {MenuConstants.create} {MenuConstants.target}
            </Col>
            <Row className="app-country-box ms-0 ">
              <Col xxl={2} xl={2} lg={2} md={2}>
                <Row className="ms-4 mt-3">Entity Type</Row>
                <Col className="ms-4 mb-3">
                  <InputGroup>
                    <FormControl
                      type="text"
                      placeholder="target"
                      className="form-control app-placeholder"
                    />
                    <Dropdown>
                      <Dropdown.Toggle
                        variant="outline-none"
                        id="dropdown-basic"
                      ></Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">xxx</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">xxx</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">xxx</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </InputGroup>
                </Col>
              </Col>
              <Col xxl={2} xl={2} lg={2} md={2}>
                <Row className="ms-4 mt-3"> {MenuConstants.target} Name</Row>
                <Col className="ms-4 mb-3">
                  <InputGroup>
                    <FormControl
                      type="text"
                      placeholder="Target"
                      className="form-control app-placeholder"
                    />
                    <Dropdown>
                      <Dropdown.Toggle
                        variant="outline-none"
                        id="dropdown-basic"
                      ></Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">xxx</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">xxx</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">xxx</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </InputGroup>
                </Col>
              </Col>
              <Row>
                <Col className="ms-4">
                  From Date
                  <Col className="">
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
                  To Date
                  <Col className="input-container">
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
              {MenuConstants.list}
            </Col>
            <Row className="app-country-box ms-0 p-0 position-relative">
              <Row className="backgroundcolor fontcolorwhite ms-0 mt-2 mb-1">
                <Col> {MenuConstants.target} Name</Col>
                <Col> {MenuConstants.target} For</Col>
                <Col> {MenuConstants.target} Type</Col>
                <Col> {MenuConstants.target} From</Col>
                <Col> {MenuConstants.target} To</Col>
                <Col> {MenuConstants.target}</Col>
                <Col>view  {MenuConstants.details}</Col>
              </Row>
              <Row className="ms-0 app-placeholder">
                <Col>xxx</Col>
                <Col>xxx</Col>
                <Col>xxx</Col>
                <Col>xxx</Col>
                <Col>xxx</Col>
                <Col>xxx</Col>
                <Col>
                  <Button className="app-details-btn backgroundcolorsecondary bordercolororange mb-1">
                     {MenuConstants.details}
                  </Button>
                </Col>
              </Row>
              <Row className="ms-0 mb-5 app-placeholder">
                <Col>xxx</Col>
                <Col>xxxx</Col>
                <Col>xxxx</Col>
                <Col>xxxx</Col>
                <Col>xxx</Col>
                <Col>xxxx</Col>
                <Col>
                  <Button className="app-details-btn mb-1 mt-1 backgroundcolorsecondary bordercolororange">
                     {MenuConstants.details}
                  </Button>
                </Col>
              </Row>
              <Row className="mt-5 d-flex align-items-center justify-content-center text-center mb-3">
                <Col xs="auto">
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
}

export default ViewTarget
