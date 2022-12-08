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
  { title: "Mugs" },
  { title: "Glasses" },
  { title: "Bottles" },
  { title: "Gifts" },
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
            <div class="cardImages">
              <a href={Link[index].link}>
                <Card.Img variant="top" src={card.imageSrc} />
              </a>
            </div>
            <Card.Body>
              <div class="cardTitle">
                <button type="button">
                  <a href={Link[index].link}>{Title[index].title}</a>
                </button>
              </div>
            </Card.Body>
          </div>
        ))}
      </Card>
    </div>
  );
}
