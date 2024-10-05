import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./selectionItem.css";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
function SelectionItem({ img, title, desc, id }) {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div data-aos="fade-up" data-aos-duration="1500">
      <Card
        style={{ backgroundColor: "#F2F2F2", border: "0" }}
        className="shadow"
      >
        <Card.Img
          className="img-fluid rounded-0 rounded-top-1"
          style={{ width: "100%", height: "200px" }}
          src={img}
        />
        <Card.Body>
          <Card.Title style={{fontFamily:'serif',color:'black'}}>{title}</Card.Title>
          <Card.Text
            style={{
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              WebkitLineClamp: 2,
              color:'black'
            }}
          >
            {desc}
          </Card.Text>
          <Link to={`/selection/${id}`}>
            <Button className="border-0 btnSelectionItem">More Info</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
}

export default SelectionItem;
