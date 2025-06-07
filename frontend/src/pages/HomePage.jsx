import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './HomePage.css';
import ProductCard from '../components/ProductCard';

const DummyJSONAPI = {
  base_url: "https://dummyjson.com/products",
};

const categories = [
  { slug: "beauty", name: "Beauty" },
  { slug: "fragrances", name: "Fragrances" },
  { slug: "furniture", name: "Furniture" },
  { slug: "groceries", name: "Groceries" },
  { slug: "home-decoration", name: "Home Decoration" },
  { slug: "kitchen-accessories", name: "Kitchen Accessories" },
  { slug: "laptops", name: "Laptops" },
  { slug: "mens-shirts", name: "Men's Shirts" },
  { slug: "mens-shoes", name: "Men's Shoes" },
  { slug: "mens-watches", name: "Men's Watches" },
  { slug: "mobile-accessories", name: "Mobile Accessories" },
  { slug: "motorcycle", name: "Motorcycle" },
  { slug: "skin-care", name: "Skin Care" },
  { slug: "smartphones", name: "Smartphones" },
  { slug: "sports-accessories", name: "Sports Accessories" },
  { slug: "sunglasses", name: "Sunglasses" },
  { slug: "tablets", name: "Tablets" },
  { slug: "tops", name: "Tops" },
  { slug: "vehicle", name: "Vehicle" },
  { slug: "womens-bags", name: "Women's Bags" },
  { slug: "womens-dresses", name: "Women's Dresses" },
  { slug: "womens-jewellery", name: "Women's Jewellery" },
  { slug: "womens-shoes", name: "Women's Shoes" },
  { slug: "womens-watches", name: "Women's Watches" }
];

const HomePage = ({ addToCart }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(`${DummyJSONAPI.base_url}?limit=100`);
        setProducts(res.data.products);
      } catch (err) {
        setError("Failed to fetch products");
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    if (selectedCategory === "All") {
      setLoading(true);
      setError(null);
      axios.get(`${DummyJSONAPI.base_url}?limit=100`)
        .then(res => {
          setProducts(res.data.products);
          setLoading(false);
        })
        .catch(() => {
          setError("Failed to fetch products");
          setLoading(false);
        });
      return;
    }

    const fetchCategoryProducts = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await axios.get(`${DummyJSONAPI.base_url}/category/${selectedCategory}?limit=50`);
        setProducts(res.data.products);
      } catch (err) {
        setError(`Failed to fetch ${selectedCategory} products`);
      } finally {
        setLoading(false);
      }
    };
    fetchCategoryProducts();
  }, [selectedCategory]);

  const handleAddToCart = (product) => {
    addToCart(product);
    setMessage("Item added successfully!");
    setTimeout(() => setMessage(''), 2000);
  };

  return (
    <>
      {/* Toast message fixed at top */}
      {message && <div className="success-message">{message}</div>}

      <div className="homepage">
        {/* Categories */}
        <div className="categories">
          <button key="all" onClick={() => setSelectedCategory("All")}>All</button>
          {categories.map((cat) => (
            <button key={cat.slug} onClick={() => setSelectedCategory(cat.slug)}>
              {cat.name}
            </button>
          ))}
        </div>

        {/* Products */}
        <div className="products">
          {loading && <p>Loading products...</p>}
          {error && <p className="error">{error}</p>}
          {!loading && !error && products.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={handleAddToCart}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default HomePage;
