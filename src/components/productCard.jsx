import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

const images = importAll(
  require.context("./assets/personalProducts", false, /\.(png|jpe?g|svg)$/),
);

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

function ProductCard(props) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={images["doggy.png"]} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
        <ListGroup.Item>{props.price}</ListGroup.Item>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
