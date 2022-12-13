import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import image1 from "../../assets/personalProducts/mugs/mug-red.jpg";
import image2 from "../../assets/personalProducts/glasses/glasses.jpg";
import image3 from "../../assets/personalProducts/bottles/glass-bottle.jpg";
import image4 from "../../assets/personalProducts/gift/glass-mug-gift-box.jpg";

const Images = [
  { imageSrc: image1 },
  { imageSrc: image2 },
  { imageSrc: image3 },
  { imageSrc: image4 },
];

const Title = [
  { title: "Coffee Mugs" },
  { title: "Glasses" },
  { title: "Bottles" },
  { title: "Gift Boxes" },
];

const link = [
  { link: "./mugs" },
  { link: "./glasses" },
  { link: "./bottles" },
  { link: "./giftBox" },
];

export default function BasicExample() {
  return (
    <div className="card-wrapper">
      <Card style={{ width: "18rem" }}>
        {Images.map((card, index) => (
          <div key={index}>
            <div className="card">
              <div class="cardImages">
                <Link to={link[index].link}>
                  <Card.Img variant="top" src={card.imageSrc} />
                </Link>
                <Card.Body>
                  <div class="buttons">
                    <Link to={link[index].link}>
                      <button type="button">
                        {Title[index].title} Shop Now
                      </button>
                    </Link>
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
