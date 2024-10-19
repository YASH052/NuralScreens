import { Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const Mastersetting = () => {
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
  return (
    <div>
      <Row className="mt-1 ms-2 fontcolorblackbold app-LandingPage-setting">
        Setting / Master
      </Row>
      <Row className="ms-4 mt-2 fontcolorblackbold">Location</Row>
      <Row className="ms-4">
        <Col
          xxl={2}
          xl={2}
          lg={2}
          md={2}
          className="cursorpointer mediumfont backgroundcolor fontcolorwhite  me-4 app-LandingPage-locations"
          onClick={handleCountryClick}
        >
          Country
        </Col>
        <Col
          xxl={2}
          xl={2}
          lg={2}
          md={2}
          className="mediumfont cursorpointer backgroundcolor fontcolorwhite  me-4 app-LandingPage-locations"
          onClick={handleRegionClick}
        >
          Region
        </Col>
        <Col
          xxl={2}
          xl={2}
          lg={2}
          md={2}
          className="cursorpointer mediumfont backgroundcolor fontcolorwhite  me-4 app-LandingPage-locations"
          onClick={handleStateClick}
        >
          State
        </Col>
        <Col
          xxl={2}
          xl={2}
          lg={2}
          md={2}
          className="mediumfont cursorpointer backgroundcolor fontcolorwhite  me-4 app-LandingPage-locations"
        >
          City
        </Col>
        <Col
          xxl={2}
          xl={2}
          lg={2}
          md={2}
          className="mediumfont cursorpointer backgroundcolor fontcolorwhite  app-LandingPage-locations"
        >
          Area
        </Col>
      </Row>
      <Row className="ms-4 mt-2">
        <Col
          xxl={2}
          xl={2}
          lg={2}
          md={2}
          className="mediumfont cursorpointer backgroundcolor fontcolorwhite  app-LandingPage-locations"
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
          className="mediumfont backgroundcolor fontcolorwhite  me-4 app-LandingPage-locations"
        >
          Brand
        </Col>
        <Col
          xxl={2}
          xl={2}
          lg={2}
          md={2}
          className="mediumfont backgroundcolor fontcolorwhite  me-4 app-LandingPage-locations"
        >
          Category
        </Col>
        <Col
          xxl={2}
          xl={2}
          lg={2}
          md={2}
          className="mediumfont backgroundcolor fontcolorwhite  me-4 app-LandingPage-locations"
        >
          Subcategory/classification
        </Col>
        <Col
          xxl={2}
          xl={2}
          lg={2}
          md={2}
          className="mediumfont backgroundcolor fontcolorwhite  me-4 app-LandingPage-locations"
        >
          Model
        </Col>
        <Col
          xxl={2}
          xl={2}
          lg={2}
          md={2}
          className="mediumfont backgroundcolor fontcolorwhite  app-LandingPage-locations"
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
          className="mediumfont backgroundcolor fontcolorwhite  me-4 app-LandingPage-locations"
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
          className="mediumfont backgroundcolor fontcolorwhite  me-4 app-LandingPage-locations"
        >
          Manage sales channel
        </Col>
        <Col
          xxl={2}
          xl={2}
          lg={2}
          md={2}
          className="mediumfont backgroundcolor fontcolorwhite  me-4 app-LandingPage-locations"
        >
          Spare
        </Col>
        <Col
          xxl={2}
          xl={2}
          lg={2}
          md={2}
          className="mediumfont backgroundcolor fontcolorwhite  me-4 app-LandingPage-locations"
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
          className="backgroundcolor mediumfont fontcolorwhite  me-4 app-LandingPage-locations"
        >
          User masters
        </Col>
        <Col
          xxl={2}
          xl={2}
          lg={2}
          md={2}
          className="mediumfont backgroundcolor fontcolorwhite  me-4 app-LandingPage-locations"
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
          className="backgroundcolor fontcolorwhite  me-4 app-LandingPage-locations"
        >
          price
        </Col>
        <Col
          xxl={2}
          xl={2}
          lg={2}
          md={2}
          className="backgroundcolor fontcolorwhite  me-4 app-LandingPage-locations"
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
          className="mediumfont backgroundcolor fontcolorwhite  me-4 app-LandingPage-locations"
        >
          Manage leaves types
        </Col>
        <Col
          xxl={2}
          xl={2}
          lg={2}
          md={2}
          className="mediumfont backgroundcolor fontcolorwhite  me-4 app-LandingPage-locations"
        >
          Leaves allocation
        </Col>
      </Row>
      <Row className="ms-4 fontcolorblackbold mt-4">ISP Master</Row>
      <Row className="ms-4">
        <Col
          xxl={2}
          xl={2}
          lg={2}
          md={2}
          className="backgroundcolor mediumfont fontcolorwhite  me-4 app-LandingPage-locations"
        >
          Manage ISP
        </Col>
        <Col
          xxl={2}
          xl={2}
          lg={2}
          md={2}
          className="backgroundcolor mediumfont fontcolorwhite  me-4 app-LandingPage-locations"
        >
          Pre-booking SKU
        </Col>
        <Col
          xxl={2}
          xl={2}
          lg={2}
          md={2}
          className="mediumfont backgroundcolor fontcolorwhite  me-4 app-LandingPage-locations"
        >
          Ranking weightage
        </Col>
      </Row>
    </div>
  );
}

export default Mastersetting
