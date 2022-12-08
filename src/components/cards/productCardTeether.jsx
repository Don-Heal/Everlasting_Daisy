import Card from "react-bootstrap/Card";

import image1 from "../../assets/babyProducts/teethers/collection.jpg";

const Images = [{ imageSrc: image1 }];

const Title = [{ title: "Our Teethers" }];

export default function BasicExample() {
  return (
    <div className="card-wrapper">
      <Card style={{ width: "18rem" }}>
        {Images.map((card, index) => (
          <div key={index}>
            <Card.Img variant="top" src={card.imageSrc} />
            <Card.Body>
              <Card.Title>{Title[index].title}</Card.Title>
            </Card.Body>
          </div>
        ))}
      </Card>
    </div>
  );
}
