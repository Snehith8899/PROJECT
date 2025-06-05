import React from 'react';

const ProductCard = ({ product }) => {
  const conversionRate = 83;
  const priceInRupees = (product.price * conversionRate).toFixed(2);

  const addToCart = (item) => {
    // You can replace this with your cart logic
    console.log("Added to cart:", item);
  };

  return (
    <div className="product-card">
      <img src={product.thumbnail || product.images?.[0]} alt={product.title} />

      <div className="product-details">
        <h3>{product.title}</h3>
        <p>₹{priceInRupees}</p>
      </div>

      <button className="add-to-cart-btn" onClick={() => addToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
