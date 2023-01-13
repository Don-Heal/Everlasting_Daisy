import Card from "react-bootstrap/Card";
import React from "react";

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
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/bibs")
      .then((res) => res.json())
      .then((data) => setData(data.Bibs));
  }, []);
  return (
    <div className="card-wrapper">
      <Card style={{ width: "18rem" }}>
        {Images.map((card, index) => (
          <div key={index}>
            <div className="card">
              <div class="cardImages">
                <Card.Img variant="top" src={card.imageSrc} />
                <Card.Body>
                  <Card.Title>{Title[index].title}</Card.Title>
                  <Card.Text> ${data}</Card.Text>
                  <div class="buttons">
                    <button>Add To Cart</button>
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
