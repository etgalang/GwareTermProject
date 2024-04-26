// models/products.js

const products = [
  { id: 1, name: 'Product 1', price: 9.99 },
  { id: 2, name: 'Product 2', price: 19.99 }
];

const getAllProducts = () => {
  return products;
};

const getProductById = (id) => {
  return products.find(p => p.id === parseInt(id));
};

module.exports = {
  getAllProducts,
  getProductById
};
