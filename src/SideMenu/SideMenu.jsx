import {
  Col,
} from "react-bootstrap";
import {
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import "../App.css";
import './SideMenu.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SideMenu = () => {
  return (
    <>
      <Col className="app-sidemenu-col">
        <Col className="orangecolor align-items-center d-flex mediumfontbold fontcolorwhite app-sidemenu-mainmenu">
          <Col className="ms-2"> Main Menu</Col>
        </Col>

        <Col className="mt-3 smallfont ms-2">
          <img
            src="./Dashboard.png"
            className="me-2"
            alt=""
            style={{ width: "20px", height: "20px" }}
          />{" "}
          Dashboard
        </Col>
        <Col className="mt-3 smallfont ms-2 position-relative ">
          {" "}
          <img
            src="./Transaction.png"
            className="me-2"
            alt=""
            style={{ width: "20px", height: "20px" }}
          />{" "}
          Transaction
          <FontAwesomeIcon
            className="position-absolute end-0 me-3 "
            icon={faChevronDown}
          />
        </Col>
        <Col className="mt-3 smallfont ms-2">
          {" "}
          <img
            className="me-2"
            src="./Target.png"
            alt=""
            style={{ width: "20px", height: "20px" }}
          />{" "}
          Target
        </Col>
        <Col className="mt-3 smallfont ms-2  position-relative ">
          {" "}
          <img
            src="./Transaction Return.png"
            className="me-2"
            alt=""
            style={{ width: "20px", height: "20px" }}
          />{" "}
          Transaction return
          <FontAwesomeIcon
            className="position-absolute end-0 me-3 "
            icon={faChevronDown}
          />
        </Col>
        <Col className="mt-3 smallfont ms-2">
          {" "}
          <img
            className="me-2"
            src="./incentive.png"
            alt=""
            style={{ width: "20px", height: "20px" }}
          />{" "}
          ISP incentive
        </Col>
        <Col className="mt-3 smallfont ms-2 position-relative ">
          {" "}
          <img
            className="me-2"
            src="./merchandizing.png"
            alt=""
            style={{ width: "20px", height: "20px" }}
          />{" "}
          Merchandizing{" "}
          <FontAwesomeIcon
            className="position-absolute end-0 me-3 "
            icon={faChevronDown}
          />
        </Col>
        <Col className="mt-3 smallfont ms-2 position-relative ">
          {" "}
          <img
            className="me-2"
            src="./competition.png"
            alt=""
            style={{ width: "20px", height: "20px" }}
          />{" "}
          Competetion{" "}
          <FontAwesomeIcon
            className="position-absolute end-0 me-3 "
            icon={faChevronDown}
          />
        </Col>
        <Col className="mt-3 smallfont ms-2 position-relative ">
          {" "}
          <img
            src="./learning.png"
            className="me-2"
            alt=""
            style={{ width: "20px", height: "20px" }}
          />{" "}
          Learning & Developemnt{" "}
          <FontAwesomeIcon
            className="position-absolute end-0 me-3 "
            icon={faChevronDown}
          />
        </Col>
        <Col className="mt-3 smallfont ms-2">
          {" "}
          <img
            className="me-2"
            src="./survey.png"
            alt=""
            style={{ width: "20px", height: "20px" }}
          />{" "}
          Survey{" "}
        </Col>
        <Col className="mt-3 smallfont ms-2 position-relative ">
          {" "}
          <img
            className="me-2"
            src="./bulletin.png"
            alt=""
            style={{ width: "20px", height: "20px" }}
          />{" "}
          Bulletin{" "}
          <FontAwesomeIcon
            className="position-absolute end-0 me-3"
            icon={faChevronDown}
          />{" "}
        </Col>
        <Col className="mt-3 smallfont ms-2">
          {" "}
          <img
            src="./feedback.png"
            className="me-2"
            alt=""
            style={{ width: "20px", height: "20px" }}
          />{" "}
          Feedback
        </Col>
        <Col className="mt-3 smallfont ms-2">
          {" "}
          <img
            src="./report.png "
            className="me-2"
            alt=""
            style={{ width: "20px", height: "20px" }}
          />{" "}
          Reports
        </Col>
      </Col>
    </>
  );
};

export default SideMenu;
