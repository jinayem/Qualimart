// backend/data/products.js

const products = [
  {
    id: '1',
    name: 'Wireless Headphones',
    description: 'High-quality wireless headphones with noise cancellation.',
    price: 89.99,
    image: '/assets/headphones.jpg',
    rating: 4.5,
    stock: 12,
    brand: 'SoundMax',
    category: 'Electronics'
  },
  {
    id: '2',
    name: 'Smart Watch',
    description: 'Track your health and notifications with this stylish smartwatch.',
    price: 129.99,
    image: '/assets/smartwatch.jpg',
    rating: 4.2,
    stock: 8,
    brand: 'WristTech',
    category: 'Gadgets'
  },
  {
    id: '3',
    name: 'Bluetooth Speaker',
    description: 'Portable speaker with rich bass and long battery life.',
    price: 49.99,
    image: '/assets/speaker.jpg',
    rating: 4.6,
    stock: 20,
    brand: 'BassBoom',
    category: 'Audio'
  }
];

module.exports = products;
