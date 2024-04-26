function toggleMenu() {
    var x = document.getElementById("navLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function searchProducts() {
    var input = document.getElementById('search-input').value;
    window.location.href = 'products.html?search=' + encodeURIComponent(input);
}

document.getElementById('add-to-cart-button').addEventListener('click', () => {
    const sizeSelected = document.getElementById('size-selector').value;
    const quantity = 1; // This can be adjusted if you have a quantity selector.
    const productInfo = {
        id: 'some-product-id', // Replace with actual product ID
        name: 'Product Name', // Replace with actual product name
        image: 'path-to-small-product-image.png', // Replace with actual image path
        size: sizeSelected,
        quantity: quantity
    };

    // Add product to cart (in local storage for this example)
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(productInfo);
    localStorage.setItem('cart', JSON.stringify(cart));

    // Redirect to cart page
    window.location.href = 'cart.html';
});

//main.js

