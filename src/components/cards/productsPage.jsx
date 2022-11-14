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

export default function BasicExample() {
  return (
    <div className="card-wrapper">
      <Card style={{ width: "18rem" }}>
        {Images.map((card, index) => (
          <div key={index}>
            <div class="cardImages">
              <Card.Img variant="top" src={card.imageSrc} />
            </div>
            <Card.Body>
              <div class="cardTitle">
                <Card.Title>{Title[index].title}</Card.Title>
              </div>
            </Card.Body>
          </div>
        ))}
      </Card>
    </div>
  );
}
