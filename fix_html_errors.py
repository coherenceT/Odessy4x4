#!/usr/bin/env python3
"""
Fix HTML syntax errors in Odyssey 4x4 website files
"""

import os
import re
from pathlib import Path

def fix_html_file(filepath):
    """Fix common HTML errors in a file"""
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    original_content = content
    changes_made = []
    
    # Fix 1: Replace </a> with </button> after <i class="fas fa-bars"></i>
    pattern1 = r'(<button class="mobile-menu-btn mobile-toggle"[^>]*>\s*<i class="fas fa-bars"></i>\s*)</a>'
    if re.search(pattern1, content):
        content = re.sub(pattern1, r'\1</button>', content)
        changes_made.append("Fixed hamburger menu button closing tag")
    
    # Fix 2: Replace </a> with </button> after <i class="fas fa-times"></i>
    pattern2 = r'(<button class="slide-menu-close"[^>]*>\s*<i class="fas fa-times"></i>\s*)</a>'
    if re.search(pattern2, content):
        content = re.sub(pattern2, r'\1</button>', content)
        changes_made.append("Fixed slide menu close button closing tag")
    
    # Fix 3: Remove broken catalogue link and fix indentation
    pattern3 = r'<a href="https://catalogue\.gobi-x\.co\.za/gobi-x-catalogue-2025-2026" target="_blank" </div>\s*<div class="slide-menu-footer">\s*<div class="slide-menu-social">'
    replacement3 = '''</div>
            <div class="slide-menu-footer">
                <div class="slide-menu-social">'''
    if re.search(pattern3, content):
        content = re.sub(pattern3, replacement3, content)
        changes_made.append("Removed broken catalogue link")
    
    # Fix 4: Alternative pattern for broken catalogue link (category-0.html style)
    pattern4 = r'<a href="https://catalogue\.gobi-x\.co\.za/gobi-x-catalogue-2025-2026" target="_blank"\s*>\s*<div class="slide-menu-footer">'
    replacement4 = '''</div>
            <div class="slide-menu-footer">'''
    if re.search(pattern4, content):
        content = re.sub(pattern4, replacement4, content)
        changes_made.append("Removed broken catalogue link (alt pattern)")
    
    # Only write if changes were made
    if content != original_content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        return changes_made
    
    return None

def main():
    """Main function to fix all HTML files"""
    base_dir = Path(__file__).parent
    
    # List of files to fix
    files_to_fix = [
        'category-accessories.html',
        'category-bumpers.html',
        'category-carrier-options.html',
        'category-front-bumpers.html',
        'category-rear-bumpers-carrier.html',
        'category-rock-sliders.html',
        'category-stealth-bumpers.html',
        'category-tow-bars.html',
        'category-underbody-protection.html',
        'category-0.html',
    ]
    
    print("🔧 Fixing HTML syntax errors in Odyssey 4x4 files...\n")
    
    fixed_count = 0
    for filename in files_to_fix:
        filepath = base_dir / filename
        if filepath.exists():
            changes = fix_html_file(filepath)
            if changes:
                print(f"✅ {filename}")
                for change in changes:
                    print(f"   - {change}")
                fixed_count += 1
            else:
                print(f"⏭️  {filename} - No changes needed")
        else:
            print(f"❌ {filename} - File not found")
    
    print(f"\n✨ Fixed {fixed_count} files!")

if __name__ == "__main__":
    main()
