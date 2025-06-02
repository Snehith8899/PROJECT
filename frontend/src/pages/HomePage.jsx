import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './HomePage.css';

import ProductCard from '../components/ProductCard';

const HomePage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get('https://fakestoreapi.com/products');
        setProducts(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchProducts();
  }, []);

  // Fake categories (hardcoded)
  const categories = ['Food', 'Clothes', 'Electronics', 'Accessories'];

  return (
    <div className="homepage">
      {/* Categories Section */}
      <div className="categories">
        {categories.map((cat) => (
          <button key={cat}>{cat}</button>
        ))}
      </div>

      {/* Products Section */}
      <div className="products">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
