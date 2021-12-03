import { Button, Card } from "react-bootstrap";
const Productcards = ({ data, addToCart }) => {
  let { id, name, price, description, image } = data;
  return (
    <div className="grid-responsive">
      <Card className="Tarjeta" style={{ border: "thin solid gray"}}>
  <Card.Img variant="top" src={image} />
  <Card.Body>
    <Card.Title style={{textAlign: "center"}}>{name}</Card.Title>
    <br/>
    <Card.Text>
      {description}
    </Card.Text>
    <br/>
    <Card.Text style={{textAlign:"center"}}>
      <strong>
        ${price}.00 x Kg
      </strong>
    </Card.Text>
    <br/>
    <Button className="Boton" onClick={() => addToCart(id)}>Agregar al carrito</Button>
  </Card.Body>
</Card>
    </div>
  );
};

export default Productcards;
