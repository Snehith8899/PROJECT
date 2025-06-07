

import React from 'react';

const ProductCard = ({ product, addToCart }) => {
  const conversionRate = 83;
  const priceInRupees = product.price * conversionRate;

  const formattedPrice = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(priceInRupees);

  return (
    <div className="product-card">
      <img
        src={product.thumbnail || (product.images && product.images[0])}
        alt={product.title}
        style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
      />

      <div className="product-details">
        <h3>{product.title}</h3>
        <p>{formattedPrice}</p>
      </div>

      <button
        className="add-to-cart-btn"
        onClick={() => {
          console.log('Add to Cart clicked:', product);
          addToCart(product);
        }}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
