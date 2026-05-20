#!/usr/bin/env python3
import os
import re

def process_file(filepath):
    print(f"Processing {filepath}...")
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()

    original = content

    # 1. Replace logo images back to the original JPG logo
    content = re.sub(
        r'(class="header-logo"[^>]*>\s*<img\s+src=")[^"]*(")',
        r'\1assets/images/odyssey4x4-logo.jpg\2',
        content,
        flags=re.IGNORECASE
    )
    content = re.sub(
        r'(class="slide-menu-logo"[^>]*>\s*<img\s+src=")[^"]*(")',
        r'\1assets/images/odyssey4x4-logo.jpg\2',
        content,
        flags=re.IGNORECASE
    )

    # 2. Remove the useless center message (explore-more-text)
    content = re.sub(
        r'<!--\s*Explore More Text[^>]*-->\s*<div class="explore-more-text">.*?</div>',
        '',
        content,
        flags=re.DOTALL | re.IGNORECASE
    )
    content = re.sub(
        r'<div class="explore-more-text">.*?</div>',
        '',
        content,
        flags=re.DOTALL | re.IGNORECASE
    )

    # 3. Replace the entire slide-menu block with the new optimized accordion version
    slide_menu_pattern = re.compile(
        r'<div class="slide-menu" id="slide-menu">.*?<div class="red-ribbon"></div>\s*</div>',
        re.DOTALL | re.IGNORECASE
    )
    
    slide_menu_replacement = """<div class="slide-menu" id="slide-menu">
            <div class="slide-menu-header">
                <a href="index.html" class="slide-menu-logo">
                    <img src="assets/images/odyssey4x4-logo.jpg" alt="Odyssey 4x4 Logo">
                </a>
                <button class="slide-menu-close" id="slide-menu-close" aria-label="Close menu">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="slide-menu-links">
                <a href="index.html" class="mobile-link"><i class="fas fa-home"></i> Home</a>
                
                <div class="mobile-accordion">
                    <button class="accordion-toggle"><i class="fas fa-cogs"></i> Product Categories <i class="fas fa-chevron-down"></i></button>
                    <div class="accordion-content">
                        <a href="category-front-bumpers.html"><i class="fas fa-chevron-right"></i> Front Bumpers</a>
                        <a href="category-rear-bumpers-carrier.html"><i class="fas fa-chevron-right"></i> Rear Bumpers Carrier Compatible</a>
                        <a href="category-stealth-bumpers.html"><i class="fas fa-chevron-right"></i> Stealth Rear Bumpers</a>
                        <a href="category-carrier-options.html"><i class="fas fa-chevron-right"></i> Carrier Options</a>
                        <a href="category-rock-sliders.html"><i class="fas fa-chevron-right"></i> Rocksliders</a>
                        <a href="category-underbody-protection.html"><i class="fas fa-chevron-right"></i> Underbody Protection</a>
                        <a href="category-drawer-systems.html"><i class="fas fa-chevron-right"></i> Storage Solutions</a>
                        <a href="category-accessories.html"><i class="fas fa-chevron-right"></i> Vehicle Accessories</a>
                        <a href="category-tow-bars.html"><i class="fas fa-chevron-right"></i> Tow Bars</a>
                    </div>
                </div>

                <div class="mobile-accordion">
                    <button class="accordion-toggle"><i class="fas fa-car"></i> Filter By Vehicle <i class="fas fa-chevron-down"></i></button>
                    <div class="accordion-content">
                        <a href="index.html#products" onclick="applyFilter('brand', 'chevrolet'); closeMenu()"><i class="fas fa-chevron-right"></i> Chevrolet</a>
                        <a href="index.html#products" onclick="applyFilter('brand', 'ford'); closeMenu()"><i class="fas fa-chevron-right"></i> Ford</a>
                        <a href="index.html#products" onclick="applyFilter('brand', 'ford-everest'); closeMenu()"><i class="fas fa-chevron-right"></i> Ford Everest</a>
                        <a href="index.html#products" onclick="applyFilter('brand', 'ford-ranger'); closeMenu()"><i class="fas fa-chevron-right"></i> Ford Ranger</a>
                        <a href="index.html#products" onclick="applyFilter('brand', 'ford-ranger-raptor'); closeMenu()"><i class="fas fa-chevron-right"></i> Ford Ranger Raptor</a>
                        <a href="index.html#products" onclick="applyFilter('brand', 'isuzu'); closeMenu()"><i class="fas fa-chevron-right"></i> Isuzu</a>
                        <a href="index.html#products" onclick="applyFilter('brand', 'land-rover'); closeMenu()"><i class="fas fa-chevron-right"></i> Land Rover</a>
                        <a href="index.html#products" onclick="applyFilter('brand', 'mazda'); closeMenu()"><i class="fas fa-chevron-right"></i> Mazda</a>
                        <a href="index.html#products" onclick="applyFilter('brand', 'mitsubishi'); closeMenu()"><i class="fas fa-chevron-right"></i> Mitsubishi</a>
                        <a href="index.html#products" onclick="applyFilter('brand', 'mercedes-benz'); closeMenu()"><i class="fas fa-chevron-right"></i> Mercedes-Benz</a>
                        <a href="index.html#products" onclick="applyFilter('brand', 'nissan'); closeMenu()"><i class="fas fa-chevron-right"></i> Nissan</a>
                    </div>
                </div>

                <a href="index.html#contact" class="mobile-link" onclick="closeMenu()"><i class="fas fa-envelope"></i> Contact Us</a>
                <a href="https://catalogue.gobi-x.co.za/gobi-x-catalogue-2025-2026" target="_blank" class="mobile-link"><i class="fas fa-book-open"></i> Catalogue</a>
            </div>
            <div class="slide-menu-footer">
                <div class="slide-menu-social">
                    <a href="#"><i class="fab fa-facebook-f"></i></a>
                    <a href="#"><i class="fab fa-instagram"></i></a>
                    <a href="#"><i class="fab fa-youtube"></i></a>
                    <a href="#"><i class="fab fa-tiktok"></i></a>
                </div>
            </div>
            <div class="red-ribbon"></div>
        </div>"""
    
    content, count = re.subn(slide_menu_pattern, slide_menu_replacement, content)
    if count > 0:
        print(f"  Fixed menu nesting and updated links in {filepath}")

    if content != original:
        with open(filepath, "w", encoding="utf-8") as f:
            f.write(content)
        print(f"  Success: Saved changes for {filepath}")
    else:
        print(f"  No changes needed for {filepath}")

def main():
    root_dir = "."
    files = [f for f in os.listdir(root_dir) if f.endswith(".html")]
    for filename in files:
        if filename == "index.html":
            continue
        filepath = os.path.join(root_dir, filename)
        process_file(filepath)

if __name__ == "__main__":
    main()
