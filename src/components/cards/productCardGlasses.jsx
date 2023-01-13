import Card from "react-bootstrap/Card";
import React from "react";

import image1 from "../../assets/personalProducts/glasses/glasses.jpg";
import image2 from "../../assets/personalProducts/glasses/christmas-glasses.jpg";
import image3 from "../../assets/personalProducts/glasses/flute.jpg";

const Images = [
  { imageSrc: image1 },
  { imageSrc: image2 },
  { imageSrc: image3 },
];

const Title = [
  { title: "Glasses" },
  { title: "Christmas Glasses" },
  { title: "Champagne Flutes" },
];

export default function BasicExample() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/glasses")
      .then((res) => res.json())
      .then((data) => setData(data.Glasses));
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
                  <Card.Text> ${data} </Card.Text>
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
