import { useDispatch, useSelector } from "react-redux"
import { cartAction } from "../../store/cart";
import classes from './CartButton.module.css';

const CartButton = (props) => {

  const totalQuantity = useSelector( lastState => lastState.cart.totalQuantity )
  const dispatch = useDispatch()

  const toggleShowCart = ()=>{
    dispatch(cartAction.useShowCart())
  }

  return (
    <button 
      onClick={toggleShowCart}
      className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  );
};

export default CartButton;
