import Card from "react-bootstrap/Card";
import image1 from "../../assets/personalProducts/mugs/mug-red.jpg";
import image2 from "../../assets/personalProducts/glasses/glasses.jpg";
import image3 from "../../assets/personalProducts/bottles/bottles.jpg";
import image4 from "../../assets/personalProducts/gift/mugwinebox.jpg";

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

const Link = [
  { link: "./products/mugs" },
  { link: "./products/glasses" },
  { link: "./products/bottles" },
  { link: "./products/giftBox" },
];

export default function BasicExample() {
  return (
    <div className="card-wrapper">
      <Card style={{ width: "18rem" }}>
        {Images.map((card, index) => (
          <div key={index}>
            <div className="card">
              <div class="cardImages">
                <a href={Link[index].link}>
                  <Card.Img variant="top" src={card.imageSrc} />
                </a>
                <Card.Body>
                  <div class="buttons">
                    <a href={Link[index].link}>
                      <button>{Title[index].title} Shop Now</button>
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
