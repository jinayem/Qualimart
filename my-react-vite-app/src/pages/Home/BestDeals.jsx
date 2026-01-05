// import React from "react";
import { Link } from "react-router-dom"; // ✅ Import Link for navigation
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./BestDeals.css";
import products from "../../data/products";

const BestDeals = () => {
  // Ensure products is loaded before mapping
  if (!products || products.length === 0) {
    return <p className="loading-message">Loading products...</p>;
  }

  return (
    <div className="best-deals-container">
      <h2 className="best-deals-title">🔥 Best Deals of the Week</h2>
      <div className="best-deals-slider">
        <Swiper
          className="best-deals-slider-container"
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{ delay: 2500 }}
          pagination={{ clickable: true }}
          navigation
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <Link
                to={`/product/${product.id}`} // ✅ Route to product detail page
                className="best-deal-link"
              >
                <div className="best-deal-card">
                  <div className="best-deal-image-wrapper">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="best-deal-image"
                      onError={(e) => (e.target.style.display = "none")}
                    />
                  </div>
                  <div className="best-deal-info">
                    <h3 className="best-deal-name">{product.name}</h3>
                    <p className="best-deal-price">${product.price}</p>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default BestDeals;
