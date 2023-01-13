import Card from "react-bootstrap/Card";
import React from "react";

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
  const [data1, setData1] = React.useState(null);
  const [data2, setData2] = React.useState(null);
  const [data3, setData3] = React.useState(null);
  const data = [{ data: data1 }, { data: data2 }, { data: data3 }];

  React.useEffect(() => {
    fetch("/christmasonesie")
      .then((res) => res.json())
      .then((data) => setData1(data.ChristmasOnesie));
  }, []);

  React.useEffect(() => {
    fetch("/jummper")
      .then((res) => res.json())
      .then((data) => setData2(data.Jummper));
  }, []);

  React.useEffect(() => {
    fetch("/personalonesie")
      .then((res) => res.json())
      .then((data) => setData3(data.PersonalOnesie));
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
                  <Card.Text> ${data[index].data}</Card.Text>
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
