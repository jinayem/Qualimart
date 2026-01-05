// import React from "react";
import { Link } from "react-router-dom"; // ✅ Import Link from react-router-dom
import products from "../../data/products";
import "./FeaturedProducts.css";

const FeaturedProducts = () => {
  return (
    <div className="featured-container">
      <h2 className="featured-title">🌟 Featured Products</h2>

      <div className="featured-grid">
        {products.map((product) => (
          <Link
            to={`/product/${product.id}`} // ✅ Make each card a link
            key={product.id}
            className="featured-card"
          >
            {/* Featured Badge */}
            <span className="featured-badge">Featured</span>

            {/* Product Image */}
            <img
              src={product.images[0]}
              alt={product.name}
              className="featured-image"
            />

            {/* Product Details */}
            <div className="featured-info">
              <h3 className="featured-name">{product.name}</h3>
              <p className="featured-price">${product.price}</p>
              <button className="featured-button">View Details</button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
