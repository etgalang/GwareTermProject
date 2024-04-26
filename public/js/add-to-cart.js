// Inside add-to-cart.js

const productDetails = {
    id: 'product1', // This should be a unique identifier for the product
    name: 'Blue Flamed Graphic Tee',
    price: 30.00,
    image: 'images/Blue Flamed Graphic Tee with watermark.png'
};

document.getElementById('add-to-cart-btn').addEventListener('click', function() {
    const size = document.getElementById('shirt-size').value;
    const cartItem = {
        ...productDetails, // Spread operator to include product details
        size: size,
        quantity: 1
    };

    // Add to localStorage for client-side cart simulation
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(cartItem);
    localStorage.setItem('cart', JSON.stringify(cart));

    // Redirect to the cart page
    window.location.href = 'cart.html';
});
