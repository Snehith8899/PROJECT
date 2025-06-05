// import React from 'react';
// import './Navbar.css';

// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       <div className="navbar-logo">MyStore</div>
//       <div className="search">
//         <input type="text" placeholder="Search products..." />
//       </div>
//       <div className="cart">
//         <img
//           src="https://cdn-icons-png.flaticon.com/512/1170/1170678.png"
//           alt="Cart"
//           className="cart-icon"
//         />
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = ({ cartItemCount = 0 }) => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/" style={{ textDecoration: 'none', color: '#f05a22' }}>
          MyStore
        </Link>
      </div>

      <div className="search">
        <input type="text" placeholder="Search products..." />
      </div>

      <div className="cart">
        <Link to="/cart" style={{ position: 'relative', display: 'inline-block' }}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/1170/1170678.png"
            alt="Cart"
            className="cart-icon"
          />
          {cartItemCount > 0 && (
            <span className="cart-count">{cartItemCount}</span>
          )}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
