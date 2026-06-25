#!/usr/bin/env python3
import json

# New products to add
new_products = [
    {
        "id": 24,
        "name": "Premium Front Bumper - Ranger",
        "category": "front-bumpers",
        "brand": "ford",
        "price": 17500,
        "image": "assets/images/front-bumpers.jpg",
        "stock": "in-stock",
        "partNumber": "OD-FB-004",
        "description": "Rugged front bumper for Ford Ranger with integrated fog lights and recovery points.",
        "features": [
            "Heavy duty construction",
            "Integrated fog lights",
            "Recovery points included",
            "Winch compatible",
            "ADR compliant"
        ],
        "specifications": {
            "material": "3mm Steel",
            "weight": "42kg",
            "finish": "Black Powder Coat",
            "warranty": "2 Years"
        }
    },
    {
        "id": 25,
        "name": "Expedition Front Bumper",
        "category": "front-bumpers",
        "brand": "universal",
        "price": 20500,
        "image": "assets/images/bull-bar-showcase.jpg",
        "stock": "in-stock",
        "partNumber": "OD-FB-005",
        "description": "Ultimate expedition-grade front bumper with maximum protection and functionality.",
        "features": [
            "Maximum protection design",
            "Multiple light mounting points",
            "Heavy duty winch mount",
            "Integrated bash plate",
            "Premium finish"
        ],
        "specifications": {
            "material": "4mm Steel",
            "weight": "55kg",
            "finish": "Black Powder Coat",
            "warranty": "3 Years"
        }
    },
    {
        "id": 26,
        "name": "Rear Bumper with Tire Carrier",
        "category": "rear-bumpers-carrier",
        "brand": "universal",
        "price": 19500,
        "image": "assets/images/rear-bumpers.jpg",
        "stock": "in-stock",
        "partNumber": "OD-RBC-003",
        "description": "Heavy duty rear bumper with integrated tire carrier and jerry can holders.",
        "features": [
            "Swing-out tire carrier",
            "Dual jerry can mounts",
            "LED light bar ready",
            "Recovery points",
            "Heavy duty construction"
        ],
        "specifications": {
            "material": "3mm Steel",
            "weight": "65kg",
            "finish": "Black Powder Coat",
            "warranty": "2 Years"
        }
    },
    {
        "id": 27,
        "name": "Expedition Rear Bumper System",
        "category": "rear-bumpers-carrier",
        "brand": "universal",
        "price": 22500,
        "image": "assets/images/Odyssey Stealth Bumper - Rear.jpg",
        "stock": "in-stock",
        "partNumber": "OD-RBC-004",
        "description": "Complete rear bumper system with carrier, storage, and recovery capabilities.",
        "features": [
            "Full carrier system",
            "Multiple storage options",
            "Integrated recovery points",
            "Modular design",
            "Premium construction"
        ],
        "specifications": {
            "material": "3mm Steel",
            "weight": "70kg",
            "finish": "Black Powder Coat",
            "warranty": "3 Years"
        }
    },
    {
        "id": 28,
        "name": "Pro Series Rock Sliders",
        "category": "rock-sliders",
        "brand": "universal",
        "price": 9500,
        "image": "assets/images/rocksliders.jpg",
        "stock": "in-stock",
        "partNumber": "OD-RS-003",
        "description": "Professional grade rock sliders with integrated step and maximum protection.",
        "features": [
            "65x65mm tubing",
            "Integrated step design",
            "Chassis mounted",
            "Reinforced construction",
            "Pair included"
        ],
        "specifications": {
            "material": "Steel Tube",
            "tubeSize": "65x65mm",
            "finish": "Black Powder Coat",
            "warranty": "2 Years"
        }
    },
    {
        "id": 29,
        "name": "Extreme Rock Sliders - Heavy Duty",
        "category": "rock-sliders",
        "brand": "universal",
        "price": 11500,
        "image": "assets/images/Heavy Duty Rock Sliders.jpg",
        "stock": "in-stock",
        "partNumber": "OD-RS-004",
        "description": "Extreme duty rock sliders for the most demanding off-road conditions.",
        "features": [
            "80x80mm heavy tubing",
            "Maximum protection",
            "Reinforced mounting",
            "Jack point integration",
            "Lifetime warranty"
        ],
        "specifications": {
            "material": "Steel Tube",
            "tubeSize": "80x80mm",
            "finish": "Black Powder Coat",
            "warranty": "Lifetime"
        }
    }
]

# Read the file
with open('scripts/main.js', 'r') as f:
    content = f.read()

# Find the insertion point (after product id 3, before TOW BARS comment)
insert_marker = "    },\n\n    // TOW BARS"
if insert_marker in content:
    # Generate JavaScript code for new products
    js_products = []
    for product in new_products:
        js_code = f"""    {{
        id: {product['id']},
        name: "{product['name']}",
        category: "{product['category']}",
        brand: "{product['brand']}",
        price: {product['price']},
        image: "{product['image']}",
        stock: "{product['stock']}",
        partNumber: "{product['partNumber']}",
        description: "{product['description']}",
        features: [
            "{product['features'][0]}",
            "{product['features'][1]}",
            "{product['features'][2]}",
            "{product['features'][3]}",
            "{product['features'][4]}"
        ],
        specifications: {{
            material: "{product['specifications']['material']}",
            weight: "{product['specifications']['weight']}",
            finish: "{product['specifications']['finish']}",
            warranty: "{product['specifications']['warranty']}"
        }}
    }}"""
        js_products.append(js_code)
    
    # Join all products
    new_products_code = ",\n".join(js_products)
    
    # Insert the new products
    content = content.replace(insert_marker, f",\n{new_products_code}\n\n    // TOW BARS")
    
    # Write back
    with open('scripts/main.js', 'w') as f:
        f.write(content)
    
    print("✅ Successfully added 6 new products to main.js")
else:
    print("❌ Could not find insertion point")
