import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  // Add product to cart or increment quantity
  const addToCart = (product) => {
    console.log('Adding product:', product);
    setCartItems((prev) => {
      const exists = prev.find(item => item.id === product.id);
      if (exists) {
        return prev.map(item =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  // Remove product from cart
  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter(item => item.id !== id));
  };

  // Change quantity (+/-)
  const updateQty = (id, amount) => {
    setCartItems((prev) =>
      prev
        .map(item =>
          item.id === id ? { ...item, qty: item.qty + amount } : item
        )
        .filter(item => item.qty > 0)
    );
  };

  // Total count for badge
  const cartCount = cartItems.reduce((acc, item) => acc + item.qty, 0);

  return (
    <Router>
      <Navbar cartItemCount={cartCount} />
      <Routes>
        <Route path="/" element={<HomePage addToCart={addToCart} />} />
        <Route
          path="/cart"
          element={
            <CartPage
              cartItems={cartItems}
              removeFromCart={removeFromCart}
              updateQty={updateQty}
            />
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
