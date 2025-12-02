// components/Testimonials.jsx

// Importing necessary libraries and styles
import React from "react";
import "../styles/Testimonials.css"; // Importing CSS
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

// Importing imgaes from src/assets/testimonials
import sarah from "../assets/testimonials/sarah.svg";
import michael from "../assets/testimonials/michael.svg";
import emily from "../assets/testimonials/emily.svg";

// The following array contains testimonial data
const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    review: "Qualimart has the best quality products and top-notch customer service. Highly recommended!",
    image: sarah,
  },
  {
    id: 2,
    name: "Michael Smith",
    review: "Fast delivery and excellent products! I will definitely shop here again.",
    image: michael,
  },
  {
    id: 3,
    name: "Emily Davis",
    review: "Amazing experience! The products exceeded my expectations. Thank you, Qualimart!",
    image: emily,
  },
  {
    id: 4,
    name: "Daniel Lee",
    review: "The checkout process was so smooth, and I got exactly what I needed. Great job, Qualimart!",
    image: "/assets/daniel.jpg",
  },
  {
    id: 5,
    name: "Sophia Martinez",
    review: "I love the variety of products available here. Everything is high quality and worth the price.",
    image: "/assets/sophia.jpg",
  },
  {
    id: 6,
    name: "James Anderson",
    review: "Excellent packaging and timely delivery. This is my go-to online store now!",
    image: "/assets/james.jpg",
  },
  {
    id: 7,
    name: "Olivia Brown",
    review: "Super responsive customer support! They quickly resolved my issue. Highly recommended!",
    image: "/assets/olivia.jpg",
  },
  {
    id: 8,
    name: "William Carter",
    review: "The discounts and offers are amazing! I always find great deals on Qualimart.",
    image: "/assets/william.jpg",
  },
];

// The following component renders a testimonials section with a slider
const Testimonials = () => {
  return (
    <div className="testimonials-container">
      <h2 className="testimonials-title">💖 Why Shoppers Love Qualimart!</h2>
      <Swiper
        className="testimonials-slider"
        modules={[Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div className="testimonial-card">
              <img src={testimonial.image} alt={testimonial.name} className="testimonial-img" />
              <p className="testimonial-review">"{testimonial.review}"</p>
              <h4 className="testimonial-name">{testimonial.name}</h4>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

// The following line ensures that the component can be imported and used in other parts of the application
export default Testimonials;
