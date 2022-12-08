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

const Link = [
  { link: "baby_products/babyBibs" },
  { link: "baby_products/dummyChains" },
  { link: "baby_products/teether" },
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
