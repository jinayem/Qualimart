// Footer.jsx
import React from "react";
import "../styles/Footer.css";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaPhoneAlt, FaMapMarkerAlt, FaGlobe, FaRegQuestionCircle, FaCcVisa, FaCcMastercard, FaCcPaypal, FaLock } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer-container">
      {/* Top Section: Branding & Navigation */}
      <div className="footer-top">
        <div className="footer-branding">
          <h2>Qualimart</h2>
          <p>Your One-Stop Shopping Destination!</p>
        </div>
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/shop">Shop</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="/faq">FAQ</a></li>
            <li><a href="/support">Customer Support</a></li>
          </ul>
        </div>
        <div className="footer-contact">
          <h4>Contact Us</h4>
          <div className="contact-line">
            <FaMapMarkerAlt />
            <span>123, Main Street, Dhaka, Bangladesh</span>
          </div>

          <div className="contact-line">
            <FaPhoneAlt />
            <span>+880 1990 529034</span>
          </div>

          <div className="contact-line">
            <FaGlobe />
            <span>support@qualimart.com</span>
          </div>
        </div>
      </div>

      {/* Middle Section: Social Media & Newsletter */}
      <div className="footer-middle">
        <div className="footer-social">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaYoutube /></a>
          </div>
        </div>
        <div className="footer-newsletter">
          <h4>Subscribe to Our Newsletter</h4>
          <p>Get the latest deals and updates.</p>
          <div className="newsletter-input">
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>

      {/* Bottom Section: Payment, Language & Copyright */}
      <div className="footer-bottom">
        <div className="footer-payments">
          <h4>We Accept</h4>
          <div className="payment-icons">
            <FaCcVisa /> <FaCcMastercard /> <FaCcPaypal /> <FaLock />
          </div>
        </div>
        <div className="footer-language">
          <h4>Language & Currency</h4>
          <select>
            <option>English (USD)</option>
            <option>বাংলা (BDT)</option>
          </select>
        </div>
        <p className="footer-copyright">
          © 2025 Qualimart. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
