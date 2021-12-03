import React from "react";
import { Button } from "react-bootstrap";
const CartItem = ({ data, delFromCart }) => {
  let { id, name, price, quantity } = data;
  return (
    <div className="CrtItem" style={{ borderBottom: "thin solid gray" }}>
      <h4>{name}</h4>
      <h5>
        ${price}.00 x {quantity} = ${price * quantity}.00
      </h5>
      <Button variant="outline-danger" onClick={() => delFromCart(id)}>
        Eliminar uno
      </Button>
      <br />
      <br />
      <Button variant="outline-danger" onClick={() => delFromCart(id, true)}>
        Eliminar todo
      </Button>
      <br />
      <br />
    </div>
  );
};

export default CartItem;
