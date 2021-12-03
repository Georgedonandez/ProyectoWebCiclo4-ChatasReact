import { Button } from "react-bootstrap";
import { useReducer } from "react";
import { TYPES } from "../actions/Shopping";
import {
  shoppingReducer,
  shoppingInitialState,
} from "../reducer/shoppingReducer";
import CartItem from "./CartItem";
import Productcards from "./Productcards";

const ShoppingCart = () => {
  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);

  const { products, cart } = state;

  const addToCart = (id) => {
    console.log(id);
    dispatch({
      type: TYPES.addToCart,
      payload: id,
    });
  };

  const delFromCart = (id, all = false) => {
    console.log(id, all);
    if (all) {
      dispatch({
        type: TYPES.removeAll,
        payload: id,
      });
    } else {
      dispatch({
        type: TYPES.removeOne,
        payload: id,
      });
    }
  };

  const clearCart = () => {
    dispatch({
      type: TYPES.clearCart,
    });
  };

  return (
    <div>
      <article className="box grid-responsive">
        {" "}
        {products.map((product) => (
          <Productcards key={product.id} data={product} addToCart={addToCart} />
        ))}
      </article>
      <h2 style={{padding:"1em"}}> Carrito de Compras </h2>
      <article className="box">
        <br/>
        <Button variant="danger" onClick={clearCart}>
          {" "}
          Limpiar carrito{" "}
        </Button>{" "}
        <br />
        <br />
        {cart.map((item, index) => (
          <CartItem key={item.id} data={item} delFromCart={delFromCart} />
        ))}
        <br/>
        <Button variant="primary">Comprar</Button>{" "}
      </article>
    </div>
  );
};

export default ShoppingCart;
