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

    # 3. Clean up and close the slide-menu-links block, fixing nesting & indentation of the footer and social icons.
    # The broken nesting matches:
    #                 <a href="https://catalogue.gobi-x.co.za/gobi-x-catalogue-2025-2026" target="_blank" class="slide-menu-link">Catalogue</a>
    #                     <div class="slide-menu-footer">
    #                         <div class="slide-menu-social">
    #                             <a href="#"><i class="fab fa-facebook-f"></i></a>
    #                             <a href="#"><i class="fab fa-instagram"></i></a>
    #                             <a href="#"><i class="fab fa-youtube"></i></a>
    #                             <a href="#"><i class="fab fa-tiktok"></i></a>
    #                         </div>
    #                     </div>
    #                 <div class="red-ribbon"></div>
    #         </div>
    
    # We want to replace it with a properly closed and indented structure:
    nested_broken_pattern = re.compile(
        r'<a href="https://catalogue\.gobi-x\.co\.za/gobi-x-catalogue-2025-2026" target="_blank" class="slide-menu-link">Catalogue</a>\s*'
        r'<div class="slide-menu-footer">\s*'
        r'<div class="slide-menu-social">\s*'
        r'<a href="#"><i class="fab fa-facebook-f"></i></a>\s*'
        r'<a href="#"><i class="fab fa-instagram"></i></a>\s*'
        r'<a href="#"><i class="fab fa-youtube"></i></a>\s*'
        r'<a href="#"><i class="fab fa-tiktok"></i></a>\s*'
        r'</div>\s*'
        r'</div>\s*'
        r'<div class="red-ribbon"></div>\s*'
        r'</div>',
        re.DOTALL | re.IGNORECASE
    )
    
    clean_replacement = (
        '<a href="https://catalogue.gobi-x.co.za/gobi-x-catalogue-2025-2026" target="_blank" class="slide-menu-link">Catalogue</a>\n'
        '            </div>\n'
        '            <div class="slide-menu-footer">\n'
        '                <div class="slide-menu-social">\n'
        '                    <a href="#"><i class="fab fa-facebook-f"></i></a>\n'
        '                    <a href="#"><i class="fab fa-instagram"></i></a>\n'
        '                    <a href="#"><i class="fab fa-youtube"></i></a>\n'
        '                    <a href="#"><i class="fab fa-tiktok"></i></a>\n'
        '                </div>\n'
        '            </div>\n'
        '            <div class="red-ribbon"></div>\n'
        '        </div>'
    )
    
    content, count = re.subn(nested_broken_pattern, clean_replacement, content)
    if count > 0:
        print(f"  Fixed menu nesting and indentation in {filepath}")

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
