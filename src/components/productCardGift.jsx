import Card from "react-bootstrap/Card";

import image1 from "../assets/personalProducts/gift/mugbox.jpg";
import image2 from "../assets/personalProducts/gift/mugwinebox.jpg";

const Images = [{ imageSrc: image1 }, { imageSrc: image2 }];

export default function BasicExample() {
  return (
    <div className="card-wrapper">
      <Card style={{ width: "18rem" }}>
        {Images.map((card, index) => (
          <div key={index}>
            <Card.Img variant="top" src={card.imageSrc} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </div>
        ))}
      </Card>
    </div>
  );
}
