// src/components/Carousel.jsx

// The following imports necessary React and Swiper modules
// import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// The following imports Swiper styles and custom carousel styles
import "swiper/css";
import "swiper/css/pagination";
import "./Carousel.css";

// The following imports banner images used in the carousel
import banner1 from "@/assets/images/banners/banner1.svg";
import banner2 from "@/assets/images/banners/banner2.svg";
import banner3 from "@/assets/images/banners/banner3.svg";

// The following is sample data for the carousel slides
const carouselData = [
  { id: 1, image: banner1, title: "Super Sale!", description: "Up to 50% off on selected items." },
  { id: 2, image: banner2, title: "New Arrivals", description: "Discover the latest products in our store." },
  { id: 3, image: banner3, title: "Quality You Can Trust", description: "Premium products, unbeatable value." },
];

// The following Carousel component implements a responsive image carousel using Swiper.js
const Carousel = () => {
  return (
    <div className="carousel-container">
      <Swiper
        className="my-swiper"
        modules={[Autoplay, Pagination]}
        slidesPerView={1}
        centeredSlides={true}
        spaceBetween={0}
        loop={false}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        observer={true}
        observeParents={true}
        grabCursor={true}
        onInit={(swiper) => swiper.update()}
      >
        {carouselData.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="carousel-slide">
              <img src={item.image} alt={item.title} className="carousel-image" />
              <div className="carousel-text">
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel; // Export the Carousel component
