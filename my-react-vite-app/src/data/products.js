import laptop from "@/assets/images/products/laptop.jpg";
import laptop_alt from "@/assets/images/products/laptop_alt.jpg";
import smartphone from "@/assets/images/products/smartphone.jpg";
import headphones from "@/assets/images/products/headphones.jpg";
import smartwatch from "@/assets/images/products/smartwatch.jpg";
import tablet from "@/assets/images/products/tablet.jpg";
import gaming_mouse from "@/assets/images/products/gaming_mouse.jpg";
import mechanical_keyboard from "@/assets/images/products/mechanical_keyboard.jpg";

const products = [
  {
    id: 1,
    name: "Laptop",
    price: 999,
    images: [laptop, laptop_alt],
  },
  {
    id: 2,
    name: "Smartphone",
    price: 699,
    images: [smartphone],
  },
  {
    id: 3,
    name: "Headphones",
    price: 199,
    images: [headphones],
  },
  {
    id: 4,
    name: "Smartwatch",
    price: 299,
    images: [smartwatch],
  },
  {
    id: 5,
    name: "Tablet",
    price: 499,
    images: [tablet],
  },
  {
    id: 6,
    name: "Gaming Mouse",
    price: 79,
    images: [gaming_mouse],
  },
  {
    id: 7,
    name: "Mechanical Keyboard",
    price: 129,
    images: [mechanical_keyboard],
  },
];

export default products;
