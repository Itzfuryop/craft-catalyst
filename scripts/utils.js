// scripts/utils.js
// ============================================
// SHARED UTILITIES FOR ALL PAGES
// ============================================

// ========= PRODUCTS & STORAGE =========
function getProducts() {
    const stored = localStorage.getItem('products');
    if (!stored) return [];
    try {
        return JSON.parse(stored) || [];
    } catch (e) {
        console.error('Error parsing products:', e);
        return [];
    }
}

function getCart() {
    return JSON.parse(localStorage.getItem('cart')) || [];
}

function saveCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
}

function getWishlistItems() {
    return JSON.parse(localStorage.getItem('wishlist')) || [];
}

function saveWishlist(list) {
    localStorage.setItem('wishlist', JSON.stringify(list));
    updateWishlistCount();
}

function getCurrentUser() {
    const u = localStorage.getItem('currentUser');
    return u ? JSON.parse(u) : null;
}

function logoutUser() {
    localStorage.removeItem('currentUser');
}

// ========= CART MANAGEMENT =========
function addToCart(productId) {
    const products = getProducts();
    const product = products.find(p => p.id === productId);
    if (!product) {
        showNotification('Product not found');
        return;
    }

    const cart = getCart();
    const existing = cart.find(i => i.id === productId);
    
    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    saveCart(cart);
    showNotification('✓ Added to cart');
}

function removeFromCart(productId) {
    const cart = getCart();
    const filtered = cart.filter(i => i.id !== productId);
    saveCart(filtered);
    showNotification('✓ Removed from cart');
}

function updateCartQuantity(productId, quantity) {
    const cart = getCart();
    const item = cart.find(i => i.id === productId);
    if (item) {
        if (quantity <= 0) {
            removeFromCart(productId);
        } else {
            item.quantity = quantity;
            saveCart(cart);
        }
    }
}

function clearCart() {
    localStorage.setItem('cart', JSON.stringify([]));
    updateCartCount();
}

function getCartTotal() {
    const cart = getCart();
    return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
}

function updateCartCount() {
    const count = getCart().reduce((n, i) => n + (i.quantity || 1), 0);
    const els = document.querySelectorAll('#cartCount, #bottomCartCount');
    els.forEach(el => {
        if (el) el.textContent = count;
    });
}

// ========= WISHLIST MANAGEMENT =========
function toggleWishlist(productId) {
    const list = getWishlistItems();
    const index = list.indexOf(productId);
    let added = false;

    if (index === -1) {
        list.push(productId);
        added = true;
        showNotification('❤️ Added to wishlist');
    } else {
        list.splice(index, 1);
        showNotification('♡ Removed from wishlist');
    }

    saveWishlist(list);
    return added;
}

function isInWishlist(productId) {
    return getWishlistItems().includes(productId);
}

function updateWishlistCount() {
    const count = getWishlistItems().length;
    const el = document.getElementById('wishlistCount');
    if (el) el.textContent = count;
}

function removeFromWishlist(productId) {
    const list = getWishlistItems();
    const filtered = list.filter(id => id !== productId);
    saveWishlist(filtered);
    showNotification('✓ Removed from wishlist');
}

// ========= RECENTLY VIEWED =========
function addToRecentlyViewed(productId) {
    const key = 'recentlyViewed';
    const existing = JSON.parse(localStorage.getItem(key)) || [];
    const filtered = existing.filter(x => x !== productId);
    filtered.unshift(productId);
    localStorage.setItem(key, JSON.stringify(filtered.slice(0, 10)));
}

function getRecentlyViewed() {
    const key = 'recentlyViewed';
    const ids = JSON.parse(localStorage.getItem(key)) || [];
    const products = getProducts();
    return ids.map(id => products.find(p => p.id === id)).filter(p => p);
}

// ========= SEARCH & FILTER =========
function searchProducts(allProducts, query) {
    const q = query.toLowerCase();
    return allProducts.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q)
    );
}

function filterByCategory(allProducts, category) {
    return allProducts.filter(p => p.category === category);
}

function sortProducts(list, sort) {
    const arr = [...list];
    if (sort === 'price-low') {
        arr.sort((a, b) => a.price - b.price);
    } else if (sort === 'price-high') {
        arr.sort((a, b) => b.price - a.price);
    } else if (sort === 'name') {
        arr.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sort === 'rating') {
        arr.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    }
    return arr;
}

// ========= UI & FORMATTING =========
function showNotification(message, type = 'success') {
    const box = document.getElementById('notification');
    const text = document.getElementById('notificationText');
    if (!box || !text) return;

    text.textContent = message;
    box.className = 'notification show';
    if (type === 'error') {
        box.style.background = 'rgba(239, 83, 80, 0.2)';
        box.style.borderLeft = '4px solid #ef5350';
    } else {
        box.style.background = 'var(--bg-card)';
        box.style.borderLeft = 'none';
    }

    setTimeout(() => {
        box.classList.remove('show');
        setTimeout(() => box.classList.add('hidden'), 300);
    }, 2500);
}

function formatCurrency(price) {
    return `₹${price.toLocaleString('en-IN')}`;
}

function formatDate(date) {
    return new Date(date).toLocaleDateString('en-IN', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
}

function updateUserInfo() {
    const user = getCurrentUser();
    const info = document.getElementById('userInfo');
    const authBtn = document.getElementById('authBtn');

    if (info && user) {
        info.innerHTML = `
            <p style="font-weight:600; margin:0;">${user.name}</p>
            <p style="font-size:0.85rem; color:var(--text-secondary); margin:2px 0 0 0;">${user.email}</p>
        `;
    } else if (info) {
        info.innerHTML = '';
    }

    if (authBtn) {
        authBtn.textContent = user ? '🚪 Logout' : '🔐 Login';
    }
}

// ========= NAVIGATION HELPERS =========
function goToCart() {
    window.location.href = 'pages/cart.html';
}

function goToWishlist() {
    window.location.href = 'pages/wishlist.html';
}

function navigateToCategory(cat) {
    window.location.href = `pages/category.html?cat=${cat}`;
}

function exploreProducts() {
    window.location.href = 'pages/category.html?cat=all';
}

function performSearch() {
    const searchInput = document.getElementById('searchInput');
    if (!searchInput) return;

    const query = searchInput.value.trim();
    if (!query) {
        showNotification('Please enter a search term', 'error');
        return;
    }

    window.location.href = `pages/category.html?search=${encodeURIComponent(query)}`;
}

function handleAuth() {
    const user = getCurrentUser();
    if (user) {
        logoutUser();
        showNotification('✓ Logged out');
        setTimeout(() => window.location.reload(), 800);
    } else {
        window.location.href = 'pages/login.html';
    }
}

// ========= UI TOGGLES =========
function toggleSideMenu() {
    const sideMenu = document.getElementById('sideMenu');
    if (sideMenu) sideMenu.classList.toggle('active');
}

function closeSideMenu() {
    const sideMenu = document.getElementById('sideMenu');
    if (sideMenu) sideMenu.classList.remove('active');
}

function toggleUserMenu() {
    const userMenu = document.getElementById('userMenu');
    if (userMenu) userMenu.classList.toggle('hidden');
}

function closeOfflinePopup() {
    const popup = document.getElementById('offlinePopup');
    if (popup) popup.classList.add('hidden');
}

// ========= PRODUCT RENDERING =========
function renderProducts(gridId, products) {
    const grid = document.getElementById(gridId);
    if (!grid) return;

    if (!products || products.length === 0) {
        grid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: var(--text-secondary);">No products available</p>';
        return;
    }

    grid.innerHTML = products.map(product => {
        const isWishlisted = isInWishlist(product.id);
        return `
            <div class="product-card" onclick="viewProduct(${product.id})">
                ${product.badge ? `<div class="product-badge">${product.badge}</div>` : ''}
                <button class="wishlist-btn ${isWishlisted ? 'active' : ''}"
                        onclick="event.stopPropagation(); handleWishlist(${product.id})">
                    ${isWishlisted ? '❤️' : '🤍'}
                </button>
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}" style="width:100%; height:100%; object-fit:cover; display:block;">
                </div>
                <div class="product-info">
                    <h3 class="product-title">${product.name}</h3>
                    <p class="product-description">${product.description}</p>
                    <div class="product-footer">
                        <span class="product-price">${formatCurrency(product.price)}</span>
                        <button class="add-to-cart-btn"
                                onclick="event.stopPropagation(); addToCart(${product.id})">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

function viewProduct(productId) {
    addToRecentlyViewed(productId);
    window.location.href = `pages/product.html?id=${productId}`;
}

function handleWishlist(productId) {
    const isAdded = toggleWishlist(productId);
    const btns = document.querySelectorAll(`[onclick*="handleWishlist(${productId})"]`);
    btns.forEach(btn => {
        btn.textContent = isAdded ? '❤️' : '🤍';
        btn.classList.toggle('active', isAdded);
    });
}

// ========= FORM VALIDATION =========
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePhone(phone) {
    const re = /^[\+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,9}$/;
    return re.test(phone.replace(/\s/g, ''));
}

function validatePassword(password) {
    return password.length >= 8;
}

// ========= INITIALIZATION =========
document.addEventListener('DOMContentLoaded', () => {
    updateCartCount();
    updateWishlistCount();
    updateUserInfo();

    // Handle offline mode
    if (!navigator.onLine) {
        const offlinePopup = document.getElementById('offlinePopup');
        if (offlinePopup) offlinePopup.classList.remove('hidden');
    }

    window.addEventListener('online', () => {
        showNotification('✓ You are back online');
    });

    window.addEventListener('offline', () => {
        const offlinePopup = document.getElementById('offlinePopup');
        if (offlinePopup) offlinePopup.classList.remove('hidden');
    });
});
