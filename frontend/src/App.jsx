// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import HomePage from './pages/HomePage';
// import CartPage from './pages/CartPage';

// const App = () => {
//   const [cartItems, setCartItems] = useState([]);
//   const [showCart, setShowCart] = useState(false);

//   // Add product to cart or increment quantity
//   const addToCart = (product) => {
//     setCartItems((prev) => {
//       const exists = prev.find(item => item.id === product.id);
//       if (exists) {
//         return prev.map(item =>
//           item.id === product.id ? { ...item, qty: item.qty + 1 } : item
//         );
//       }
//       return [...prev, { ...product, qty: 1 }];
//     });
//   };

//   // Remove product from cart
//   const removeFromCart = (id) => {
//     setCartItems((prev) => prev.filter(item => item.id !== id));
//   };

//   // Change quantity (+/-)
//   const updateQty = (id, amount) => {
//     setCartItems((prev) =>
//       prev
//         .map(item =>
//           item.id === id ? { ...item, qty: item.qty + amount } : item
//         )
//         .filter(item => item.qty > 0)
//     );
//   };

//   // Total count for badge
//   const cartCount = cartItems.reduce((acc, item) => acc + item.qty, 0);

//   // Toggle cart sidebar open/close
//   const toggleCart = () => setShowCart(prev => !prev);

//   return (
//     <Router>
//       <Navbar cartItemCount={cartCount} toggleCart={toggleCart} />
//       <Routes>
//         <Route
//           path="/"
//           element={
//             <HomePage
//               addToCart={addToCart}
//               cartItems={cartItems}
//               removeFromCart={removeFromCart}
//               updateQty={updateQty}
//               showCart={showCart}
//               toggleCart={toggleCart}
//             />
//           }
//         />
//       </Routes>

//       {/* Render cart sidebar on top of all pages */}
//       {showCart && (
//         <CartPage
//           cartItems={cartItems}
//           removeFromCart={removeFromCart}
//           updateQty={updateQty}
//           toggleCart={toggleCart}
//         />
//       )}
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
  const [showCart, setShowCart] = useState(false);
  const [searchQuery, setSearchQuery] = useState(''); // <-- Add this

  const handleSearch = (query) => setSearchQuery(query); // <-- Add this

  const addToCart = (product) => {
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

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter(item => item.id !== id));
  };

  const updateQty = (id, amount) => {
    setCartItems((prev) =>
      prev
        .map(item =>
          item.id === id ? { ...item, qty: item.qty + amount } : item
        )
        .filter(item => item.qty > 0)
    );
  };

  const cartCount = cartItems.reduce((acc, item) => acc + item.qty, 0);
  const toggleCart = () => setShowCart(prev => !prev);

  return (
    <Router>
      <Navbar
        cartItemCount={cartCount}
        toggleCart={toggleCart}
        handleSearch={handleSearch} // <-- Pass down
      />
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              addToCart={addToCart}
              cartItems={cartItems}
              removeFromCart={removeFromCart}
              updateQty={updateQty}
              showCart={showCart}
              toggleCart={toggleCart}
              searchQuery={searchQuery} // <-- Pass down
            />
          }
        />
      </Routes>

      {showCart && (
        <CartPage
          cartItems={cartItems}
          removeFromCart={removeFromCart}
          updateQty={updateQty}
          toggleCart={toggleCart}
        />
      )}
    </Router>
  );
};

export default App;


