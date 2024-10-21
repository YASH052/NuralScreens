import {
  Col,Container,Row
} from "react-bootstrap";
import {
  faChevronDown,
  faChevronUp,
  faArrowRightLong,
} from "@fortawesome/free-solid-svg-icons";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useNavigate} from "react-router-dom";
const SideMenu = () => {
   const navigate = useNavigate();
   const [transactionOpen, setTransactionOpen] = useState(false);
   const [transactionReturnOpen, setTransactionReturnOpen] = useState(false);
   const [merchandizingOpen, setMerchandizingOpen] = useState(false);
   const [competitionOpen, setCompetitionOpen] = useState(false);
   const [learningOpen, setLearningOpen] = useState(false);
  const [bulletinOpen, setBulletinOpen] = useState(false);
  return (
    <>
      <Col className="app-sidemenu-col">
        <Col className="backgroundcolor align-items-center d-flex mediumfontbold fontcolorwhite app-sidemenu-mainmenu">
          <Col className="ms-2"> Main Menu</Col>
        </Col>

        <Col className="mt-3 mediumfont ms-2">
          <img
            src="./Dashboard.png"
            className="me-2"
            alt=""
            style={{ width: "20px", height: "20px" }}
          />{" "}
          Dashboard
        </Col>
        <Col
          className="mt-3  cursorpointer mediumfont ms-2 position-relative"
          onClick={() => setTransactionOpen(!transactionOpen)} // Toggle on click
        >
          <img
            src="./Transaction.png"
            className="me-2"
            alt="Transaction"
            style={{ width: "20px", height: "20px" }}
          />{" "}
          Transaction
          <FontAwesomeIcon
            className="position-absolute end-0 me-3"
            icon={transactionOpen ? faChevronUp : faChevronDown} // Toggle icon
          />
        </Col>

        {/* Conditionally render submenu for Transaction */}
        {transactionOpen && (
          <Col className="ms-3 mt-2">
            <Col className="mediumfont cursorpointer">
              <FontAwesomeIcon icon={faArrowRightLong} /> Upload Primary sales
            </Col>
            <Col className="cursorpointer mediumfont mt-2">
              <FontAwesomeIcon icon={faArrowRightLong} /> upload secondary
            </Col>
            <Col className="cursorpointer mediumfont mt-2">
              <FontAwesomeIcon icon={faArrowRightLong} /> upload stock
              adjustment
            </Col>
          </Col>
        )}
        <Col className="mt-3 mediumfont ms-2">
          {" "}
          <img
            className="me-2"
            src="./Target.png"
            alt=""
            style={{ width: "20px", height: "20px" }}
          />{" "}
          Target
        </Col>
        <Col
          className="mt-3  cursorpointer mediumfont ms-2 position-relative"
          onClick={() => setTransactionReturnOpen(!transactionReturnOpen)} // Toggle on click
        >
          <img
            src="./Transaction Return.png"
            className="me-2"
            alt="Transaction return"
            style={{ width: "20px", height: "20px" }}
          />{" "}
          Transaction return
          <FontAwesomeIcon
            className="position-absolute end-0 me-3"
            icon={transactionReturnOpen ? faChevronUp : faChevronDown} // Toggle icon
          />
        </Col>

        {/* Conditionally render submenu for Transaction return */}
        {transactionReturnOpen && (
          <Col className="ms-4 mt-2">
            <Col className="cursorpointer mediumfont">Submenu 1</Col>
            <Col className="cursorpointer mediumfont">Submenu 2</Col>
          </Col>
        )}
        <Col className="mt-3 mediumfont ms-2">
          {" "}
          <img
            className="me-2"
            src="./incentive.png"
            alt=""
            style={{ width: "20px", height: "20px" }}
          />{" "}
          ISP incentive
        </Col>
        <Col
          className="mt-3  cursorpointer mediumfont ms-2 position-relative"
          onClick={() => setMerchandizingOpen(!merchandizingOpen)} // Toggle on click
        >
          <img
            src="./merchandizing.png"
            className="me-2"
            alt="Merchandizing"
            style={{ width: "20px", height: "20px" }}
          />{" "}
          Merchandizing
          <FontAwesomeIcon
            className="position-absolute end-0 me-3"
            icon={merchandizingOpen ? faChevronUp : faChevronDown} // Toggle icon
          />
        </Col>
        {merchandizingOpen && (
          <Col className="ms-3 mt-2">
            <Col className="cursorpointer mediumfont">
              <FontAwesomeIcon icon={faArrowRightLong} /> Task category master
            </Col>
            <Col className="cursorpointer mediumfont mt-2">
              <FontAwesomeIcon icon={faArrowRightLong} /> Manage Task
            </Col>
            <Col className="cursorpointer mediumfont mt-2">
              <FontAwesomeIcon icon={faArrowRightLong} /> Update Task
            </Col>
          </Col>
        )}
        <Col
          className="mt-3  cursorpointer mediumfont ms-2 position-relative"
          onClick={() => setCompetitionOpen(!competitionOpen)}
        >
          <img
            className="me-2"
            src="./competition.png"
            alt="Competetion"
            style={{ width: "20px", height: "20px" }}
          />{" "}
          Competetion
          <FontAwesomeIcon
            className="position-absolute end-0 me-3"
            icon={competitionOpen ? faChevronUp : faChevronDown}
          />
        </Col>

        {competitionOpen && (
          <Col className="ms-4 mt-2">
            <Col className="cursorpointer mediumfont">
              Competition Submenu 1
            </Col>
            <Col className="cursorpointer mediumfont">
              Competition Submenu 2
            </Col>
          </Col>
        )}
        <Col
          className="mt-3  cursorpointer mediumfont ms-2 position-relative"
          onClick={() => setLearningOpen(!learningOpen)}
        >
          <img
            className="me-2"
            src="./learning.png"
            alt="Learning & Development"
            style={{ width: "20px", height: "20px" }}
          />{" "}
          Learning & Development
          <FontAwesomeIcon
            className="position-absolute end-0 me-3"
            icon={learningOpen ? faChevronUp : faChevronDown}
          />
        </Col>

        {learningOpen && (
          <Col className="ms-3 mt-2">
            <Col className="mediumfont cursorpointer">
              <FontAwesomeIcon icon={faArrowRightLong} /> Manage L & D Category
            </Col>
            <Col className="cursorpointer mediumfont mt-2">
              <FontAwesomeIcon icon={faArrowRightLong} /> Manage L & D Content
            </Col>
            <Col className=" cursorpointer mediumfont mt-2">
              <FontAwesomeIcon icon={faArrowRightLong} /> Manage Assessment
            </Col>
          </Col>
        )}

        <Col className="mt-3 mediumfont ms-2">
          {" "}
          <img
            className="me-2"
            src="./survey.png"
            alt=""
            style={{ width: "20px", height: "20px" }}
          />{" "}
          Survey{" "}
        </Col>
        <Col
          className="mt-3  cursorpointer mediumfont ms-2 position-relative"
          onClick={() => setBulletinOpen(!bulletinOpen)}
        >
          <img
            className="me-2"
            src="./bulletin.png"
            alt="Bulletin"
            style={{ width: "20px", height: "20px" }}
          />{" "}
          Bulletin
          <FontAwesomeIcon
            className="position-absolute end-0 me-3"
            icon={bulletinOpen ? faChevronUp : faChevronDown}
          />
        </Col>

        {bulletinOpen && (
          <Col className="ms-3 mt-2">
            <Col className="cursorpointer mediumfont">
              <FontAwesomeIcon icon={faArrowRightLong} /> Manage Bulletin
              Category
            </Col>
            <Col className="cursorpointer mediumfont mt-2">
              <FontAwesomeIcon icon={faArrowRightLong} /> Manage Bulletin
            </Col>
          </Col>
        )}
        <Col className="mt-3 mediumfont ms-2">
          {" "}
          <img
            src="./feedback.png"
            className="me-2"
            alt=""
            style={{ width: "20px", height: "20px" }}
          />{" "}
          Feedback
        </Col>
        <Col className="mt-3 mediumfont ms-2">
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
