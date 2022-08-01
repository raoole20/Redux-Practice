import { useDispatch } from 'react-redux';
import { cartAction } from '../../store/cart';
import Card from '../UI/Card';
import classes from './ProductItem.module.css';

const ProductItem = (props) => {
  const { title, price, description } = props;

  const dispatch = useDispatch()
  const id = title + "-" + String( Date.now() )

  const addItem = ()=>{
    dispatch(cartAction.addItemToCart({
      id,
      price,
      title,
      description
    }))
  }
  
  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addItem}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
