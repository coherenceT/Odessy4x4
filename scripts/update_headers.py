#!/usr/bin/env python3
import re

# Files to update
files = ['favorites.html', 'login.html', 'register.html']

# The cart button HTML to insert
cart_button = '''                    <a href="cart.html" class="header-action-btn" title="Shopping Cart">
                        <i class="fas fa-shopping-cart"></i>
                        <span class="header-action-text">Cart</span>
                        <span id="cart-count" class="cart-badge">0</span>
                    </a>
'''

for filename in files:
    try:
        with open(filename, 'r') as f:
            content = f.read()
        
        # Find the favorites button and insert cart button after it
        pattern = r'(<a href="favorites\.html"[^>]*>.*?</a>\s*)'
        replacement = r'\1' + cart_button
        
        # Only replace if cart button doesn't already exist
        if 'cart.html' not in content:
            content = re.sub(pattern, replacement, content, flags=re.DOTALL)
            
            with open(filename, 'w') as f:
                f.write(content)
            print(f"✅ Updated {filename}")
        else:
            print(f"⏭️  {filename} already has cart button")
    except FileNotFoundError:
        print(f"❌ {filename} not found")
    except Exception as e:
        print(f"❌ Error updating {filename}: {e}")

print("\n✅ Header consistency update complete!")
