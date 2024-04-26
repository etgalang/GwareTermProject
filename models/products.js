// models/products.js

// Mock data
const mockProducts = [
  { id: 1, name: 'Blue Flamed Graphic Tee', price: 30.00, imageUrl: '/images/Blue Flamed Graphic Tee with watermark.png' },
  { id: 2, name: 'Blue Flamed Reversible Satin Lined Bucket Hat', price: 25.00, imageUrl: '/images/Blue Flamed Bucket Hat.png' }
];

// Function to simulate fetching all products from a database
function getAllProducts() {
  return Promise.resolve(mockProducts); // Returning a promise that resolves with the mock data
}

module.exports = { getAllProducts };
