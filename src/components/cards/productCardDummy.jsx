import Card from "react-bootstrap/Card";

import image1 from "../../assets/babyProducts/dummyChain/big.jpg";
import image2 from "../../assets/babyProducts/dummyChain/bigShot.jpg";
import image3 from "../../assets/babyProducts/dummyChain/small.jpg";
import image4 from "../../assets/babyProducts/dummyChain/smallShot.jpg";

const Images = [
  { imageSrc: image1 },
  { imageSrc: image2 },
  { imageSrc: image3 },
  { imageSrc: image4 },
];

const Title = [
  { title: "Dummy Chain - Large" },
  { title: "Big" },
  { title: "Dummy Chain - Small" },
  { title: "Small" },
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
