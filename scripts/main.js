/* =========================================
   1. DATA SOURCE
   ========================================= */
const products = [
    // FRONT BUMPERS
    {
        id: 1,
        name: "Odyssey Adventure Bumper - Front",
        category: "front-bumpers",
        brand: "ford",
        price: 18500,
        image: "assets/images/Adventure Bumper - Front.jpg",
        status: "in-stock",
        partNumber: "OD-FB-001",
        description: "Heavy duty steel front bumper with integrated winch plate and LED light mounts.",
        features: ["3mm steel construction", "Winch plate rated for up to 12,000 lbs", "Integrated LED light mounts", "Powder-coated finish", "Recovery point rated 4.75 ton"],
        specifications: { material: "3mm Steel", weight: "45kg", finish: "Black Powder Coat", warranty: "2 Years" }
    },
    {
        id: 2,
        name: "Odyssey Stealth Bumper - Rear",
        category: "stealth-rear-bumpers",
        brand: "toyota",
        price: 16500,
        image: "assets/images/Odyssey Stealth Bumper - Rear.jpg",
        status: "in-stock",
        partNumber: "OD-RB-002",
        description: "High clearance rear bumper with swing arm capability and integrated jerry can holders.",
        features: ["High departure angle design", "Swing arm compatible", "Dual jerry can holders", "Integrated tow points", "LED light bar ready"],
        specifications: { material: "3mm Steel", weight: "52kg", finish: "Black Powder Coat", warranty: "2 Years" }
    },
    {
        id: 3,
        name: "Tactical Front Bumper - Hilux",
        category: "front-bumpers",
        brand: "toyota",
        price: 19500,
        image: "assets/images/placeholder.jpg",
        fitmentImage: "assets/images/Adventure Bumper - Front.jpg",
        status: "waiting-for-design",
        partNumber: "OD-FB-003",
        description: "Premium front bumper designed specifically for Toyota Hilux with integrated bash plate.",
        features: ["Vehicle-specific fitment", "Integrated bash plate", "Fog light cut-outs", "Tow hooks included", "Modular design"],
        specifications: { material: "3mm Steel", weight: "48kg", finish: "Black Powder Coat", warranty: "2 Years" }
    },
    {
        id: 24,
        name: "Premium Front Bumper - Ranger",
        category: "front-bumpers",
        brand: "ford",
        price: 17500,
        image: "assets/images/front-bumpers.jpg",
        status: "in-stock",
        partNumber: "OD-FB-004",
        description: "Rugged front bumper for Ford Ranger with integrated fog lights and recovery points.",
        features: ["Heavy duty construction", "Integrated fog lights", "Recovery points included", "Winch compatible", "ADR compliant"],
        specifications: { material: "3mm Steel", weight: "42kg", finish: "Black Powder Coat", warranty: "2 Years" }
    },
    {
        id: 25,
        name: "Expedition Front Bumper",
        category: "front-bumpers",
        brand: "universal",
        price: 20500,
        image: "assets/images/bull-bar-showcase.jpg",
        status: "in-stock",
        partNumber: "OD-FB-005",
        description: "Ultimate expedition-grade front bumper with maximum protection and functionality.",
        features: ["Maximum protection design", "Multiple light mounting points", "Heavy duty winch mount", "Integrated bash plate", "Premium finish"],
        specifications: { material: "4mm Steel", weight: "55kg", finish: "Black Powder Coat", warranty: "3 Years" }
    },
    {
        id: 26,
        name: "Rear Bumper with Tire Carrier",
        category: "rear-bumpers-carrier",
        brand: "universal",
        price: 19500,
        image: "assets/images/rear-bumpers.jpg",
        status: "in-stock",
        partNumber: "OD-RBC-003",
        description: "Heavy duty rear bumper with integrated tire carrier and jerry can holders.",
        features: ["Swing-out tire carrier", "Dual jerry can mounts", "LED light bar ready", "Recovery points", "Heavy duty construction"],
        specifications: { material: "3mm Steel", weight: "65kg", finish: "Black Powder Coat", warranty: "2 Years" }
    },
    {
        id: 27,
        name: "Expedition Rear Bumper System",
        category: "rear-bumpers-carrier",
        brand: "universal",
        price: 22500,
        image: "assets/images/Odyssey Stealth Bumper - Rear.jpg",
        status: "in-stock",
        partNumber: "OD-RBC-004",
        description: "Complete rear bumper system with carrier, storage, and recovery capabilities.",
        features: ["Full carrier system", "Multiple storage options", "Integrated recovery points", "Modular design", "Premium construction"],
        specifications: { material: "3mm Steel", weight: "70kg", finish: "Black Powder Coat", warranty: "3 Years" }
    },
    {
        id: 28,
        name: "Pro Series Rock Sliders",
        category: "rock-sliders",
        brand: "universal",
        price: 9500,
        image: "assets/images/rocksliders.jpg",
        status: "in-stock",
        partNumber: "OD-RS-003",
        description: "Professional grade rock sliders with integrated step and maximum protection.",
        features: ["65x65mm tubing", "Integrated step design", "Chassis mounted", "Reinforced construction", "Pair included"],
        specifications: { material: "Steel Tube", tubeSize: "65x65mm", finish: "Black Powder Coat", warranty: "2 Years" }
    },
    {
        id: 29,
        name: "Extreme Rock Sliders - Heavy Duty",
        category: "rock-sliders",
        brand: "universal",
        price: 11500,
        image: "assets/images/Heavy Duty Rock Sliders.jpg",
        status: "out-of-stock",
        partNumber: "OD-RS-004",
        description: "Extreme duty rock sliders for the most demanding off-road conditions.",
        features: ["80x80mm heavy tubing", "Maximum protection", "Reinforced mounting", "Jack point integration", "Lifetime warranty"],
        specifications: { material: "Steel Tube", tubeSize: "80x80mm", finish: "Black Powder Coat", warranty: "Lifetime" }
    },
    {
        id: 4,
        name: "Heavy Duty Tow Bar - 3500kg",
        category: "tow-bars",
        brand: "universal",
        price: 4500,
        image: "assets/images/placeholder.jpg",
        status: "in-stock",
        partNumber: "OD-TB-001",
        description: "Professional grade tow bar rated for 3500kg towing capacity.",
        features: ["3500kg towing capacity", "350kg ball weight", "7-pin connector included", "Corrosion resistant coating", "Easy bolt-on installation"],
        specifications: { towingCapacity: "3500kg", ballWeight: "350kg", finish: "Galvanized", warranty: "3 Years" }
    },
    {
        id: 6,
        name: "Expedition Roof Rack",
        category: "roof-racks",
        brand: "universal",
        price: 12000,
        image: "assets/images/Expedition Roof Rack.jpg",
        status: "in-stock",
        partNumber: "OD-RR-001",
        description: "Aluminum low-profile roof rack for maximum storage with full-length platform.",
        features: ["Full-length platform design", "200kg load capacity", "Wind deflector included", "Multiple tie-down points", "LED light bar compatible"],
        specifications: { material: "Aluminum", loadCapacity: "200kg", dimensions: "2200mm x 1250mm", warranty: "3 Years" }
    },
    {
        id: 10,
        name: "Odyssey Drawer System",
        category: "drawer-systems",
        brand: "universal",
        price: 14500,
        image: "assets/images/Odyssey Drawer System.jpg",
        status: "in-stock",
        partNumber: "OD-DS-001",
        description: "Premium dual drawer storage system with carpeted finish and integrated fridge slide.",
        features: ["Dual drawer configuration", "Heavy-duty roller slides", "Integrated fridge slide area", "Carpeted top surface", "Lockable drawers"],
        specifications: { material: "Marine Ply & Aluminum", drawerLoad: "80kg per drawer", dimensions: "1200mm x 1000mm", warranty: "2 Years" }
    },
    {
        id: 30,
        name: "Front Underbody Skid Plate",
        category: "underbody-protection",
        brand: "universal",
        price: 4500,
        image: "assets/images/underbody-protection.jpg",
        status: "in-stock",
        partNumber: "OD-UP-001",
        description: "Heavy duty front underbody protection for engine and transmission.",
        features: ["3mm steel construction", "Engine and gearbox protection", "Easy bolt-on installation", "Powder coated finish", "Drainage holes included"],
        specifications: { material: "3mm Steel", coverage: "Engine & Gearbox", finish: "Black Powder Coat", warranty: "2 Years" }
    }
];

const brands = [
    { name: "Chevrolet", id: "chevrolet", logo: "fa-car" },
    { name: "Ford", id: "ford", logo: "fa-car" },
    { name: "Ford Everest", id: "ford-everest", logo: "fa-car" },
    { name: "Ford Ranger", id: "ford-ranger", logo: "fa-car" },
    { name: "Ford Ranger Raptor", id: "ford-ranger-raptor", logo: "fa-car" },
    { name: "Isuzu", id: "isuzu", logo: "fa-car" },
    { name: "Land Rover", id: "land-rover", logo: "fa-car" },
    { name: "Mazda", id: "mazda", logo: "fa-car" },
    { name: "Mitsubishi", id: "mitsubishi", logo: "fa-car" },
    { name: "Mercedes-Benz", id: "mercedes-benz", logo: "fa-car" },
    { name: "Nissan", id: "nissan", logo: "fa-car" }
];

const categories = [
    { name: "Front Bumpers", id: "front-bumpers", icon: "fa-truck-front" },
    { name: "Rear Bumpers", id: "rear-bumpers-carrier", icon: "fa-truck-monster" },
    { name: "Rock Sliders", id: "rock-sliders", icon: "fa-grip-lines" },
    { name: "Fridge Slides", id: "accessories", icon: "fa-temperature-low" },
    { name: "Storage Systems", id: "drawer-systems", icon: "fa-box-open" },
    { name: "Underbody", id: "underbody-protection", icon: "fa-shield-halved" }
];

/* =========================================
   2. STATE MANAGEMENT
   ========================================= */
let currentFilterType = 'all'; // 'brand', 'category', or 'all'
let currentFilterValue = 'all';
let userLocation = localStorage.getItem('odyssey_location') || null;

/* =========================================
   3. INITIALIZATION
   ========================================= */
document.addEventListener('DOMContentLoaded', () => {
    init();
});

function init() {
    renderFilterUI();
    renderProducts();
    setupMenu();
    setupHeroSlider();
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
                <i class="fas ${brand.logo}"></i>
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
        productGrid.innerHTML = `<div class="no-results">No products found for this selection.</div>`;
        return;
    }

    productGrid.innerHTML = filtered.map(product => {
        const isPlaceholder = product.image.includes('placeholder');
        const displayImage = isPlaceholder && product.fitmentImage ? product.fitmentImage : product.image;
        const statusLabel = formatStatus(product.status);
        
        return `
            <div class="product-card">
                <div class="status-badge ${product.status}">${statusLabel}</div>
                <div class="product-image">
                    <img src="${displayImage}" alt="${product.name}" onerror="this.src='assets/images/placeholder.jpg'">
                    ${isPlaceholder ? '<div class="design-ref-label">Design Reference - Vehicle specific fitment photo coming soon.</div>' : ''}
                </div>
                <div class="product-info">
                    <span class="product-category">${formatCategory(product.category)}</span>
                    <h3 class="product-title">${product.name}</h3>
                    <p class="product-price">R ${product.price.toLocaleString()}</p>
                </div>
                <div class="product-actions">
                    <button class="btn btn-whatsapp btn-block" onclick="enquireWhatsApp(${product.id})">
                        <i class="fab fa-whatsapp"></i> ENQUIRE VIA WHATSAPP
                    </button>
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
        case 'out-of-stock': return 'Out of Stock';
        case 'waiting-for-design': return 'Waiting for New Design';
        default: return '';
    }
}

/* =========================================
   5. FILTER LOGIC
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
   6. WHATSAPP SYSTEM
   ========================================= */
window.enquireWhatsApp = (id) => {
    const product = products.find(p => p.id === id);
    if (!product) return;

    const locationStr = userLocation ? ` My location is ${userLocation}.` : '';
    const message = `Hi, I am interested in ${product.name} - ${product.partNumber} for my vehicle.${locationStr}`;
    const whatsappUrl = `https://wa.me/27722573089?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
};

/* =========================================
   7. LOCATION TRACKING
   ========================================= */


/* =========================================
   8. MENU & UI
   ========================================= */
function setupMenu() {
    const mobileBtn = document.querySelector('.mobile-toggle');
    const slideMenu = document.getElementById('slide-menu');
    const slideMenuOverlay = document.getElementById('slide-menu-overlay');
    const slideMenuClose = document.getElementById('slide-menu-close');

    if (mobileBtn) mobileBtn.addEventListener('click', () => {
        slideMenu.classList.add('active');
        slideMenuOverlay.classList.add('active');
    });

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

// Expose closeMenu globally so inline onclick attributes in HTML can call it
window.closeMenu = function() {
    const slideMenu = document.getElementById('slide-menu');
    const slideMenuOverlay = document.getElementById('slide-menu-overlay');
    if (slideMenu) slideMenu.classList.remove('active');
    if (slideMenuOverlay) slideMenuOverlay.classList.remove('active');
};

/* =========================================
   9. HERO SLIDER
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

    // Expose prev/next globally for manual arrow buttons
    window.sliderNext = () => {
        goToSlide(current + 1);
    };
    window.sliderPrev = () => {
        goToSlide(current - 1);
    };
}

