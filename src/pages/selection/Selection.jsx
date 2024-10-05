import React from "react";
import { useParams } from "react-router-dom";
import { Data } from "../../data";
import { Col, Container, Row } from "react-bootstrap";

function Selection() {
  const selectionId = useParams().id;
  const selectionInfo = Data.find((item) => item.id == selectionId);

  console.log(selectionInfo);
  return (
    <div>
      <Container fluid='md'>
        <Row className="py-5">
          <Col
            className="flex align-content-center justify-content-center"
            lg={6}
          >
            <h2 style={{ fontFamily: "serif" }}>{selectionInfo.title}</h2>
            <p>Author : {selectionInfo.author}</p>
            <p style={{ textAlign: "justify" }}>
              <b>{selectionInfo.desc}</b>
            </p>
          </Col>
          <Col lg={6}>
            <img className="img-fluid" src={selectionInfo.img} alt="" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Selection;
