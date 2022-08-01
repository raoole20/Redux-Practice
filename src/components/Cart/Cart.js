import { useSelector } from "react-redux/es/exports";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const items = useSelector((lastState) => lastState.cart.items);

  const itemInCart = items.map((item) => (
    <CartItem key={item.id} item={item} />
  ))

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>{itemInCart}</ul>
    </Card>
  );
};

export default Cart;
