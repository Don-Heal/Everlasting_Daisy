import Card from "react-bootstrap/Card";

import image1 from "../../assets/personalProducts/mugs/mug-red.jpg";
import image2 from "../../assets/personalProducts/mugs/mug-blue.jpg";
import image3 from "../../assets/personalProducts/mugs/mug-green.jpg";
import image4 from "../../assets/personalProducts/mugs/mug-grey.jpg";
import image5 from "../../assets/personalProducts/mugs/mug-navy.jpg";
import image6 from "../../assets/personalProducts/mugs/mug-pink.jpg";
import image7 from "../../assets/personalProducts/mugs/mug-purple.jpg";
import image8 from "../../assets/personalProducts/mugs/mug-white.jpg";
import image9 from "../../assets/personalProducts/mugs/mug-orange.jpg";

const Images = [
  { imageSrc: image1 },
  { imageSrc: image2 },
  { imageSrc: image3 },
  { imageSrc: image4 },
  { imageSrc: image5 },
  { imageSrc: image6 },
  { imageSrc: image7 },
  { imageSrc: image8 },
  { imageSrc: image9 },
];

const Title = [
  { title: "Red" },
  { title: "Blue" },
  { title: "Green" },
  { title: "Grey" },
  { title: "Navy" },
  { title: "Pink" },
  { title: "Purple" },
  { title: "White" },
  { title: "Orange" },
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
