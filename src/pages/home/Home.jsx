import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import flowerimg from "../../assets/images/undraw_flowers_vx06.svg";
import SelectionItem from "../../components/selecion/SelectionItem ";
import { Data } from "../../data";
import Footer from "../../components/footer/Footer";
function Home() {
  const [selections, setSelection] = useState(Data);
  return (
    <>
      <Container fluid="md">
        <Row className="flex align-items-center justify-content-center my-4">
          <Col lg={6}>
            <h1
              style={{ fontFamily: "serif" }}
              className="text-center py-3 lalezare"
            >
              some word for flowers
            </h1>
            <p style={{ textAlign: "justify" }}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
              consequat. Duis autem vel eum iriure dolor in hendrerit in
              vulputate velit esse molestie consequat, vel illum dolore eu
              feugiat nulla facilisis at vero eros et accumsan et iusto odio
              dignissim qui blandit praesent luptatum zzril delenit augue duis
              dolore te feugait nulla facilisi.
            </p>
          </Col>
          <Col lg={6} className="py-4">
            <img className="img-fluid" src={flowerimg} />
          </Col>
        </Row>
        <Row className="my-5">
          <h2 style={{ fontFamily: "serif" }} className="py-4 px-3">
            Products list
          </h2>
          {selections.map((item) => (
            <Col className="py-3" md="6" lg="4" xl="3" key={item.id}>
              <SelectionItem {...item} />
            </Col>
          ))}
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default Home;
