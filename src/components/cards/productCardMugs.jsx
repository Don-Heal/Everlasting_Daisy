import Card from "react-bootstrap/Card";
import React from "react";

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

const Product = [
  { title: "Red", price: 15 },
  { title: "Blue", price: 15 },
  { title: "Green", price: 15 },
  { title: "Grey", price: 15 },
  { title: "Navy", price: 15 },
  { title: "Pink", price: 15 },
  { title: "Purple", price: 15 },
  { title: "White", price: 15 },
  { title: "Orange", price: 15 },
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
                    {" "}
                    Price: {Product[index].price}{" "}
                  </Card.Text>
                  <div class="buttons">
                    <a
                      href="https://buy.stripe.com/test_cN2aHu0HL6ch0Za146"
                      target="blank"
                    >
                      <button class="button">Buy Now</button>
                    </a>
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
