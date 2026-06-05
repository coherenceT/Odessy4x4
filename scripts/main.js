/* =========================================
   1. DATA SOURCE (PREMIUM LIGHT THEME REDESIGN)
   ========================================= */
const products = [
    // --- FRONT BUMPERS (Premium: Expedition Front Bumper) ---
    {
        id: 25,
        name: "Expedition Front Bumper",
        category: "front-bumpers",
        brand: "universal",
        price: 20500,
        image: "assets/images/bull-bar-showcase.webp",
        status: "in-stock",
        partNumber: "OD-FB-UN25",
        description: "Ultimate expedition-grade front bumper with maximum protection and functionality across double-cab platforms.",
        features: ["Maximum protection wrap-around bars", "Multiple auxiliary light mounting points", "Heavy duty winch mount", "Integrated skid plate", "Premium scratch-resistant finish"],
        specifications: { material: "4mm Steel", weight: "55kg", finish: "Black Powder Coat", warranty: "3 Years" }
    },

    // --- REAR BUMPERS (Premium: Expedition Rear Bumper System) ---
    {
        id: 27,
        name: "Expedition Rear Bumper System",
        category: "rear-bumpers",
        brand: "universal",
        price: 22500,
        image: "assets/images/Odyssey Stealth Bumper - Rear.webp",
        status: "in-stock",
        partNumber: "OD-RB-UN27",
        description: "Complete expedition rear bumper system with heavy tire carrier, modular storage, and recovery gear points.",
        features: ["Heavy dual locking swing carriers", "Modular gear panel integration", "Integrated recovery shackle brackets", "Hi-lift jack points", "Anti-rattle toggle latches"],
        specifications: { material: "3mm Steel", weight: "70kg", finish: "Black Powder Coat", warranty: "3 Years" }
    },

    // --- ROCK SLIDERS (Premium: Extreme Rock Sliders) ---
    {
        id: 29,
        name: "Extreme Rock Sliders - Heavy Duty",
        category: "rock-sliders",
        brand: "universal",
        price: 11500,
        image: "assets/images/Heavy Duty Rock Sliders.webp",
        status: "out-of-stock",
        partNumber: "OD-RS-UN29",
        description: "Extreme duty heavy wall rock sliders designed for the most demanding technical rock crawling terrains.",
        features: ["80x80mm heavy wall tube construction", "Chassis-wrapped brackets", "Dimpled step plates for grip", "Integrated high-lift jack points", "Heavy-duty anti-slip plates"],
        specifications: { material: "Steel Tube", tubeSize: "80x80mm", finish: "Black Powder Coat", warranty: "Lifetime" }
    },

    // --- FRIDGE SLIDES ---
    {
        id: 31,
        name: "Premium Odyssey Fridge Slide - 60L",
        category: "fridge-slides",
        brand: "universal",
        price: 3800,
        image: "assets/images/Fridge Slide - 60L.webp",
        status: "in-stock",
        partNumber: "OD-FS-UN31",
        description: "Heavy-duty lock-in lock-out dual runner fridge slide rated up to 120kg, perfect for 60L and larger camping fridges.",
        features: ["Heavy duty lock-in and lock-out slides", "Premium sealed bearing rollers", "Tie-down strap slots", "Rigid folded sheet design", "120kg capacity load rating"],
        specifications: { material: "3mm CNC Aluminum / Steel", capacity: "120kg", lockType: "Dual Lever Lock", warranty: "2 Years" }
    },

    // --- DRAWER SYSTEMS (Premium: Odyssey Drawer System) ---
    {
        id: 41,
        name: "Odyssey Drawer System",
        category: "drawer-systems",
        brand: "universal",
        price: 16500,
        image: "offroad_accessories/Drawer System.png",
        status: "in-stock",
        partNumber: "OD-DS-UN41",
        description: "Ergonomic drawer system that fits your truck bed, keeping tool and overlanding gear dry and organized.",
        features: ["Weatherproof storage boxes", "Heavy-duty HDPE materials", "Heavy capacity loads up to 900kg on top deck", "Steel frame sub-assembly", "Lockable storage protection"],
        specifications: { material: "HDPE & Steel", weight: "95kg", loadCapacity: "900kg", warranty: "3 Years" }
    },

    // --- ROLL BARS ---
    {
        id: 40,
        name: "Odyssey Roll Bar",
        category: "accessories",
        brand: "universal",
        price: 11500,
        image: "offroad_accessories/Adventure Roll Bar.png",
        status: "in-stock",
        partNumber: "OD-RB-UN40",
        description: "Heavy duty steel roll bar designed to secure gear and add structural integrity to your load bed.",
        features: ["Premium quality carbon steel", "Dual utility light mount brackets", "Modular bolt-on design", "Textured matte powder-coated finish", "Chassis-integrated load support points"],
        specifications: { material: "Carbon Steel", weight: "24kg", finish: "Textured Powder Coat", warranty: "2 Years" }
    },

    // --- CAMPING & OVERLAND GEAR ---
    {
        id: 46,
        name: "Odyssey Camping & Overland Gear Kit",
        category: "camping-and-overland",
        brand: "universal",
        price: 12500,
        image: "assets/images/Camping and Overland Gear.png",
        status: "in-stock",
        partNumber: "OD-CO-UN46",
        description: "Complete camping and overland gear kit designed for extended self-sufficient expeditions across the African bushveld.",
        features: ["Premium gear organization system", "Modular expandable design", "Heavy-duty weather-resistant materials", "Easy vehicle install and removal", "Compact storage when not in use"],
        specifications: { material: "Heavy Duty Fabric & Alloy", weight: "18kg", capacity: "120L", warranty: "2 Years" }
    },

    // --- ROOF RACKS ---
    {
        id: 47,
        name: "Odyssey Expedition Roof Rack",
        category: "roof-racks",
        brand: "universal",
        price: 8500,
        image: "assets/images/Expedition Roof Rack.webp",
        status: "in-stock",
        partNumber: "OD-RR-UN47",
        description: "Aerodynamic low-profile expedition roof rack with integrated mounting points for additional gear, lights, and accessories.",
        features: ["Low profile aerodynamic design", "Heavy duty steel tube construction", "Integrated light mount tabs", "Multiple lashing points", "Textured black powder-coated finish"],
        specifications: { material: "Heavy Duty Steel", weight: "32kg", loadCapacity: "150kg", warranty: "2 Years" }
    }
];

const brands = [
    { name: "Ford", id: "ford", logo: "vehicle_logos/ford_logo.png" },
    { name: "Toyota", id: "toyota", logo: "vehicle_logos/toyota_logo.png" },
    { name: "Nissan", id: "nissan", logo: "vehicle_logos/nissan_logo.png" },
    { name: "Isuzu", id: "isuzu", logo: "vehicle_logos/isuzu_logo.png" },
    { name: "Mazda", id: "mazda", logo: "vehicle_logos/mazda_logo.png" },
    { name: "Suzuki", id: "suzuki", logo: "vehicle_logos/suzuki_logo.png" }
];

const categories = [
    { name: "Front Bumpers", id: "front-bumpers", icon: "fa-shield-halved" },
    { name: "Rear Bumpers", id: "rear-bumpers", icon: "fa-truck-pickup" },
    { name: "Rock Sliders", id: "rock-sliders", icon: "fa-grip-lines" },
    { name: "Fridge Slides", id: "fridge-slides", icon: "fa-temperature-low" },
    { name: "Drawer Systems", id: "drawer-systems", icon: "fa-box-open" },
    { name: "Roll Bars", id: "accessories", icon: "fa-circle-notch" },
    { name: "Camping & Overland Gear", id: "camping-and-overland", icon: "fa-campground" },
    { name: "Roof Racks", id: "roof-racks", icon: "fa-bag-shopping" }
];

/* =========================================
   2. FEATURED PRODUCTS
   ========================================= */
const featuredProductIds = [25, 27, 29, 31, 41, 46, 47];

function renderFeaturedProducts() {
    const grid = document.querySelector('.featured-products-grid');
    if (!grid) return;

    const featured = products.filter(p => featuredProductIds.includes(p.id));

    grid.innerHTML = featured.map(product => {
        const isPlaceholder = product.image.includes('placeholder');
        const displayImage = isPlaceholder && product.fitmentImage ? product.fitmentImage : product.image;
        const statusLabel = formatStatus(product.status);

        return `
            <div class="product-card">
                <div class="status-badge ${product.status}">${statusLabel}</div>
                <a href="product-detail.html?id=${product.id}" style="display: block; color: inherit;">
                    <div class="product-image">
                        <img src="${displayImage}" alt="${product.name}" onerror="this.src='assets/images/placeholder.webp'">
                        ${isPlaceholder ? '<div class="design-ref-label">Design Reference - Fitment photo coming soon.</div>' : ''}
                    </div>
                </a>
                <div class="product-info">
                    <span class="product-category">${formatCategory(product.category)}</span>
                    <h3 class="product-title" style="margin: 8px 0;"><a href="product-detail.html?id=${product.id}">${product.name}</a></h3>
                    <p class="product-price">R ${product.price.toLocaleString()}</p>
                </div>
                </div>
            </div>
        `;
    }).join('');

    // Detect first featured product's image aspect ratio and apply globally
    const firstFeatured = featured[0];
    if (firstFeatured) {
        const imgSrc = firstFeatured.image.includes('placeholder') && firstFeatured.fitmentImage
            ? firstFeatured.fitmentImage
            : firstFeatured.image;
        const tempImg = new Image();
        tempImg.onload = function() {
            const ratio = this.naturalWidth / this.naturalHeight;
            // Clamp ratio between 0.5 and 2.5 to avoid extreme values
            const clampedRatio = Math.min(2.5, Math.max(0.5, ratio));
            grid.style.setProperty('--featured-img-ratio', clampedRatio);
        };
        tempImg.onerror = function() {
            // Fallback to 4/3 if image fails to load
            grid.style.setProperty('--featured-img-ratio', 4 / 3);
        };
        tempImg.src = imgSrc;
        // If image is cached, onload may not fire; ensure we have a fallback
        if (tempImg.complete && tempImg.naturalWidth) {
            const ratio = tempImg.naturalWidth / tempImg.naturalHeight;
            const clampedRatio = Math.min(2.5, Math.max(0.5, ratio));
            grid.style.setProperty('--featured-img-ratio', clampedRatio);
        }
    }
}

/* =========================================
   3. STATE MANAGEMENT
   ========================================= */
let currentFilterType = 'all'; // 'brand', 'category', or 'all'
let currentFilterValue = 'all';

/* =========================================
   3. INITIALIZATION
   ========================================= */
document.addEventListener('DOMContentLoaded', () => {
    init();
});

function init() {
    // Parse URL parameters for filters
    const urlParams = new URLSearchParams(window.location.search);
    const categoryParam = urlParams.get('category');
    const brandParam = urlParams.get('brand');

    if (categoryParam) {
        currentFilterType = 'category';
        currentFilterValue = categoryParam;
    } else if (brandParam) {
        currentFilterType = 'brand';
        currentFilterValue = brandParam;
    }

    renderFilterUI();
    renderProducts();
    renderFeaturedProducts();
    setupMenu();
    setupHeroSlider();
    setupWhatsAppWidgets();
}

/* =========================================
   4. RENDER FUNCTIONS
   ========================================= */
function renderFilterUI() {
    const brandGrid = document.getElementById('brand-filter-grid');
    const categoryGrid = document.getElementById('category-filter-grid');

    if (brandGrid) {
        brandGrid.innerHTML = brands.map(brand => `
            <div class="filter-card brand-card ${currentFilterType === 'brand' && currentFilterValue === brand.id ? 'active' : ''}" 
                 onclick="applyFilter('brand', '${brand.id}')">
                <img src="${brand.logo}" alt="${brand.name}" class="filter-brand-logo" style="height: 18px; width: auto; object-fit: contain; margin-right: 8px;">
                <span>${brand.name}</span>
            </div>
        `).join('');
    }

    if (categoryGrid) {
        categoryGrid.innerHTML = categories.map(cat => `
            <div class="filter-card category-card ${currentFilterType === 'category' && currentFilterValue === cat.id ? 'active' : ''}" 
                 onclick="applyFilter('category', '${cat.id}')">
                <i class="fas ${cat.icon}"></i>
                <span>${cat.name}</span>
            </div>
        `).join('');
    }
}

function renderProducts() {
    const productGrid = document.querySelector('.grid');
    if (!productGrid) return;

    let filtered = products;
    if (currentFilterType === 'brand') {
        filtered = products.filter(p => p.brand === currentFilterValue || p.brand === 'universal');
    } else if (currentFilterType === 'category') {
        filtered = products.filter(p => p.category === currentFilterValue);
    }

    if (filtered.length === 0) {
        productGrid.innerHTML = `<div class="no-results" style="grid-column: 1/-1; text-align: center; padding: 50px 0; color: var(--color-text-muted);">No products found for this selection.</div>`;
        return;
    }

    productGrid.innerHTML = filtered.map(product => {
        const isPlaceholder = product.image.includes('placeholder');
        const displayImage = isPlaceholder && product.fitmentImage ? product.fitmentImage : product.image;
        const statusLabel = formatStatus(product.status);
        
        return `
            <div class="product-card">
                <div class="status-badge ${product.status}">${statusLabel}</div>
                <a href="product-detail.html?id=${product.id}" style="display: block; color: inherit;">
                    <div class="product-image">
                        <img src="${displayImage}" alt="${product.name}" onerror="this.src='assets/images/placeholder.webp'">
                        ${isPlaceholder ? '<div class="design-ref-label">Design Reference - Fitment photo coming soon.</div>' : ''}
                    </div>
                </a>
                <div class="product-info">
                    <span class="product-category">${formatCategory(product.category)}</span>
                    <h3 class="product-title" style="margin: 8px 0;"><a href="product-detail.html?id=${product.id}">${product.name}</a></h3>
                    <p class="product-price">R ${product.price.toLocaleString()}</p>
                </div>
                </div>
            </div>
        `;
    }).join('');
}

function formatCategory(cat) {
    return cat.replace('-', ' ').toUpperCase();
}

function formatStatus(status) {
    switch(status) {
        case 'in-stock': return 'In Stock';
        case 'out-of-stock': return 'Sold Out';
        case 'waiting-for-design': return 'New Design Coming';
        default: return '';
    }
}

/* =========================================
   6. FILTER LOGIC
   ========================================= */
window.applyFilter = (type, value) => {
    currentFilterType = type;
    currentFilterValue = value;
    renderFilterUI();
    renderProducts();
    
    // Smooth scroll to results
    const productSection = document.getElementById('products');
    if (productSection) {
        productSection.scrollIntoView({ behavior: 'smooth' });
    }
};

window.resetFilters = () => {
    currentFilterType = 'all';
    currentFilterValue = 'all';
    renderFilterUI();
    renderProducts();
};

/* =========================================
   7. WHATSAPP ENQUIRY SYSTEM
   ========================================= */
window.enquireWhatsApp = (id) => {
    const product = products.find(p => p.id === id);
    if (!product) return;

    // Strict inquiry-only text as requested
    const message = `Hi Odyssey 4x4, I am interested in the ${product.name} - ${product.partNumber} for my vehicle.`;
    const whatsappUrl = `https://wa.me/27722573089?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
};

/* =========================================
   8. WIDGETS & EVENTS
   ========================================= */
function setupWhatsAppWidgets() {
    // Floating WhatsApp Menu toggles
    const waTrigger = document.querySelector('.whatsapp-float-trigger');
    const waMenu = document.querySelector('.whatsapp-popup-menu');
    
    if (waTrigger && waMenu) {
        waTrigger.addEventListener('click', (e) => {
            e.stopPropagation();
            waTrigger.classList.toggle('active');
            waMenu.classList.toggle('show');
        });
        
        document.addEventListener('click', () => {
            waTrigger.classList.remove('active');
            waMenu.classList.remove('show');
        });
        
        waMenu.addEventListener('click', (e) => {
            e.stopPropagation(); // Avoid closing when clicking inside
        });
    }

    // Connect Contact form to WhatsApp prefilled text
    const waForm = document.getElementById('whatsapp-form');
    if (waForm) {
        waForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const nameInput = waForm.querySelector('input[required]');
            const msgInput = waForm.querySelector('textarea[required]');
            if (nameInput && msgInput) {
                const message = `Hi Odyssey 4x4, I am ${nameInput.value}. Here is my custom enquiry:\\n\\n${msgInput.value}`;
                const whatsappUrl = `https://wa.me/27722573089?text=${encodeURIComponent(message)}`;
                window.open(whatsappUrl, '_blank');
            }
        });
    }
}

/* =========================================
   9. MENU & MOBILE LAYOUTS
   ========================================= */
function setupMenu() {
    const mobileBtn = document.querySelector('.mobile-toggle');
    const slideMenu = document.getElementById('slide-menu');
    const slideMenuOverlay = document.getElementById('slide-menu-overlay');
    const slideMenuClose = document.getElementById('slide-menu-close');

    if (mobileBtn) {
        mobileBtn.addEventListener('click', () => {
            if (slideMenu) slideMenu.classList.add('active');
            if (slideMenuOverlay) slideMenuOverlay.classList.add('active');
        });
    }

    if (slideMenuClose) slideMenuClose.addEventListener('click', window.closeMenu);
    if (slideMenuOverlay) slideMenuOverlay.addEventListener('click', window.closeMenu);

    // Mobile Accordion Logic
    const accordionToggles = document.querySelectorAll('.accordion-toggle');
    accordionToggles.forEach(btn => {
        btn.addEventListener('click', () => {
            const content = btn.nextElementSibling;
            const isExpanded = content.classList.contains('expanded');
            // Collapse all first
            document.querySelectorAll('.accordion-content').forEach(c => c.classList.remove('expanded'));
            document.querySelectorAll('.accordion-toggle i:last-child').forEach(i => i.style.transform = '');
            // Then expand the clicked one if it was collapsed
            if (!isExpanded) {
                content.classList.add('expanded');
                const chevron = btn.querySelector('i:last-child');
                if (chevron) chevron.style.transform = 'rotate(180deg)';
            }
        });
    });
}

// Expose closeMenu globally
window.closeMenu = function() {
    const slideMenu = document.getElementById('slide-menu');
    const slideMenuOverlay = document.getElementById('slide-menu-overlay');
    if (slideMenu) slideMenu.classList.remove('active');
    if (slideMenuOverlay) slideMenuOverlay.classList.remove('active');
};

/* =========================================
   10. HERO SLIDER
   ========================================= */
function setupHeroSlider() {
    const wrapper = document.querySelector('.slider-wrapper');
    const slides = document.querySelectorAll('.slide');
    if (!wrapper || slides.length <= 1) return;

    let current = 0;
    const total = slides.length;
    let slideTimeout;

    function goToSlide(index) {
        if (index < 0) index = total - 1;
        if (index >= total) index = 0;
        
        // Update active class
        slides.forEach(slide => slide.classList.remove('active'));
        slides[index].classList.add('active');
        
        current = index;
        wrapper.style.transform = `translateX(-${current * 100}%)`;
        
        // Reset timer for the next transition
        resetAutoPlay();
    }

    function resetAutoPlay() {
        if (slideTimeout) clearTimeout(slideTimeout);
        
        // First slide (index 0) stays for 7 seconds, others for 3.5 seconds
        const duration = (current === 0) ? 7000 : 3500;
        
        slideTimeout = setTimeout(() => {
            goToSlide(current + 1);
        }, duration);
    }

    // Initialize auto-play
    resetAutoPlay();

    // Expose prev/next globally
    window.sliderNext = () => {
        goToSlide(current + 1);
    };
    window.sliderPrev = () => {
        goToSlide(current - 1);
    };
}
