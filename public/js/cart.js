// cart.js

document.addEventListener('DOMContentLoaded', () => {
    displayCartItems();
    updatePrices();
  });
  
  function displayCartItems() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let cartItemsContainer = document.getElementById('cart-items');
  
    // Clear cart items container before adding new items
    cartItemsContainer.innerHTML = '';
  
    if (cart.length === 0) {
      cartItemsContainer.innerHTML = '<p>No items in the cart.</p>';
    } else {
      cart.forEach((item, index) => {
        let cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
          <img src="${item.image}" alt="${item.name}" style="height: 50px;">
          <p>${item.name}</p>
          <p>$${item.price.toFixed(2)}</p>
          <p>Size: ${item.size}</p>
          <p>Quantity: <input type="number" value="${item.quantity}" min="1" onchange="updateItemQuantity(${index}, this.value)"></p>
          <button onclick="removeItemFromCart(${index})">Remove</button>
        `;
        cartItemsContainer.appendChild(cartItem);
      });
    }
  }
  
  function updateItemQuantity(index, quantity) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (quantity < 1) {
      removeItemFromCart(index);
    } else {
      cart[index].quantity = parseInt(quantity, 10);
      localStorage.setItem('cart', JSON.stringify(cart));
      updatePrices();
    }
  }
  
  function removeItemFromCart(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCartItems();
    updatePrices();
  }
  
  function updatePrices() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    let tax = subtotal * 0.0725; // NC state tax rate
    let total = subtotal + tax;
  
    document.getElementById('subtotal').textContent = `$${subtotal.toFixed(2)}`;
    document.getElementById('tax').textContent = `$${tax.toFixed(2)}`;
    document.getElementById('total').textContent = `$${total.toFixed(2)}`;
  }
  