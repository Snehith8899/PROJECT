
import React from 'react';

const ProductCard = ({ product }) => {
  const conversionRate = 83; // Update with the latest exchange rate
  const priceInRupees = (product.price * conversionRate).toFixed(2);

  return (
    <div className="product-card">
      <img src={product.thumbnail || product.images?.[0]} alt={product.title} />
      <h3>{product.title}</h3>
      <p>₹{priceInRupees}</p> {/* Display price in INR */}
    </div>
  );
};

export default ProductCard;