// import React from 'react';
// import './Navbar.css';

// const Navbar = ({ cartItemCount = 0, toggleCart }) => {
//   return (
//     <nav className="navbar">
//       <div className="navbar-logo" style={{ cursor: 'pointer' }}>
//         Snehith-Store
//       </div>

//       <div className="search">
//         <input type="text" placeholder="Search products..." />
//       </div>

//       <div className="cart" style={{ position: 'relative', display: 'inline-block', cursor: 'pointer' }}>
//         <img
//           src="https://cdn-icons-png.flaticon.com/512/1170/1170678.png"
//           alt="Cart"
//           className="cart-icon"
//           onClick={toggleCart}
//         />
//         {cartItemCount > 0 && (
//           <span className="cart-count">{cartItemCount}</span>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;



import React from 'react';
import './Navbar.css';

const Navbar = ({ cartItemCount = 0, toggleCart, handleSearch }) => {
  return (
    <nav className="navbar">
      <div className="navbar-logo" style={{ cursor: 'pointer' }}>
        Snehith-Store
      </div>

      <div className="search">
        <input
          type="text"
          placeholder="Search products..."
          onChange={(e) => handleSearch(e.target.value)}
        />
      </div>

      <div className="cart" style={{ position: 'relative', display: 'inline-block', cursor: 'pointer' }}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/1170/1170678.png"
          alt="Cart"
          className="cart-icon"
          onClick={toggleCart}
        />
        {cartItemCount > 0 && (
          <span className="cart-count">{cartItemCount}</span>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
