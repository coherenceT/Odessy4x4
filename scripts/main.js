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
        stock: "in-stock",
        partNumber: "OD-FB-001",
        description: "Heavy duty steel front bumper with integrated winch plate and LED light mounts.",
        features: [
            "3mm steel construction",
            "Winch plate rated for up to 12,000 lbs",
            "Integrated LED light mounts",
            "Powder-coated finish",
            "Recovery point rated 4.75 ton"
        ],
        specifications: {
            material: "3mm Steel",
            weight: "45kg",
            finish: "Black Powder Coat",
            warranty: "2 Years"
        }
    },
    {
        id: 2,
        name: "Odyssey Stealth Bumper - Rear",
        category: "stealth-rear-bumpers",
        brand: "toyota",
        price: 16500,
        image: "assets/images/Odyssey Stealth Bumper - Rear.jpg",
        stock: "in-stock",
        partNumber: "OD-RB-002",
        description: "High clearance rear bumper with swing arm capability and integrated jerry can holders.",
        features: [
            "High departure angle design",
            "Swing arm compatible",
            "Dual jerry can holders",
            "Integrated tow points",
            "LED light bar ready"
        ],
        specifications: {
            material: "3mm Steel",
            weight: "52kg",
            finish: "Black Powder Coat",
            warranty: "2 Years"
        }
    },
    {
        id: 3,
        name: "Tactical Front Bumper - Hilux",
        category: "front-bumpers",
        brand: "toyota",
        price: 19500,
        image: "assets/images/bumper-placeholder.jpg",
        stock: "in-stock",
        partNumber: "OD-FB-003",
        description: "Premium front bumper designed specifically for Toyota Hilux with integrated bash plate.",
        features: [
            "Vehicle-specific fitment",
            "Integrated bash plate",
            "Fog light cut-outs",
            "Tow hooks included",
            "Modular design"
        ],
        specifications: {
            material: "3mm Steel",
            weight: "48kg",
            finish: "Black Powder Coat",
            warranty: "2 Years"
        }
    },
    {
        id: 24,
        name: "Premium Front Bumper - Ranger",
        category: "front-bumpers",
        brand: "ford",
        price: 17500,
        image: "assets/images/front-bumpers.jpg",
        stock: "in-stock",
        partNumber: "OD-FB-004",
        description: "Rugged front bumper for Ford Ranger with integrated fog lights and recovery points.",
        features: [
            "Heavy duty construction",
            "Integrated fog lights",
            "Recovery points included",
            "Winch compatible",
            "ADR compliant"
        ],
        specifications: {
            material: "3mm Steel",
            weight: "42kg",
            finish: "Black Powder Coat",
            warranty: "2 Years"
        }
    },
    {
        id: 25,
        name: "Expedition Front Bumper",
        category: "front-bumpers",
        brand: "universal",
        price: 20500,
        image: "assets/images/bull-bar-showcase.jpg",
        stock: "in-stock",
        partNumber: "OD-FB-005",
        description: "Ultimate expedition-grade front bumper with maximum protection and functionality.",
        features: [
            "Maximum protection design",
            "Multiple light mounting points",
            "Heavy duty winch mount",
            "Integrated bash plate",
            "Premium finish"
        ],
        specifications: {
            material: "4mm Steel",
            weight: "55kg",
            finish: "Black Powder Coat",
            warranty: "3 Years"
        }
    },
    {
        id: 26,
        name: "Rear Bumper with Tire Carrier",
        category: "rear-bumpers-carrier",
        brand: "universal",
        price: 19500,
        image: "assets/images/rear-bumpers.jpg",
        stock: "in-stock",
        partNumber: "OD-RBC-003",
        description: "Heavy duty rear bumper with integrated tire carrier and jerry can holders.",
        features: [
            "Swing-out tire carrier",
            "Dual jerry can mounts",
            "LED light bar ready",
            "Recovery points",
            "Heavy duty construction"
        ],
        specifications: {
            material: "3mm Steel",
            weight: "65kg",
            finish: "Black Powder Coat",
            warranty: "2 Years"
        }
    },
    {
        id: 27,
        name: "Expedition Rear Bumper System",
        category: "rear-bumpers-carrier",
        brand: "universal",
        price: 22500,
        image: "assets/images/Odyssey Stealth Bumper - Rear.jpg",
        stock: "in-stock",
        partNumber: "OD-RBC-004",
        description: "Complete rear bumper system with carrier, storage, and recovery capabilities.",
        features: [
            "Full carrier system",
            "Multiple storage options",
            "Integrated recovery points",
            "Modular design",
            "Premium construction"
        ],
        specifications: {
            material: "3mm Steel",
            weight: "70kg",
            finish: "Black Powder Coat",
            warranty: "3 Years"
        }
    },
    {
        id: 28,
        name: "Pro Series Rock Sliders",
        category: "rock-sliders",
        brand: "universal",
        price: 9500,
        image: "assets/images/rocksliders.jpg",
        stock: "in-stock",
        partNumber: "OD-RS-003",
        description: "Professional grade rock sliders with integrated step and maximum protection.",
        features: [
            "65x65mm tubing",
            "Integrated step design",
            "Chassis mounted",
            "Reinforced construction",
            "Pair included"
        ],
        specifications: {
            material: "Steel Tube",
            tubeSize: "65x65mm",
            finish: "Black Powder Coat",
            warranty: "2 Years"
        }
    },
    {
        id: 29,
        name: "Extreme Rock Sliders - Heavy Duty",
        category: "rock-sliders",
        brand: "universal",
        price: 11500,
        image: "assets/images/Heavy Duty Rock Sliders.jpg",
        stock: "in-stock",
        partNumber: "OD-RS-004",
        description: "Extreme duty rock sliders for the most demanding off-road conditions.",
        features: [
            "80x80mm heavy tubing",
            "Maximum protection",
            "Reinforced mounting",
            "Jack point integration",
            "Lifetime warranty"
        ],
        specifications: {
            material: "Steel Tube",
            tubeSize: "80x80mm",
            finish: "Black Powder Coat",
            warranty: "Lifetime"
        }
    },


    // TOW BARS
    {
        id: 4,
        name: "Heavy Duty Tow Bar - 3500kg",
        category: "tow-bars",
        brand: "universal",
        price: 4500,
        image: "assets/images/placeholder.jpg",
        stock: "in-stock",
        partNumber: "OD-TB-001",
        description: "Professional grade tow bar rated for 3500kg towing capacity.",
        features: [
            "3500kg towing capacity",
            "350kg ball weight",
            "7-pin connector included",
            "Corrosion resistant coating",
            "Easy bolt-on installation"
        ],
        specifications: {
            towingCapacity: "3500kg",
            ballWeight: "350kg",
            finish: "Galvanized",
            warranty: "3 Years"
        }
    },
    {
        id: 5,
        name: "Commercial Tow Bar - 4000kg",
        category: "tow-bars",
        brand: "universal",
        price: 5500,
        image: "assets/images/placeholder.jpg",
        stock: "in-stock",
        partNumber: "OD-TB-002",
        description: "Commercial grade heavy duty tow bar for maximum towing performance.",
        features: [
            "4000kg towing capacity",
            "400kg ball weight",
            "Reinforced construction",
            "13-pin connector option",
            "Lifetime structural warranty"
        ],
        specifications: {
            towingCapacity: "4000kg",
            ballWeight: "400kg",
            finish: "Black Powder Coat",
            warranty: "Lifetime"
        }
    },

    // ROOF RACKS
    {
        id: 6,
        name: "Expedition Roof Rack",
        category: "roof-racks",
        brand: "universal",
        price: 12000,
        image: "assets/images/Expedition Roof Rack.jpg",
        stock: "in-stock",
        partNumber: "OD-RR-001",
        description: "Aluminum low-profile roof rack for maximum storage with full-length platform.",
        features: [
            "Full-length platform design",
            "200kg load capacity",
            "Wind deflector included",
            "Multiple tie-down points",
            "LED light bar compatible"
        ],
        specifications: {
            material: "Aluminum",
            loadCapacity: "200kg",
            dimensions: "2200mm x 1250mm",
            warranty: "3 Years"
        }
    },
    {
        id: 7,
        name: "Slimline Roof Rack II",
        category: "roof-racks",
        brand: "universal",
        price: 9500,
        image: "assets/images/product-7.jpg",
        stock: "in-stock",
        partNumber: "OD-RR-002",
        description: "Compact slimline design perfect for daily driving with adventure capability.",
        features: [
            "Low-profile aerodynamic design",
            "150kg load capacity",
            "Quick-release accessories",
            "Integrated rail system",
            "Solar panel ready"
        ],
        specifications: {
            material: "Aluminum",
            loadCapacity: "150kg",
            dimensions: "1800mm x 1250mm",
            warranty: "3 Years"
        }
    },

    // ROCK SLIDERS
    {
        id: 8,
        name: "Heavy Duty Rock Sliders",
        category: "rock-sliders",
        brand: "universal",
        price: 8500,
        image: "assets/images/Heavy Duty Rock Sliders.jpg",
        stock: "in-stock",
        partNumber: "OD-RS-001",
        description: "Protect your vehicle's sills with these heavy-duty rock sliders with kick-out step.",
        features: [
            "60x60mm tubing",
            "Kick-out step design",
            "Chassis mounted",
            "Powder-coated finish",
            "Pair included"
        ],
        specifications: {
            material: "Steel Tube",
            tubeSize: "60x60mm",
            finish: "Black Powder Coat",
            warranty: "2 Years"
        }
    },
    {
        id: 9,
        name: "Competition Rock Sliders",
        category: "rock-sliders",
        brand: "universal",
        price: 10500,
        image: "assets/images/product-9.jpg",
        stock: "in-stock",
        partNumber: "OD-RS-002",
        description: "Competition-grade rock sliders for extreme off-road protection.",
        features: [
            "75x75mm heavy duty tubing",
            "Tree bar integration points",
            "Full underside protection",
            "Reinforced mounting brackets",
            "Jack points integrated"
        ],
        specifications: {
            material: "Steel Tube",
            tubeSize: "75x75mm",
            finish: "Black Powder Coat",
            warranty: "3 Years"
        }
    },

    // DRAWER SYSTEMS
    {
        id: 10,
        name: "Odyssey Drawer System",
        category: "drawer-systems",
        brand: "universal",
        price: 14500,
        image: "assets/images/Odyssey Drawer System.jpg",
        stock: "in-stock",
        partNumber: "OD-DS-001",
        description: "Premium dual drawer storage system with carpeted finish and integrated fridge slide.",
        features: [
            "Dual drawer configuration",
            "Heavy-duty roller slides",
            "Integrated fridge slide area",
            "Carpeted top surface",
            "Lockable drawers"
        ],
        specifications: {
            material: "Marine Ply & Aluminum",
            drawerLoad: "80kg per drawer",
            dimensions: "1200mm x 1000mm",
            warranty: "2 Years"
        }
    },
    {
        id: 11,
        name: "Compact Storage System",
        category: "drawer-systems",
        brand: "universal",
        price: 9500,
        image: "assets/images/product-11.jpg",
        stock: "in-stock",
        partNumber: "OD-DS-002",
        description: "Compact single drawer system ideal for smaller vehicles or weekend adventures.",
        features: [
            "Single large drawer",
            "Modular design",
            "Easy installation",
            "Water-resistant construction",
            "Tie-down points on top"
        ],
        specifications: {
            material: "Marine Ply",
            drawerLoad: "60kg",
            dimensions: "900mm x 1000mm",
            warranty: "2 Years"
        }
    },

    // FRIDGE SLIDES
    {
        id: 12,
        name: "Fridge Slide - 60L",
        category: "fridge-slides",
        brand: "universal",
        price: 3500,
        image: "assets/images/Fridge Slide - 60L.jpg",
        stock: "in-stock",
        partNumber: "OD-FS-001",
        description: "Heavy duty fridge slide for fridges up to 60L with smooth glide action.",
        features: [
            "Suits fridges up to 60L",
            "100kg load capacity",
            "Stainless steel runners",
            "Lockable in position",
            "Drop-down front option"
        ],
        specifications: {
            capacity: "60L Fridge",
            loadCapacity: "100kg",
            extension: "100% extension",
            warranty: "3 Years"
        }
    },
    {
        id: 13,
        name: "Heavy Duty Fridge Slide - 90L",
        category: "fridge-slides",
        brand: "universal",
        price: 4500,
        image: "assets/images/product-13.jpg",
        stock: "in-stock",
        partNumber: "OD-FS-002",
        description: "Premium fridge slide designed for larger fridges up to 90L.",
        features: [
            "Suits fridges up to 90L",
            "120kg load capacity",
            "Heavy-duty construction",
            "Full extension design",
            "Weatherproof sealed bearings"
        ],
        specifications: {
            capacity: "90L Fridge",
            loadCapacity: "120kg",
            extension: "100% extension",
            warranty: "3 Years"
        }
    },

    // WHEELS
    {
        id: 14,
        name: "Odyssey Alloy Wheels - 17\"",
        category: "wheels",
        brand: "universal",
        price: 12000,
        image: "assets/images/product-14.jpg",
        stock: "in-stock",
        partNumber: "OD-WH-001",
        description: "Rugged 17-inch alloy wheels with aggressive styling and superior strength.",
        features: [
            "17x9 inch dimensions",
            "6x139.7 PCD (Toyota/Isuzu)",
            "Matte black finish",
            "Load rated 1250kg",
            "Set of 4 wheels"
        ],
        specifications: {
            size: "17x9",
            pcd: "6x139.7",
            offset: "-12",
            warranty: "2 Years"
        }
    },
    {
        id: 15,
        name: "Odyssey Steel Wheels - 16\"",
        category: "wheels",
        brand: "universal",
        price: 6500,
        image: "assets/images/product-14.jpg",
        stock: "in-stock",
        partNumber: "OD-WH-002",
        description: "Durable steel wheels perfect for serious off-road adventures.",
        features: [
            "16x8 inch dimensions",
            "5x114.3 PCD (Ford Ranger)",
            "Black powder coat",
            "Load rated 1400kg",
            "Set of 4 wheels"
        ],
        specifications: {
            size: "16x8",
            pcd: "5x114.3",
            offset: "0",
            warranty: "3 Years"
        }
    },

    // ACCESSORIES
    {
        id: 16,
        name: "Recovery Kit - Professional",
        category: "accessories",
        brand: "universal",
        price: 3500,
        image: "assets/images/product-16.jpg",
        stock: "in-stock",
        partNumber: "OD-AC-001",
        description: "Complete recovery kit with snatch strap, shackles, and tree protector.",
        features: [
            "9m x 75mm snatch strap (8000kg)",
            "2x bow shackles (4.75 ton)",
            "Tree protector strap",
            "Recovery damper",
            "Heavy-duty carry bag"
        ],
        specifications: {
            strapRating: "8000kg",
            shackleRating: "4.75 ton",
            warranty: "1 Year"
        }
    },
    {
        id: 17,
        name: "Awning - 270° Wrap Around",
        category: "accessories",
        brand: "universal",
        price: 15500,
        image: "assets/images/product-16.jpg",
        stock: "in-stock",
        partNumber: "OD-AC-002",
        description: "Premium 270-degree awning providing maximum shade coverage.",
        features: [
            "270° coverage",
            "2.5m x 2.5m coverage area",
            "Ripstop canvas (300gsm)",
            "Quick setup",
            "Includes mounting brackets"
        ],
        specifications: {
            coverage: "270 degrees",
            size: "2.5m x 2.5m",
            material: "Ripstop Canvas",
            warranty: "2 Years"
        }
    },
    {
        id: 18,
        name: "Dual Battery System",
        category: "accessories",
        brand: "universal",
        price: 8500,
        image: "assets/images/product-16.jpg",
        stock: "in-stock",
        partNumber: "OD-AC-003",
        description: "Complete dual battery system with smart isolator and mounting tray.",
        features: [
            "Smart voltage sensing isolator",
            "100Ah AGM battery included",
            "Battery tray and hold-down",
            "Complete wiring kit",
            "Mounting hardware included"
        ],
        specifications: {
            batteryType: "AGM 100Ah",
            isolatorType: "Voltage Sensing",
            warranty: "2 Years"
        }
    },

    // LIGHTING
    {
        id: 19,
        name: "LED Light Bar - 32\"",
        category: "lighting",
        brand: "universal",
        price: 4500,
        image: "assets/images/product-19.jpg",
        stock: "in-stock",
        partNumber: "OD-LT-001",
        description: "High-output 32-inch LED light bar with combo beam pattern.",
        features: [
            "180W power output",
            "Combo beam (spot/flood)",
            "IP68 waterproof rating",
            "18,000 lumens",
            "Wiring harness included"
        ],
        specifications: {
            power: "180W",
            lumens: "18000",
            beamPattern: "Combo",
            warranty: "3 Years"
        }
    },
    {
        id: 20,
        name: "LED Spot Lights - Pair",
        category: "lighting",
        brand: "universal",
        price: 3500,
        image: "assets/images/product-19.jpg",
        stock: "in-stock",
        partNumber: "OD-LT-002",
        description: "Premium LED spot lights for long-distance illumination.",
        features: [
            "60W per light (120W total)",
            "Spot beam pattern",
            "5000 lumens per light",
            "Adjustable mounting brackets",
            "Complete wiring kit"
        ],
        specifications: {
            power: "60W each",
            lumens: "5000 each",
            beamPattern: "Spot",
            warranty: "3 Years"
        }
    },
    {
        id: 21,
        name: "Camp Light Kit - LED",
        category: "lighting",
        brand: "universal",
        price: 2500,
        image: "assets/images/product-19.jpg",
        stock: "in-stock",
        partNumber: "OD-LT-003",
        description: "Versatile LED camp lighting kit with remote control.",
        features: [
            "5m LED strip",
            "Remote control operation",
            "Dimmable functionality",
            "Multiple color modes",
            "12V powered"
        ],
        specifications: {
            length: "5 meters",
            power: "24W",
            voltage: "12V DC",
            warranty: "1 Year"
        }
    },

    // ADDITIONAL PRODUCTS
    {
        id: 22,
        name: "Snorkel Kit - Safari",
        category: "accessories",
        brand: "toyota",
        price: 6500,
        image: "assets/images/product-16.jpg",
        stock: "in-stock",
        partNumber: "OD-AC-004",
        description: "Safari snorkel kit for improved air intake and water crossing capability.",
        features: [
            "Raised air intake",
            "UV-stable polyethylene",
            "Easy installation",
            "Pre-cleaner head",
            "Vehicle specific fitment"
        ],
        specifications: {
            material: "UV-Stable Polyethylene",
            color: "Black",
            warranty: "2 Years"
        }
    },
    {
        id: 23,
        name: "Differential Breather Kit",
        category: "accessories",
        brand: "universal",
        price: 1500,
        image: "assets/images/product-16.jpg",
        stock: "in-stock",
        partNumber: "OD-AC-005",
        description: "Extended differential breather kit preventing water ingress during crossings.",
        features: [
            "Extended breather lines",
            "Check valve protection",
            "Filter included",
            "Universal fitment",
            "Easy DIY installation"
        ],
        specifications: {
            lineLength: "2 meters",
            material: "Reinforced Hose",
            warranty: "1 Year"
        }
    },

    // UNDERBODY PROTECTION
    {
        id: 30,
        name: "Front Underbody Skid Plate",
        category: "underbody-protection",
        brand: "universal",
        price: 4500,
        image: "assets/images/underbody-protection.jpg",
        stock: "in-stock",
        partNumber: "OD-UP-001",
        description: "Heavy duty front underbody protection for engine and transmission.",
        features: [
            "3mm steel construction",
            "Engine and gearbox protection",
            "Easy bolt-on installation",
            "Powder coated finish",
            "Drainage holes included"
        ],
        specifications: {
            material: "3mm Steel",
            coverage: "Engine \u0026 Gearbox",
            finish: "Black Powder Coat",
            warranty: "2 Years"
        }
    },
    {
        id: 31,
        name: "Differential Guard",
        category: "underbody-protection",
        brand: "universal",
        price: 3500,
        image: "assets/images/underbody-protection.jpg",
        stock: "in-stock",
        partNumber: "OD-UP-002",
        description: "Protect your differential from rocks and obstacles.",
        features: [
            "Heavy duty steel",
            "Bolt-on design",
            "Fits front and rear diff",
            "Reinforced construction",
            "Black powder coat"
        ],
        specifications: {
            material: "4mm Steel",
            fitment: "Front/Rear Diff",
            finish: "Black Powder Coat",
            warranty: "2 Years"
        }
    },
    {
        id: 32,
        name: "Transfer Case Guard",
        category: "underbody-protection",
        brand: "universal",
        price: 2500,
        image: "assets/images/underbody-protection.jpg",
        stock: "in-stock",
        partNumber: "OD-UP-003",
        description: "Essential protection for your transfer case during off-road adventures.",
        features: [
            "3mm steel plate",
            "Vehicle specific fitment",
            "Quick installation",
            "Drain plug access",
            "Corrosion resistant"
        ],
        specifications: {
            material: "3mm Steel",
            coverage: "Transfer Case",
            finish: "Black Powder Coat",
            warranty: "2 Years"
        }
    },

    // STORAGE SOLUTIONS
    {
        id: 33,
        name: "Premium Drawer System",
        category: "storage-solutions",
        brand: "universal",
        price: 14500,
        image: "assets/images/storage-solutions.jpg",
        stock: "in-stock",
        partNumber: "OD-SS-001",
        description: "Premium dual drawer storage system with carpeted finish.",
        features: [
            "Dual drawer configuration",
            "Heavy-duty roller slides",
            "Integrated fridge slide area",
            "Carpeted top surface",
            "Lockable drawers"
        ],
        specifications: {
            material: "Marine Ply \u0026 Aluminum",
            drawerLoad: "80kg per drawer",
            dimensions: "1200mm x 1000mm",
            warranty: "2 Years"
        }
    },
    {
        id: 34,
        name: "Compact Storage Box",
        category: "storage-solutions",
        brand: "universal",
        price: 5500,
        image: "assets/images/storage-solutions.jpg",
        stock: "in-stock",
        partNumber: "OD-SS-002",
        description: "Compact storage solution perfect for tools and recovery gear.",
        features: [
            "Weatherproof construction",
            "Lockable lid",
            "Tie-down points",
            "Removable dividers",
            "UV resistant"
        ],
        specifications: {
            material: "Heavy Duty Plastic",
            capacity: "120L",
            dimensions: "800mm x 600mm x 400mm",
            warranty: "2 Years"
        }
    },

    // STEALTH BUMPERS
    {
        id: 35,
        name: "Stealth Rear Bumper - Standard",
        category: "stealth-bumpers",
        brand: "universal",
        price: 16500,
        image: "assets/images/Odyssey Stealth Bumper - Rear.jpg",
        stock: "in-stock",
        partNumber: "OD-SB-001",
        description: "High clearance stealth rear bumper with integrated recovery points.",
        features: [
            "High departure angle design",
            "Integrated recovery points",
            "LED light bar ready",
            "Powder coated finish",
            "Modular design"
        ],
        specifications: {
            material: "3mm Steel",
            weight: "48kg",
            finish: "Black Powder Coat",
            warranty: "2 Years"
        }
    },
    {
        id: 36,
        name: "Stealth Bumper with Swing Arm",
        category: "stealth-bumpers",
        brand: "universal",
        price: 19500,
        image: "assets/images/Odyssey Stealth Bumper - Rear.jpg",
        stock: "in-stock",
        partNumber: "OD-SB-002",
        description: "Premium stealth bumper with swing arm capability.",
        features: [
            "Swing arm compatible",
            "Dual jerry can holders",
            "Integrated tow points",
            "LED light bar ready",
            "Heavy duty construction"
        ],
        specifications: {
            material: "3mm Steel",
            weight: "52kg",
            finish: "Black Powder Coat",
            warranty: "2 Years"
        }
    },

    // CARRIER OPTIONS
    {
        id: 37,
        name: "Roof Rack System - Full Length",
        category: "carrier-options",
        brand: "universal",
        price: 12000,
        image: "assets/images/Expedition Roof Rack.jpg",
        stock: "in-stock",
        partNumber: "OD-CO-001",
        description: "Full-length roof rack system for maximum storage capacity.",
        features: [
            "Full-length platform design",
            "200kg load capacity",
            "Wind deflector included",
            "Multiple tie-down points",
            "LED light bar compatible"
        ],
        specifications: {
            material: "Aluminum",
            loadCapacity: "200kg",
            dimensions: "2200mm x 1250mm",
            warranty: "3 Years"
        }
    },
    {
        id: 38,
        name: "Slimline Roof Rack",
        category: "carrier-options",
        brand: "universal",
        price: 9500,
        image: "assets/images/Expedition Roof Rack.jpg",
        stock: "in-stock",
        partNumber: "OD-CO-002",
        description: "Compact slimline design perfect for daily driving.",
        features: [
            "Low-profile aerodynamic design",
            "150kg load capacity",
            "Quick-release accessories",
            "Integrated rail system",
            "Solar panel ready"
        ],
        specifications: {
            material: "Aluminum",
            loadCapacity: "150kg",
            dimensions: "1800mm x 1250mm",
            warranty: "3 Years"
        }
    },
    {
        id: 39,
        name: "Tire Carrier System",
        category: "carrier-options",
        brand: "universal",
        price: 8500,
        image: "assets/images/rear-bumpers.jpg",
        stock: "in-stock",
        partNumber: "OD-CO-003",
        description: "Heavy duty tire carrier for spare tire storage.",
        features: [
            "Swing-out design",
            "Fits up to 35-inch tires",
            "Integrated jerry can mounts",
            "Lockable mechanism",
            "Heavy duty hinges"
        ],
        specifications: {
            material: "Steel",
            tireCapacity: "Up to 35 inches",
            finish: "Black Powder Coat",
            warranty: "2 Years"
        }
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
            <button class="wishlist-btn ${isInWishlist(product.id) ? 'active' : ''}" onclick="toggleWishlist(${product.id})" aria-label="Add to favorites">
                <i class="fas fa-heart"></i>
            </button>
            <a href="product-${product.id}.html" style="text-decoration: none; color: inherit;">
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}" onerror="this.src='assets/images/placeholder.jpg'">
                </div>
                <div class="product-info">
                    <span class="product-category">${formatCategory(product.category)}</span>
                    <h3 class="product-title">${product.name}</h3>
                    <p class="product-price">R ${product.price.toLocaleString()}</p>
                </div>
            </a>
            <div style="padding: 0 var(--spacing-sm) var(--spacing-sm);">
                <a href="product-${product.id}.html" class="btn btn-primary btn-block" style="display: block; text-align: center; text-decoration: none;">
                    VIEW DETAILS
                </a>
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
    // Reload cart from localStorage to ensure we have latest data
    cart = JSON.parse(localStorage.getItem('odyssey_cart')) || [];

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

        console.log('Cart updated:', cart); // Debug log
    }
};

window.toggleWishlist = (id) => {
    const product = products.find(p => p.id === id);
    const index = wishlist.indexOf(id);

    if (index === -1) {
        wishlist.push(id);
        showToast(`${product.name} added to favorites!`, 'success');
    } else {
        wishlist.splice(index, 1);
        showToast(`${product.name} removed from favorites`, 'info');
    }

    localStorage.setItem('odyssey_wishlist', JSON.stringify(wishlist));

    // Re-render to update heart icon
    const currentProducts = productGrid ? Array.from(productGrid.children).length : 0;
    if (currentProducts > 0) {
        // Get current filtered products or all products
        let filtered = products;
        if (currentCategory !== 'all') {
            filtered = filtered.filter(p => p.category === currentCategory);
        }
        if (currentBrand !== 'all') {
            filtered = filtered.filter(p => p.brand === currentBrand || p.brand === 'universal');
        }
        renderProducts(filtered);
    }
};

function isInWishlist(id) {
    return wishlist.includes(id);
}

function updateCartCount() {
    // Always try to find the cart count element (in case it wasn't loaded initially)
    const cartBadge = document.getElementById('cart-count');
    if (cartBadge) {
        // Reload cart from localStorage to ensure we have latest data
        const currentCart = JSON.parse(localStorage.getItem('odyssey_cart')) || [];
        const totalItems = currentCart.reduce((sum, item) => sum + (item.quantity || 1), 0);
        cartBadge.innerText = totalItems;
        console.log('Cart count updated:', totalItems); // Debug log
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

    // Slide-Out Menu Toggle
    const mobileBtn = document.querySelector('.mobile-toggle');
    const slideMenu = document.getElementById('slide-menu');
    const slideMenuOverlay = document.getElementById('slide-menu-overlay');
    const slideMenuClose = document.getElementById('slide-menu-close');

    function openSlideMenu() {
        if (slideMenu && slideMenuOverlay) {
            slideMenu.classList.add('active');
            slideMenuOverlay.classList.add('active');
            document.body.classList.add('slide-menu-open');
        }
    }

    function closeSlideMenu() {
        if (slideMenu && slideMenuOverlay) {
            slideMenu.classList.remove('active');
            slideMenuOverlay.classList.remove('active');
            document.body.classList.remove('slide-menu-open');
        }
    }

    if (mobileBtn) {
        mobileBtn.addEventListener('click', openSlideMenu);
    }

    if (slideMenuClose) {
        slideMenuClose.addEventListener('click', closeSlideMenu);
    }

    if (slideMenuOverlay) {
        slideMenuOverlay.addEventListener('click', closeSlideMenu);
    }

    // Close menu when clicking a link
    if (slideMenu) {
        slideMenu.querySelectorAll('.slide-menu-link').forEach(link => {
            link.addEventListener('click', closeSlideMenu);
        });
    }

    // Close menu on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && slideMenu && slideMenu.classList.contains('active')) {
            closeSlideMenu();
        }
    });

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
    // Reload cart for latest data
    const currentCart = JSON.parse(localStorage.getItem('odyssey_cart')) || [];

    if (currentCart.length === 0) {
        showToast('Your cart is empty!', 'error');
        return;
    }

    const total = currentCart.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0);

    let messageParts = ["Hi! I'd like to place an order for the following items:\n"];

    currentCart.forEach(item => {
        const qty = item.quantity || 1;
        const lineTotal = item.price * qty;
        messageParts.push(`*${item.name}*`);
        if (item.partNumber) messageParts.push(`Part #: ${item.partNumber}`);
        messageParts.push(`Price: R ${item.price.toLocaleString()} x ${qty} = R ${lineTotal.toLocaleString()}`);
        messageParts.push(''); // Empty line for spacing
    });

    messageParts.push(`----------------`);
    messageParts.push(`*TOTAL ORDER VALUE: R ${total.toLocaleString()}*`);
    messageParts.push(`----------------`);
    messageParts.push(`\nPlease let me know the shipping costs and payment details.`);

    const message = messageParts.join('\n');
    const whatsappUrl = `https://wa.me/27722573089?text=${encodeURIComponent(message)}`;
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

/* =========================================
   11. CONTACT FORM HANDLERS
   ========================================= */
document.addEventListener('DOMContentLoaded', () => {
    // WhatsApp Form Handler
    const whatsappForm = document.getElementById('whatsapp-form');
    if (whatsappForm) {
        whatsappForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = whatsappForm.querySelector('input[type="text"]').value;
            const message = whatsappForm.querySelector('textarea').value;

            const whatsappMessage = `Hi! I'm ${name}\n\nMessage:\n${message}`;
            const whatsappUrl = `https://wa.me/27219812415?text=${encodeURIComponent(whatsappMessage)}`;

            window.open(whatsappUrl, '_blank');
            showToast('Opening WhatsApp...', 'success');
            whatsappForm.reset();
        });
    }

    // Email Form Handler
    const emailForm = document.getElementById('email-form');
    if (emailForm) {
        emailForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = emailForm.querySelector('input[type="text"]').value;
            const email = emailForm.querySelector('input[type="email"]').value;
            const message = emailForm.querySelector('textarea').value;

            const subject = `Contact Form: Message from ${name}`;
            const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
            const mailtoUrl = `mailto:info@odysey-x.co.za?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

            window.location.href = mailtoUrl;
            showToast('Opening email client...', 'success');
            emailForm.reset();
        });
    }

    // Update cart count on all pages
    updateCartCount();
});
