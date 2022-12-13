import Card from "react-bootstrap/Card";

import image1 from "../../assets/babyProducts/apparel/First-Christmas.jpg";
import image2 from "../../assets/babyProducts/apparel/Handmade-Jumper.jpg";
import image3 from "../../assets/babyProducts/apparel/Onesies.jpg";

const Images = [
  { imageSrc: image1 },
  { imageSrc: image2 },
  { imageSrc: image3 },
];

const Title = [
  { title: "First Christmas" },
  { title: "Handmade Jumpers" },
  { title: "Onesies" },
];

export default function BasicExample() {
  return (
    <div className="card-wrapper">
      <Card style={{ width: "18rem" }}>
        {Images.map((card, index) => (
          <div key={index}>
            <div className="card">
              <div class="cardImages">
                <Card.Img variant="top" src={card.imageSrc} />
                <Card.Body>
                  <div class="buttons">
                    <button>{Title[index].title}</button>
                  </div>
                </Card.Body>
              </div>
            </div>
          </div>
        ))}
      </Card>
    </div>
  );
}
