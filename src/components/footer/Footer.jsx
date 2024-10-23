import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <div style={{ background: "#F2F2F2" }} className="py-lg-5 ">
      <Container>
        <Row className="flex align-items-center ">
          <Col>
            <h2 className="py-1" style={{ fontFamily: "serif" }}>
              Random text for footer
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat.
            </p>
          </Col>
          <Col style={{ textAlign: "right" }}>
            <Link to="/panel">
              <i>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="65"
                  height="65"
                  viewBox="0 0 3000 3000"
                >
                  <path
                    fillRule="evenodd"
                    fill="#00C993"
                    fillOpacity="1"
                    d="M 1146 1136.25 C 1146 940.738281 1304.488281 782.25 1500 782.25 C 1695.511719 782.25 1854 940.738281 1854 1136.25 C 1854 1331.761719 1695.511719 1490.25 1500 1490.25 C 1304.488281 1490.25 1146 1331.761719 1146 1136.25 Z M 1146 1136.25 "
                  />
                  <path
                    fillRule="evenodd"
                    fill="#00C993"
                    fillOpacity="1"
                    d="M 1500 1621.5 C 1937 1621.5 2291.25 1888.449219 2291.25 2217.75 L 708.75 2217.75 C 708.75 1888.449219 1063 1621.5 1500 1621.5 Z M 1500 1621.5 "
                  />
                </svg>
              </i>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;