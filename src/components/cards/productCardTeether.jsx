import Card from "react-bootstrap/Card";

import image1 from "../../assets/babyProducts/teethers/collection.jpg";

const Images = [{ imageSrc: image1 }];

const Title = [{ title: "Our Teethers" }];

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
