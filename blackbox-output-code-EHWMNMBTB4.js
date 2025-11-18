document.addEventListener('DOMContentLoaded', function() {
    updateCartCount();
    
    // Home page
    if (document.getElementById('products-grid')) {
        displayProducts();
    }
    
    // Product detail page
    if (document.getElementById('product-detail')) {
        displayProductDetail();
    }
    
    // Cart page
    if (document.getElementById('cart-items')) {
        displayCart();
    }
});

function displayProducts() {
    const productsGrid = document.getElementById('products-grid');
    
    products.forEach(product => {
        const productCard = createProductCard(product);
        productsGrid.appendChild(productCard);
    });
}

function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    
    card.innerHTML = `
        <img src="${product.image}" alt="${product.name}" class="product-image">
        <div class="product-info">
            <h3 class="product-name">${product.name}</h3>
            <p class="product-price">₹${product.price.toLocaleString()}</p>
            <p class="product-category">${product.category}</p>
            <a href="product.html?id=${product.id}" class="btn">View Product</a>
        </div>
    `;
    
    return card;
}

function displayProductDetail() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    
    if (!productId) {
        window.location.href = 'index.html';
        return;
    }
    
    const product = getProductById(productId);
    
    if (!product) {
        window.location.href = 'index.html';
        return;
    }
    
    const productDetail = document.getElementById('product-detail');
    
    productDetail.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h2>${product.name}</h2>
        <p>${product.description}</p>
        <p class="product-price">₹${product.price.toLocaleString()}</p>
        <button class="btn" onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    
    // Display recommendations
    const recommendations = getProductsByCategory(product.category, product.id);
    const recommendationsGrid = document.getElementById('recommendations-grid');
    
    recommendations.forEach(recProduct => {
        const recCard = createProductCard(recProduct);
        recommendationsGrid.appendChild(recCard);
    });
}

function displayCart() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    
    const items = getCartItems();
    
    if (items.length === 0) {
        cartItems.innerHTML = '<p>Your cart is empty.</p>';
        cartTotal.textContent = '0';
        return;
    }
    
    cartItems.innerHTML = '';
    
    items.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'cart-item';
        
        itemElement.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="cart-item-details">
                <h3>${item.name}</h3>
                <p>₹${item.price.toLocaleString()}</p>
                <div class="quantity-controls">
                    <