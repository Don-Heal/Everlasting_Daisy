import Card from "react-bootstrap/Card";

import image1 from "../../assets/personalProducts/bottles/glass-bottle.jpg";
import image2 from "../../assets/personalProducts/bottles/BYO.jpg";

const Images = [{ imageSrc: image1 }, { imageSrc: image2 }];

const Title = [{ title: "Bottles" }, { title: "BYO Drink Bottle" }];

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
