import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        <ProductItem
          title='Test'
          price={6}
          description='This is a first product - amazing!'
        />
        <ProductItem
          title='book'
          price={12}
          description='This is a second product - amazing!'
        />
        <ProductItem
          title='other'
          price={8}
          description='This is a 3 product - amazing!'
        />
      </ul>
    </section>
  );
};

export default Products;
