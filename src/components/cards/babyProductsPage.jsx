import Card from "react-bootstrap/Card";
import image1 from "../../assets/babyProducts/babyBibs/pooh.jpg";
import image2 from "../../assets/babyProducts/dummyChain/big.jpg";
import image3 from "../../assets/babyProducts/teethers/teether.jpg";

const Images = [
  { imageSrc: image1 },
  { imageSrc: image2 },
  { imageSrc: image3 },
];

const Title = [
  { title: "Baby Bibs" },
  { title: "Dummy Chains" },
  { title: "Teether" },
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
