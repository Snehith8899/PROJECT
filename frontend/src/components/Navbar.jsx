import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">MyStore</div>
      <div className="search">
        <input type="text" placeholder="Search products..." />
      </div>
      <div className="cart">
        🛒
      </div>
    </nav>
  );
};

export default Navbar;
