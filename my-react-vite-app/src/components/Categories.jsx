// src/components/Categories.jsx

// Import necessary modules and styles
import React from "react";
import "../styles/Categories.css";

// The following array contains category data
const categories = [
  { id: 1, name: "Electronics", image: "/assets/electronics.svg" },
  { id: 2, name: "Fashion", image: "/assets/fashion.svg" },
  { id: 3, name: "Home & Kitchen", image: "/assets/home.svg" },
  { id: 4, name: "Beauty & Health", image: "/assets/beauty.svg" },
  { id: 5, name: "Toys & Games", image: "/assets/toys.svg" },
];

// The following component displays a list of product categories with images
const Categories = () => {
  return (
    <div className="categories">
      <h2>🛍️ Shop by Category</h2>
      <div className="category-grid">
        {categories.map((cat) => (
          <div key={cat.id} className="category-card">
            <img src={cat.image} alt={cat.name} />
            <h3>{cat.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

// Export the Categories component
export default Categories;
