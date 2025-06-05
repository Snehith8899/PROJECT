// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import HomePage from './pages/HomePage';

// const App = () => {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  // Add product to cart or increment quantity if already present
  const addToCart = (product) => {
    console.log('Adding product:', product);
    setCartItems((prev) => {
      const exists = prev.find(item => item.id === product.id);
      if (exists) {
        return prev.map(item =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      // Add new product with qty 1
      return [...prev, { ...product, qty: 1 }];
    });
  };

  // Remove product entirely from cart
  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter(item => item.id !== id));
  };

  // Update product quantity by amount (+1 or -1), remove if qty <= 0
  const updateQty = (id, amount) => {
    setCartItems((prev) =>
      prev
        .map(item =>
          item.id === id ? { ...item, qty: item.qty + amount } : item
        )
        .filter(item => item.qty > 0)
    );
  };

  // Total number of items in cart (for badge count)
  const cartCount = cartItems.reduce((acc, item) => acc + item.qty, 0);

  return (
    <Router>
      <Navbar cartCount={cartCount} />
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
