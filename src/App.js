import { useSelector } from 'react-redux';

import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';

function App() {
  const showCart = useSelector( lastState => lastState.cart.showCart )

  return (
    <Layout>
      {showCart ? <Cart /> : null }
      <Products />
    </Layout>
  );
}

export default App;
