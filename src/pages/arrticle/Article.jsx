import { Link, Outlet } from "react-router-dom";
import "./Article.css";
import { Col, Container, Row } from "react-bootstrap";

function Article() {
  return (
    <div className="text-center">
      <h2 style={{ fontFamily: "serif" }} className="py-5">
        Article pages
      </h2>
      <hr className="py-3" />
      <Container fluid="md" className=" py-3">
        <Row className="row d-flex justify-content-center ww m-auto">
          <Col md={4} className="my-4">
            <Link
              style={{
                backgroundColor: "#00C993",
              }}
              className="border-0 p-3 rounded-4 text-decoration-none text-white"
              to={"health"}
            >
              flowers and health
            </Link>
          </Col>
          <Col md={4} className="my-4">
            <Link
              style={{
                backgroundColor: "#00C993",
              }}
              className="border-0 p-3 rounded-4 text-decoration-none text-white "
              to={"plants"}
            >
              flowers and plants
            </Link>
          </Col>
          <Col md={4} className="my-4 ">
            <Link
              style={{
                backgroundColor: "#00C993",
              }}
              className="border-0 p-3 rounded-4 text-decoration-none text-white "
              to={"water"}
            >
              flowers and water
            </Link>
          </Col>
        </Row>
      </Container>
      <hr className="py-4 mt-5" />
      <Outlet />
    </div>
  );
}

export default Article;
