import {
  Row,
  Col,
  Button,
  Container,
  Dropdown,
  FormControl,
  InputGroup,
} from "react-bootstrap";
import React, { useState } from "react";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLightbulb,
  faPenToSquare,
  faArrowLeft,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import Headerr from "./Headerr";
import SideMenu from "../SideMenu/SideMenu";

const State = () => {
  return (
    <Container fluid>
      <Headerr/>
      <Row className="mb-5">
        <Col xl={2} className="app-sidemenu-col">
          <SideMenu/>
        </Col>
        <Col xxl={9} xl={9} lg={9} md={9}>
          <Row className="mt-1 ms-2 fontcolorblackbold app-LandingPage-setting">
            Masters {">"} Locations {">"} State
          </Row>
          <Row className="ms-4 mt-2">
            <Col
              xxl={2}
              xl={2}
              lg={2}
              md={2}
              className="cursorpointer bordercolororange mediumfont backgroundcolorsecondary fontcolorwhite  me-4 app-LandingPage-locations"
            >
              Manage State
            </Col>
            <Row className="app-country-box ms-0">
              <Col xxl={2} xl={2} lg={2} md={2}>
                <Row className="ms-4 mt-3">country</Row>
                <Col className="ms-4 mb-3">
                  <InputGroup>
                    <FormControl
                      type="text"
                      placeholder="country"
                      className="form-control app-placeholder"
                    />
                    <Dropdown>
                      <Dropdown.Toggle
                        variant="outline-none"
                        id="dropdown-basic"
                      ></Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">
                          Country 1
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-2">
                          Country 2
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-3">
                          Country 3
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </InputGroup>
                </Col>
              </Col>
              <Col xxl={2} xl={2} lg={2} md={2}>
                <Row className="ms-4 mt-3">Region</Row>
                <Col className="ms-4 mb-3">
                  <InputGroup>
                    <FormControl
                      type="text"
                      placeholder="Region"
                      className="form-control app-placeholder"
                    />
                    <Dropdown>
                      <Dropdown.Toggle
                        variant="outline-none"
                        id="dropdown-basic"
                      ></Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">
                          Country 1
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-2">
                          Country 2
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-3">
                          Country 3
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </InputGroup>
                </Col>
              </Col>
              <Col xxl={2} xl={2} lg={2} md={2}>
                <Row className="ms-4 mt-3">State</Row>
                <Col className="ms-4 mb-3">
                  <input
                    type="text"
                    className="form-control app-placeholder" // Bootstrap class for styling input
                  />
                </Col>
              </Col>
              <Row className="ms-2 mb-4">
                <Col xxl={2} xl={2} lg={2} md={2}>
                  <Button className="cursorpointer bordercolororange mediumfont backgroundcolorsecondary fontcolorwhite  me-4 app-LandingPage-locations">
                    Create
                  </Button>
                </Col>
                <Col>
                  <Button className="bordercolororange cursorpointer mediumfont backgroundcolorsecondary fontcolorwhite  me-4 app-LandingPage-locations">
                    Cancel
                  </Button>
                </Col>
              </Row>
            </Row>
          </Row>
          <Row className="ms-4 mt-4">
            <Col
              xxl={2}
              xl={2}
              lg={2}
              md={2}
              className="cursorpointer bordercolororange mediumfont backgroundcolorsecondary fontcolorwhite  me-4 app-LandingPage-locations"
            >
              List
            </Col>
            <Row className="app-country-box ms-0 p-0 position-relative">
              <Col xxl={2} xl={2} lg={2} md={2}>
                <Row className="ms-4 mt-3">country</Row>
                <Col className="ms-4 mb-3">
                  <InputGroup>
                    <FormControl
                      type="text"
                      placeholder="country"
                      className="form-control app-placeholder"
                    />
                    <Dropdown>
                      <Dropdown.Toggle
                        variant="outline-none"
                        id="dropdown-basic"
                      ></Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">
                          Country 1
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-2">
                          Country 2
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-3">
                          Country 3
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </InputGroup>
                </Col>
              </Col>
              <Col xxl={2} xl={2} lg={2} md={2}>
                <Row className="ms-4 mt-3">Region</Row>
                <Col className="ms-4 mb-3">
                  <InputGroup>
                    <FormControl
                      type="text"
                      placeholder="Region"
                      className="form-control app-placeholder"
                    />
                    <Dropdown>
                      <Dropdown.Toggle
                        variant="outline-none"
                        id="dropdown-basic"
                      ></Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">
                          Country 1
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-2">
                          Country 2
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-3">
                          Country 3
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </InputGroup>
                </Col>
              </Col>
              <Col xxl={2} xl={2} lg={2} md={2}>
                <Row className="ms-4 mt-3">State</Row>
                <Col className="ms-4 mb-3">
                  <input
                    type="text"
                    className="form-control app-placeholder" // Bootstrap class for styling input
                  />
                </Col>
              </Col>
              <Col
                xxl={2}
                xl={2}
                lg={2}
                md={2}
                className="cursorpointer bordercolororange mediumfont backgroundcolorsecondary fontcolorwhite ms-5 mt-5 app-LandingPage-locations"
              >
                Search
              </Col>

              <Row className="orangecolor fontcolorwhite ms-0 mt-2 mb-1">
                <Col xxl={2} xl={2} lg={2} md={2}>
                  Country
                </Col>
                <Col xxl={2} xl={2} lg={2} md={2}>
                  Region
                </Col>
                <Col xxl={2} xl={2} lg={2} md={2}>
                  Region
                </Col>
                <Col>Action</Col>
              </Row>
              <Row className="ms-0 app-placeholder">
                <Col xxl={2} xl={2} lg={2} md={2}>
                  xxx
                </Col>
                <Col xxl={2} xl={2} lg={2} md={2}>
                  xxxxxxxxx
                </Col>
                <Col xxl={2} xl={2} lg={2} md={2}>
                  xxxxxxxxx
                </Col>
                <Col>
                  <FontAwesomeIcon
                    className="cursorpointer"
                    icon={faLightbulb}
                    style={{ color: "#FFD43B" }}
                  />{" "}
                  <FontAwesomeIcon
                    className="cursorpointer"
                    icon={faPenToSquare}
                    style={{ color: "#74C0FC" }}
                  />
                </Col>
              </Row>
              <Row className="ms-0 mb-5 ">
                <Col xxl={2} xl={2} lg={2} md={2}>
                  xxx
                </Col>
                <Col xxl={2} xl={2} lg={2} md={2}>
                  xxxxxxxxx
                </Col>
                <Col xxl={2} xl={2} lg={2} md={2}>
                  xxxxxxxxx
                </Col>
                <Col>
                  <FontAwesomeIcon
                    className="cursorpointer"
                    icon={faLightbulb}
                    style={{ color: "#FFD43B" }}
                  />{" "}
                  <FontAwesomeIcon
                    className="cursorpointer"
                    icon={faPenToSquare}
                    style={{ color: "#74C0FC" }}
                  />
                </Col>
              </Row>
              <Row className="mt-5 d-flex align-items-center justify-content-center text-center mb-3">
                <Col xs="auto">
                  First Page
                  <span
                    style={{
                      border: "1px solid black",
                      padding: "10px",
                      marginLeft: "10px",
                      marginRight: "10px",
                    }}
                  >
                    <FontAwesomeIcon icon={faArrowLeft} />
                  </span>
                  Page
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
                    style={{
                      border: "1px solid black",
                      padding: "10px",
                      marginLeft: "10px",
                    }}
                  >
                    <FontAwesomeIcon icon={faArrowRight} />
                  </span>{" "}
                  Last Page
                </Col>
              </Row>
            </Row>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default State;
