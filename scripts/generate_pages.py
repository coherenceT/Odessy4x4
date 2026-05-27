#!/usr/bin/env python3
import os

# Define categories
categories = [
    {
        "id": "front-bumpers",
        "filename": "category-front-bumpers.html",
        "title": "Front Bumpers",
        "subtitle": "Premium Front replacement bumpers engineered to protect your vehicle in the wildest terrains. Winch compatible and precision-engineered."
    },
    {
        "id": "rear-bumpers",
        "filename": "category-rear-bumpers.html",
        "title": "Rear Bumpers",
        "subtitle": "High departure clearance rear bumpers, including carrier systems and stealth designs. Built for extreme recovery and utility."
    },
    {
        "id": "rock-sliders",
        "filename": "category-rock-sliders.html",
        "title": "Rock Sliders",
        "subtitle": "Heavy-duty sill guards with integrated dimpled step treads. Hand-welded and chassis-mounted for ultimate side impact safety."
    },
    {
        "id": "fridge-slides",
        "filename": "category-fridge-slides.html",
        "title": "Fridge Slides",
        "subtitle": "Premium lock-in lock-out bearing runner fridge slides. Smooth and heavy-duty, designed to support massive cargo capacities."
    },
    {
        "id": "drawer-systems",
        "filename": "category-drawer-systems.html",
        "title": "Drawer Systems",
        "subtitle": "High-end storage and double-drawer setups. Custom lockable slides, flush tie-down points, and a full-carpet premium finish."
    },
    {
        "id": "accessories",
        "filename": "category-accessories.html",
        "title": "Roll Bars",
        "subtitle": "Functional and rugged Odyssey roll bars designed to secure gear and add structural integrity to your load bed."
    }
]

# Define vehicles
vehicles = [
    {
        "id": "ford",
        "filename": "vehicle-ford.html",
        "title": "Ford Gear",
        "subtitle": "Explore our full catalog of premium steel front bumpers, rear carrier systems, and accessories customized specifically for Ford Ranger, Raptor, and Everest."
    },
    {
        "id": "toyota",
        "filename": "vehicle-toyota.html",
        "title": "Toyota Gear",
        "subtitle": "Rugged front replacement bars, heavy-duty rock sliders, and drawer setups custom engineered to fit Toyota Land Cruiser, Hilux, and Fortuner."
    },
    {
        "id": "nissan",
        "filename": "vehicle-nissan.html",
        "title": "Nissan Gear",
        "subtitle": "CNC laser-cut front bars, high-clearance sliders, and accessory mounts custom-tailored for Nissan Navara / Patrol rigs."
    },
    {
        "id": "isuzu",
        "filename": "vehicle-isuzu.html",
        "title": "Isuzu Gear",
        "subtitle": "Explore chassis-mounted front bumpers, modular multi-carrier rear systems, and slides custom engineered to protect the Isuzu D-Max."
    },
    {
        "id": "mazda",
        "filename": "vehicle-mazda.html",
        "title": "Mazda Gear",
        "subtitle": "High-departure wrap-around front bumper systems and heavy-duty sill rock sliders engineered specifically for the Mazda BT-50 double cab."
    }
]

# Shared header html
header_html = """    <!-- HEADER (WHITE THEME) -->
    <header>
        <div class="main-header">
            <div class="container main-header-content">
                <!-- Logo -->
                <a href="index.html" class="header-logo">
                    <img src="assets/images/odyssey4x4-logo.jpg" alt="Odyssey 4x4 Logo" style="display:block;background:#ffffff;border-radius:4px;">
                </a>

                <!-- Desktop Navigation -->
                <nav class="desktop-nav">
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li class="has-dropdown">
                            <a href="explore-gear.html">Products <i class="fas fa-chevron-down" style="font-size: 0.8em; margin-left: 5px;"></i></a>
                            <ul class="dropdown">
                                <li><a href="category-front-bumpers.html">Front Bumpers</a></li>
                                <li><a href="category-rear-bumpers.html">Rear Bumpers</a></li>
                                <li><a href="category-rock-sliders.html">Rock Sliders</a></li>
                                <li><a href="category-fridge-slides.html">Fridge Slides</a></li>
                                <li><a href="category-drawer-systems.html">Drawer Systems</a></li>
                                <li><a href="category-accessories.html">Roll Bars</a></li>
                            </ul>
                        </li>
                        <li class="has-dropdown">
                            <a href="explore-gear.html#brand-filter-grid">Vehicles <i class="fas fa-chevron-down" style="font-size: 0.8em; margin-left: 5px;"></i></a>
                            <ul class="dropdown">
                                <li><a href="vehicle-ford.html">Ford</a></li>
                                <li><a href="vehicle-toyota.html">Toyota</a></li>
                                <li><a href="vehicle-nissan.html">Nissan</a></li>
                                <li><a href="vehicle-isuzu.html">Isuzu</a></li>
                                <li><a href="vehicle-mazda.html">Mazda</a></li>
                            </ul>
                        </li>
                        <li><a href="index.html#contact">Contact</a></li>
                    </ul>
                </nav>

                <!-- Hamburger Trigger for Mobile -->
                <div class="mobile-toggle">
                    <i class="fas fa-bars"></i>
                </div>
            </div>
        </div>
    </header>

    <!-- MOBILE SLIDE-OUT MENU -->
    <div class="slide-menu-overlay" id="slide-menu-overlay"></div>
    <div class="slide-menu" id="slide-menu">
        <div class="slide-menu-header">
            <a href="index.html" class="slide-menu-logo">
                <img src="assets/images/odyssey4x4-logo.jpg" alt="Odyssey 4x4 Logo" style="background:#ffffff;border-radius:4px;">
            </a>
            <button class="slide-menu-close" id="slide-menu-close" aria-label="Close menu">&times;</button>
        </div>
        <div class="slide-menu-links">
            <!-- Main Navigation Links -->
            <a href="index.html" class="mobile-link">Home</a>
            
            <div class="mobile-accordion">
                <button class="accordion-toggle"><i class="fas fa-car"></i> Vehicles <i class="fas fa-chevron-down"></i></button>
                <div class="accordion-content">
                    <a href="vehicle-ford.html"><i class="fas fa-chevron-right"></i> Ford</a>
                    <a href="vehicle-toyota.html"><i class="fas fa-chevron-right"></i> Toyota</a>
                    <a href="vehicle-nissan.html"><i class="fas fa-chevron-right"></i> Nissan</a>
                    <a href="vehicle-isuzu.html"><i class="fas fa-chevron-right"></i> Isuzu</a>
                    <a href="vehicle-mazda.html"><i class="fas fa-chevron-right"></i> Mazda</a>
                </div>
            </div>
            
            <a href="explore-gear.html#brand-filter-grid" class="mobile-link" onclick="closeMenu()">Find my Vehicle</a>
            <a href="index.html#contact" class="mobile-link" onclick="closeMenu()">Contact</a>

            <!-- Promo Banners Section -->
            <div class="menu-promo-container">
                <!-- Banner 1: Drawer Systems -->
                <a href="category-drawer-systems.html" class="menu-promo-card promo-drawer" onclick="closeMenu()">
                    <span class="promo-badge">BUILT FOR ORDER</span>
                    <h4>Shop Drawer Systems</h4>
                    <p>Offroad Vehicle Accessories</p>
                </a>
                
                <!-- Banner 2: Find my Vehicle -->
                <a href="explore-gear.html#brand-filter-grid" class="menu-promo-card promo-vehicle" onclick="closeMenu()">
                    <span class="promo-badge">TOUGH Never Looked this good!</span>
                    <h4>Find My Vehicle</h4>
                    <p>Select Brand & Model</p>
                </a>
            </div>

            <!-- RSA Trust Badges Section -->
            <div class="menu-trust-container">
                <div class="menu-trust-badge">
                    <div class="menu-trust-icon">
                        <i class="fas fa-sun"></i>
                    </div>
                    <span>Made for RSA conditions</span>
                </div>
                <div class="menu-trust-badge">
                    <div class="menu-trust-icon">
                        <i class="fas fa-cubes"></i>
                    </div>
                    <span>Modular Design</span>
                </div>
                <div class="menu-trust-badge">
                    <div class="menu-trust-icon">
                        <i class="fas fa-shield-halved"></i>
                    </div>
                    <span>Airbag compatible</span>
                </div>
            </div>

            <!-- Shop Categories Accordion -->
            <div class="mobile-accordion">
                <button class="accordion-toggle"><i class="fas fa-toolbox"></i> Shop Products <i class="fas fa-chevron-down"></i></button>
                <div class="accordion-content">
                    <a href="category-front-bumpers.html"><i class="fas fa-chevron-right"></i> Front Bumpers</a>
                    <a href="category-rear-bumpers.html"><i class="fas fa-chevron-right"></i> Rear Bumpers</a>
                    <a href="category-rock-sliders.html"><i class="fas fa-chevron-right"></i> Rock Sliders</a>
                    <a href="category-fridge-slides.html"><i class="fas fa-chevron-right"></i> Fridge Slides</a>
                    <a href="category-drawer-systems.html"><i class="fas fa-chevron-right"></i> Drawer Systems</a>
                    <a href="category-accessories.html"><i class="fas fa-chevron-right"></i> Roll Bars</a>
                </div>
            </div>

            <!-- Shop by Brand Accordion -->
            <div class="mobile-accordion">
                <button class="accordion-toggle"><i class="fas fa-tags"></i> Shop by Brand <i class="fas fa-chevron-down"></i></button>
                <div class="accordion-content">
                    <a href="vehicle-ford.html"><i class="fas fa-chevron-right"></i> Ford</a>
                    <a href="vehicle-toyota.html"><i class="fas fa-chevron-right"></i> Toyota</a>
                    <a href="vehicle-nissan.html"><i class="fas fa-chevron-right"></i> Nissan</a>
                    <a href="vehicle-isuzu.html"><i class="fas fa-chevron-right"></i> Isuzu</a>
                    <a href="vehicle-mazda.html"><i class="fas fa-chevron-right"></i> Mazda</a>
                </div>
            </div>
        </div>
        <div class="red-ribbon"></div>
    </div>"""

# Shared footer html
footer_html = """    <!-- FOOTER -->
    <footer style="background: #111111; padding: 60px 0; border-top: 1px solid var(--color-border); color: #ffffff;">
        <div class="container">
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 40px; margin-bottom: 50px;">
                <div class="footer-col">
                    <h4 style="margin-bottom: 20px; font-size: 1rem; color: white; letter-spacing: 1px;">Products</h4>
                    <ul class="footer-links" style="list-style: none; padding: 0;">
                        <li style="margin-bottom: 10px;"><a href="category-front-bumpers.html" style="color: #aaaaaa; transition: color 0.3s;">Front Bumpers</a></li>
                        <li style="margin-bottom: 10px;"><a href="category-rear-bumpers.html" style="color: #aaaaaa; transition: color 0.3s;">Rear Bumpers</a></li>
                        <li style="margin-bottom: 10px;"><a href="category-rock-sliders.html" style="color: #aaaaaa; transition: color 0.3s;">Rock Sliders</a></li>
                        <li style="margin-bottom: 10px;"><a href="category-fridge-slides.html" style="color: #aaaaaa; transition: color 0.3s;">Fridge Slides</a></li>
                        <li style="margin-bottom: 10px;"><a href="category-drawer-systems.html" style="color: #aaaaaa; transition: color 0.3s;">Drawer Systems</a></li>
                        <li style="margin-bottom: 10px;"><a href="category-accessories.html" style="color: #aaaaaa; transition: color 0.3s;">Roll Bars</a></li>
                    </ul>
                </div>
                <div class="footer-col" style="display: flex; flex-direction: column; justify-content: center; grid-column: span 2;">
                    <img src="assets/images/odyssey4x4-logo.jpg" alt="Odyssey 4x4" style="height: 75px; margin-bottom: 16px; background:#ffffff; padding:8px 12px; border-radius:6px; display:inline-block; width:auto; object-fit:contain;">
                    <h4 style="font-size: 1.8rem; line-height: 1.3; color: white; text-transform: none; font-weight: 900; margin: 0 0 10px;">
                        Built for Adventure.<br>
                        <span style="color: var(--color-accent);">Engineered to Last.</span>
                    </h4>
                </div>
                <div class="footer-col">
                    <h4 style="margin-bottom: 20px; font-size: 1rem; color: white; letter-spacing: 1px;">Quick Links</h4>
                    <ul class="footer-links" style="list-style: none; padding: 0;">
                        <li style="margin-bottom: 10px;"><a href="index.html" style="color: #aaaaaa; transition: color 0.3s;">Homepage</a></li>
                        <li style="margin-bottom: 10px;"><a href="index.html#about" style="color: #aaaaaa; transition: color 0.3s;">About Us</a></li>
                        <li style="margin-bottom: 10px;"><a href="index.html#contact" style="color: #aaaaaa; transition: color 0.3s;">Contact Us</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h4 style="margin-bottom: 20px; font-size: 1rem; color: white; letter-spacing: 1px;">Get In Touch</h4>
                    <ul class="footer-links" style="list-style: none; padding: 0;">
                        <li style="margin-bottom: 15px; color: #aaaaaa;">
                            <strong style="display: block; color: white; margin-bottom: 3px;">Email:</strong>
                            <a href="mailto:info@odyssey4x4.co.za" style="color: #aaaaaa; transition: color 0.3s;">info@odyssey4x4.co.za</a>
                        </li>
                        <li style="margin-bottom: 15px; color: #aaaaaa;">
                            <strong style="display: block; color: white; margin-bottom: 3px;">Phone:</strong>
                            <a href="tel:+27722573089" style="color: #aaaaaa; transition: color 0.3s;">+27 72 257 3089</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div style="border-top: 1px solid #222; padding-top: 30px; text-align: center; color: #777; font-size: 0.85rem; font-weight: 600;">
                <p>&copy; 2026 Odyssey 4x4 Expedition Gear. All Rights Reserved.</p>
            </div>
        </div>
    </footer>

    <!-- PULSATING FLOATING WHATSAPP SYSTEM -->
    <div class="whatsapp-float-container">
        <button class="whatsapp-float-trigger" aria-label="Open WhatsApp Menu">
            <i class="fab fa-whatsapp"></i>
        </button>
        <div class="whatsapp-popup-menu">
            <div class="whatsapp-menu-header">
                <h4>Inquire Directly</h4>
            </div>
            <a href="https://wa.me/27722573089?text=Hi%20Odyssey%204x4%2C%20I%20would%20like%20to%20inquire%20about%20Front%20Bumpers." target="_blank" class="whatsapp-menu-item">
                <i class="fas fa-truck-front"></i> Front Bumpers
            </a>
            <a href="https://wa.me/27722573089?text=Hi%20Odyssey%204x4%2C%20I%20would%20like%20to%20inquire%20about%20Rear%20Bumpers." target="_blank" class="whatsapp-menu-item">
                <i class="fas fa-truck-monster"></i> Rear Bumpers
            </a>
            <a href="https://wa.me/27722573089?text=Hi%20Odyssey%204x4%2C%20I%20would%20like%20to%20inquire%20about%20Rock%20Sliders." target="_blank" class="whatsapp-menu-item">
                <i class="fas fa-grip-lines"></i> Rock Sliders
            </a>
            <a href="https://wa.me/27722573089?text=Hi%20Odyssey%204x4%2C%20I%20have%20a%20general%20question%20about%20your%20off-road%20gear." target="_blank" class="whatsapp-menu-item">
                <i class="fas fa-envelope"></i> General Inquiry
            </a>
        </div>
    </div>"""

def generate_pages():
    workspace_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    
    category_template = """<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{CAT_TITLE}} | Odyssey 4x4</title>
    <meta name="description" content="{{CAT_SUBTITLE}}">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Montserrat:wght@400;600;700;800;900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="stylesheet" href="styles/main.css">
    <link rel="stylesheet" href="styles/header-redesign.css">
</head>

<body>

{{HEADER_HTML}}

    <!-- BREADCRUMB -->
    <section style="background-color: #f8f9fa; padding: 20px 0;">
        <div class="container">
            <div style="display: flex; align-items: center; gap: 10px; font-size: 0.9rem; color: #666;">
                <a href="index.html" style="color: var(--color-accent);">Home</a>
                <i class="fas fa-chevron-right" style="font-size: 0.7rem;"></i>
                <span style="font-weight: 600;">{{CAT_TITLE}}</span>
            </div>
        </div>
    </section>

    <!-- SECTION TITLE -->
    <section class="section-padding" style="background-color: #ffffff; padding-top: 50px; padding-bottom: 20px; border-bottom: 1px solid var(--color-border);">
        <div class="container">
            <h1 style="font-size: 2.6rem; color: var(--color-secondary); margin-bottom: 15px;">{{CAT_TITLE}}</h1>
            <p style="color: var(--color-text-muted); font-size: 1.05rem; max-width: 800px; line-height: 1.7; font-weight: 600;">{{CAT_SUBTITLE}}</p>
        </div>
    </section>

    <!-- DYNAMIC PRODUCTS GRID -->
    <section class="section-padding" style="background-color: #fafafa;">
        <div class="container">
            <div class="grid">
                <!-- Injected dynamically by inline JS script -->
            </div>
        </div>
    </section>

{{FOOTER_HTML}}

    <!-- SCRIPTS -->
    <script src="scripts/main.js"></script>
    <script>
        document.addEventListener('DOMContentLoaded', () => {
            const productGrid = document.querySelector('.grid');
            if (!productGrid) return;
            
            const catId = "{{CAT_ID}}";
            const filtered = products.filter(p => p.category === catId);
            
            if (filtered.length === 0) {
                productGrid.innerHTML = `<div class="no-results" style="grid-column: 1/-1; text-align: center; padding: 50px 0; color: var(--color-text-muted); font-weight: 600;">No products found in this category.</div>`;
                return;
            }
            
            productGrid.innerHTML = filtered.map(product => {
                const isPlaceholder = product.image.includes('placeholder');
                const displayImage = isPlaceholder && product.fitmentImage ? product.fitmentImage : product.image;
                
                let statusLabel = 'In Stock';
                if (product.status === 'out-of-stock') statusLabel = 'Sold Out';
                else if (product.status === 'waiting-for-design') statusLabel = 'New Design Coming';
                
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
                            <span class="product-category">${product.category.replace('-', ' ').toUpperCase()}</span>
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
        });
    </script>
</body>

</html>"""

    vehicle_template = """<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{VEHICLE_TITLE}} | Odyssey 4x4</title>
    <meta name="description" content="{{VEHICLE_SUBTITLE}}">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Montserrat:wght@400;600;700;800;900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="stylesheet" href="styles/main.css">
    <link rel="stylesheet" href="styles/header-redesign.css">
</head>

<body>

{{HEADER_HTML}}

    <!-- BREADCRUMB -->
    <section style="background-color: #f8f9fa; padding: 20px 0;">
        <div class="container">
            <div style="display: flex; align-items: center; gap: 10px; font-size: 0.9rem; color: #666;">
                <a href="index.html" style="color: var(--color-accent);">Home</a>
                <i class="fas fa-chevron-right" style="font-size: 0.7rem;"></i>
                <span style="font-weight: 600;">{{VEHICLE_TITLE}}</span>
            </div>
        </div>
    </section>

    <!-- SECTION TITLE -->
    <section class="section-padding" style="background-color: #ffffff; padding-top: 50px; padding-bottom: 20px; border-bottom: 1px solid var(--color-border);">
        <div class="container">
            <h1 style="font-size: 2.6rem; color: var(--color-secondary); margin-bottom: 15px;">{{VEHICLE_TITLE}}</h1>
            <p style="color: var(--color-text-muted); font-size: 1.05rem; max-width: 800px; line-height: 1.7; font-weight: 600;">{{VEHICLE_SUBTITLE}}</p>
        </div>
    </section>

    <!-- DYNAMIC PRODUCTS SECTION -->
    <section class="section-padding" style="background-color: #fafafa;">
        <div class="container">
            <div id="bumpers-container">
                <h2 style="font-size: 1.8rem; font-weight: 800; color: var(--color-secondary); margin-bottom: 30px; border-bottom: 2px solid var(--color-accent); padding-bottom: 10px; display: inline-block;">REPLACEMENT BUMPERS</h2>
                <div class="grid" id="bumpers-grid" style="margin-bottom: 50px;">
                    <!-- Bumpers injected dynamically -->
                </div>
            </div>
            
            <div id="accessories-container">
                <h2 style="font-size: 1.8rem; font-weight: 800; color: var(--color-secondary); margin-bottom: 30px; border-bottom: 2px solid var(--color-accent); padding-bottom: 10px; display: inline-block;">COMPATIBLE ACCESSORIES & GEAR</h2>
                <div class="grid" id="accessories-grid">
                    <!-- Accessories injected dynamically -->
                </div>
            </div>
        </div>
    </section>

{{FOOTER_HTML}}

    <!-- SCRIPTS -->
    <script src="scripts/main.js"></script>
    <script>
        document.addEventListener('DOMContentLoaded', () => {
            const bumpersGrid = document.getElementById('bumpers-grid');
            const accessoriesGrid = document.getElementById('accessories-grid');
            const bumpersContainer = document.getElementById('bumpers-container');
            const accessoriesContainer = document.getElementById('accessories-container');
            
            if (!bumpersGrid || !accessoriesGrid) return;
            
            const brandId = "{{VEHICLE_ID}}";
            
            // Filter bumpers (brand-specific + universal)
            const bumpers = products.filter(p => 
                (p.brand === brandId || p.brand === 'universal') && 
                (p.category === 'front-bumpers' || p.category === 'rear-bumpers')
            );
            
            // Filter other accessories (brand-specific + universal)
            const accessories = products.filter(p => 
                (p.brand === brandId || p.brand === 'universal') && 
                (p.category !== 'front-bumpers' && p.category !== 'rear-bumpers')
            );
            
            const renderGrid = (grid, items) => {
                grid.innerHTML = items.map(product => {
                    const isPlaceholder = product.image.includes('placeholder');
                    const displayImage = isPlaceholder && product.fitmentImage ? product.fitmentImage : product.image;
                    
                    let statusLabel = 'In Stock';
                    if (product.status === 'out-of-stock') statusLabel = 'Sold Out';
                    else if (product.status === 'waiting-for-design') statusLabel = 'New Design Coming';
                    
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
                                <span class="product-category">${product.category.replace('-', ' ').toUpperCase()}</span>
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
            };
            
            if (bumpers.length === 0) {
                bumpersContainer.style.display = 'none';
            } else {
                renderGrid(bumpersGrid, bumpers);
            }
            
            if (accessories.length === 0) {
                accessoriesContainer.style.display = 'none';
            } else {
                renderGrid(accessoriesGrid, accessories);
            }
            
            if (bumpers.length === 0 && accessories.length === 0) {
                const mainContainer = bumpersContainer.parentElement;
                mainContainer.innerHTML = `<div class="no-results" style="text-align: center; padding: 80px 0; color: var(--color-text-muted); font-weight: 600; font-size: 1.2rem;">No products found for this vehicle.</div>`;
            }
        });
    </script>
</body>

</html>"""

    # 1. Create Category Pages
    for cat in categories:
        filepath = os.path.join(workspace_dir, cat["filename"])
        content = category_template
        content = content.replace("{{CAT_TITLE}}", cat["title"])
        content = content.replace("{{CAT_SUBTITLE}}", cat["subtitle"])
        content = content.replace("{{CAT_ID}}", cat["id"])
        content = content.replace("{{HEADER_HTML}}", header_html)
        content = content.replace("{{FOOTER_HTML}}", footer_html)
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Generated category page: {cat['filename']}")

    # 2. Create Vehicle Pages
    for v in vehicles:
        filepath = os.path.join(workspace_dir, v["filename"])
        content = vehicle_template
        content = content.replace("{{VEHICLE_TITLE}}", v["title"])
        content = content.replace("{{VEHICLE_SUBTITLE}}", v["subtitle"])
        content = content.replace("{{VEHICLE_ID}}", v["id"])
        content = content.replace("{{HEADER_HTML}}", header_html)
        content = content.replace("{{FOOTER_HTML}}", footer_html)
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Generated vehicle page: {v['filename']}")

    print("\n[SUCCESS] Successfully generated all category and vehicle dynamic pages!")

if __name__ == "__main__":
    generate_pages()
