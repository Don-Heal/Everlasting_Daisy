import Card from "react-bootstrap/Card";
import React from "react";

import image1 from "../../assets/babyProducts/teethers/collection.jpg";

const Images = [{ imageSrc: image1 }];

const Title = [{ title: "Our Teethers" }];

export default function BasicExample() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/teether")
      .then((res) => res.json())
      .then((data) => setData(data.Teether));
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
