import React from "react";
import { Row } from "react-bootstrap";
import './footer.css'
const Footer = () => {
  return (
    <Row className="fixed-bottom sidemenubg justify-content-center text-center">
      {" "}
      <img
        className=""
        src="./footerlogo.jpg"
        alt=""
        style={{ width: "300px", height: "30px" }}
      />{" "}
    </Row>
  );
};

export default Footer;
