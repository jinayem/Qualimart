import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";
import Navbar from "./Navbar";
import Carousel from "./Carousel"; // ✅ Added Carousel import
import BestDeals from "./BestDeals";
import Hero from "./Hero";
import Categories from "./Categories";
import FeaturedProducts from "./FeaturedProducts";
import Testimonials from "./Testimonials";
import Footer from "./Footer";
import productsData from "../data/products";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = productsData.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="home-container">
      <Navbar onSearch={setSearchQuery} />

      {searchQuery ? (
        <div className="search-results">
          <h2>Search Results for "{searchQuery}"</h2>
          {filteredProducts.length > 0 ? (
            <div className="product-list">
              {filteredProducts.map((product) => (
                <Link
                  key={product.id}
                  to={`/product/${product.id}`}
                  className="product-item"
                >
                  <h3>{product.name}</h3>
                  <p>${product.price}</p>
                </Link>
              ))}
            </div>
          ) : (
            <p>No products found.</p>
          )}
        </div>
      ) : (
        <>
          <Carousel /> {/* ✅ Carousel integrated here */}
          <BestDeals />
          <Hero />
          <Categories />
          <FeaturedProducts />
          <Testimonials />
          <Footer />
        </>
      )}
    </div>
  );
};

export default Home;
