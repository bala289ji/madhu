// Main Application JavaScript for Madhu Enterprises E-Commerce Platform

// Global Variables
let cart = JSON.parse(localStorage.getItem('madhuCart')) || [];
let products = JSON.parse(localStorage.getItem('madhuProducts')) || [];
let enquiries = JSON.parse(localStorage.getItem('madhuEnquiries')) || [];
let orders = JSON.parse(localStorage.getItem('madhuOrders')) || [];
let invoices = JSON.parse(localStorage.getItem('madhuInvoices')) || [];
let customers = JSON.parse(localStorage.getItem('madhuCustomers')) || [];
let adminSettings = JSON.parse(localStorage.getItem('madhuSettings')) || {};

// Initialize Sample Data if empty
function initializeSampleData() {
    if (products.length === 0) {
        products = [
            {
                id: 1,
                sku: 'ME-TOOL-001',
                name: 'Bosch Professional Drill Machine',
                category: 'tools',
                brand: 'Bosch',
                description: 'Professional grade drill machine with hammer function',
                price: 5499,
                cost: 4200,
                tax: 18,
                stock: 25,
                minStock: 5,
                unit: 'pcs',
                image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
                specs: { power: '500W', speed: '0-3000 RPM', weight: '1.5kg' },
                status: 'active',
                featured: true
            },
            {
                id: 2,
                sku: 'ME-ELEC-001',
                name: 'Havells 16A Switch Socket',
                category: 'electrical',
                brand: 'Havells',
                description: 'Premium quality 16A switch socket with safety shutter',
                price: 299,
                cost: 220,
                tax: 18,
                stock: 150,
                minStock: 20,
                unit: 'pcs',
                image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
                specs: { rating: '16A/250V', material: 'Polycarbonate', color: 'White' },
                status: 'active',
                featured: true
            },
            {
                id: 3,
                sku: 'ME-HW-001',
                name: 'Stainless Steel Nut Bolt Set',
                category: 'hardware',
                brand: 'Generic',
                description: 'Assorted stainless steel nut bolt set for industrial use',
                price: 899,
                cost: 650,
                tax: 18,
                stock: 45,
                minStock: 10,
                unit: 'set',
                image: 'https://images.unsplash.com/photo-1589927986089-35812388d1f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
                specs: { material: 'Stainless Steel 304', sizes: 'M6-M12', pieces: '100' },
                status: 'active',
                featured: true
            },
            {
                id: 4,
                sku: 'ME-SAFE-001',
                name: 'Industrial Safety Helmet',
                category: 'safety',
                brand: '3M',
                description: 'High impact resistant industrial safety helmet',
                price: 499,
                cost: 350,
                tax: 18,
                stock: 80,
                minStock: 15,
                unit: 'pcs',
                image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
                specs: { material: 'ABS Plastic', color: 'Yellow', weight: '400g' },
                status: 'active',
                featured: true
            },
            {
                id: 5,
                sku: 'ME-PAINT-001',
                name: 'Asian Paints Industrial Primer',
                category: 'paints',
                brand: 'Asian Paints',
                description: 'High quality industrial primer for metal surfaces',
                price: 2499,
                cost: 1900,
                tax: 18,
                stock: 30,
                minStock: 8,
                unit: 'litre',
                image: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
                specs: { coverage: '10 sqm/litre', drying: '2 hours', type: 'Oil Based' },
                status: 'active',
                featured: false
            },
            {
                id: 6,
                sku: 'ME-MACH-001',
                name: 'Industrial Angle Grinder',
                category: 'machinery',
                brand: 'Makita',
                description: 'Heavy duty angle grinder for metal and stone work',
                price: 7499,
                cost: 5800,
                tax: 18,
                stock: 12,
                minStock: 3,
                unit: 'pcs',
                image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
                specs: { power: '2000W', disc: '7 inch', speed: '11000 RPM' },
                status: 'active',
                featured: true
            },
            {
                id: 7,
                sku: 'ME-ELEC-002',
                name: 'Copper Wire 2.5 sqmm',
                category: 'electrical',
                brand: 'Finolex',
                description: '99.9% pure copper wire for electrical wiring',
                price: 6999,
                cost: 5500,
                tax: 18,
                stock: 60,
                minStock: 12,
                unit: 'meter',
                image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
                specs: { gauge: '2.5 sqmm', length: '90m roll', insulation: 'PVC' },
                status: 'active',
                featured: false
            },
            {
                id: 8,
                sku: 'ME-TOOL-002',
                name: 'Impact Wrench Set',
                category: 'tools',
                brand: 'Ingersoll Rand',
                description: 'Professional impact wrench set for automotive use',
                price: 12499,
                cost: 9800,
                tax: 18,
                stock: 8,
                minStock: 2,
                unit: 'set',
                image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
                specs: { torque: '800 Nm', drive: '1/2 inch', speed: '2800 RPM' },
                status: 'active',
                featured: true
            }
        ];
        localStorage.setItem('madhuProducts', JSON.stringify(products));
    }
    
    if (adminSettings.length === 0) {
        adminSettings = {
            companyName: 'Madhu Enterprises',
            address: '123 Industrial Area, Phase II, Mumbai - 400001',
            phone: '+91 98765 43210',
            email: 'info@madhuenterprises.com',
            gst: '27ABCDE1234F1Z5',
            shippingRate: 200,
            freeShippingMin: 5000,
            taxRate: 18
        };
        localStorage.setItem('madhuSettings', JSON.stringify(adminSettings));
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    initializeSampleData();
    updateCartCount();
    loadFeaturedProducts();
    setupEventListeners();
    
    // Check which page we're on
    const path = window.location.pathname;
    if (path.includes('products.html')) {
        loadProductsPage();
    } else if (path.includes('cart.html')) {
        loadCartPage();
    } else if (path.includes('admin.html')) {
        loadAdminPanel();
    } else if (path.includes('dashboard.html')) {
        loadDashboard();
    }
});

// Update Cart Count
function updateCartCount() {
    const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    const cartCountElements = document.querySelectorAll('#cartCount');
    cartCountElements.forEach(el => {
        el.textContent = cartCount;
    });
    
    // Update quick cart
    updateQuickCart();
}

// Load Featured Products
function loadFeaturedProducts() {
    const featuredContainer = document.getElementById('featuredProducts');
    if (!featuredContainer) return;
    
    const featuredProducts = products.filter(p => p.featured && p.status === 'active').slice(0, 4);
    
    featuredContainer.innerHTML = featuredProducts.map(product => `
        <div class="product-card" data-id="${product.id}">
            ${product.stock < 10 ? '<span class="product-badge">Low Stock</span>' : ''}
            <div class="product-img">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <p class="product-description">${product.description.substring(0, 60)}...</p>
                <div class="product-price">
                    <span class="current-price">₹${product.price.toLocaleString()}</span>
                </div>
                <div class="product-stock">
                    <span class="stock-${product.stock > 10 ? 'in' : product.stock > 0 ? 'low' : 'out'}">
                        ${product.stock > 10 ? 'In Stock' : product.stock > 0 ? `Only ${product.stock} left` : 'Out of Stock'}
                    </span>
                </div>
                <div class="product-actions">
                    <button class="add-to-cart" ${product.stock === 0 ? 'disabled' : ''}>
                        ${product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
                    </button>
                    <button class="quick-view">
                        <i class="fas fa-eye"></i>
                    </button>
                </div>
            </div>
        </div>
    `).join('');
    
    // Add event listeners to add-to-cart buttons
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function(e) {
            const productCard = this.closest('.product-card');
            const productId = parseInt(productCard.dataset.id);
            addToCart(productId);
        });
    });
}

// Add to Cart Function
function addToCart(productId, quantity = 1) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    if (product.stock < quantity) {
        showToast(`Only ${product.stock} items available in stock`, 'error');
        return;
    }
    
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        if (existingItem.quantity + quantity > product.stock) {
            showToast('Cannot add more than available stock', 'error');
            return;
        }
        existingItem.quantity += quantity;
    } else {
        cart.push({
            id: productId,
            quantity: quantity,
            price: product.price,
            name: product.name,
            image: product.image,
            sku: product.sku
        });
    }
    
    localStorage.setItem('madhuCart', JSON.stringify(cart));
    updateCartCount();
    showToast(`${product.name} added to cart!`);
    
    // Update stock in products array (for demo)
    product.stock -= quantity;
    localStorage.setItem('madhuProducts', JSON.stringify(products));
}

// Update Quick Cart
function updateQuickCart() {
    const quickCartItems = document.getElementById('quickCartItems');
    const quickCartTotal = document.getElementById('quickCartTotal');
    
    if (!quickCartItems || !quickCartTotal) return;
    
    if (cart.length === 0) {
        quickCartItems.innerHTML = '<p class="empty-cart-message">Your cart is empty</p>';
        quickCartTotal.textContent = '₹0.00';
        return;
    }
    
    let total = 0;
    quickCartItems.innerHTML = cart.map(item => {
        const product = products.find(p => p.id === item.id);
        if (!product) return '';
        
        const itemTotal = product.price * item.quantity;
        total += itemTotal;
        
        return `
            <div class="cart-item" data-id="${item.id}">
                <div class="cart-item-img">
                    <img src="${product.image}" alt="${product.name}">
                </div>
                <div class="cart-item-info">
                    <h4>${product.name.substring(0, 30)}...</h4>
                    <div class="cart-item-price">₹${product.price.toLocaleString()} × ${item.quantity}</div>
                    <div class="cart-item-quantity">
                        <button class="quantity-btn minus">-</button>
                        <input type="number" class="quantity-input" value="${item.quantity}" min="1" max="${product.stock + item.quantity}">
                        <button class="quantity-btn plus">+</button>
                        <button class="remove-item"><i class="fas fa-trash"></i></button>
                    </div>
                </div>
            </div>
        `;
    }).join('');
    
    quickCartTotal.textContent = `₹${total.toLocaleString('en-IN', { minimumFractionDigits: 2 })}`;
    
    // Add event listeners to quantity buttons
    document.querySelectorAll('.quantity-btn.minus').forEach(btn => {
        btn.addEventListener('click', function() {
            const itemId = parseInt(this.closest('.cart-item').dataset.id);
            updateCartItem(itemId, -1);
        });
    });
    
    document.querySelectorAll('.quantity-btn.plus').forEach(btn => {
        btn.addEventListener('click', function() {
            const itemId = parseInt(this.closest('.cart-item').dataset.id);
            updateCartItem(itemId, 1);
        });
    });
    
    document.querySelectorAll('.remove-item').forEach(btn => {
        btn.addEventListener('click', function() {
            const itemId = parseInt(this.closest('.cart-item').dataset.id);
            removeFromCart(itemId);
        });
    });
}

// Update Cart Item Quantity
function updateCartItem(productId, change) {
    const itemIndex = cart.findIndex(item => item.id === productId);
    if (itemIndex === -1) return;
    
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const newQuantity = cart[itemIndex].quantity + change;
    
    if (newQuantity < 1) {
        removeFromCart(productId);
        return;
    }
    
    if (newQuantity > product.stock + cart[itemIndex].quantity) {
        showToast('Cannot add more than available stock', 'error');
        return;
    }
    
    cart[itemIndex].quantity = newQuantity;
    localStorage.setItem('madhuCart', JSON.stringify(cart));
    updateCartCount();
    
    // Update stock in products array
    product.stock -= change;
    localStorage.setItem('madhuProducts', JSON.stringify(products));
    
    showToast('Cart updated');
}

// Remove from Cart
function removeFromCart(productId) {
    const itemIndex = cart.findIndex(item => item.id === productId);
    if (itemIndex === -1) return;
    
    const product = products.find(p => p.id === productId);
    if (product) {
        // Restore stock
        product.stock += cart[itemIndex].quantity;
        localStorage.setItem('madhuProducts', JSON.stringify(products));
    }
    
    cart.splice(itemIndex, 1);
    localStorage.setItem('madhuCart', JSON.stringify(cart));
    updateCartCount();
    showToast('Item removed from cart');
}

// Show Toast Notification
function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    if (!toast) return;
    
    const toastContent = toast.querySelector('.toast-content');
    toastContent.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-triangle'}"></i>
        <span class="toast-message">${message}</span>
    `;
    
    toast.style.backgroundColor = type === 'success' ? '#27ae60' : '#e74c3c';
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Load Products Page
function loadProductsPage() {
    const productsGrid = document.getElementById('productsGrid');
    if (!productsGrid) return;
    
    displayProducts(products);
    updateInventoryStats();
    
    // Filter functionality
    document.getElementById('applyFilters')?.addEventListener('click', applyFilters);
    document.getElementById('resetFilters')?.addEventListener('click', resetFilters);
    document.getElementById('sortSelect')?.addEventListener('change', sortProducts);
    
    // Category filter from dropdown
    document.querySelectorAll('.dropdown-content a[data-category]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const category = this.dataset.category;
            filterByCategory(category);
        });
    });
}

// Display Products
function displayProducts(productsToShow) {
    const productsGrid = document.getElementById('productsGrid');
    const totalProducts = document.getElementById('totalProducts');
    
    if (!productsGrid) return;
    
    if (productsToShow.length === 0) {
        productsGrid.innerHTML = '<div class="no-products"><p>No products found matching your criteria.</p></div>';
        if (totalProducts) totalProducts.textContent = '0';
        return;
    }
    
    productsGrid.innerHTML = productsToShow.map(product => `
        <div class="product-card" data-id="${product.id}" data-category="${product.category}">
            ${product.stock < product.minStock ? '<span class="product-badge">Low Stock</span>' : ''}
            <div class="product-img">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <p class="product-description">${product.description.substring(0, 60)}...</p>
                <div class="product-price">
                    <span class="current-price">₹${product.price.toLocaleString()}</span>
                </div>
                <div class="product-stock">
                    <span class="stock-${product.stock > product.minStock ? 'in' : product.stock > 0 ? 'low' : 'out'}">
                        ${product.stock > product.minStock ? 'In Stock' : product.stock > 0 ? `Low Stock (${product.stock})` : 'Out of Stock'}
                    </span>
                </div>
                <div class="product-actions">
                    <button class="add-to-cart" ${product.stock === 0 ? 'disabled' : ''}>
                        ${product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
                    </button>
                    <button class="quick-view">
                        <i class="fas fa-eye"></i>
                    </button>
                </div>
            </div>
        </div>
    `).join('');
    
    if (totalProducts) totalProducts.textContent = productsToShow.length;
    
    // Add event listeners
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function(e) {
            const productCard = this.closest('.product-card');
            const productId = parseInt(productCard.dataset.id);
            addToCart(productId);
        });
    });
}

// Apply Filters
function applyFilters() {
    const selectedCategories = Array.from(document.querySelectorAll('.filter-options input[type="checkbox"]:checked'))
        .map(cb => cb.value);
    
    const maxPrice = parseInt(document.getElementById('priceRange').value);
    const selectedBrands = Array.from(document.querySelectorAll('.filter-options input[type="checkbox"][value]:checked'))
        .map(cb => cb.value);
    
    const stockFilter = document.querySelector('input[name="stock"]:checked').value;
    
    let filteredProducts = products.filter(product => {
        // Category filter
        if (selectedCategories.length > 0 && !selectedCategories.includes(product.category)) {
            return false;
        }
        
        // Price filter
        if (product.price > maxPrice) {
            return false;
        }
        
        // Brand filter
        if (selectedBrands.length > 0 && product.brand && !selectedBrands.includes(product.brand.toLowerCase())) {
            return false;
        }
        
        // Stock filter
        if (stockFilter === 'instock' && product.stock <= 0) return false;
        if (stockFilter === 'lowstock' && product.stock >= product.minStock) return false;
        
        return true;
    });
    
    displayProducts(filteredProducts);
}

// Reset Filters
function resetFilters() {
    document.querySelectorAll('.filter-options input[type="checkbox"]').forEach(cb => cb.checked = true);
    document.getElementById('priceRange').value = 50000;
    document.getElementById('priceRangeValue').textContent = '₹50,000';
    document.querySelector('input[name="stock"][value="all"]').checked = true;
    displayProducts(products);
}

// Sort Products
function sortProducts() {
    const sortValue = document.getElementById('sortSelect').value;
    let sortedProducts = [...products];
    
    switch(sortValue) {
        case 'name_asc':
            sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case 'name_desc':
            sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
            break;
        case 'price_asc':
            sortedProducts.sort((a, b) => a.price - b.price);
            break;
        case 'price_desc':
            sortedProducts.sort((a, b) => b.price - a.price);
            break;
        case 'stock_desc':
            sortedProducts.sort((a, b) => b.stock - a.stock);
            break;
    }
    
    displayProducts(sortedProducts);
}

// Filter by Category
function filterByCategory(category) {
    const checkboxes = document.querySelectorAll('.filter-options input[type="checkbox"]');
    checkboxes.forEach(cb => {
        cb.checked = (cb.value === category || cb.value === '');
    });
    applyFilters();
}

// Update Inventory Stats
function updateInventoryStats() {
    const inStock = document.getElementById('inStock');
    const lowStock = document.getElementById('lowStock');
    const outOfStock = document.getElementById('outOfStock');
    
    if (!inStock || !lowStock || !outOfStock) return;
    
    const inStockCount = products.filter(p => p.stock > p.minStock).length;
    const lowStockCount = products.filter(p => p.stock > 0 && p.stock <= p.minStock).length;
    const outOfStockCount = products.filter(p => p.stock === 0).length;
    
    inStock.textContent = inStockCount;
    lowStock.textContent = lowStockCount;
    outOfStock.textContent = outOfStockCount;
}

// Load Cart Page
function loadCartPage() {
    displayCartItems();
    updateOrderSummary();
    
    // Event listeners
    document.getElementById('clearCart')?.addEventListener('click', clearCart);
    document.getElementById('proceedCheckout')?.addEventListener('click', proceedToCheckout);
    document.getElementById('backToCart')?.addEventListener('click', backToCart);
    document.getElementById('placeOrder')?.addEventListener('click', placeOrder);
    
    // Payment method toggle
    document.querySelectorAll('input[name="payment"]').forEach(radio => {
        radio.addEventListener('change', function() {
            const onlinePayment = document.getElementById('onlinePaymentDetails');
            onlinePayment.style.display = this.value === 'online' ? 'block' : 'none';
        });
    });
    
    // Same as billing checkbox
    document.getElementById('sameAsBilling')?.addEventListener('change', function() {
        const shippingForm = document.getElementById('shippingForm');
        shippingForm.style.display = this.checked ? 'none' : 'block';
    });
}

// Display Cart Items
function displayCartItems() {
    const cartItems = document.getElementById('cartItems');
    const cartItemCount = document.getElementById('cartItemCount');
    const emptyCart = document.getElementById('emptyCart');
    const proceedBtn = document.getElementById('proceedCheckout');
    
    if (cart.length === 0) {
        if (cartItems) cartItems.innerHTML = '';
        if (emptyCart) emptyCart.style.display = 'block';
        if (proceedBtn) proceedBtn.disabled = true;
        if (cartItemCount) cartItemCount.textContent = '0';
        return;
    }
    
    if (emptyCart) emptyCart.style.display = 'none';
    if (proceedBtn) proceedBtn.disabled = false;
    if (cartItemCount) cartItemCount.textContent = cart.length.toString();
    
    if (cartItems) {
        cartItems.innerHTML = cart.map(item => {
            const product = products.find(p => p.id === item.id);
            if (!product) return '';
            
            const itemTotal = product.price * item.quantity;
            
            return `
                <div class="cart-item-row" data-id="${item.id}">
                    <div class="cart-item-info">
                        <div class="cart-item-img">
                            <img src="${product.image}" alt="${product.name}">
                        </div>
                        <div class="cart-item-details">
                            <h4>${product.name}</h4>
                            <p>SKU: ${product.sku}</p>
                            <div class="cart-item-price">₹${product.price.toLocaleString()}</div>
                        </div>
                    </div>
                    <div class="cart-item-quantity">
                        <button class="qty-btn minus">-</button>
                        <input type="number" value="${item.quantity}" min="1" max="${product.stock + item.quantity}">
                        <button class="qty-btn plus">+</button>
                    </div>
                    <div class="cart-item-total">₹${itemTotal.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</div>
                    <div class="cart-item-remove">
                        <button class="remove-btn"><i class="fas fa-trash"></i></button>
                    </div>
                </div>
            `;
        }).join('');
        
        // Add event listeners
        document.querySelectorAll('.qty-btn.minus').forEach(btn => {
            btn.addEventListener('click', function() {
                const itemId = parseInt(this.closest('.cart-item-row').dataset.id);
                updateCartItem(itemId, -1);
                displayCartItems();
                updateOrderSummary();
            });
        });
        
        document.querySelectorAll('.qty-btn.plus').forEach(btn => {
            btn.addEventListener('click', function() {
                const itemId = parseInt(this.closest('.cart-item-row').dataset.id);
                updateCartItem(itemId, 1);
                displayCartItems();
                updateOrderSummary();
            });
        });
        
        document.querySelectorAll('.remove-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const itemId = parseInt(this.closest('.cart-item-row').dataset.id);
                removeFromCart(itemId);
                displayCartItems();
                updateOrderSummary();
            });
        });
    }
}

// Update Order Summary
function updateOrderSummary() {
    const subtotalEl = document.getElementById('subtotal');
    const shippingEl = document.getElementById('shipping');
    const taxEl = document.getElementById('tax');
    const totalEl = document.getElementById('totalAmount');
    
    if (!subtotalEl || !shippingEl || !taxEl || !totalEl) return;
    
    let subtotal = 0;
    cart.forEach(item => {
        const product = products.find(p => p.id === item.id);
        if (product) {
            subtotal += product.price * item.quantity;
        }
    });
    
    const shipping = subtotal >= 5000 ? 0 : 200;
    const tax = subtotal * (18 / 100);
    const total = subtotal + shipping + tax;
    
    subtotalEl.textContent = `₹${subtotal.toLocaleString('en-IN', { minimumFractionDigits: 2 })}`;
    shippingEl.textContent = `₹${shipping.toLocaleString('en-IN', { minimumFractionDigits: 2 })}`;
    taxEl.textContent = `₹${tax.toLocaleString('en-IN', { minimumFractionDigits: 2 })}`;
    totalEl.textContent = `₹${total.toLocaleString('en-IN', { minimumFractionDigits: 2 })}`;
    
    // Update review section too
    const reviewSubtotal = document.getElementById('reviewSubtotal');
    const reviewShipping = document.getElementById('reviewShipping');
    const reviewTax = document.getElementById('reviewTax');
    const reviewTotal = document.getElementById('reviewTotal');
    
    if (reviewSubtotal) reviewSubtotal.textContent = `₹${subtotal.toLocaleString('en-IN', { minimumFractionDigits: 2 })}`;
    if (reviewShipping) reviewShipping.textContent = `₹${shipping.toLocaleString('en-IN', { minimumFractionDigits: 2 })}`;
    if (reviewTax) reviewTax.textContent = `₹${tax.toLocaleString('en-IN', { minimumFractionDigits: 2 })}`;
    if (reviewTotal) reviewTotal.textContent = `₹${total.toLocaleString('en-IN', { minimumFractionDigits: 2 })}`;
}

// Clear Cart
function clearCart() {
    if (confirm('Are you sure you want to clear your cart?')) {
        cart.forEach(item => {
            const product = products.find(p => p.id === item.id);
            if (product) {
                product.stock += item.quantity;
            }
        });
        
        cart = [];
        localStorage.setItem('madhuCart', JSON.stringify(cart));
        localStorage.setItem('madhuProducts', JSON.stringify(products));
        
        displayCartItems();
        updateOrderSummary();
        updateCartCount();
        showToast('Cart cleared');
    }
}

// Proceed to Checkout
function proceedToCheckout() {
    const cartSection = document.querySelector('.cart-container');
    const checkoutForm = document.getElementById('checkoutForm');
    
    if (cartSection) cartSection.style.display = 'none';
    if (checkoutForm) checkoutForm.style.display = 'block';
    
    // Populate review items
    const reviewItems = document.getElementById('reviewItems');
    if (reviewItems) {
        reviewItems.innerHTML = cart.map(item => {
            const product = products.find(p => p.id === item.id);
            if (!product) return '';
            
            return `
                <div class="review-item">
                    <span>${product.name} × ${item.quantity}</span>
                    <span>₹${(product.price * item.quantity).toLocaleString('en-IN', { minimumFractionDigits: 2 })}</span>
                </div>
            `;
        }).join('');
    }
}

// Back to Cart
function backToCart() {
    const cartSection = document.querySelector('.cart-container');
    const checkoutForm = document.getElementById('checkoutForm');
    
    if (cartSection) cartSection.style.display = 'grid';
    if (checkoutForm) checkoutForm.style.display = 'none';
}

// Place Order
function placeOrder() {
    // Validate form
    const billingForm = document.getElementById('billingForm');
    if (!billingForm.checkValidity()) {
        showToast('Please fill in all required fields', 'error');
        billingForm.reportValidity();
        return;
    }
    
    if (!document.getElementById('agreeTerms').checked) {
        showToast('Please agree to the terms and conditions', 'error');
        return;
    }
    
    // Create order
    const orderId = 'ME-' + Date.now();
    const orderDate = new Date().toISOString().split('T')[0];
    
    // Calculate totals
    let subtotal = 0;
    const orderItems = cart.map(item => {
        const product = products.find(p => p.id === item.id);
        if (product) {
            subtotal += product.price * item.quantity;
            return {
                productId: product.id,
                sku: product.sku,
                name: product.name,
                quantity: item.quantity,
                price: product.price,
                total: product.price * item.quantity
            };
        }
        return null;
    }).filter(item => item !== null);
    
    const shipping = subtotal >= 5000 ? 0 : 200;
    const tax = subtotal * (18 / 100);
    const total = subtotal + shipping + tax;
    
    // Create order object
    const order = {
        id: orderId,
        date: orderDate,
        customer: {
            name: document.getElementById('billingName').value,
            phone: document.getElementById('billingPhone').value,
            email: document.getElementById('billingEmail').value,
            company: document.getElementById('billingCompany').value,
            address: document.getElementById('billingAddress').value,
            city: document.getElementById('billingCity').value,
            state: document.getElementById('billingState').value,
            pin: document.getElementById('billingPin').value,
            gst: document.getElementById('billingGST').value
        },
        shipping: document.getElementById('sameAsBilling').checked ? null : {
            address: document.getElementById('shippingAddress').value,
            city: document.getElementById('shippingCity').value,
            state: document.getElementById('shippingState').value,
            pin: document.getElementById('shippingPin').value,
            instructions: document.getElementById('shippingInstructions').value
        },
        items: orderItems,
        subtotal: subtotal,
        shipping: shipping,
        tax: tax,
        total: total,
        paymentMethod: document.querySelector('input[name="payment"]:checked').value,
        status: 'pending',
        notes: ''
    };
    
    // Save order
    orders.push(order);
    localStorage.setItem('madhuOrders', JSON.stringify(orders));
    
    // Create invoice
    createInvoice(order);
    
    // Clear cart
    cart = [];
    localStorage.setItem('madhuCart', JSON.stringify(cart));
    updateCartCount();
    
    // Show success modal
    showOrderSuccessModal(order);
}

// Create Invoice
function createInvoice(order) {
    const invoiceNo = 'INV-' + order.id.split('-')[1];
    const invoiceDate = new Date().toLocaleDateString('en-IN');
    const dueDate = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toLocaleDateString('en-IN');
    
    const invoice = {
        invoiceNo: invoiceNo,
        orderId: order.id,
        customer: order.customer,
        date: invoiceDate,
        dueDate: dueDate,
        items: order.items,
        subtotal: order.subtotal,
        shipping: order.shipping,
        tax: order.tax,
        total: order.total,
        status: 'unpaid',
        paidAmount: 0,
        balance: order.total
    };
    
    invoices.push(invoice);
    localStorage.setItem('madhuInvoices', JSON.stringify(invoices));
    
    return invoice;
}

// Show Order Success Modal
function showOrderSuccessModal(order) {
    const modal = document.getElementById('orderSuccessModal');
    const orderIdEl = document.getElementById('orderId');
    const orderTotalEl = document.getElementById('orderTotal');
    const downloadInvoiceBtn = document.getElementById('downloadInvoiceBtn');
    
    if (!modal || !orderIdEl || !orderTotalEl) return;
    
    orderIdEl.textContent = order.id;
    orderTotalEl.textContent = `₹${order.total.toLocaleString('en-IN', { minimumFractionDigits: 2 })}`;
    
    // Set download link for invoice
    if (downloadInvoiceBtn) {
        downloadInvoiceBtn.href = `invoice.html?order=${order.id}`;
    }
    
    modal.style.display = 'block';
    
    // Close modal
    modal.querySelector('.close-modal').addEventListener('click', () => {
        modal.style.display = 'none';
        window.location.href = 'dashboard.html';
    });
}

// Load Admin Panel
function loadAdminPanel() {
    // Tab switching
    document.querySelectorAll('.admin-nav a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const tabId = this.dataset.tab;
            switchTab(tabId);
        });
    });
    
    // Load dashboard stats
    updateDashboardStats();
    
    // Load products table
    loadProductsTable();
    
    // Load inventory table
    loadInventoryTable();
    
    // Load orders table
    loadOrdersTable();
    
    // Load enquiries table
    loadEnquiriesTable();
    
    // Load invoices table
    loadInvoicesTable();
    
    // Add product button
    document.getElementById('addProductBtn')?.addEventListener('click', showProductModal);
    
    // Save product button
    document.getElementById('saveProduct')?.addEventListener('click', saveProduct);
    
    // Charts
    if (typeof Chart !== 'undefined') {
        createCharts();
    }
}

// Switch Tab
function switchTab(tabId) {
    // Hide all tabs
    document.querySelectorAll('.admin-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    
    // Remove active class from all nav links
    document.querySelectorAll('.admin-nav a').forEach(link => {
        link.classList.remove('active');
    });
    
    // Show selected tab
    const selectedTab = document.getElementById(tabId);
    if (selectedTab) {
        selectedTab.classList.add('active');
    }
    
    // Add active class to clicked nav link
    const clickedLink = document.querySelector(`.admin-nav a[data-tab="${tabId}"]`);
    if (clickedLink) {
        clickedLink.classList.add('active');
    }
}

// Update Dashboard Stats
function updateDashboardStats() {
    const totalRevenue = orders.reduce((sum, order) => sum + order.total, 0);
    const totalOrders = orders.length;
    const totalProducts = products.length;
    const totalCustomers = [...new Set(orders.map(order => order.customer.email))].length;
    
    const revenueEl = document.getElementById('totalRevenue');
    const ordersEl = document.getElementById('totalOrders');
    const productsEl = document.getElementById('totalProducts');
    const customersEl = document.getElementById('totalCustomers');
    
    if (revenueEl) revenueEl.textContent = `₹${totalRevenue.toLocaleString('en-IN', { minimumFractionDigits: 2 })}`;
    if (ordersEl) ordersEl.textContent = totalOrders;
    if (productsEl) productsEl.textContent = totalProducts;
    if (customersEl) customersEl.textContent = totalCustomers;
    
    // Update badge counts
    const productCount = document.getElementById('productCount');
    const orderCount = document.getElementById('orderCount');
    const enquiryCount = document.getElementById('enquiryCount');
    
    if (productCount) productCount.textContent = products.length;
    if (orderCount) orderCount.textContent = orders.length;
    if (enquiryCount) enquiryCount.textContent = enquiries.length;
    
    // Load recent orders
    loadRecentOrders();
    
    // Load low stock items
    loadLowStockItems();
}

// Load Products Table
function loadProductsTable() {
    const tableBody = document.getElementById('productsTable');
    if (!tableBody) return;
    
    tableBody.innerHTML = products.map(product => `
        <tr>
            <td>${product.sku}</td>
            <td>
                <div class="product-cell">
                    <img src="${product.image}" alt="${product.name}" class="product-thumb">
                    <div>
                        <strong>${product.name}</strong>
                        <small>${product.description.substring(0, 50)}...</small>
                    </div>
                </div>
            </td>
            <td><span class="category-badge">${product.category}</span></td>
            <td>₹${product.price.toLocaleString()}</td>
            <td>
                <span class="stock-badge ${product.stock > product.minStock ? 'in-stock' : product.stock > 0 ? 'low-stock' : 'out-stock'}">
                    ${product.stock}
                </span>
            </td>
            <td>
                <span class="status-badge ${product.status === 'active' ? 'status-delivered' : 'status-cancelled'}">
                    ${product.status}
                </span>
            </td>
            <td>
                <div class="action-buttons">
                    <button class="action-btn view" title="View" onclick="viewProduct(${product.id})">
                        <i class="fas fa-eye"></i>
                    </button>
                    <button class="action-btn edit" title="Edit" onclick="editProduct(${product.id})">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button class="action-btn delete" title="Delete" onclick="deleteProduct(${product.id})">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </td>
        </tr>
    `).join('');
}

// Show Product Modal
function showProductModal(productId = null) {
    const modal = document.getElementById('productModal');
    const title = modal.querySelector('.modal-header h2');
    const form = document.getElementById('productForm');
    
    if (productId) {
        // Edit mode
        const product = products.find(p => p.id === productId);
        if (!product) return;
        
        title.innerHTML = '<i class="fas fa-edit"></i> Edit Product';
        form.dataset.mode = 'edit';
        form.dataset.productId = productId;
        
        // Fill form with product data
        document.getElementById('productName').value = product.name;
        document.getElementById('productSKU').value = product.sku;
        document.getElementById('productCategory').value = product.category;
        document.getElementById('productBrand').value = product.brand || '';
        document.getElementById('productCost').value = product.cost;
        document.getElementById('productPrice').value = product.price;
        document.getElementById('productTax').value = product.tax;
        document.getElementById('productStock').value = product.stock;
        document.getElementById('productMinStock').value = product.minStock;
        document.getElementById('productUnit').value = product.unit;
        document.getElementById('productDescription').value = product.description;
        document.getElementById('productSpecs').value = JSON.stringify(product.specs, null, 2);
        document.getElementById('productImage').value = product.image;
        document.querySelector(`input[name="productStatus"][value="${product.status}"]`).checked = true;
    } else {
        // Add mode
        title.innerHTML = '<i class="fas fa-plus"></i> Add New Product';
        form.dataset.mode = 'add';
        form.reset();
    }
    
    modal.style.display = 'block';
    
    // Close modal
    modal.querySelector('.close-modal').addEventListener('click', () => {
        modal.style.display = 'none';
    });
    
    document.getElementById('cancelProduct').addEventListener('click', () => {
        modal.style.display = 'none';
    });
}

// Save Product
function saveProduct() {
    const form = document.getElementById('productForm');
    const mode = form.dataset.mode;
    
    // Validate form
    if (!form.checkValidity()) {
        showToast('Please fill in all required fields', 'error');
        form.reportValidity();
        return;
    }
    
    const productData = {
        name: document.getElementById('productName').value,
        sku: document.getElementById('productSKU').value,
        category: document.getElementById('productCategory').value,
        brand: document.getElementById('productBrand').value,
        cost: parseFloat(document.getElementById('productCost').value),
        price: parseFloat(document.getElementById('productPrice').value),
        tax: parseFloat(document.getElementById('productTax').value),
        stock: parseInt(document.getElementById('productStock').value),
        minStock: parseInt(document.getElementById('productMinStock').value),
        unit: document.getElementById('productUnit').value,
        description: document.getElementById('productDescription').value,
        specs: JSON.parse(document.getElementById('productSpecs').value || '{}'),
        image: document.getElementById('productImage').value,
        status: document.querySelector('input[name="productStatus"]:checked').value,
        featured: false
    };
    
    if (mode === 'add') {
        // Add new product
        const newId = products.length > 0 ? Math.max(...products.map(p => p.id)) + 1 : 1;
        productData.id = newId;
        products.push(productData);
        showToast('Product added successfully');
    } else {
        // Edit existing product
        const productId = parseInt(form.dataset.productId);
        const index = products.findIndex(p => p.id === productId);
        if (index !== -1) {
            productData.id = productId;
            productData.featured = products[index].featured;
            products[index] = productData;
            showToast('Product updated successfully');
        }
    }
    
    localStorage.setItem('madhuProducts', JSON.stringify(products));
    
    // Update tables
    loadProductsTable();
    loadInventoryTable();
    updateDashboardStats();
    
    // Close modal
    document.getElementById('productModal').style.display = 'none';
}

// Delete Product
function deleteProduct(productId) {
    if (confirm('Are you sure you want to delete this product?')) {
        const index = products.findIndex(p => p.id === productId);
        if (index !== -1) {
            products.splice(index, 1);
            localStorage.setItem('madhuProducts', JSON.stringify(products));
            loadProductsTable();
            loadInventoryTable();
            updateDashboardStats();
            showToast('Product deleted successfully');
        }
    }
}

// Load Inventory Table
function loadInventoryTable() {
    const tableBody = document.getElementById('inventoryTable');
    const totalStockValue = document.getElementById('totalStockValue');
    const totalItems = document.getElementById('totalInventoryItems');
    const lowStockCount = document.getElementById('lowStockCount');
    const outOfStockCount = document.getElementById('outOfStockCount');
    
    if (!tableBody) return;
    
    let stockValue = 0;
    let lowStock = 0;
    let outOfStock = 0;
    
    tableBody.innerHTML = products.map(product => {
        const itemValue = product.cost * product.stock;
        stockValue += itemValue;
        
        if (product.stock === 0) outOfStock++;
        else if (product.stock <= product.minStock) lowStock++;
        
        return `
            <tr>
                <td>${product.sku}</td>
                <td>${product.name}</td>
                <td><span class="category-badge">${product.category}</span></td>
                <td>
                    <span class="stock-badge ${product.stock > product.minStock ? 'in-stock' : product.stock > 0 ? 'low-stock' : 'out-stock'}">
                        ${product.stock} ${product.unit}
                    </span>
                </td>
                <td>${product.minStock}</td>
                <td>₹${product.price.toLocaleString()}</td>
                <td>₹${itemValue.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</td>
                <td>
                    <span class="status-badge ${product.stock > product.minStock ? 'status-delivered' : product.stock > 0 ? 'status-pending' : 'status-cancelled'}">
                        ${product.stock > product.minStock ? 'Good' : product.stock > 0 ? 'Low' : 'Out'}
                    </span>
                </td>
                <td>
                    <button class="btn btn-small" onclick="updateStock(${product.id})">
                        <i class="fas fa-edit"></i> Update
                    </button>
                </td>
            </tr>
        `;
    }).join('');
    
    if (totalStockValue) totalStockValue.textContent = `₹${stockValue.toLocaleString('en-IN', { minimumFractionDigits: 2 })}`;
    if (totalItems) totalItems.textContent = products.length;
    if (lowStockCount) lowStockCount.textContent = lowStock;
    if (outOfStockCount) outOfStockCount.textContent = outOfStock;
}

// Load Orders Table
function loadOrdersTable() {
    const tableBody = document.getElementById('ordersTable');
    if (!tableBody) return;
    
    tableBody.innerHTML = orders.map(order => `
        <tr>
            <td><strong>${order.id}</strong></td>
            <td>
                <div>
                    <strong>${order.customer.name}</strong><br>
                    <small>${order.customer.email}</small>
                </div>
            </td>
            <td>${order.date}</td>
            <td>${order.items.length} items</td>
            <td>₹${order.total.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</td>
            <td>${order.paymentMethod.toUpperCase()}</td>
            <td>
                <span class="status-badge ${getStatusClass(order.status)}">
                    ${order.status}
                </span>
            </td>
            <td>
                <div class="action-buttons">
                    <button class="action-btn view" title="View" onclick="viewOrder('${order.id}')">
                        <i class="fas fa-eye"></i>
                    </button>
                    <button class="action-btn edit" title="Update Status" onclick="updateOrderStatus('${order.id}')">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button class="action-btn delete" title="Delete" onclick="deleteOrder('${order.id}')">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </td>
        </tr>
    `).join('');
}

// Load Recent Orders for Dashboard
function loadRecentOrders() {
    const tableBody = document.getElementById('recentOrders');
    if (!tableBody) return;
    
    const recentOrders = orders.slice(0, 5);
    
    tableBody.innerHTML = recentOrders.map(order => `
        <tr>
            <td><strong>${order.id}</strong></td>
            <td>${order.customer.name}</td>
            <td>${order.date}</td>
            <td>₹${order.total.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</td>
            <td>
                <span class="status-badge ${getStatusClass(order.status)}">
                    ${order.status}
                </span>
            </td>
            <td>
                <button class="btn btn-small" onclick="viewOrder('${order.id}')">View</button>
            </td>
        </tr>
    `).join('');
}

// Load Low Stock Items
function loadLowStockItems() {
    const tableBody = document.getElementById('lowStockItems');
    if (!tableBody) return;
    
    const lowStockProducts = products.filter(p => p.stock <= p.minStock && p.stock > 0).slice(0, 5);
    
    tableBody.innerHTML = lowStockProducts.map(product => `
        <tr>
            <td>${product.name}</td>
            <td>${product.sku}</td>
            <td>${product.stock}</td>
            <td>${product.minStock}</td>
            <td>
                <span class="status-badge status-pending">
                    Low Stock
                </span>
            </td>
            <td>
                <button class="btn btn-small" onclick="updateStock(${product.id})">
                    <i class="fas fa-plus"></i> Restock
                </button>
            </td>
        </tr>
    `).join('');
}

// Load Enquiries Table
function loadEnquiriesTable() {
    const tableBody = document.getElementById('enquiriesTable');
    if (!tableBody) return;
    
    tableBody.innerHTML = enquiries.map(enquiry => `
        <tr>
            <td>${enquiry.id}</td>
            <td>${enquiry.name}</td>
            <td>
                <div>
                    <div>${enquiry.phone}</div>
                    <small>${enquiry.email}</small>
                </div>
            </td>
            <td>${enquiry.subject}</td>
            <td>${enquiry.date}</td>
            <td>
                <span class="status-badge ${enquiry.status === 'new' ? 'status-pending' : enquiry.status === 'responded' ? 'status-delivered' : 'status-cancelled'}">
                    ${enquiry.status}
                </span>
            </td>
            <td>
                <button class="btn btn-small" onclick="viewEnquiry(${enquiry.id})">
                    <i class="fas fa-eye"></i> View
                </button>
            </td>
        </tr>
    `).join('');
}

// Load Invoices Table
function loadInvoicesTable() {
    const tableBody = document.getElementById('invoicesTable');
    if (!tableBody) return;
    
    tableBody.innerHTML = invoices.map(invoice => `
        <tr>
            <td><strong>${invoice.invoiceNo}</strong></td>
            <td>${invoice.orderId}</td>
            <td>${invoice.customer.name}</td>
            <td>${invoice.date}</td>
            <td>₹${invoice.total.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</td>
            <td>
                <span class="status-badge ${invoice.status === 'paid' ? 'status-delivered' : 'status-pending'}">
                    ${invoice.status}
                </span>
            </td>
            <td>
                <div class="action-buttons">
                    <button class="action-btn view" title="View" onclick="viewInvoice('${invoice.invoiceNo}')">
                        <i class="fas fa-eye"></i>
                    </button>
                    <button class="action-btn edit" title="Download" onclick="downloadInvoice('${invoice.invoiceNo}')">
                        <i class="fas fa-download"></i>
                    </button>
                    <button class="action-btn delete" title="Delete" onclick="deleteInvoice('${invoice.invoiceNo}')">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </td>
        </tr>
    `).join('');
}

// Create Charts
function createCharts() {
    // Revenue Chart
    const revenueCtx = document.getElementById('revenueChart')?.getContext('2d');
    if (revenueCtx) {
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
        const revenueData = [65000, 81000, 72000, 89000, 93000, 105000];
        
        new Chart(revenueCtx, {
            type: 'line',
            data: {
                labels: months,
                datasets: [{
                    label: 'Revenue',
                    data: revenueData,
                    borderColor: '#3498db',
                    backgroundColor: 'rgba(52, 152, 219, 0.1)',
                    borderWidth: 2,
                    fill: true,
                    tension: 0.4
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            callback: function(value) {
                                return '₹' + value.toLocaleString();
                            }
                        }
                    }
                }
            }
        });
    }
    
    // Sales Chart
    const salesCtx = document.getElementById('salesChart')?.getContext('2d');
    if (salesCtx) {
        const topProducts = products.slice(0, 5);
        
        new Chart(salesCtx, {
            type: 'bar',
            data: {
                labels: topProducts.map(p => p.name.substring(0, 15) + '...'),
                datasets: [{
                    label: 'Sales',
                    data: topProducts.map(p => Math.floor(Math.random() * 50) + 10),
                    backgroundColor: [
                        '#e74c3c',
                        '#3498db',
                        '#2ecc71',
                        '#f39c12',
                        '#9b59b6'
                    ],
                    borderWidth: 0
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }
}

// Helper Functions
function getStatusClass(status) {
    switch(status) {
        case 'pending': return 'status-pending';
        case 'processing': return 'status-processing';
        case 'delivered': return 'status-delivered';
        case 'cancelled': return 'status-cancelled';
        default: return 'status-pending';
    }
}

// Load Dashboard
function loadDashboard() {
    // Load customer stats
    const totalOrders = orders.length;
    const pendingOrders = orders.filter(o => o.status === 'pending').length;
    const totalSpent = orders.reduce((sum, order) => sum + order.total, 0);
    const activeEnquiries = enquiries.filter(e => e.status === 'new' || e.status === 'pending').length;
    
    document.getElementById('totalOrdersCount').textContent = totalOrders;
    document.getElementById('pendingOrdersCount').textContent = pendingOrders;
    document.getElementById('totalSpent').textContent = `₹${totalSpent.toLocaleString('en-IN', { minimumFractionDigits: 2 })}`;
    document.getElementById('activeEnquiries').textContent = activeEnquiries;
    
    // Load recent orders
    loadCustomerRecentOrders();
    
    // Load recent invoices
    loadCustomerRecentInvoices();
    
    // Load recent enquiries
    loadCustomerRecentEnquiries();
}

// Setup Event Listeners
function setupEventListeners() {
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            navMenu.style.display = navMenu.style.display === 'block' ? 'none' : 'block';
        });
    }
    
    // Quick cart toggle
    const cartIcon = document.querySelector('.cart-icon');
    const quickCart = document.getElementById('quickCart');
    const closeCart = document.querySelector('.close-cart');
    
    if (cartIcon && quickCart) {
        cartIcon.addEventListener('click', (e) => {
            e.preventDefault();
            quickCart.classList.add('active');
        });
    }
    
    if (closeCart && quickCart) {
        closeCart.addEventListener('click', () => {
            quickCart.classList.remove('active');
        });
    }
    
    // Inquiry form submission
    const enquiryForm = document.getElementById('enquiryForm');
    if (enquiryForm) {
        enquiryForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const enquiry = {
                id: Date.now(),
                name: document.getElementById('inqName').value,
                phone: document.getElementById('inqPhone').value,
                email: document.getElementById('inqEmail').value,
                subject: document.getElementById('inqSubject').value,
                message: document.getElementById('inqMessage').value,
                product: document.getElementById('inqProduct').value,
                quantity: document.getElementById('inqQuantity').value,
                date: new Date().toLocaleDateString('en-IN'),
                status: 'new'
            };
            
            enquiries.push(enquiry);
            localStorage.setItem('madhuEnquiries', JSON.stringify(enquiries));
            
            showToast('Enquiry submitted successfully! We will contact you soon.');
            enquiryForm.reset();
        });
    }
    
    // Price range slider
    const priceRange = document.getElementById('priceRange');
    const priceRangeValue = document.getElementById('priceRangeValue');
    
    if (priceRange && priceRangeValue) {
        priceRange.addEventListener('input', function() {
            const value = parseInt(this.value);
            priceRangeValue.textContent = `₹${value.toLocaleString()}`;
        });
    }
}

// Global functions for admin actions (called from onclick)
window.viewProduct = function(id) {
    const product = products.find(p => p.id === id);
    if (product) {
        alert(`Product: ${product.name}\nSKU: ${product.sku}\nPrice: ₹${product.price}\nStock: ${product.stock}\nStatus: ${product.status}`);
    }
};

window.editProduct = function(id) {
    showProductModal(id);
};

window.updateStock = function(id) {
    const newStock = prompt('Enter new stock quantity:');
    if (newStock !== null && !isNaN(newStock)) {
        const product = products.find(p => p.id === id);
        if (product) {
            product.stock = parseInt(newStock);
            localStorage.setItem('madhuProducts', JSON.stringify(products));
            loadProductsTable();
            loadInventoryTable();
            updateDashboardStats();
            showToast('Stock updated successfully');
        }
    }
};

window.viewOrder = function(orderId) {
    const order = orders.find(o => o.id === orderId);
    if (order) {
        const items = order.items.map(item => `${item.name} × ${item.quantity} = ₹${item.total}`).join('\n');
        alert(`Order: ${order.id}\nCustomer: ${order.customer.name}\nDate: ${order.date}\nStatus: ${order.status}\nTotal: ₹${order.total}\n\nItems:\n${items}`);
    }
};

window.updateOrderStatus = function(orderId) {
    const newStatus = prompt('Enter new status (pending/processing/delivered/cancelled):');
    if (newStatus && ['pending', 'processing', 'delivered', 'cancelled'].includes(newStatus)) {
        const order = orders.find(o => o.id === orderId);
        if (order) {
            order.status = newStatus;
            localStorage.setItem('madhuOrders', JSON.stringify(orders));
            loadOrdersTable();
            loadRecentOrders();
            showToast('Order status updated');
        }
    }
};

window.deleteOrder = function(orderId) {
    if (confirm('Are you sure you want to delete this order?')) {
        const index = orders.findIndex(o => o.id === orderId);
        if (index !== -1) {
            orders.splice(index, 1);
            localStorage.setItem('madhuOrders', JSON.stringify(orders));
            loadOrdersTable();
            updateDashboardStats();
            showToast('Order deleted');
        }
    }
};

window.viewEnquiry = function(id) {
    const enquiry = enquiries.find(e => e.id === id);
    if (enquiry) {
        const response = prompt(`Enquiry from: ${enquiry.name}\nPhone: ${enquiry.phone}\n\nMessage: ${enquiry.message}\n\nEnter your response:`);
        if (response !== null) {
            enquiry.status = 'responded';
            enquiry.response = response;
            localStorage.setItem('madhuEnquiries', JSON.stringify(enquiries));
            loadEnquiriesTable();
            showToast('Response saved');
        }
    }
};

window.viewInvoice = function(invoiceNo) {
    const invoice = invoices.find(i => i.invoiceNo === invoiceNo);
    if (invoice) {
        const items = invoice.items.map(item => `${item.name} × ${item.quantity} = ₹${item.total}`).join('\n');
        alert(`Invoice: ${invoice.invoiceNo}\nOrder: ${invoice.orderId}\nCustomer: ${invoice.customer.name}\nDate: ${invoice.date}\nStatus: ${invoice.status}\nTotal: ₹${invoice.total}\n\nItems:\n${items}`);
    }
};

window.downloadInvoice = function(invoiceNo) {
    const invoice = invoices.find(i => i.invoiceNo === invoiceNo);
    if (invoice) {
        // In a real app, this would generate a PDF
        // For demo, we'll create a text file
        const invoiceText = `
            MADHU ENTERPRISES
            =================
            Invoice: ${invoice.invoiceNo}
            Date: ${invoice.date}
            Due Date: ${invoice.dueDate}
            
            Bill To:
            ${invoice.customer.name}
            ${invoice.customer.address}
            ${invoice.customer.city}, ${invoice.customer.state} - ${invoice.customer.pin}
            GST: ${invoice.customer.gst || 'N/A'}
            
            Items:
            ${invoice.items.map(item => `${item.name.padEnd(30)} ${item.quantity.toString().padStart(3)} × ₹${item.price.toFixed(2).padStart(8)} = ₹${item.total.toFixed(2).padStart(10)}`).join('\n')}
            
            Subtotal: ₹${invoice.subtotal.toFixed(2)}
            Shipping: ₹${invoice.shipping.toFixed(2)}
            Tax (18%): ₹${invoice.tax.toFixed(2)}
            Total: ₹${invoice.total.toFixed(2)}
            
            Status: ${invoice.status}
            Balance Due: ₹${invoice.balance.toFixed(2)}
            
            Thank you for your business!
        `;
        
        const blob = new Blob([invoiceText], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `invoice-${invoice.invoiceNo}.txt`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        
        showToast('Invoice downloaded');
    }
};

window.deleteInvoice = function(invoiceNo) {
    if (confirm('Are you sure you want to delete this invoice?')) {
        const index = invoices.findIndex(i => i.invoiceNo === invoiceNo);
        if (index !== -1) {
            invoices.splice(index, 1);
            localStorage.setItem('madhuInvoices', JSON.stringify(invoices));
            loadInvoicesTable();
            showToast('Invoice deleted');
        }
    }
};

// Customer Dashboard Functions
function loadCustomerRecentOrders() {
    const tableBody = document.getElementById('recentOrdersTable');
    const noOrders = document.getElementById('noOrders');
    
    if (!tableBody) return;
    
    if (orders.length === 0) {
        if (noOrders) noOrders.style.display = 'block';
        return;
    }
    
    if (noOrders) noOrders.style.display = 'none';
    
    const customerOrders = orders.slice(0, 5);
    
    tableBody.innerHTML = customerOrders.map(order => `
        <tr>
            <td><strong>${order.id}</strong></td>
            <td>${order.date}</td>
            <td>${order.items.length} items</td>
            <td>₹${order.total.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</td>
            <td>
                <span class="status-badge ${getStatusClass(order.status)}">
                    ${order.status}
                </span>
            </td>
            <td>
                <button class="btn btn-small" onclick="viewOrderDetails('${order.id}')">
                    View Details
                </button>
            </td>
        </tr>
    `).join('');
}

function loadCustomerRecentInvoices() {
    const container = document.getElementById('recentInvoices');
    const noInvoices = document.getElementById('noInvoices');
    
    if (!container) return;
    
    if (invoices.length === 0) {
        if (noInvoices) noInvoices.style.display = 'block';
        return;
    }
    
    if (noInvoices) noInvoices.style.display = 'none';
    
    const customerInvoices = invoices.slice(0, 4);
    
    container.innerHTML = customerInvoices.map(invoice => `
        <div class="invoice-card">
            <div class="invoice-card-header">
                <h4>${invoice.invoiceNo}</h4>
                <span class="status-badge ${invoice.status === 'paid' ? 'status-delivered' : 'status-pending'}">
                    ${invoice.status}
                </span>
            </div>
            <div class="invoice-card-body">
                <p>
                    <span>Order ID:</span>
                    <span>${invoice.orderId}</span>
                </p>
                <p>
                    <span>Date:</span>
                    <span>${invoice.date}</span>
                </p>
                <p>
                    <span>Amount:</span>
                    <span><strong>₹${invoice.total.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</strong></span>
                </p>
            </div>
            <div class="invoice-card-footer">
                <button class="btn btn-small btn-primary" onclick="downloadInvoice('${invoice.invoiceNo}')">
                    Download
                </button>
            </div>
        </div>
    `).join('');
}

function loadCustomerRecentEnquiries() {
    const container = document.getElementById('recentEnquiries');
    const noEnquiries = document.getElementById('noEnquiries');
    
    if (!container) return;
    
    if (enquiries.length === 0) {
        if (noEnquiries) noEnquiries.style.display = 'block';
        return;
    }
    
    if (noEnquiries) noEnquiries.style.display = 'none';
    
    const customerEnquiries = enquiries.slice(0, 3);
    
    container.innerHTML = customerEnquiries.map(enquiry => `
        <div class="enquiry-item">
            <div class="enquiry-header">
                <h4>${enquiry.subject}</h4>
                <span class="enquiry-status ${enquiry.status}">${enquiry.status}</span>
            </div>
            <p>${enquiry.message.substring(0, 100)}...</p>
            <div class="enquiry-footer">
                <small>Submitted: ${enquiry.date}</small>
            </div>
        </div>
    `).join('');
}

window.viewOrderDetails = function(orderId) {
    const order = orders.find(o => o.id === orderId);
    if (!order) return;
    
    const modal = document.getElementById('orderDetailsModal');
    const content = document.getElementById('orderDetailsContent');
    
    if (!modal || !content) return;
    
    const itemsHtml = order.items.map(item => `
        <div class="order-item">
            <div class="order-item-name">${item.name}</div>
            <div class="order-item-qty">${item.quantity} × ₹${item.price.toLocaleString()}</div>
            <div class="order-item-total">₹${item.total.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</div>
        </div>
    `).join('');
    
    content.innerHTML = `
        <div class="order-details">
            <div class="order-info">
                <p><strong>Order ID:</strong> ${order.id}</p>
                <p><strong>Date:</strong> ${order.date}</p>
                <p><strong>Status:</strong> <span class="status-badge ${getStatusClass(order.status)}">${order.status}</span></p>
                <p><strong>Payment Method:</strong> ${order.paymentMethod.toUpperCase()}</p>
            </div>
            
            <div class="customer-info">
                <h4>Customer Information</h4>
                <p>${order.customer.name}</p>
                <p>${order.customer.phone}</p>
                <p>${order.customer.email}</p>
                <p>${order.customer.address}</p>
                <p>${order.customer.city}, ${order.customer.state} - ${order.customer.pin}</p>
            </div>
            
            <div class="order-items">
                <h4>Order Items</h4>
                ${itemsHtml}
            </div>
            
            <div class="order-totals">
                <p><span>Subtotal:</span> <span>₹${order.subtotal.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</span></p>
                <p><span>Shipping:</span> <span>₹${order.shipping.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</span></p>
                <p><span>Tax:</span> <span>₹${order.tax.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</span></p>
                <p class="total"><span>Total:</span> <span>₹${order.total.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</span></p>
            </div>
        </div>
    `;
    
    modal.style.display = 'block';
    
    // Close modal
    modal.querySelector('.close-modal').addEventListener('click', () => {
        modal.style.display = 'none';
    });
    
    // Download invoice button
    document.getElementById('downloadOrderInvoice')?.addEventListener('click', () => {
        const invoice = invoices.find(i => i.orderId === orderId);
        if (invoice) {
            downloadInvoice(invoice.invoiceNo);
        }
    });
};