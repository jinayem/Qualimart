// src/components/Categories.jsx

// Import necessary modules and styles
// import React from "react";
import "./Categories.css";

// Import category images using the alias defined in vite.config.js
import electronics from "@/assets/icons/categories/electronics.svg";
import fashion from "@/assets/icons/categories/fashion.svg";
import home from "@/assets/icons/categories/home.svg";
import beauty from "@/assets/icons/categories/beauty.svg";
import toys from "@/assets/icons/categories/toys.svg";

// The following array contains category data
const categories = [
  { id: 1, name: "Electronics", image: electronics },
  { id: 2, name: "Fashion", image: fashion },
  { id: 3, name: "Home & Kitchen", image: home },
  { id: 4, name: "Beauty & Health", image: beauty },
  { id: 5, name: "Toys & Games", image: toys },
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
