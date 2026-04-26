import { useState } from 'react';
import Header from './Header.jsx';
import Shop from './Shop.jsx';
import { DUMMY_PRODUCTS } from './dummy-products.js';
import './index.css';
import CartContextProvicer from './store/shopping-cart-context.jsx';

function App() {
 
  return (
    <CartContextProvicer>
      <Header />
      <Shop />
    </CartContextProvicer>
  );
}

export default App;
