import Card from "react-bootstrap/Card";

import image1 from "../../assets/babyProducts/babyBibs/anchor.jpg";
import image2 from "../../assets/babyProducts/babyBibs/animals.jpg";
import image3 from "../../assets/babyProducts/babyBibs/cars.jpg";
import image4 from "../../assets/babyProducts/babyBibs/mickey.jpg";
import image5 from "../../assets/babyProducts/babyBibs/pooh.jpg";

const Images = [
  { imageSrc: image1 },
  { imageSrc: image2 },
  { imageSrc: image3 },
  { imageSrc: image4 },
  { imageSrc: image5 },
];

const Title = [
  { title: "Anchor" },
  { title: "Animals" },
  { title: "Cars" },
  { title: "Mickey" },
  { title: "Pooh" },
];

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
