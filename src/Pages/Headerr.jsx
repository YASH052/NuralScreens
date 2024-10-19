import "../LandingPage/LandingPage.css";
import "../color.css";
import "../fonts.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faGear,
  faBell,
  faCircleQuestion,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import { Row, Col, Container } from "react-bootstrap";
const Headerr = () => {
  return (
    <>
      <Row className="app-LandingPage-row">
        <Col
          xxl={2}
          xl={2}
          lg={2}
          md={2}
          className="app-LandingPage-client-logo align-items-center d-flex"
        >
          Client Logo
        </Col>
        <Col
          xxl={8}
          xl={8}
          lg={8}
          md={8}
          className="app-LandingPage-middlepart justify-content-center d-flex flex-column position-relative"
        >
          <Row className="ms-5 largefontbold paddingleft-LandingPage">
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
            <FontAwesomeIcon icon={faBell} />
            <FontAwesomeIcon
              className="ms-3 app-LandingPage-setting"
              icon={faGear}
            />
            <FontAwesomeIcon className="ms-3" icon={faCircleQuestion} />
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
          className="align-items-center app-LandingPage-rightpart"
        >
          <img
            className=""
            src="./logo.png"
            alt="LandingPage Right"
            style={{ width: "100%" }}
          />
        </Col>
      </Row>
    </>
  );
};

export default Headerr;
