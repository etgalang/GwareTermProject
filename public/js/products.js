document.addEventListener('DOMContentLoaded', function() {
    loadProducts();
});

function loadProducts() {
    // Simulate fetching products
    const products = [
        { id: 123, name: "Graphic Tee", category: "Tops", price: "$25.00" },
        { id: 2, name: "Bucket Hat", category: "Hats & Accessories", price: "$20.00" }
    ];

    const productList = document.getElementById('productList');
    products.forEach(product => {
        productList.innerHTML += `
            <div>
                <h3>${product.name}</h3>
                <p>Category: ${product.category}</p>
                <p>Price: ${product.price}</p>
                <button onclick="viewProduct(${product.id})">View Details</button>
            </div>
        `;
    });
}

function viewProduct(productId) {
    // Handle viewing product details
    alert('Viewing product ' + productId);
}
