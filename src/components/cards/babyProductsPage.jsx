import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import image1 from "../../assets/babyProducts/babyBibs/pooh.jpg";
import image2 from "../../assets/babyProducts/dummyChain/big.jpg";
import image3 from "../../assets/babyProducts/teethers/teether.jpg";
import image4 from "../../assets/babyProducts/apparel/Onesies.jpg";

const Images = [
  { imageSrc: image1 },
  { imageSrc: image2 },
  { imageSrc: image3 },
  { imageSrc: image4 },
];

const Title = [
  { title: "Baby Bibs" },
  { title: "Dummy Chains" },
  { title: "Teether" },
  { title: "Apparel" },
];

const link = [
  { link: "./babyBibs" },
  { link: "./dummyChains" },
  { link: "./teether" },
  { link: "./apparel" },
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
