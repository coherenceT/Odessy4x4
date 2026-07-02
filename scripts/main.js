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
        price: 16500,            image: "assets/images/Drawer System.png",
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
        price: 11500,            image: "assets/images/Sport Rack3.png",
        status: "in-stock",
        partNumber: "OD-RB-UN40",
        description: "Heavy duty steel roll bar designed to secure gear and add structural integrity to your load bed.",
        features: ["Premium quality carbon steel", "Dual utility light mount brackets", "Modular bolt-on design", "Textured matte powder-coated finish", "Chassis-integrated load support points"],
        specifications: { material: "Carbon Steel", weight: "24kg", finish: "Textured Powder Coat", warranty: "2 Years" }
    },

    // --- CAMPING & OVERLAND GEAR ---
    {
        id: 46,
        name: "Odyssey SecureClamp 3kg Gas Carrier",
        category: "camping-and-overland",
        brand: "universal",
        price: 2900,
        image: "assets/images/Gas1.jpg",
        images: ["assets/images/Gas1.jpg", "assets/images/Gas2.jpg", "assets/images/Gas3.jpg", "assets/images/Gas4.jpg", "assets/images/Gas5.jpg", "assets/images/Gas6.jpg"],
        status: "in-stock",
        partNumber: "OD-SC-UN46",
        description: "Built for the demands of serious overland travel, the Odyssey Secure Clamp 3kg Gas Mount combines lightweight construction with uncompromising strength. Precision-manufactured from high-grade Aluminium, it delivers exceptional durability while keeping weight to a minimum—making it the ideal solution for touring, camping, and off-road adventures.\n\nEngineered to withstand harsh conditions and relentless corrugations, the Fortress features an advanced powder-coated finish that provides superior resistance against corrosion, UV exposure, and the toughest outdoor elements. Integrated rubber isolation pads minimise vibration, prevent bottle movement, and protect your gas cylinder from unnecessary wear during travel.\n\nDesigned with versatility in mind, the universal mounting system allows for both vertical and horizontal installation, while multiple mounting points accommodate a wide range of vehicle, canopy, trailer, and caravan applications. Heavy-duty hinges ensure smooth operation and long-term reliability, while the quick-release locking latch allows for fast, secure bottle changes when every minute counts.\n\nFor added convenience, the gas bottle remains fully accessible while secured in the mount, allowing gas lines and regulators to remain connected during use.",
        features: [
            "Lightweight Aluminium Construction",
            "Heavy-Duty Quick-Lock System",
            "Universal Mounting Design",
            "Integrated Vibration Protection",
            "Adventure-Ready Powder-Coated Finish"
        ],
        specifications: { material: "Structural Grade Aluminium", weight: "3.3kg", capacity: "3kg gas bottle", warranty: "2 years" }
    },



    // --- PRODUCT A: Odyssey Navigate Phone Mount ---
    {
        id: 48,
        name: "Odyssey Navigate Phone Mount",
        category: "camping-and-overland",
        brand: "universal",
        price: 600,
        image: "assets/images/Phone Mount9.png",
        images: ["assets/images/Phone Mount9.png", "assets/images/Phone Mount2.png", "assets/images/Phone Mount3.png", "assets/images/Phone Mount6.png", "assets/images/Phone mount.png", "assets/images/Phone Mount7.png", "assets/images/Phone Mount8.png", "assets/images/Phone Mount10.png", "assets/images/Phone Mount11.png"],
        status: "in-stock",
        partNumber: "OD-NM-UN48",
        description: "Keep your phone secure, accessible, and exactly where you need it with the Odyssey Navigate — a vehicle-specific phone mounting solution engineered for adventure, touring, and everyday driving.\n\nThe innovative dual-locking mounting system combines convenience with security. A low-profile mounting plate is secured to your phone or phone case using premium automotive-grade 3M adhesive, allowing your device to be quickly attached and removed when needed. Once locked into position, the phone remains securely held in place, even on rough terrain and corrugated roads.\n\nUnlike conventional magnetic mounts, the Navigate features an integrated anti-theft locking mechanism. The phone cannot simply be pulled from the mount and must first be manually released before being rotated and removed, providing additional peace of mind when travelling or leaving your vehicle unattended.\n\nWhether you're navigating remote trails, following GPS routes, or keeping important information within easy reach, the Navigate delivers exceptional stability, security, and convenience in one premium package.",
        features: [
            "Vehicle-specific design for seamless fitment",
            "High-strength steel construction",
            "Premium black powder-coated finish",
            "Aggressive modern styling",
            "Integrated accessory mounting points",
            "Designed to enhance both appearance and functionality"
        ],
        specifications: { material: "Structural Grade Steel", weight: "410 grams", capacity: "Smart Phone Mount", warranty: "2 years" }
    },

    // --- PRODUCT B: Odyssey Nomad Sport Rack ---
    {
        id: 49,
        name: "Odyssey Nomad Sport Rack",
        category: "accessories",
        brand: "universal",
        price: 16500,
        image: "assets/images/Sport Rack3.png",
        images: ["assets/images/Sport Rack3.png", "assets/images/Sport Rack4.png", "assets/images/Sport Rack5.png"],
        status: "in-stock",
        partNumber: "OD-NSR-UN49",
        description: "Transform the look of your vehicle with the Odyssey Nomad Sport Rack — a bold combination of aggressive styling, premium craftsmanship, and everyday practicality.\n\nThe modern open-frame design not only enhances the visual appeal of your vehicle but also provides versatile mounting options for accessories, lighting, recovery equipment, and lifestyle gear. Whether you're building a show vehicle, weekend tourer, or daily-driven adventure rig, the Nomad Sport Rack delivers the perfect balance between form and function.\n\nMore than just an accessory, the Nomad Sport Rack is a statement piece designed for owners who want their vehicle to stand apart from the crowd. Its unique styling and vehicle-specific design create a commanding presence that elevates the overall look of your vehicle while adding practical functionality.",
        features: [
            "Vehicle-specific design for seamless fitment",
            "High-strength steel construction",
            "Premium black powder-coated finish",
            "Aggressive modern styling",
            "Integrated accessory mounting points",
            "Designed to enhance both appearance and functionality"
        ],
        specifications: { material: "Structural Grade Steel", weight: "34kg", capacity: "Multi-Purpose", warranty: "2 years" }
    },

    // --- PRODUCT C: Odyssey Pathfinder Ditch Light Brackets ---
    {
        id: 50,
        name: "Odyssey Pathfinder Ditch Light Brackets",
        category: "camping-and-overland",
        brand: "universal",
        price: 990,
        image: "assets/images/Ditch light brackets.png",
        images: ["assets/images/Ditch light brackets.png", "assets/images/Ditch light brackets2.png", "assets/images/Ditch light brackets3.png", "assets/images/Ditch light brackets4.png", "assets/images/Ditch light brackets6.png", "assets/images/Ditch light brackets7.png"],
        status: "in-stock",
        partNumber: "OD-PDL-UN50",
        description: "Take control of the road ahead with the Odyssey Pathfinder Ditch Light Brackets — purpose-built to provide superior auxiliary lighting performance for serious adventurers, overlanders, and off-road enthusiasts.\n\nBy positioning auxiliary lights higher on the vehicle, the Pathfinder brackets improve visibility along the sides of the road and help eliminate dark blind spots often missed by standard headlights. This elevated mounting position allows light to project further down the trail and into surrounding areas, increasing driver confidence when travelling at night, in poor weather, or through challenging terrain.\n\nAvailable in both single-light and double-light configurations, the adjustable mounting design allows you to fine-tune light positioning to suit your specific driving needs and lighting setup. Whether you're mounting compact fog lights, powerful spotlights, or a combination of both, the Pathfinder brackets provide a secure and reliable mounting solution.",
        features: [
            "Vehicle-Specific Fitment",
            "No Drilling Required",
            "High-Strength Steel Construction",
            "Premium Powder-Coated Finish",
            "Improved Night-Time Visibility",
            "Single & Double Light Options"
        ],
        specifications: { material: "Structural Grade Steel", weight: "660 grams per set", capacity: "Single and double mount", warranty: "2 years" }
    },

    // --- PRODUCT D: Odyssey Onyx (Rear Bumper) ---
    {
        id: 51,
        name: "Odyssey Onyx",
        category: "rear-bumpers",
        brand: "universal",
        price: 12999,
        image: "assets/images/odysseyonyx/odysseyonyx3.png",
        images: ["assets/images/odysseyonyx/odysseyonyx3.png", "assets/images/odysseyonyx/odyssey onyx1.png", "assets/images/odysseyonyx/odysseyonyx2.png", "assets/images/odysseyonyx/odysseyonyx4.png", "assets/images/rear-ford1.png", "assets/images/rear-ford2.png", "assets/images/rear-toyota.png", "assets/images/rear-isuzu.png", "assets/images/rear-nissan.png"],
        status: "in-stock",
        partNumber: "OD-OY-UN51",
        description: "The Odyssey Onyx rear bumper is engineered for drivers who demand maximum protection without compromising on style. Its high-clearance design optimizes departure angles while the integrated recovery points ensure you are always prepared for demanding off-road recovery scenarios.\n\nManufactured from structural grade steel and finished with a premium powder coat, the Onyx delivers long-lasting durability against corrosion, scratches, and harsh UV exposure. Vehicle-specific engineering ensures the bumper follows factory body lines for a seamless, factory-fitted appearance.\n\nIntegrated side access steps provide convenient access to your load bed, while high-output LED sport lights and LED number plate lights enhance visibility and safety. Full compatibility with factory reverse sensors and parking cameras means your vehicle's original safety systems remain fully functional.",
        features: [
            "High-clearance design",
            "Vehicle-specific engineering",
            "Maintains factory body lines",
            "Integrated recovery points",
            "Optimized weight distribution",
            "Integrated side access steps",
            "Compatible with factory reverse sensors",
            "Compatible with factory parking cameras",
            "Integrated high-output LED sport lights",
            "Integrated LED number plate lights"
        ],
        specifications: { material: "Structural Grade Steel", weight: "30kg", capacity: "Vehicle Specific", warranty: "2 years" },
        vehicleImages: {
            ford: ["assets/images/rear-ford1.png", "assets/images/rear-ford2.png"],
            toyota: ["assets/images/rear-toyota.png"],
            isuzu: ["assets/images/rear-isuzu.png"],
            nissan: ["assets/images/rear-nissan.png"]
        }
    },

    // --- PRODUCT E: Odyssey Rampage (Front Bumper) ---
    {
        id: 52,
        name: "Odyssey Rampage",
        category: "front-bumpers",
        brand: "universal",
        price: 0,
        image: "assets/images/Rampage.png",
        status: "waiting-for-design",
        partNumber: "OD-RMP-UN52",
        description: "The Odyssey Rampage rear bumper is precision engineered to follow original body lines, delivering a clean, integrated look with uncompromising strength. Constructed from lightweight, high-strength structural grade steel, it offers an exceptional balance between durability and weight savings.\n\nFeaturing an integrated heavy-duty winch cradle and aluminium bash plate, the Rampage is built for serious off-road recovery and underbody protection. Easily accessible recovery points and factory sensor compatibility ensure practicality meets performance.\n\nAn unrestricted airflow design maintains optimal radiator and intercooler cooling, while the high-clearance profile improves departure angles for demanding terrain. Bolt-on installation allows for a straightforward fitment without permanent vehicle modifications.",
        features: [
            "Precision engineered to follow original body lines",
            "Lightweight, high-strength steel construction",
            "Integrated heavy-duty winch cradle",
            "Integrated Aluminium bash plate",
            "Easily accessible recovery points",
            "Factory sensor compatible (where applicable)",
            "Unrestricted airflow to the radiator and intercooler",
            "Bolt-on installation",
            "Auxiliary driving light mounting provisions",
            "High-clearance profile"
        ],
        specifications: { material: "Structural Grade Steel", weight: "Vehicle Specific", capacity: "Vehicle Specific", warranty: "2 years" },
    },

    // --- PRODUCT F: Odyssey X-Rail Roof Rack ---
    {
        id: 53,
        name: "Odyssey X-Rail Roof Rack",
        category: "roof-racks",
        brand: "universal",
        price: 12999,
        image: "assets/images/placeholder.webp",
        status: "waiting-for-design",
        partNumber: "OD-XR-UN53",
        description: "The Odyssey X-Rail Roof Rack redefines roof-mounted cargo systems with its ultra-slimline profile and outstanding load capacity. Engineered from structural grade steel, the X-Rail delivers a lightweight yet robust platform designed to withstand the demands of extended overland touring.\n\nVehicle-specific design ensures seamless integration with factory mounting points, eliminating the need for drilling or permanent modifications. The weather-sealed mounting system prevents water ingress and protects your vehicle's roof from corrosion.\n\nMOLLE panel compatibility and extensive mounting slots provide limitless configuration options for recovery gear, lighting, fuel containers, and expedition equipment. Whether you are building a touring rig or a daily-driven adventure vehicle, the X-Rail delivers unmatched versatility and strength.",
        features: [
            "Ultra-Slimline Profile",
            "Lightweight Construction",
            "Outstanding Load Capacity",
            "Vehicle-Specific Design",
            "Factory Mounting Points",
            "Weather-Sealed Mounting System",
            "MOLLE Panel Compatible",
            "Extensive Mounting Slots"
        ],
        specifications: { material: "Structural Grade Steel", weight: "Vehicle Specific", capacity: "Vehicle Specific", warranty: "2 years" },
    },

    // --- PRODUCT G: Odyssey Dock X - Gas Bottle Mount ---
    {
        id: 54,
        name: "Odyssey D.O.X - Gas Bottle Mount",
        category: "camping-and-overland",
        brand: "universal",
        price: 1000,
        image: "assets/images/dockx1.png",
        images: ["assets/images/dockx1.png", "assets/images/dockx2.png", "assets/images/dockx3.png", "assets/images/dockx4.png", "assets/images/dockx5.png"],
        status: "in-stock",
        partNumber: "OD-DX-UN54",
        description: "The Odyssey Dock X, code identifier D.O.X, is a purpose-built gas bottle mount engineered for overland touring, camping, and off-road adventures. Manufactured from high-strength structural grade steel, the D.O.X delivers uncompromising durability in a lightweight, compact form factor.\n\nFitting most 2 kg and 3 kg gas bottles, the D.O.X features a dual locking retention system paired with a heavy-duty retention strap for maximum bottle security across the roughest corrugated terrain. The anti-theft locking design deters unauthorised removal, providing peace of mind when leaving your vehicle unattended.\n\nQuick bottle removal and gas hose accessibility while mounted ensure seamless operation during camp setup and pack-down. Multiple mounting options allow installation on roof racks, canopies, trailers, and load beds, while the compact, space-saving design preserves valuable cargo space.",
        features: [
            "High-Strength Steel Construction",
            "Fits Most 2 kg & 3 kg Gas Bottles",
            "Lightweight Design",
            "Dual Locking Retention System",
            "Heavy-Duty Retention Strap",
            "Quick Bottle Removal",
            "Gas Hose Accessible While Mounted",
            "Anti-Theft Locking Design",
            "Multiple Mounting Options",
            "Easy Installation",
            "Compact, Space-Saving Design"
        ],
        specifications: { material: "Structural Grade Steel", weight: "1.6kg", capacity: "2kg & 3kg gas bottle", warranty: "2 years" },
    },

    // --- VEHICLE-SPECIFIC REAR BUMPERS ---
    {
        id: 55,
        name: "Odyssey Rear Bumper - Ford Ranger",
        category: "rear-bumpers",
        brand: "ford",
        price: 12999,
        image: "assets/images/rear-ford1.png",
        images: ["assets/images/rear-ford1.png", "assets/images/rear-ford2.png"],
        status: "in-stock",
        partNumber: "OD-RB-FD55",
        description: "Precision-engineered rear bumper designed specifically for the Ford Ranger platform. Manufactured from structural grade steel with a premium powder-coated finish, this bumper delivers exceptional rear-end protection while maintaining factory body lines and sensor compatibility.\n\nIntegrated recovery points and side access steps provide practical off-road functionality, while the high-clearance profile optimizes departure angles for demanding terrain.",
        features: ["Ford Ranger specific fitment", "High-clearance design", "Integrated recovery points", "Factory sensor compatible", "Premium powder-coated finish", "Side access steps"],
        specifications: { material: "Structural Grade Steel", weight: "Vehicle Specific", capacity: "Vehicle Specific", warranty: "2 years" }
    },
    {
        id: 56,
        name: "Odyssey Rear Bumper - Toyota Hilux",
        category: "rear-bumpers",
        brand: "toyota",
        price: 12999,
        image: "assets/images/rear-toyota.png",
        status: "in-stock",
        partNumber: "OD-RB-TY56",
        description: "Purpose-built rear bumper for the Toyota Hilux, engineered to provide maximum rear-end protection and recovery capability. Constructed from structural grade steel, this bumper follows the Hilux factory body lines for a seamless, integrated appearance.\n\nFeatures integrated recovery points, side access steps, and full compatibility with factory reverse sensors and parking cameras.",
        features: ["Toyota Hilux specific fitment", "High-clearance design", "Integrated recovery points", "Factory sensor compatible", "Premium powder-coated finish", "Side access steps"],
        specifications: { material: "Structural Grade Steel", weight: "Vehicle Specific", capacity: "Vehicle Specific", warranty: "2 years" }
    },
    {
        id: 57,
        name: "Odyssey Rear Bumper - Isuzu D-Max",
        category: "rear-bumpers",
        brand: "isuzu",
        price: 12999,
        image: "assets/images/rear-isuzu.png",
        status: "in-stock",
        partNumber: "OD-RB-IZ57",
        description: "Vehicle-specific rear bumper engineered for the Isuzu D-Max platform. Built from structural grade steel with a durable powder-coated finish, this bumper provides comprehensive rear-end protection without compromising factory aesthetics.\n\nIntegrated recovery points and high-clearance design ensure optimal off-road performance, while factory sensor compatibility maintains your vehicle's original safety features.",
        features: ["Isuzu D-Max specific fitment", "High-clearance design", "Integrated recovery points", "Factory sensor compatible", "Premium powder-coated finish", "Side access steps"],
        specifications: { material: "Structural Grade Steel", weight: "Vehicle Specific", capacity: "Vehicle Specific", warranty: "2 years" }
    },
    {
        id: 58,
        name: "Odyssey Rear Bumper - Nissan Navara",
        category: "rear-bumpers",
        brand: "nissan",
        price: 12999,
        image: "assets/images/rear-nissan.png",
        status: "in-stock",
        partNumber: "OD-RB-NI58",
        description: "Custom-engineered rear bumper for the Nissan Navara, designed to deliver maximum protection and off-road capability. Manufactured from structural grade steel with a premium powder coat finish, this bumper integrates seamlessly with the Navara's factory body lines.\n\nEquipped with integrated recovery points, side access steps, and full factory sensor compatibility for a complete rear-end protection solution.",
        features: ["Nissan Navara specific fitment", "High-clearance design", "Integrated recovery points", "Factory sensor compatible", "Premium powder-coated finish", "Side access steps"],
        specifications: { material: "Structural Grade Steel", weight: "Vehicle Specific", capacity: "Vehicle Specific", warranty: "2 years" }
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
const featuredProductIds = [25, 27, 29, 31, 41, 46, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58];

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
                    <p class="product-price">${product.price > 0 ? 'R ' + product.price.toLocaleString() : 'Price TBC'}</p>
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
            <div class="filter-card ${currentFilterType === 'brand' && currentFilterValue === brand.id ? 'active' : ''}" 
                 onclick="applyFilter('brand', '${brand.id}')">
                <img src="${brand.logo}" alt="${brand.name}" class="filter-brand-logo" style="height: 48px; width: auto; object-fit: contain; margin-right: 12px;">
                <span>${brand.name}</span>
            </div>
        `).join('');
        // Prepend an "All Vehicles" option
        const allPill = document.createElement('div');
        allPill.className = 'filter-card' + (currentFilterType !== 'brand' ? ' active' : '');
        allPill.onclick = function() { resetFilters(); };
        allPill.innerHTML = '<i class="fas fa-th-large"></i><span>All Vehicles</span>';
        brandGrid.insertBefore(allPill, brandGrid.firstChild);
    }

    if (categoryGrid) {
        categoryGrid.innerHTML = categories.map(cat => `
            <div class="filter-card category-card ${currentFilterType === 'category' && currentFilterValue === cat.id ? 'active' : ''}" 
                 onclick="applyFilter('category', '${cat.id}')">
                <i class="fas ${cat.icon}"></i>
                <span>${cat.name}</span>
            </div>
        `).join('');
        // Prepend an "All Products" option
        const allPill = document.createElement('div');
        allPill.className = 'filter-card' + (currentFilterType !== 'category' ? ' active' : '');
        allPill.onclick = function() { resetFilters(); };
        allPill.innerHTML = '<i class="fas fa-th-large"></i><span>All Products</span>';
        categoryGrid.insertBefore(allPill, categoryGrid.firstChild);
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
                    <p class="product-price">${product.price > 0 ? 'R ' + product.price.toLocaleString() : 'Price TBC'}</p>
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

    // Mobile Accordion Logic: clicking main sections navigates, clicking the chevron expands
    const accordionToggles = document.querySelectorAll('.accordion-toggle');
    accordionToggles.forEach(btn => {
        btn.addEventListener('click', function(e) {
            // If clicking the chevron icon, just expand/collapse
            if (e.target.classList.contains('fa-chevron-down')) {
                const content = btn.nextElementSibling;
                const isExpanded = content.classList.contains('expanded');
                document.querySelectorAll('.accordion-content').forEach(c => c.classList.remove('expanded'));
                document.querySelectorAll('.accordion-toggle i:last-child').forEach(i => i.style.transform = '');
                if (!isExpanded) {
                    content.classList.add('expanded');
                    const chevron = btn.querySelector('i:last-child');
                    if (chevron) chevron.style.transform = 'rotate(180deg)';
                }
                return;
            }
            // Navigate for main section buttons
            if (btn.querySelector('.fa-toolbox')) {
                window.location.href = 'explore-gear.html';
                return;
            }
            if (btn.querySelector('.fa-car')) {
                window.location.href = 'explore-gear.html#brand-filter-grid';
                return;
            }
            // Default: expand/collapse
            const content = btn.nextElementSibling;
            const isExpanded = content.classList.contains('expanded');
            document.querySelectorAll('.accordion-content').forEach(c => c.classList.remove('expanded'));
            document.querySelectorAll('.accordion-toggle i:last-child').forEach(i => i.style.transform = '');
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
        
        // All slides stay for 7 seconds to give visitors comfortable reading time
        const duration = 7000;
        
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
    
    // Side-hover button behavior: buttons appear when hovering near edges, disappear after 2s
    setupSideHoverButtons('.hero-slider-section', '.slider-arrow', 100);
}

/* =========================================
   10b. GEOLOCATION TRACKING (lightweight, non-blocking)
   ========================================= */
(function() {
    // Check if already captured within 24 hours — skip entirely if so
    const lastCapture = localStorage.getItem('odyssey_geo_last_capture');
    if (lastCapture) {
        const hoursSince = (Date.now() - parseInt(lastCapture)) / (1000 * 60 * 60);
        if (hoursSince < 24) return; // Skip everything
    }

    // Mark as captured NOW to prevent repeated attempts on this visit
    localStorage.setItem('odyssey_geo_last_capture', String(Date.now()));

    function fallbackIPLocation() {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://ipapi.co/json/', true);
        xhr.timeout = 5000;
        xhr.onload = function() {
            if (xhr.status === 200) {
                try {
                    var data = JSON.parse(xhr.responseText);
                    storeGeoData({
                        lat: data.latitude,
                        lng: data.longitude,
                        city: data.city,
                        region: data.region,
                        country: data.country_name,
                        ip: data.ip,
                        timestamp: new Date().toISOString(),
                        source: 'ip'
                    });
                } catch(e) {}
            }
        };
        xhr.onerror = function() {};
        xhr.send();
    }

    function storeGeoData(geoData) {
        // Route through Supabase data layer (falls back to localStorage if not configured)
        if (window.db && window.db.saveGeoData) {
            db.saveGeoData(geoData);
        } else {
            // Direct localStorage fallback if supabase.js hasn't loaded yet
            try {
                var stored = localStorage.getItem('odyssey_geo_tracking');
                var geoHistory = stored ? JSON.parse(stored) : [];
                geoHistory.push(geoData);
                if (geoHistory.length > 1000) {
                    geoHistory = geoHistory.slice(-1000);
                }
                localStorage.setItem('odyssey_geo_tracking', JSON.stringify(geoHistory));
            } catch(e) {}
        }
    }

    // Try IP-based geolocation only (no GPS — avoids browser permission popup that causes stuttering)
    // This runs after a longer delay so it doesn't interfere with page rendering
    if (document.readyState === 'complete') {
        setTimeout(fallbackIPLocation, 4000);
    } else {
        window.addEventListener('load', function() {
            setTimeout(fallbackIPLocation, 4000);
        });
    }
})();

/* =========================================
   10c. SLIDER SIDE-HOVER BUTTON BEHAVIOR
   ========================================= */
function setupSideHoverButtons(containerSelector, buttonSelector, sideThreshold) {
    const container = document.querySelector(containerSelector);
    if (!container) return;
    const buttons = container.querySelectorAll(buttonSelector);
    if (!buttons.length) return;
    
    let hideTimeout = null;
    let buttonsVisible = false;
    
    container.addEventListener('mousemove', function(e) {
        const rect = container.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const width = rect.width;
        const nearSide = x < sideThreshold || x > width - sideThreshold;
        
        if (nearSide && !buttonsVisible) {
            buttons.forEach(function(btn) { btn.classList.add('visible'); });
            buttonsVisible = true;
            if (hideTimeout) clearTimeout(hideTimeout);
            hideTimeout = setTimeout(function() {
                buttons.forEach(function(btn) { btn.classList.remove('visible'); });
                buttonsVisible = false;
                hideTimeout = null;
            }, 2000);
        } else if (!nearSide && buttonsVisible) {
            buttons.forEach(function(btn) { btn.classList.remove('visible'); });
            buttonsVisible = false;
            if (hideTimeout) {
                clearTimeout(hideTimeout);
                hideTimeout = null;
            }
        }
    });
    
    container.addEventListener('mouseleave', function() {
        buttons.forEach(function(btn) { btn.classList.remove('visible'); });
        buttonsVisible = false;
        if (hideTimeout) {
            clearTimeout(hideTimeout);
            hideTimeout = null;
        }
    });
}
