/* =========================================
   1. DATA SOURCE (PREMIUM LIGHT THEME REDESIGN)
   ========================================= */
const products = [
    // --- FRONT BUMPERS ---
    {
        id: 1,
        name: "Odyssey Adventure Bumper - Front",
        category: "front-bumpers",
        brand: "ford",
        price: 18500,
        image: "assets/images/Adventure Bumper - Front.jpg",
        status: "in-stock",
        partNumber: "OD-FB-FD01",
        description: "Heavy duty steel front replacement bumper with integrated winch plate and LED light mounts for Ford Ranger.",
        features: ["3mm steel construction", "Winch plate rated for up to 12,000 lbs", "Integrated LED light mounts", "Textured black powder-coated finish", "Recovery points rated at 4.75 tons"],
        specifications: { material: "3mm Steel", weight: "45kg", finish: "Textured Powder Coat", warranty: "2 Years" }
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
        partNumber: "OD-FB-TY03",
        description: "Premium front bumper designed specifically for Toyota Hilux with integrated heavy duty bash plate.",
        features: ["Vehicle-specific fitment", "Integrated bash plate", "Fog light cut-outs", "High clearance wings", "Modular light mounting bars"],
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
        partNumber: "OD-FB-FD24",
        description: "Rugged front bumper for Ford Ranger with integrated high-output fog lights and recovery points.",
        features: ["Heavy duty construction", "Integrated fog lights", "Recovery points included", "Winch compatible", "Airbag and ADR compliant"],
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
        partNumber: "OD-FB-UN25",
        description: "Ultimate expedition-grade front bumper with maximum protection and functionality across double-cab platforms.",
        features: ["Maximum protection wrap-around bars", "Multiple auxiliary light mounting points", "Heavy duty winch mount", "Integrated skid plate", "Premium scratch-resistant finish"],
        specifications: { material: "4mm Steel", weight: "55kg", finish: "Black Powder Coat", warranty: "3 Years" }
    },
    {
        id: 11,
        name: "Frontier Replacement Bumper - Nissan",
        category: "front-bumpers",
        brand: "nissan",
        price: 18900,
        image: "assets/images/placeholder.jpg",
        fitmentImage: "assets/images/Adventure Bumper - Front.jpg",
        status: "in-stock",
        partNumber: "OD-FB-NS11",
        description: "Premium heavy-duty front replacement bumper engineered for Nissan Navara / Frontier rigs.",
        features: ["Precision CNC laser cut", "Winch mount pre-installed", "Dual aerial tabs", "Textured matte powder coat", "Full recovery hook integration"],
        specifications: { material: "3mm High Tensile Steel", weight: "46kg", finish: "Matte Powder Coat", warranty: "2 Years" }
    },
    {
        id: 13,
        name: "Odyssey D-Max Bumper - Isuzu",
        category: "front-bumpers",
        brand: "isuzu",
        price: 19200,
        image: "assets/images/placeholder.jpg",
        fitmentImage: "assets/images/Adventure Bumper - Front.jpg",
        status: "in-stock",
        partNumber: "OD-FB-IZ13",
        description: "Rugged front replacement bumper styled specifically for the Isuzu D-Max for tough bush terrains.",
        features: ["Chassis-mounted structural strength", "High departure approach angle wings", "Winch ready cradle", "Split pan design for airflow", "Integrated fog lamps"],
        specifications: { material: "3mm & 4mm Steel", weight: "47kg", finish: "Black Ripple Powder Coat", warranty: "2 Years" }
    },
    {
        id: 15,
        name: "BT-50 Extreme Bumper - Mazda",
        category: "front-bumpers",
        brand: "mazda",
        price: 18700,
        image: "assets/images/placeholder.jpg",
        fitmentImage: "assets/images/Adventure Bumper - Front.jpg",
        status: "in-stock",
        partNumber: "OD-FB-MZ15",
        description: "Extreme off-road front replacement bumper carefully designed for the Mazda BT-50 layout.",
        features: ["Compact high clearance fitment", "Heavy duty dual aerial tabs", "LED light bar slot in center pan", "Shackle mount options", "Under-run protection plate included"],
        specifications: { material: "3mm Steel", weight: "44kg", finish: "Black Powder Coat", warranty: "2 Years" }
    },

    // --- REAR BUMPERS ---
    {
        id: 2,
        name: "Odyssey Stealth Bumper - Rear",
        category: "rear-bumpers",
        brand: "toyota",
        price: 16500,
        image: "assets/images/Odyssey Stealth Bumper - Rear.jpg",
        status: "in-stock",
        partNumber: "OD-RB-TY02",
        description: "High clearance rear replacement bumper with swing arm compatibility and integrated jerry can holder brackets.",
        features: ["High departure angle design", "Dual swing-out ready spindle system", "Jerry can mounts included", "Integrated dual tow points", "LED step light inserts"],
        specifications: { material: "3mm Steel", weight: "52kg", finish: "Black Powder Coat", warranty: "2 Years" }
    },
    {
        id: 26,
        name: "Rear Bumper with Tire Carrier",
        category: "rear-bumpers",
        brand: "universal",
        price: 19500,
        image: "assets/images/rear-bumpers.jpg",
        status: "in-stock",
        partNumber: "OD-RB-UN26",
        description: "Heavy duty modular rear replacement bumper with integrated spare tire carrier and jerry can hooks.",
        features: ["Locking swing-out tire carrier", "Dual jerry can mounts", "LED light bar ready", "Reinforced recovery hooks", "Premium structural steel construction"],
        specifications: { material: "3mm Steel", weight: "65kg", finish: "Black Powder Coat", warranty: "2 Years" }
    },
    {
        id: 27,
        name: "Expedition Rear Bumper System",
        category: "rear-bumpers",
        brand: "universal",
        price: 22500,
        image: "assets/images/Odyssey Stealth Bumper - Rear.jpg",
        status: "in-stock",
        partNumber: "OD-RB-UN27",
        description: "Complete expedition rear bumper system with heavy tire carrier, modular storage, and recovery gear points.",
        features: ["Heavy dual locking swing carriers", "Modular gear panel integration", "Integrated recovery shackle brackets", "Hi-lift jack points", "Anti-rattle toggle latches"],
        specifications: { material: "3mm Steel", weight: "70kg", finish: "Black Powder Coat", warranty: "3 Years" }
    },
    {
        id: 14,
        name: "Pro Carrier Bumper - Isuzu",
        category: "rear-bumpers",
        brand: "isuzu",
        price: 21500,
        image: "assets/images/placeholder.jpg",
        fitmentImage: "assets/images/Odyssey Stealth Bumper - Rear.jpg",
        status: "in-stock",
        partNumber: "OD-RB-IZ14",
        description: "Multi-carrier premium rear replacement bumper system engineered specifically for Isuzu D-Max.",
        features: ["Anti-corrosive primer coating", "Lockable heavy-duty swing spindle", "Includes spare tire mount arm", "Integrated step platform", "Heavy duty tow bar rated"],
        specifications: { material: "3mm Steel", weight: "63kg", finish: "Powder Coated Black", warranty: "2 Years" }
    },

    // --- ROCK SLIDERS ---
    {
        id: 28,
        name: "Pro Series Rock Sliders",
        category: "rock-sliders",
        brand: "universal",
        price: 9500,
        image: "assets/images/rocksliders.jpg",
        status: "in-stock",
        partNumber: "OD-RS-UN28",
        description: "Professional grade rock sliders with integrated dimpled tread steps and maximum chassis-mounted protection.",
        features: ["65x65mm heavy wall tubing", "Integrated dimpled step plates", "Robust chassis mounting brackets", "High clearance design", "Left and Right side pair included"],
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
        partNumber: "OD-RS-UN29",
        description: "Extreme duty heavy wall rock sliders designed for the most demanding technical rock crawling terrains.",
        features: ["80x80mm heavy wall tube construction", "Chassis-wrapped brackets", "Dimpled step plates for grip", "Integrated high-lift jack points", "Heavy-duty anti-slip plates"],
        specifications: { material: "Steel Tube", tubeSize: "80x80mm", finish: "Black Powder Coat", warranty: "Lifetime" }
    },
    {
        id: 12,
        name: "Odyssey Stealth Slider - Nissan",
        category: "rock-sliders",
        brand: "nissan",
        price: 9800,
        image: "assets/images/placeholder.jpg",
        fitmentImage: "assets/images/Heavy Duty Rock Sliders.jpg",
        status: "in-stock",
        partNumber: "OD-RS-NS12",
        description: "Rugged chassis-mounted heavy-duty rock sliders designed with beautiful laser-cut steps for Nissan Navara.",
        features: ["Laser-cut dimple tread steps", "Dual tube frame reinforcement", "Fully bolted chassis installation", "Corrosion resistant coating", "Heavy duty trail slider"],
        specifications: { material: "Steel Tube", tubeSize: "60x60mm", finish: "Matte Powder Coat", warranty: "2 Years" }
    },
    {
        id: 16,
        name: "Tactical Rock Sliders - Mazda",
        category: "rock-sliders",
        brand: "mazda",
        price: 9600,
        image: "assets/images/placeholder.jpg",
        fitmentImage: "assets/images/Heavy Duty Rock Sliders.jpg",
        status: "in-stock",
        partNumber: "OD-RS-MZ16",
        description: "Tactical series high-departure rock sliders offering complete sill and door guard safety for Mazda BT-50.",
        features: ["High clearance wrap profile", "Dual structural tube design", "Integrated recovery jack points", "Laser cut steel tread step", "Tough industrial coating"],
        specifications: { material: "Heavy Duty Steel Tube", tubeSize: "60x60mm", finish: "Black Ripple Coat", warranty: "2 Years" }
    },

    // --- FRIDGE SLIDES ---
    {
        id: 31,
        name: "Premium Odyssey Fridge Slide - 60L",
        category: "fridge-slides",
        brand: "universal",
        price: 3800,
        image: "assets/images/Fridge Slide - 60L.jpg",
        status: "in-stock",
        partNumber: "OD-FS-UN31",
        description: "Heavy-duty lock-in lock-out dual runner fridge slide rated up to 120kg, perfect for 60L and larger camping fridges.",
        features: ["Heavy duty lock-in and lock-out slides", "Premium sealed bearing rollers", "Tie-down strap slots", "Rigid folded sheet design", "120kg capacity load rating"],
        specifications: { material: "3mm CNC Aluminum / Steel", capacity: "120kg", lockType: "Dual Lever Lock", warranty: "2 Years" }
    },

    // --- DRAWER SYSTEMS ---
    {
        id: 10,
        name: "Odyssey Premium Drawer System",
        category: "drawer-systems",
        brand: "universal",
        price: 14500,
        image: "assets/images/Odyssey Drawer System.jpg",
        status: "in-stock",
        partNumber: "OD-DS-UN10",
        description: "Premium dual drawer storage system with marine ply carcass, fully carpeted deck, and lockable heavy-duty slides.",
        features: ["Dual lockable drawer configuration", "Premium heavy-duty roller bearings", "Marine ply deck with premium carpet", "Flush-mount tie-down loops", "Side filler panel ready for perfect fit"],
        specifications: { material: "Marine Ply & Galvanized Steel", drawerLoad: "80kg per drawer", dimensions: "1200mm x 1000mm", warranty: "2 Years" }
    },

    // --- OFFROAD ACCESSORIES & GEAR NEW PRODUCTS ---
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
    {
        id: 41,
        name: "Odyssey Drawer System",
        category: "drawer-systems",
        brand: "universal",
        price: 16500,
        image: "offroad_accessories/Decked Drawer System.png",
        status: "in-stock",
        partNumber: "OD-DS-UN41",
        description: "Ergonomic drawer system that fits your truck bed, keeping tool and overlanding gear dry and organized.",
        features: ["Weatherproof storage boxes", "Heavy-duty HDPE materials", "Heavy capacity loads up to 900kg on top deck", "Steel frame sub-assembly", "Lockable storage protection"],
        specifications: { material: "HDPE & Steel", weight: "95kg", loadCapacity: "900kg", warranty: "3 Years" }
    },
    {
        id: 43,
        name: "Odyssey Front Bumper",
        category: "front-bumpers",
        brand: "universal",
        price: 19500,
        image: "assets/images/newbumperimage.jpeg",
        status: "in-stock",
        partNumber: "OD-FB-UN43",
        description: "The ultimate front bumper with dynamic approach angle clearance and extreme frontal security.",
        features: ["Heavy duty 3mm plate shell", "Airbag compatibility checked", "Integrated light bays for spotlights", "Tough powder-coat finish", "Chassis mount brackets included"],
        specifications: { material: "3mm High Tensile Steel", weight: "52kg", finish: "Powder Coat", warranty: "2 Years" }
    },
    {
        id: 44,
        name: "Odyssey Rear Bumper",
        category: "rear-bumpers",
        brand: "universal",
        price: 18500,
        image: "offroad_accessories/Evolution Rear Bumpers.png",
        status: "in-stock",
        partNumber: "OD-RB-UN44",
        description: "High-clearance premium replacement rear bumper offering heavy-duty protection and integrated recovery points.",
        features: ["High clearance wrap-around style", "Winch-ready heavy support plates", "Dual recovery shackle tabs", "Anti-slip steel step-plate", "Integrated trailer plug socket bracket"],
        specifications: { material: "3mm Steel", weight: "48kg", finish: "Powder Coat", warranty: "2 Years" }
    },
    {
        id: 45,
        name: "Odyssey Rock Sliders",
        category: "rock-sliders",
        brand: "universal",
        price: 9500,
        image: "offroad_accessories/Rock Sliders.png",
        status: "in-stock",
        partNumber: "OD-RS-UN45",
        description: "Heavy duty offroad side steps and sliders designed for maximum sill protection on any trail.",
        features: ["Heavy gauge steel tube structure", "Chassis-rail mounted brackets", "Non-slip top plate steps", "Scratch-resistant powder coating", "Pair of left and right sliders"],
        specifications: { material: "Heavy Duty Steel Tube", tubeSize: "60mm", finish: "Powder Coat", warranty: "2 Years" }
    },
    // (Removed: Dual Battery, Snorkels, Lighting, Suspensions, Winches - per user request)
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
    { name: "Roll Bars", id: "accessories", icon: "fa-circle-notch" }
];

/* =========================================
   2. STATE MANAGEMENT
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
                        <img src="${displayImage}" alt="${product.name}" onerror="this.src='assets/images/placeholder.jpg'">
                        ${isPlaceholder ? '<div class="design-ref-label">Design Reference - Fitment photo coming soon.</div>' : ''}
                    </div>
                </a>
                <div class="product-info">
                    <span class="product-category">${formatCategory(product.category)}</span>
                    <h3 class="product-title" style="margin: 8px 0;"><a href="product-detail.html?id=${product.id}">${product.name}</a></h3>
                    <p class="product-price">R ${product.price.toLocaleString()}</p>
                </div>
                <div class="product-actions" style="padding: var(--spacing-sm); background: #fafafa; border-top: 1px solid var(--color-border);">
                    <button class="btn btn-whatsapp btn-block" onclick="enquireWhatsApp(${product.id})" style="width: 100%; display: flex; align-items: center; justify-content: center; gap: 8px;">
                        <i class="fab fa-whatsapp"></i> INQUIRE VIA WHATSAPP
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
        case 'out-of-stock': return 'Sold Out'; // Changed from Out of Stock to Sold Out
        case 'waiting-for-design': return 'New Design Coming';
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
   6. WHATSAPP ENQUIRY SYSTEM
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
   7. WIDGETS & EVENTS
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
                const message = `Hi Odyssey 4x4, I am ${nameInput.value}. Here is my custom enquiry:\n\n${msgInput.value}`;
                const whatsappUrl = `https://wa.me/27722573089?text=${encodeURIComponent(message)}`;
                window.open(whatsappUrl, '_blank');
            }
        });
    }
}

/* =========================================
   8. MENU & MOBILE LAYOUTS
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

    // Expose prev/next globally
    window.sliderNext = () => {
        goToSlide(current + 1);
    };
    window.sliderPrev = () => {
        goToSlide(current - 1);
    };
}
