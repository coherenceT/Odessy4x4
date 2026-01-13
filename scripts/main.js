/* =========================================
   1. DATA SOURCE
   ========================================= */
const products = [
    {
        id: 1,
        name: "Odyssey Adventure Bumper - Front",
        category: "bumpers",
        brand: "ford",
        price: 18500,
        image: "assets/images/Adventure Bumper - Front.jpg",
        description: "Heavy duty steel front bumper with winch plate."
    },
    {
        id: 2,
        name: "Odyssey Stealth Bumper - Rear",
        category: "bumpers",
        brand: "toyota",
        price: 16500,
        image: "assets/images/Odyssey Stealth Bumper - Rear.jpg",
        description: "High clearance rear bumper with swing arm capability."
    },
    {
        id: 3,
        name: "Expedition Roof Rack",
        category: "roof-racks",
        brand: "ford",
        price: 12000,
        image: "assets/images/Expedition Roof Rack.jpg",
        description: "Aluminum low-profile roof rack for maximum storage."
    },
    {
        id: 4,
        name: "Heavy Duty Rock Sliders",
        category: "rock-sliders",
        brand: "isuzu",
        price: 8500,
        image: "assets/images/Heavy Duty Rock Sliders.jpg",
        description: "Protect your sill panels with these robust sliders."
    },
    {
        id: 5,
        name: "Odyssey Drawer System",
        category: "drawer-systems",
        brand: "universal",
        price: 14500,
        image: "assets/images/Odyssey Drawer System.jpg",
        description: "Secure storage solution with carpeted finish."
    },
    {
        id: 6,
        name: "Fridge Slide - 60L",
        category: "fridge-slides",
        brand: "universal",
        price: 3500,
        image: "assets/images/Fridge Slide - 60L.jpg",
        description: "Easy access to your fridge with heavy duty slides."
    }
];

const brands = [
    { name: "Ford", logo: "fa-car", id: "ford" },
    { name: "Toyota", logo: "fa-car", id: "toyota" },
    { name: "Isuzu", logo: "fa-car", id: "isuzu" },
    { name: "Jeep", logo: "fa-car", id: "jeep" }
];

/* =========================================
   2. STATE MANAGEMENT
   ========================================= */
let cart = JSON.parse(localStorage.getItem('odyssey_cart')) || [];
let wishlist = JSON.parse(localStorage.getItem('odyssey_wishlist')) || [];
let currentCategory = 'all';
let currentBrand = 'all';

/* =========================================
   3. DOM ELEMENTS
   ========================================= */
let productGrid;
let cartCountElement;

/* =========================================
   4. RENDER FUNCTIONS
   ========================================= */
function init() {
    // Get DOM elements after page load
    productGrid = document.querySelector('.grid');
    cartCountElement = document.getElementById('cart-count');

    renderProducts(products);
    updateCartCount();
    setupEventListeners();
}

function renderProducts(items) {
    if (!productGrid) return;

    productGrid.innerHTML = items.map(product => `
        <div class="product-card">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-info">
                <span class="product-category">${formatCategory(product.category)}</span>
                <h3 class="product-title">${product.name}</h3>
                <p class="product-price">R ${product.price.toLocaleString()}</p>
                <button class="btn btn-primary btn-block" onclick="addToCart(${product.id})">
                    ADD TO CART
                </button>
            </div>
        </div>
    `).join('');
}

function formatCategory(cat) {
    return cat.replace('-', ' ').toUpperCase();
}

/* =========================================
   5. FILTERING
   ========================================= */
function filterProducts(category = 'all', brand = 'all') {
    let filtered = products;

    if (category !== 'all') {
        filtered = filtered.filter(p => p.category === category);
    }
    if (brand !== 'all') {
        filtered = filtered.filter(p => p.brand === brand || p.brand === 'universal');
    }

    renderProducts(filtered);
}

// Global hook for HTML onclicks if needed, though listeners are better
window.filterByBrand = (brandId) => {
    currentBrand = brandId;
    filterProducts(currentCategory, currentBrand);
    // Scroll to products
    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
};

/* =========================================
   7. CART ACTIONS
   ========================================= */
window.addToCart = (id) => {
    const product = products.find(p => p.id === id);
    if (product) {
        // Check if product already in cart
        const existingItem = cart.find(item => item.id === id);

        if (existingItem) {
            // Increment quantity
            existingItem.quantity = (existingItem.quantity || 1) + 1;
        } else {
            // Add new item with quantity 1
            cart.push({ ...product, quantity: 1 });
        }

        localStorage.setItem('odyssey_cart', JSON.stringify(cart));
        updateCartCount();
        showToast(`${product.name} added to cart!`, 'success');
    }
};

window.toggleWishlist = (id) => {
    const index = wishlist.indexOf(id);
    if (index === -1) {
        wishlist.push(id);
    } else {
        wishlist.splice(index, 1);
    }
    localStorage.setItem('odyssey_wishlist', JSON.stringify(wishlist));
    renderProducts(products); // Re-render to update heart icon
};

function isInWishlist(id) {
    return wishlist.includes(id);
}

function updateCartCount() {
    if (cartCountElement) {
        const totalItems = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
        cartCountElement.innerText = totalItems;
    }
}

function setupEventListeners() {
    // Brand Dropdown clicks
    document.querySelectorAll('.dropdown-item').forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const brandText = item.innerText.trim().toLowerCase();
            window.filterByBrand(brandText);
        });
    });
}

// Start
document.addEventListener('DOMContentLoaded', () => {
    init();
    startHeroSlider();

    // Mobile Menu Toggle with Animation
    const mobileBtn = document.querySelector('.mobile-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (mobileBtn && navMenu) {
        mobileBtn.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            mobileBtn.classList.toggle('active');
            document.body.classList.toggle('menu-open');
        });

        // Close menu when clicking on a link
        navMenu.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                mobileBtn.classList.remove('active');
                document.body.classList.remove('menu-open');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navMenu.contains(e.target) && !mobileBtn.contains(e.target) && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                mobileBtn.classList.remove('active');
                document.body.classList.remove('menu-open');
            }
        });
    }

    // Popup Logic - Lead Gen
    setTimeout(() => {
        if (!localStorage.getItem('lead_modal_shown')) {
            openModal('lead-modal');
            localStorage.setItem('lead_modal_shown', 'true');
        }
    }, 10000); // Show after 10 seconds
});

/* =========================================
   8. CART FUNCTIONS
   ========================================= */
window.openCart = () => {
    renderCart();
    document.getElementById('cart-modal').style.display = 'block';
};

window.closeCart = () => {
    document.getElementById('cart-modal').style.display = 'none';
};

function renderCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<div class="cart-empty"><i class="fas fa-shopping-cart" style="font-size: 3rem; margin-bottom: 15px; color: #ddd;"></i><p>Your cart is empty</p></div>';
        cartTotalElement.innerText = 'R 0';
        return;
    }

    cartItemsContainer.innerHTML = cart.map((item, index) => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}">
            <div class="cart-item-info">
                <div class="cart-item-title">${item.name}</div>
                <div class="cart-item-price">R ${item.price.toLocaleString()}</div>
                <div class="cart-item-qty">
                    <button class="qty-btn" onclick="updateQuantity(${index}, -1)">-</button>
                    <span class="qty-display">${item.quantity || 1}</span>
                    <button class="qty-btn" onclick="updateQuantity(${index}, 1)">+</button>
                </div>
            </div>
            <button class="cart-item-remove" onclick="removeFromCart(${index})">
                <i class="fas fa-trash"></i>
            </button>
        </div>
    `).join('');

    const total = cart.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0);
    cartTotalElement.innerText = `R ${total.toLocaleString()}`;
}

window.removeFromCart = (index) => {
    cart.splice(index, 1);
    localStorage.setItem('odyssey_cart', JSON.stringify(cart));
    updateCartCount();
    renderCart();
};

window.checkout = () => {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }

    const total = cart.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0);
    const message = `Hi! I'd like to purchase the following items:\n\n${cart.map(item => `- ${item.name} x${item.quantity || 1} (R ${(item.price * (item.quantity || 1)).toLocaleString()})`).join('\n')}\n\nTotal: R ${total.toLocaleString()}`;
    const whatsappUrl = `https://wa.me/27794030817?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
};

/* =========================================
   9. FILTER FUNCTIONS
   ========================================= */
let currentFilter = 'all';

window.filterProducts = (category) => {
    currentFilter = category;

    // Update active button
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');

    // Filter and render products
    if (category === 'all') {
        renderProducts(products);
    } else {
        const filtered = products.filter(p => p.category === category);
        renderProducts(filtered);
    }
};


/* =========================================
   7. MODAL LOGIC
   ========================================= */
window.openModal = (modalId) => {
    document.getElementById(modalId).style.display = 'block';
}

window.closeModal = (modalId) => {
    document.getElementById(modalId).style.display = 'none';
}

// Close when clicking outside
window.onclick = (event) => {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
    }
}

// Handle Form Submits (Mock)
document.getElementById('registration-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Registration Successful! Redirecting to checkout...');
    closeModal('register-modal');
    // Here you would proceed to checkout
});

document.getElementById('lead-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Welcome to the Odyssey Family!');
    closeModal('lead-modal');
});

/* =========================================
   2. HERO SLIDER
   ========================================= */
const heroImages = [
    'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=1920&q=80', // Off-road vehicle in desert
    'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1920&q=80', // White 4x4 truck
    'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1920&q=80'  // Adventure vehicle on mountain
];

let currentSlide = 0;

function startHeroSlider() {
    const slider = document.querySelector('.hero-slider');
    if (!slider) return;

    // Create slides
    heroImages.forEach((img, index) => {
        const slide = document.createElement('div');
        slide.className = 'slide';
        slide.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('${img}')`;
        slide.style.opacity = index === 0 ? '1' : '0';
        slider.appendChild(slide);
    });

    const slides = document.querySelectorAll('.hero-slider .slide'); // Select the newly created slides

    setInterval(() => {
        slides[currentSlide].style.opacity = '0';
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].style.opacity = '1';
    }, 5000); // Change every 5 seconds
}

/* =========================================
   10. TOAST NOTIFICATIONS
   ========================================= */
function showToast(message, type = 'success') {
    // Create toast container if it doesn't exist
    let toastContainer = document.querySelector('.toast-container');
    if (!toastContainer) {
        toastContainer = document.createElement('div');
        toastContainer.className = 'toast-container';
        document.body.appendChild(toastContainer);
    }

    // Create toast element
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;

    // Add icon based on type
    const icon = type === 'success' ? '✓' : 'ℹ';

    toast.innerHTML = `
        <div class="toast-icon">${icon}</div>
        <div class="toast-message">${message}</div>
    `;

    // Add to container
    toastContainer.appendChild(toast);

    // Trigger animation
    setTimeout(() => toast.classList.add('show'), 10);

    // Remove after 3 seconds
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

/* Update quantity in cart */
window.updateQuantity = (index, change) => {
    const item = cart[index];
    if (!item) return;

    const newQuantity = (item.quantity || 1) + change;

    if (newQuantity <= 0) {
        // Remove item if quantity becomes 0
        removeFromCart(index);
    } else {
        item.quantity = newQuantity;
        localStorage.setItem('odyssey_cart', JSON.stringify(cart));
        updateCartCount();
        renderCart();
    }
};
