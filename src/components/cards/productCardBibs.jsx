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

const Product = [
  { title: "Anchor", price: 15 },
  { title: "Animals", price: 15 },
  { title: "Cars", price: 15 },
  { title: "Mickey", price: 15 },
  { title: "Pooh", price: 15 },
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
                  <Card.Text class="cardText">
                    Price: ${Product[index].price}
                  </Card.Text>
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
