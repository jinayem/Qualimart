import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../styles/Navbar.css";
import { FaBars, FaTimes, FaShoppingCart, FaUser, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Navbar = ({ onSearch }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [shake, setShake] = useState(false);

  const { cartItems, cartCount } = useCart(); // ✅ Hook to access cart data
  const navigate = useNavigate();
  const location = useLocation(); // useLocation hook to get the current path

  // Handle scroll styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Trigger shake animation on cart change
  useEffect(() => {
    if (cartItems.length > 0) {
      setShake(true);
      const timeout = setTimeout(() => setShake(false), 500);
      return () => clearTimeout(timeout);
    }
  }, [cartItems]);

  // Handle user typing in search bar
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    onSearch(e.target.value);
  };

  // Trigger search when search button is clicked
  const handleSearchClick = () => {
    onSearch(searchQuery);
  };

  // Handle logo click to navigate to the home page
  const handleLogoClick = () => {
    navigate("/"); // Redirect to home page
  };

  // Check if we are on the home page
  const isHomePage = location.pathname === "/"; // True if we're on the homepage

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="logo" onClick={handleLogoClick}>
        <h1>Qualimart</h1>
      </div>

      {/* 🔍 Advanced Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={handleSearch}
        />
        <button className="search-btn" onClick={handleSearchClick}>
          <FaSearch />
        </button>
      </div>

      {/* 🔗 Navigation Links */}
      <ul className={menuOpen ? "nav-links open" : "nav-links"}>
        <li><Link to="/" className={`home-link ${isHomePage ? "hover" : ""}`}>Home</Link></li>
        <li><a href="#">Shop</a></li>
        <li><a href="#">Deals</a></li>
        <li><a href="#">Contact</a></li>
        <li>
          {/* 🛒 Cart icon with shake + count */}
          <Link to="/cart" className={`cart-icon ${shake ? "shake" : ""}`}>
            <FaShoppingCart />
            {cartCount > 0 && (
              <span className="cart-count">{cartCount}</span>
            )}
          </Link>
        </li>
        <li><a href="#"><FaUser /></a></li>
      </ul>

      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
};

export default Navbar;