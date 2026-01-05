import { useState } from "react";
import { useParams } from "react-router-dom";
import products from "../../data/products";
import "./ProductPage.css";
import Navbar from "../../components/Navbar/Navbar";
import { useCart } from "../../context/CartContext";

const ProductPage = () => {
  const { id } = useParams();
  const productId = parseInt(id);
  const product = products.find((p) => p.id === productId);

  const [mainImage, setMainImage] = useState(product?.images?.[0]);
  const [isZoomed, setIsZoomed] = useState(false);
  const [activeTab, setActiveTab] = useState("description");
  const [specsOpen, setSpecsOpen] = useState(false); // Accordion state

  const { addToCart, cartItems } = useCart();
  const [added, setAdded] = useState(false);
  const [quantity, setQuantity] = useState(1); // Track quantity input

  const handleAddToCart = () => {
    const isAlreadyInCart = cartItems.some((item) => item.id === product.id);

    const item = { ...product, quantity: parseInt(quantity) };

    if (isAlreadyInCart) {
      setAdded("exists");
      addToCart(item);
    } else {
      setAdded("new");
      addToCart(item);
    }

    setTimeout(() => setAdded(false), 2000);
  };

  const sampleReviews = [
    {
      name: "Ali Hossain",
      rating: 5,
      comment: "Amazing product! Worth every taka.",
    },
    {
      name: "Jannatul Ferdous",
      rating: 4,
      comment: "Great quality, fast delivery. Highly recommend.",
    },
  ];

  const sampleSpecifications = [
    { label: "Model", value: "QX-2025" },
    { label: "Material", value: "Aluminum + Plastic" },
    { label: "Battery Life", value: "10 hours" },
    { label: "Weight", value: "1.2kg" },
    { label: "Warranty", value: "1 Year" },
  ];

  if (!product) {
    return <div className="product-not-found">Product not found.</div>;
  }

  const handleThumbnailClick = (image) => {
    setMainImage(image);
  };

  return (
    <>
      <Navbar />

      <div className="product-page">
        <div className="product-container">
          {/* 🔸 Image Section */}
          <div className="product-image-gallery">
            <div className="main-image" onClick={() => setIsZoomed(true)}>
              <img src={mainImage} alt={product.name} />
            </div>
            <div className="thumbnail-row">
              {product.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Thumbnail ${index + 1}`}
                  className={img === mainImage ? "thumbnail active" : "thumbnail"}
                  onClick={() => handleThumbnailClick(img)}
                />
              ))}
            </div>
          </div>

          {/* 🔸 Info Section */}
          <div className="product-info">
            <h2>{product.name}</h2>
            <p className="brand">Brand: QualiBrand</p>
            <p className="price">${product.price}</p>
            <p className="rating">⭐⭐⭐⭐☆ (42 Reviews)</p>
            <p className="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut
              sapien sit amet justo vulputate rutrum.
            </p>
            <p className="category">Category: Electronics</p>
            <p className="stock">In Stock</p>

            {/* 🔸 Quantity & Add to Cart */}
            <div className="purchase-section">
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
              <button
                onClick={handleAddToCart}
                className={`add-to-cart-btn ${added ? "added" : ""} ${added === "exists" ? "exists" : ""}`}
              >
                {added === "new"
                  ? "✔ Added!"
                  : added === "exists"
                  ? "🛍 Already in Cart"
                  : "🛒 Add to Cart"}
              </button>
            </div>

            {/* 🔸 Specifications Accordion */}
            <div className="specifications-accordion">
              <button
                className="accordion-toggle"
                onClick={() => setSpecsOpen(!specsOpen)}
              >
                {specsOpen ? "▼" : "▶"} Specifications
              </button>
              {specsOpen && (
                <ul className="specs-list">
                  {sampleSpecifications.map((spec, index) => (
                    <li key={index} className="spec-item">
                      <strong>{spec.label}:</strong> {spec.value}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>

        {/* 🔸 Tabs Section */}
        <div className="product-tabs">
          <div className="tab-buttons">
            <button
              className={activeTab === "description" ? "active" : ""}
              onClick={() => setActiveTab("description")}
            >
              Description
            </button>
            <button
              className={activeTab === "reviews" ? "active" : ""}
              onClick={() => setActiveTab("reviews")}
            >
              Reviews ({sampleReviews.length})
            </button>
          </div>

          <div className="tab-content">
            {activeTab === "description" && (
              <p>
                This is a fantastic {product.name} with all the features you
                need. Add your review below!
              </p>
            )}

            {activeTab === "reviews" && (
              <div className="reviews-section">
                {/* Reviews */}
                {sampleReviews.map((review, index) => (
                  <div key={index} className="review">
                    <strong>{review.name}</strong>
                    <p className="review-rating">
                      {"⭐".repeat(review.rating)}
                    </p>
                    <p>{review.comment}</p>
                  </div>
                ))}

                {/* Review Form (Demo) */}
                <form
                  className="review-form"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <h4>Add a Review</h4>
                  <input type="text" placeholder="Your Name" required />
                  <select required>
                    <option value="">Rating</option>
                    <option value="5">⭐⭐⭐⭐⭐ - Excellent</option>
                    <option value="4">⭐⭐⭐⭐ - Good</option>
                    <option value="3">⭐⭐⭐ - Average</option>
                    <option value="2">⭐⭐ - Poor</option>
                    <option value="1">⭐ - Terrible</option>
                  </select>
                  <textarea
                    placeholder="Write your review..."
                    rows="3"
                    required
                  ></textarea>
                  <button type="submit" disabled>
                    Submit (Demo)
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>

        {/* 🔸 Zoom Modal */}
        {isZoomed && (
          <div className="zoom-modal" onClick={() => setIsZoomed(false)}>
            <div className="zoom-content">
              <img src={mainImage} alt="Zoomed" />
              <button
                className="close-btn"
                onClick={() => setIsZoomed(false)}
              >
                ✖
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ProductPage;
