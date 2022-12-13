import Card from "react-bootstrap/Card";

import image1 from "../../assets/babyProducts/dummyChain/big.jpg";
import image2 from "../../assets/babyProducts/dummyChain/small.jpg";
import image3 from "../../assets/babyProducts/dummyChain/Tulip.jpg";
import image4 from "../../assets/babyProducts/dummyChain/Ocean.jpg";
import image5 from "../../assets/babyProducts/dummyChain/Mint.jpg";
import image6 from "../../assets/babyProducts/dummyChain/Lilac.jpg";
import image7 from "../../assets/babyProducts/dummyChain/Lavender.jpg";
import image8 from "../../assets/babyProducts/dummyChain/Berries.jpg";
import image9 from "../../assets/babyProducts/dummyChain/Sea-Breeze.jpg";
import image10 from "../../assets/babyProducts/dummyChain/Sunflower.jpg";
import image11 from "../../assets/babyProducts/dummyChain/Sunset.jpg";

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
  { imageSrc: image10 },
  { imageSrc: image11 },
];

const Title = [
  { title: "Dummy Chain - Large 18cm" },
  { title: "Dummy Chain - Small 14cm" },
  { title: "Dummy Chain - Tulip" },
  { title: "Dummy Chain - Ocean" },
  { title: "Dummy Chain - Mint" },
  { title: "Dummy Chain - Lilac" },
  { title: "Dummy Chain - Lavender" },
  { title: "Dummy Chain - Berries" },
  { title: "Dummy Chain - Sea Breeze" },
  { title: "Dummy Chain - Sunflower" },
  { title: "Dummy Chain - Sunset" },
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
