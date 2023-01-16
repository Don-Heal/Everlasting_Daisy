import Card from "react-bootstrap/Card";
import React from "react";

import image1 from "../../assets/personalProducts/gift/glass-mug-gift-box.jpg";
import image2 from "../../assets/personalProducts/gift/baby-gift-box.jpg";

const Images = [{ imageSrc: image1 }, { imageSrc: image2 }];

const Product = [
  { title: "Combo Gift Box", price: 27 },
  { title: "Baby Gift Box", price: 27 },
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
                    Price: ${Product[index].price}{" "}
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
