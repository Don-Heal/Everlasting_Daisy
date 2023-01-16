import Card from "react-bootstrap/Card";
import React from "react";

import image3 from "../../assets/babyProducts/dummyChain/Tulip.jpg";
import image4 from "../../assets/babyProducts/dummyChain/Ocean.jpg";
import image5 from "../../assets/babyProducts/dummyChain/Mint.jpg";
import image6 from "../../assets/babyProducts/dummyChain/Lilac.jpg";
import image7 from "../../assets/babyProducts/dummyChain/Lavender.jpg";
import image8 from "../../assets/babyProducts/dummyChain/Berries.jpg";
import image9 from "../../assets/babyProducts/dummyChain/Sea-Breeze.jpg";
import image10 from "../../assets/babyProducts/dummyChain/Sunflower.jpg";
import image11 from "../../assets/babyProducts/dummyChain/Sunset.jpg";

const Images = [
  { imageSrc: image3 },
  { imageSrc: image4 },
  { imageSrc: image5 },
  { imageSrc: image6 },
  { imageSrc: image7 },
  { imageSrc: image8 },
  { imageSrc: image9 },
  { imageSrc: image10 },
  { imageSrc: image11 },
];

const Product = [
  { title: "Dummy Chain - Tulip", price1: 14, price2: 18 },
  { title: "Dummy Chain - Ocean", price1: 14, price2: 18 },
  { title: "Dummy Chain - Mint", price1: 14, price2: 18 },
  { title: "Dummy Chain - Lilac", price1: 14, price2: 18 },
  { title: "Dummy Chain - Lavender", price1: 14, price2: 18 },
  { title: "Dummy Chain - Berries", price1: 14, price2: 18 },
  { title: "Dummy Chain - Sea Breeze", price1: 14, price2: 18 },
  { title: "Dummy Chain - Sunflower", price1: 14, price2: 18 },
  { title: "Dummy Chain - Sunset", price1: 14, price2: 18 },
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
                  <Card.Title class="cardTitle">
                    {Product[index].title}
                  </Card.Title>
                  <Card.Text class="cardText"> Prices:</Card.Text>
                  <Card.Text class="cardText">
                    {" "}
                    - 14CM ${Product[index].price1}{" "}
                  </Card.Text>
                  <Card.Text class="cardText">
                    {" "}
                    - 18CM ${Product[index].price2}{" "}
                  </Card.Text>
                  <div class="buttons">
                    <button>14CM Add To Cart</button>
                    <button>18CM Add To Cart</button>
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
